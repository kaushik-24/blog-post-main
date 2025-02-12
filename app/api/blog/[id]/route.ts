import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// Helper function to extract blog ID
const getBlogId = (req: Request) => {
  const url = new URL(req.url);
  const id = url.pathname.split('/').pop();
  if (!id || isNaN(Number(id))) {
    throw new Error('Invalid blog ID');
  }
  return parseInt(id, 10);
};

// Centralized error handler
const handleError = (error: unknown) => {
  console.error(error);
  if (error instanceof Error) {
    return { error: error.message || 'Something went wrong' };
  }
  return { error: 'Unknown error occurred' };
};

// Update blog post
export async function PUT(req: Request) {
  try {
    const blogId = getBlogId(req);
    const { title, content } = await req.json();

    const updatedBlog = await prisma.blog.update({
      where: { id: blogId },
      data: { title, content },
    });

    return NextResponse.json(updatedBlog);
  } catch (error) {
    const errorResponse = handleError(error);
    return NextResponse.json(errorResponse, { status: 500 });
  }
}

// Delete blog post
export async function DELETE(req: Request) {
  try {
    const blogId = getBlogId(req);

    await prisma.blog.delete({ where: { id: blogId } });
    return new Response(null, { status: 204 });
  } catch (error) {
    const errorResponse = handleError(error);
    return new Response(errorResponse.error, { status: 500 });
  }
}

// Get blog post
export async function GET(req: Request) {
  try {
    const blogId = getBlogId(req);

    const blog = await prisma.blog.findUnique({
      where: { id: blogId },
    });

    if (!blog) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }

    return NextResponse.json(blog);
  } catch (error) {
    const errorResponse = handleError(error);
    return NextResponse.json(errorResponse, { status: 500 });
  }
}

