import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// Update blog post
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const { title, content } = await req.json();
  const blogId = parseInt(params.id, 10);

  try {
    const updatedBlog = await prisma.blog.update({
      where: { id: blogId },
      data: { title, content },
    });
    return NextResponse.json(updatedBlog);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to update blog' }, { status: 500 });
  }
}

// Delete blog post
export async function DELETE(_req: Request, { params }: { params: { id: string } }) {
  const blogId = parseInt(params.id, 10);

  try {
    await prisma.blog.delete({ where: { id: blogId } });
    return new Response(null, { status: 204 });
  } catch (error) {
    console.error(error);
    return new Response('Failed to delete blog', { status: 500 });
  }
}

// Get blog post
export async function GET(_req: Request, { params }: { params: { id: string } }) {
  const blogId = parseInt(params.id, 10);

  try {
    const blog = await prisma.blog.findUnique({
      where: { id: blogId },
    });

    if (!blog) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }

    return NextResponse.json(blog);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to fetch blog' }, { status: 500 });
  }
}

