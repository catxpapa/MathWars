import Image from "next/image";
import './globals.css';
export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen p-8">
      <Image
        src="/logo.svg"
        alt="Logo"
        width={180}
        height={180}
      />
    </div>
  );
}