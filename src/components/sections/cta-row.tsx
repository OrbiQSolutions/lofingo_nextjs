import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function CtaRow() {
  return (
    <section id="contact" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-8 text-center md:justify-between">
          <div className="flex flex-col items-center gap-4 md:flex-row md:items-start md:text-left">
            <div className="flex items-center gap-x-3">
              <Phone className="h-6 w-6" />
              <a href="tel:+1234567890" className="text-lg font-semibold hover:underline">
                (123) 456-7890
              </a>
            </div>
            <span className="hidden text-muted-foreground/50 md:block">|</span>
            <div className="flex items-center gap-x-3">
              <Mail className="h-6 w-6" />
              <a href="mailto:hello@lofingo.com" className="text-lg font-semibold hover:underline">
                hello@lofingo.com
              </a>
            </div>
          </div>
          <Button asChild variant="secondary" size="lg">
            <Link href="#contact">Get In Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
