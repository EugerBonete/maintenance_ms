import Balancer from "react-wrap-balancer";

export default function Heading() {
  return (
    <div className="mx-auto space-y-5 text-center">
      <Balancer
        as="h1"
        className="max-w-4xl text-3xl font-bold sm:text-5xl md:text-6xl lg:text-7xl"
      >
        An e-commerce skateshop built with everything new in Next.js
      </Balancer>
      <Balancer
        as="h3"
        className="max-w-2xl text-lg font-semibold text-muted-foreground md:text-xl"
      >
        Buy and sell skateboarding gears from independent brands and stores
        around the world with ease
      </Balancer>
    </div>
  );
}
