import { Button } from "../ui/button";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { NewPostModal } from "./new-post-modal";

export default function Header() {
  return (
    <header className="container flex justify-between mx-auto px-4 py-8">
      <span className="text-5xl font-bold">LOGO</span>
      <nav>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant={"default"}>Novo Post</Button>
          </DialogTrigger>
          <DialogContent>
            <NewPostModal />
          </DialogContent>
        </Dialog>
      </nav>
    </header>
  );
}
