import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  { brand: "Stripe", quote: "Lofingo delivered a world-class experience.", name: "Patrick Collison", role: "CEO" },
  { brand: "Figma", quote: "Their design sense is impeccable.", name: "Dylan Field", role: "Co-founder & CEO" },
  { brand: "Vercel", quote: "Incredible performance and aesthetics.", name: "Guillermo Rauch", role: "CEO" },
  { brand: "Notion", quote: "They organized our chaos into clarity.", name: "Ivan Zhao", role: "Co-founder & CEO" },
  { brand: "Airtable", quote: "A flexible and powerful partnership.", name: "Howie Liu", role: "Co-founder & CEO" },
  { brand: "Linear", quote: "The most efficient team we've worked with.", name: "Karri Saarinen", role: "Co-founder & CEO" },
];

export default function TestimonialWall() {
  return (
    <section className="py-12 md:py-24 bg-background">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl">Wall of Love</h2>
          <p className="mt-2 text-lg leading-8 text-muted-foreground">
            Don't just take our word for it. Leaders from top companies love our work.
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.name} 
                className={`transition-transform duration-300 hover:scale-105 hover:shadow-lg ${index % 2 === 0 ? 'bg-card' : 'bg-secondary'}`}
              >
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-4">{testimonial.brand}</Badge>
                  <blockquote className="text-xl font-semibold leading-8 tracking-tight">
                    “{testimonial.quote}”
                  </blockquote>
                  <footer className="mt-4">
                    <p className="text-base font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </footer>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
