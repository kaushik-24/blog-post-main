import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const { title, content } = await req.json();
  const blogId = parseInt(params.id);

  try {
    const updatedBlog = await prisma.blog.update({
      where: { id: blogId },
      data: { title, content },
    });
    return NextResponse.json(updatedBlog);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update blog' }, { status: 500 });
  }
}
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const blogId = parseInt(params.id);

  try {
    await prisma.blog.delete({ where: { id: blogId } });
    return new Response(null, { status: 204 });
  } catch (error) {
    return new Response('Failed to delete blog', { status: 500 });
  }
}

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const blogId = parseInt(params.id);

  try {
    const blog = await prisma.blog.findUnique({
      where: { id: blogId },
    });

    if (!blog) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }

    return NextResponse.json(blog);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch blog' }, { status: 500 });
  }
}
