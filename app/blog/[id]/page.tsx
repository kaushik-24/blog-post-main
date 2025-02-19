'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import BackBtn from '@/app/components/ui/BackBtn';

interface Blog {
  id: number;
  title: string;
  content: string;
  createdAt: string;
}

export default function BlogDetails() {
  const { id } = useParams();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`/api/blog/${id}`);
        if (!res.ok) throw new Error('Blog not found.');
        const data = await res.json();
        setBlog(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchBlog();
  }, [id]);

  if (loading) return <div className='flex items-center justify-center h-screen '>
    <div className='loading'></div></div>;
  if (error) return <p className="text-red-500">Error: {error}</p>;
  if (!blog) return <p>Blog not found.</p>;

  return (
    <main className="max-w-3xl mx-auto p-4 mt-[10vh]">
      <Link href="/blog" className="text-blue-500 hover:underline mb-4 inline-block">
       <BackBtn /> 
      </Link>

      <h1 className="text-5xl font-bold mb-3">{blog.title}</h1>
      <p className="text-sm text-gray-500 mb-4">
        Posted on {new Date(blog.createdAt).toLocaleDateString()}
      </p>
      <p className="text-gray-800">{blog.content}</p>
    </main>
  );
}

