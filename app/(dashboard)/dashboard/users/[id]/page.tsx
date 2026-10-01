import React from 'react'

const Page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  return (
    <h1 className="text-3xl">User profile: {id}</h1>
  )
}

export default Page