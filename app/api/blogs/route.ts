// app/api/blogs/route.ts
import prisma from '@/lib/prisma';
import { getSession } from '@auth0/nextjs-auth0';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
 
  
  const session = await getSession();
  if (!session?.user) {
    return NextResponse.json(
      { message: 'Unauthorized' },
      { status: 401 }
    );
  }

  const { title, content, userId } = await request.json();
  if (!title || !content || !userId) {
    return NextResponse.json(
      { message: 'Missing required fields' },
      { status: 400 }
    );
  }

  try {
    const blog = await prisma.blog.create({
      data: {
        title,
        content,
        userId,
      },
    });

    return NextResponse.json(
      { message: 'Blog created successfully', blog },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to create blog', error },
      { status: 500 }
    );
  }
}
