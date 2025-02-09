'use client'
import { useUser } from '@auth0/nextjs-auth0/client';

export default function LoadUser() {
    const { user, error, isLoading } = useUser();
    if (isLoading) return <div>Loading....</div>;
    if (error) return <div>{error.message}</div>;
    
    return (
     user && (
    <div className="text-[30vh]">
    wELCOME {user.name}
    </div>
  )
  )
}
