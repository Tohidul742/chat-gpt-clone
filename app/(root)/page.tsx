import { ModeToggle } from "@/components/ui/mode-toggle";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <h1>Hello world</h1>
    <ModeToggle />
    <UserButton/>
    </>
  );
}
