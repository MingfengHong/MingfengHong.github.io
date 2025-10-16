#!/usr/bin/env python3
"""
自动生成博客配置文件
使用方法：python scripts/generate-blog-config.py
"""

import os
import json
import re
from pathlib import Path
from datetime import datetime

def extract_metadata_from_markdown(filepath):
    """从markdown文件中提取元数据"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 提取标题（第一个 # 标题）
    title_match = re.search(r'^#\s+(.+)$', content, re.MULTILINE)
    title = title_match.group(1) if title_match else filepath.stem
    
    # 提取摘要（第一个段落或引用）
    # 跳过标题行，找到第一个非空段落
    lines = content.split('\n')
    excerpt = ""
    in_paragraph = False
    for line in lines:
        line = line.strip()
        if line.startswith('#'):
            continue
        if line.startswith('>'):
            excerpt = line.replace('>', '').strip()
            break
        if line and not in_paragraph:
            excerpt = line
            in_paragraph = True
            if len(excerpt) > 100:
                break
        elif in_paragraph and line:
            excerpt += line
            if len(excerpt) > 100:
                break
    
    # 限制摘要长度
    if len(excerpt) > 150:
        excerpt = excerpt[:147] + "..."
    
    # 获取文件修改时间作为日期
    mtime = os.path.getmtime(filepath)
    date = datetime.fromtimestamp(mtime).strftime('%Y-%m-%d')
    
    # 简单的标签提取（可以手动优化）
    tags = []
    if '诺贝尔' in title or '诺贝尔' in content[:500]:
        tags.append('诺贝尔奖')
    if '经济' in title:
        tags.append('经济学')
    if '创新' in content[:500] or '创造' in content[:500]:
        tags.append('创新理论')
    if not tags:
        tags = ['理论分享']
    
    return {
        'title': title,
        'excerpt': excerpt,
        'date': date,
        'tags': tags
    }

def generate_blog_config():
    """生成博客配置文件"""
    blog_dir = Path('blog')
    config = {'categories': []}
    
    # 遍历blog目录下的所有子目录
    for category_dir in sorted(blog_dir.iterdir()):
        if category_dir.is_dir() and not category_dir.name.startswith('.'):
            category_name = category_dir.name
            # 生成slug（可以自定义映射）
            slug_map = {
                '理论分享': 'theory',
                '技术分享': 'technology',
                '学术观点': 'research',
                '教程指南': 'tutorial',
                '生活感悟': 'personal'
            }
            slug = slug_map.get(category_name, category_name.lower().replace(' ', '-'))
            
            articles = []
            
            # 遍历该分类下的所有markdown文件
            for md_file in sorted(category_dir.glob('*.md')):
                metadata = extract_metadata_from_markdown(md_file)
                
                article = {
                    'title': metadata['title'],
                    'file': str(md_file).replace('\\', '/'),
                    'date': metadata['date'],
                    'excerpt': metadata['excerpt'],
                    'tags': metadata['tags']
                }
                articles.append(article)
            
            if articles:
                # 按日期排序
                articles.sort(key=lambda x: x['date'], reverse=True)
                
                config['categories'].append({
                    'name': category_name,
                    'slug': slug,
                    'articles': articles
                })
    
    # 写入配置文件
    config_file = blog_dir / 'blog-config.json'
    with open(config_file, 'w', encoding='utf-8') as f:
        json.dump(config, f, ensure_ascii=False, indent=2)
    
    print(f"✅ 博客配置文件已生成: {config_file}")
    print(f"📁 发现 {len(config['categories'])} 个分类")
    for cat in config['categories']:
        print(f"   - {cat['name']}: {len(cat['articles'])} 篇文章")

if __name__ == '__main__':
    generate_blog_config()

