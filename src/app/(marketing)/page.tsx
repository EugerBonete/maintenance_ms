import React from "react";
import Heading from "./_components/heading";
import Container from "~/components/container";
import Hero from "./_components/hero";

export default function Marketing() {
  return (
    <Container className="mt-20 md:mt-32">
      <Heading />
      <Hero />
    </Container>
  );
}
