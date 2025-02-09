'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function CreatePost() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const res = await fetch('/api/auth/session');
      const session = await res.json();
      if (session?.user) {
        setIsAuthenticated(true);
      } else {
        router.push('/api/auth/signin');
      }
    };
    checkAuth();
  }, [router]);

  if (!isAuthenticated) return <p>Loading...</p>;

  return (
    <form>
      <input type="text" placeholder="Title" required />
      <textarea placeholder="Content" required />
      <button type="submit">Create Post</button>
    </form>
  );
}

