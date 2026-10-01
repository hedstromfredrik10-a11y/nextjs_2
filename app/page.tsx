import Image from "next/image";
import Hello from "./components/hello";

export default function Home() {
  console.log("What am i?")

  return (
    <>
      <h1>Welcome to Next.js</h1>
      <Hello />
    </>
  );
}
