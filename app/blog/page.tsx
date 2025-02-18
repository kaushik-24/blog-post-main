'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import BackBtn from '../components/ui/BackBtn';

interface Blog {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch('/api/blog'); // Fetching from API route
        if (!res.ok) throw new Error('Failed to fetch blogs.');
        const data = await res.json();
        setBlogs(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <p>Loading blogs...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <main className="max-w-3xl mx-auto p-4 mt-[10vh]">
      <Link href="/"><p><BackBtn /></p></Link>
      <h1 className="text-5xl font-bold mb-4 flex justify-center items-center">All Blog Posts</h1>

      {blogs.length === 0 ? (
        <p>No blog posts yet. Check back soon!</p>
      ) : (
        blogs.map((blog) => (
          <article key={blog.id} className="border-b border-gray-300 py-4">
            <Link href={`/blog/${blog.id}`}>
              <h2 className="text-4xl font-semibold text-[#990011] hover:underline cursor-pointer">
                {blog.title}
              </h2>
            </Link>
            <p className="text-sm text-gray-500">
              Posted on {new Date(blog.createdAt).toLocaleDateString()}
            </p>
          </article>
        ))
      )}
    </main>
  );
}

