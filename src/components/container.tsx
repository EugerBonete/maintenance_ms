import type { ReactNode } from "react";
import { cn } from "~/lib/utils";

type Props = {
  className?: string;
  children: ReactNode;
};

export default function Container({ className, children }: Props) {
  return (
    <section
      className={cn("mt-20 min-h-screen p-2.5 md:px-5 md:py-3", className)}
    >
      {children}
    </section>
  );
}
