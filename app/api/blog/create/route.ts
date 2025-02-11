import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

interface BlogData {
  title: string;
  content: string;
  authorId: string;
}

export async function POST(req: Request) {
  const { title, content, authorId }: BlogData = await req.json();

  try {
    const blog = await prisma.blog.create({
      data: { title, content, authorId },
    });
    return NextResponse.json(blog);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to create blog' }, { status: 500 });
  }
}

