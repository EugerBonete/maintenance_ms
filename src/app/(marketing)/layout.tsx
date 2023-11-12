import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function MarketingLayout({ children }: Props) {
  const { userId } = auth();

  if (userId) redirect("/dashboard");

  return <>{children}</>;
}
