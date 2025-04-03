import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="flex p-2 mx-auto justify-center mb-4">
      <Button variant="ghost">
        <Link href="/">About me</Link>
      </Button>
      <Button variant="ghost">
        <Link href="/projects">Projects</Link>
      </Button>
    </div>
  );
}
