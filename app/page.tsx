import Drum from "@/components/Drum";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen h-full w-full flex items-center justify-center p-5 py-32">
      <Image
        src={"/music.png"}
        alt={""}
        width={1000}
        height={1000}
        className="absolute w-full opacity-20 min-h-screen h-full top-0 object-cover"
      />
      <Drum />
    </main>
  );
}
