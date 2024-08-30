import { getPosts } from "@prisma/client/sql";
import Post from "./post"
import {PrismaClient } from "@prisma/client"
import { TypedSql, Result } from "@prisma/client/runtime/library";

export async function PostsList() {
  let posts: getPosts.Result[] = []; // Explicitly define the type (consider using a const)

  const prisma = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
  });

  posts = await prisma.$queryRawTyped(getPosts())

  let count = await prisma.$queryRaw`
  SELECT 
    COUNT(p.id)
  FROM 
      "Post" p
`
  console.log(posts)
  console.log(count)


  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">All Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Post key={post.id} post={post}/>
        ))}
      </div>
    </div>
  )
}
