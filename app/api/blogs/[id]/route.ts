// app/api/blogs/[id]/route.ts
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getSession } from '@auth0/nextjs-auth0';

export async function PUT(request: Request, { params }: { params: { id: string } }) {

  const session = await getSession();
  if (!session?.user) {
    return NextResponse.json(
      { message: 'Unauthorized' },
      { status: 401 }
    );
  }

  const { title, content } = await request.json();

  if (!title || !content) {
    return NextResponse.json(
      { message: 'Missing required fields' },
      { status: 400 }
    );
  }

  try {
    const blog = await prisma.blog.update({
      where: { id: parseInt(params.id) },
      data: { title, content },
    });

    return NextResponse.json(
      { message: 'Blog updated successfully', blog },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to update blog', error },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const session = await getSession();
  if (!session?.user) {
    return NextResponse.json(
      { message: 'Unauthorized' },
      { status: 401 }
    );
  }
  try {
        await prisma.blog.delete({
          where: { id: parseInt(params.id) },
        });

        return NextResponse.json(
          { message: 'Blog deleted successfully' },
          { status: 200 }
        );
      } catch (error) {
        return NextResponse.json(
          { message: 'Failed to delete blog', error },
          { status: 500 }
        );
      }
    }


