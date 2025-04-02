import { Button } from "@/components/ui/button";

export default function NavBar() {
  return (
    <div className="flex p-2 mx-auto justify-center mb-4">
        <Button variant="ghost">About me</Button>
        <Button variant="ghost">Projects</Button>
    </div>
  );
}
