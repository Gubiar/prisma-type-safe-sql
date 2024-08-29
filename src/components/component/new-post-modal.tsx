import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function NewPostModal() {
  return (
    <Card className="max-w-2xl mx-auto p-6 sm:p-8 border-none shadow-none">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">Create a New Post</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor="title" className="text-sm font-medium">
              Title
            </Label>
            <Input id="title" placeholder="Enter a title" className="text-2xl font-bold w-full" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="author" className="text-sm font-medium">
                Author
              </Label>
              <Input id="author" placeholder="Enter the author's name" />
            </div>
            <div />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="content" className="text-sm font-medium">
              Content
            </Label>
            <Textarea id="content" placeholder="Enter the post content" rows={8} />
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <div className="flex justify-end">
          <Button>Save Post</Button>
        </div>
      </CardFooter>
    </Card>
  )
}
