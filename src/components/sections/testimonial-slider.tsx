"use client";

import Autoplay from "embla-carousel-autoplay";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, InnovateNow",
    avatar: "https://picsum.photos/60/60?v=1",
    quote:
      "Working with Lofingo was a game-changer. Their attention to detail and creative solutions propelled our brand to new heights. We couldn't be happier with the results.",
  },
  {
    name: "Michael Chen",
    role: "Marketing Director, TechVerse",
    avatar: "https://picsum.photos/60/60?v=2",
    quote:
      "The team at Lofingo is exceptionally talented and professional. They understood our vision perfectly and delivered a product that exceeded all our expectations. A truly five-star experience.",
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, Eco-Wares",
    avatar: "https://picsum.photos/60/60?v=3",
    quote:
      "From the initial concept to the final launch, the communication was seamless and their expertise was evident. I highly recommend Lofingo for any digital project.",
  },
  {
    name: "David Lee",
    role: "Product Manager, QuantumLeap",
    avatar: "https://picsum.photos/60/60?v=4",
    quote:
      "Their innovative approach to design and development is what sets them apart. They are not just a service provider, but a true partner in our success.",
  },
];

export default function TestimonialSlider() {
  return (
    <section className="py-12 md:py-24 bg-background">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl">What Our Clients Say</h2>
          <p className="mt-2 text-lg leading-8 text-muted-foreground">
            We're not happy until you're happy. Here's what people have to say about our work.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          className="mt-16 w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-4">
                  <Card className="h-full rounded-xl shadow-soft transition-shadow hover:shadow-md">
                    <CardContent className="flex h-full flex-col justify-between p-6">
                      <blockquote className="flex-grow text-lg italic text-foreground">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="mt-6 flex items-center gap-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <cite className="block font-bold not-italic">{testimonial.name}</cite>
                          <span className="text-sm text-muted-foreground">{testimonial.role}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="ml-14 hidden lg:flex" />
          <CarouselNext className="mr-14 hidden lg:flex" />
        </Carousel>
      </div>
    </section>
  );
}
