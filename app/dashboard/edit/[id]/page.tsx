// app/dashboard/edit/[id]/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { getSession } from '@auth0/nextjs-auth0';
import { redirect } from 'next/navigation';

interface Blog {
  id: number;
  title: string;
  content: string;
}

export default function EditBlog() {
  const params = useParams();
  const blogId = params.id as string;
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`/api/blogs/${blogId}`);
        const blog: Blog = await response.json();
        setTitle(blog.title);
        setContent(blog.content);
      } catch (error) {
        console.error('Failed to fetch blog:', error);
      }
    };

    fetchBlog();
  }, [blogId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const session = await getSession();
    if (!session?.user) {
      redirect('/api/auth/login');
    }

    try {
      const response = await fetch(`/api/blogs/${blogId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content }),
      });

      if (!response.ok) {
        throw new Error('Failed to update blog');
      }

      // Redirect to dashboard after successful update
      window.location.href = '/dashboard';
    } catch (err) {
      setError('Failed to update blog. Please try again.');
    }
  };

  return (
    <div>
      <h1>Edit Blog</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}
