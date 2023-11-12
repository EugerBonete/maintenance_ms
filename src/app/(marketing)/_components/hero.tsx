import Image from "next/image";

export default function Hero() {
  return (
    <div className="mx-auto flex max-w-4xl justify-around md:my-5">
      <Image
        className="hidden contrast-150 dark:mix-blend-lighten dark:invert md:block"
        src="/zip.png"
        alt="Zip"
        width={300}
        height={300}
      />
      <Image
        className="contrast-150 dark:mix-blend-lighten dark:invert"
        src="/chest.png"
        alt="Zip"
        width={300}
        height={300}
      />
    </div>
  );
}
