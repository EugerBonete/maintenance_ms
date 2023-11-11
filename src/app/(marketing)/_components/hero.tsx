import Image from "next/image";

export default function Hero() {
  return (
    <div className="mx-auto mt-10 flex max-w-4xl justify-around">
      <Image
        className="hidden md:block"
        src="/zip.png"
        alt="Zip"
        width={300}
        height={300}
      />
      <Image className="" src="/chest.png" alt="Zip" width={300} height={300} />
    </div>
  );
}
