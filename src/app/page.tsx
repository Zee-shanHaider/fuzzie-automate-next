import Navbar from "@/components/global/navbar";
import { ModeToggle } from "@/components/theme-toggle";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar />
      <ModeToggle />
    </main>
  );
}
