import { siteConfig } from "constants/site";
import Link from "next/link";
import { BsTools } from "react-icons/bs";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <BsTools />
      <h3 className="font-bold">{siteConfig.name}</h3>
    </Link>
  );
}
