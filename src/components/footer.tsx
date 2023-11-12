import { AiFillGithub } from "react-icons/ai";
import { ModeToggle } from "./mode-toggle";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import Container from "./container";
import Logo from "./logo";
import { siteConfig } from "constants/site";
import { cn } from "~/lib/utils";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <Container className="mt-5 min-h-fit">
        <section
          id="footer-content"
          aria-labelledby="footer-content-heading"
          className="flex flex-col gap-10 lg:flex-row lg:gap-20"
        >
          <section
            id="footer-branding"
            aria-labelledby="footer-branding-heading"
          >
            <Logo />
          </section>
          <section
            id="footer-links"
            aria-labelledby="footer-links-heading"
            className="xxs:grid-cols-2 grid flex-1 grid-cols-1 gap-10 sm:grid-cols-4"
          >
            {siteConfig.footerNav.map((item) => (
              <div key={item.title} className="space-y-3">
                <h4 className="text-base font-medium">{item.title}</h4>
                <ul className="space-y-2.5">
                  {item.items.map((link) => (
                    <li key={link.title}>
                      <Link
                        href={link.href}
                        target={link?.external ? "_blank" : undefined}
                        rel={link?.external ? "noreferrer" : undefined}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.title}
                        <span className="sr-only">{link.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        </section>
        <section
          id="footer-bottom"
          aria-labelledby="footer-bottom-heading"
          className="flex items-center space-x-4"
        >
          <div className="flex-1 text-left text-sm leading-loose text-muted-foreground">
            Built by{" "}
            <Link
              href="https://twitter.com/sadmann17"
              target="_blank"
              rel="noreferrer"
              className="font-semibold transition-colors hover:text-foreground"
            >
              Sadman
              <span className="sr-only">Twitter</span>
            </Link>
            .
          </div>
          <div className="flex items-center space-x-1">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({
                  size: "icon",
                  variant: "ghost",
                }),
              )}
            >
              <AiFillGithub size={20} />
              <span className="sr-only">GitHub</span>
            </Link>
            <ModeToggle />
          </div>
        </section>
      </Container>
    </footer>
  );
}
