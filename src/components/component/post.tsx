import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getPosts } from "@prisma/client/sql"

export default function Post({ post }: { post: getPosts.Result }) {
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
          <Badge variant={post.statusName === "Active" ? "default" : "secondary"} className="uppercase">
            {post.statusName}
          </Badge>
        </CardFooter>
      </Card>
    )
}