import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

import { Post as PostProps } from '@prisma/client';

export default function Post({ post }: { post: PostProps }) {
    return (
        <Card key={post.id}>
        <CardHeader>
          <CardTitle>{post.title}</CardTitle>
          <div className="text-sm text-muted-foreground">
            {post.author} | {post.createDate.toLocaleDateString('pt-BR')}
          </div>
        </CardHeader>
        <CardContent>
          <p>{post.content}</p>
        </CardContent>
        <CardFooter>
          <Badge variant={post.statusId === 1 ? "default" : "secondary"} className="uppercase">
            {post.statusId}
          </Badge>
        </CardFooter>
      </Card>
    )
}