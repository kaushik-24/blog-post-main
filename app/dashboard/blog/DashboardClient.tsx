// app/dashboard/blogs/DashboardClient.tsx
'use client';

import { useState } from 'react';

interface Blog {
  id: number;
  title: string;
  content: string;
}

interface DashboardClientProps {
  blogs: Blog[];
}

export default function DashboardClient({ blogs }: DashboardClientProps) {
  const [blogList, setBlogList] = useState(blogs);

  const deleteBlog = async (id: number) => {
    const confirmDelete = confirm('Are you sure you want to delete this blog?');
    if (!confirmDelete) return;

    try {
      const response = await fetch(`/api/blogs/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete blog');
      }

      // Remove the deleted blog from the list
      setBlogList(blogList.filter((blog) => blog.id !== id));
    } catch (error) {
      console.error('Failed to delete blog:', error);
    }
  };

  return (
    <div>
      <h1>Your Blogs</h1>
      <button onClick={() => window.location.href = '/dashboard/create'}>
        Create New Blog
      </button>
      <ul>
        {blogList.map((blog) => (
          <li key={blog.id}>
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
            <button onClick={() => window.location.href = `/dashboard/edit/${blog.id}`}>
              Edit
            </button>
            <button onClick={() => deleteBlog(blog.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
