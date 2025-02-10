
// app/dashboard/blogs/components/BlogList.tsx
'use client';
import { useState, useEffect } from 'react';
import type { Blog } from '@/app/types/index';

export function BlogList() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('/api/blogs');
        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div>
      {blogs.map((blog) => (
        <div key={blog.id}>{/* Blog content */}</div>
      ))}
    </div>
  );
}

