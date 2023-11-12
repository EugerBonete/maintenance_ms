import { ClerkLoading } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import Balancer from "react-wrap-balancer";
import { Button } from "~/components/ui/button";

export default function Heading() {
  return (
    <div className="mx-auto space-y-5 text-center md:space-y-10">
      <Balancer
        as="h1"
        className="max-w-4xl text-3xl font-bold sm:text-5xl md:text-6xl lg:text-7xl"
      >
        An e-commerce skateshop built with everything new in Next.js
      </Balancer>
      <Balancer
        as="h3"
        className="max-w-2xl text-base font-semibold text-muted-foreground sm:text-lg md:text-xl"
      >
        Buy and sell skateboarding gears from independent brands and stores
        around the world with ease
      </Balancer>

      <Button size="lg" className="mx-auto block font-bold">
        <ClerkLoading>
          <Loader2 size={20} className="animate-spin" />
        </ClerkLoading>
        Get started free
      </Button>
    </div>
  );
}
