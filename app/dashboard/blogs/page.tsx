// app/dashboard/page.tsx
'use client'; // Mark as a client component

import { useEffect, useState } from 'react';
import { getSession } from '@auth0/nextjs-auth0';
import { redirect } from 'next/navigation';

interface Blog {
  id: number;
  title: string;
  content: string;
  userId: string;
}

// app/dashboard/page.tsx (add this function)
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

    // Refresh the list of blogs after deletion
    window.location.reload();
  } catch (error) {
    console.error('Failed to delete blog:', error);
  }
};

export default function Dashboard() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const session = await getSession();
        if (!session?.user) {
          redirect('/api/auth/login');
        }

        // Fetch blogs for the current user
        const response = await fetch('/api/blogs');
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error('Failed to fetch blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Your Blogs</h1>
      <button onClick={() => window.location.href = '/dashboard/create'}>
        Create New Blog
      </button>
      <ul>
        {blogs.map((blog) => (
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
