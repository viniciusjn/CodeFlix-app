import { notFound } from 'next/navigation';
import { getUserById } from '@/app/lib/settings';
import React from 'react'

async function User({ params }: {params: {id: string}}) {
    const { name, id, username, website } = await getUserById(params.id);
    
    if (!id) {
        notFound();
    }
    return (
        <div>
            <h1 className='text-2xl font-bold0'>User {params.id}</h1>

            <div className='border border-dashed border-red-500 p-4'>
                <p>Name: {name}</p>
                <p>ID: {id}</p>
                <p>Username: {username}</p>
                <p>Website: {website}</p>
            </div>

        </div>
    )
}

export default User;