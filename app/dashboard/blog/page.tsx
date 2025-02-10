'use client';

import { useEffect, useState } from 'react';

interface Blog {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [editing, setEditing] = useState<Blog | null>(null);
  const [newBlog, setNewBlog] = useState({ title: '', content: '' });

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const res = await fetch('/api/blog');
    const data = await res.json();
    setBlogs(data);
  };

  const handleCreate = async () => {
    await fetch('/api/blog/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...newBlog, authorId: 'auth0|userId' }), // Replace with dynamic ID
    });
    setNewBlog({ title: '', content: '' });
    fetchBlogs();
  };

  const handleUpdate = async () => {
    if (!editing) return;

    await fetch(`/api/blog/${editing.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: editing.title, content: editing.content }),
    });
    setEditing(null);
    fetchBlogs();
  };

  const handleDelete = async (id: number) => {
    await fetch(`/api/blog/${id}`, { method: 'DELETE' });
    fetchBlogs();
  };

  return (
    <div>
      <h1>Blog Management</h1>

      <div>
        <input
          type="text"
          placeholder="Title"
          value={newBlog.title}
          onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
        />
        <textarea
          placeholder="Content"
          value={newBlog.content}
          onChange={(e) => setNewBlog({ ...newBlog, content: e.target.value })}
        />
        <button onClick={handleCreate}>Create Blog</button>
      </div>

      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            {editing?.id === blog.id ? (
              <div>
                <input
                  type="text"
                  value={editing.title}
                  onChange={(e) => setEditing({ ...editing, title: e.target.value })}
                />
                <textarea
                  value={editing.content}
                  onChange={(e) => setEditing({ ...editing, content: e.target.value })}
                />
                <button onClick={handleUpdate}>Save</button>
                <button onClick={() => setEditing(null)}>Cancel</button>
              </div>
            ) : (
              <div>
                <h3>{blog.title}</h3>
                <p>{blog.content}</p>
                <button onClick={() => setEditing(blog)}>Edit</button>
                <button onClick={() => handleDelete(blog.id)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

