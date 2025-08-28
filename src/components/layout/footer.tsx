import Link from "next/link";
import { LofingoO } from "@/components/logo";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import NewsletterForm from "@/components/forms/newsletter-form";

const footerLinks = {
  quickLinks: [
    { href: "/", label: "Home" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#services", label: "Services" },
    { href: "#about", label: "About Us" },
    { href: "#blog", label: "Blog" },
    { href: "#contact", label: "Contacts" },
  ],
  legal: [
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms of Use" },
  ],
};

const socialLinks = [
  {
    name: "Facebook",
    icon: Facebook,
    href: "#",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "#",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "#",
  },
];

const PinterestIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M12 0C5.373 0 0 5.373 0 12c0 4.28 2.822 7.93 6.696 9.48.03-.225.044-.5.06-.728.04-1.57.94-3.995.94-3.995s-.255-.51-.255-1.27c0-1.19.68-2.085 1.53-2.085.716 0 1.06.536 1.06 1.185 0 .717-.457 1.79-.693 2.78-.196.83.415 1.514 1.25 1.514 1.496 0 2.63-1.58 2.63-3.868 0-2.04-1.44-3.44-3.56-3.44-2.43 0-3.86 1.812-3.86 3.58 0 .68.25 1.41.57 1.83.06.09.07.165.05.255-.07.315-.24.975-.285 1.155-.06.255-.33.345-.58.225-1.11-.525-1.81-2.175-1.81-3.42 0-2.82 2.05-5.32 5.56-5.32 2.92 0 4.93 2.08 4.93 4.6 0 2.94-1.83 5.23-4.35 5.23-1.12 0-2.18-.58-2.55-1.26s-.69-2.22-.69-2.22c-.225-.91-.83-1.78-1.5-2.355-.65-.555-1.54-.51-2.1-.21-.13.06-.2.22-.15.345.33.8.45 1.09.66 1.6.31 0.78.31 1.74 0 2.52-.52 1.28-2.14 2.6-2.4 2.88-.13.13-.18.28-.18.43 0 .4.24.49.33.52.79.25 1.15.22 1.59-.16 1.39-1.23 1.83-2.86 1.83-2.86s.52 2.37.63 2.64c.33.8 1.15 1.57 2.13 1.57 2.19 0 3.7-2.22 3.7-5.16 0-2.46-1.59-4.29-4.12-4.29-2.1 0-3.48 1.53-3.48 3.12 0 .84.39 1.47.81 1.8.1.09.12.16.08.28-.15.42-1.09 1.12-1.09 1.12s-.33.42-.48.96c0 0-.43 1.83-.55 2.25-.13.52-.09.68.18.91C6.27 21.6 6.48 21.81 6.7 22c.69.6 1.45 1.11 2.29 1.5.8.36 1.68.55 2.58.55 5.51 0 10.15-4.21 10.42-9.57.01-.1.02-.2.02-.31 0-.01 0-.01 0 0C24 5.373 18.627 0 12 0z" />
  </svg>
);


export default function Footer() {
  return (
    <footer className="bg-card text-card-foreground">
      <div className="mx-auto w-full max-w-7xl px-6 py-12 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-2">
              <LofingoO className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold font-headline">Lofingo</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Lofingo Reimagined. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              123 Creative Lane, Suite 100<br/>
              Innovate City, CA 90210
            </p>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 font-headline">Quick Links</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerLinks.quickLinks.map((item) => (
                    <li key={item.label}>
                      <a href={item.href} className="text-sm leading-6 text-muted-foreground hover:text-foreground">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 font-headline">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerLinks.legal.map((item) => (
                    <li key={item.label}>
                      <a href={item.href} className="text-sm leading-6 text-muted-foreground hover:text-foreground">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 font-headline">Subscribe to our newsletter</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  The latest news, articles, and resources, sent to your inbox weekly.
                </p>
                <div className="mt-6">
                    <NewsletterForm />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-border pt-8 sm:mt-20 lg:mt-24 flex items-center justify-between">
          <div className="flex space-x-6 md:order-2">
            {socialLinks.map((item) => (
              <a key={item.name} href={item.href} className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
             <a key="Pinterest" href="#" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">Pinterest</span>
                <PinterestIcon className="h-6 w-6" aria-hidden="true" />
              </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
