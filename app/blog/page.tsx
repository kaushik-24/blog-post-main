
// app/dashboard/blog/page.tsx
import Link from 'next/link';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  date: string;
}

async function getBlogPosts() {
  // Replace this with your actual data fetching logic
  const res = await fetch('your-api-endpoint/posts', { cache: 'no-store' });
  return res.json();
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Blog Posts</h1>
        <Link 
          href="/dashboard/blog/create" 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Create New Post
        </Link>
      </div>

      <div className="grid gap-4">
        {posts?.map((post: BlogPost) => (
          <div key={post.id} className="border rounded-lg p-4 bg-white shadow">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold">{post.title}</h2>
                <p className="text-gray-600 mt-2">{post.content.substring(0, 150)}...</p>
                <span className="text-sm text-gray-500 mt-2 block">
                  {new Date(post.date).toLocaleDateString()}
                </span>
              </div>
              <div className="flex gap-2">
                <Link 
                  href={`/dashboard/blog/edit/${post.id}`}
                  className="text-blue-500 hover:text-blue-700"
                >
                  Edit
                </Link>
                <button
                  onClick={async () => {
                    if (confirm('Are you sure you want to delete this post?')) {
                      await fetch(`/api/posts/${post.id}`, { method: 'DELETE' });
                      // Refresh the page or update the state
                      window.location.reload();
                    }
                  }}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
