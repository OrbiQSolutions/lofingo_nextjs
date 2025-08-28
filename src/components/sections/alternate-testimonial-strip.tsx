"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    image: "https://picsum.photos/800/600?v=1",
    dataAiHint: "modern office",
    quote: "Their team's creativity is unmatched. They delivered beyond our wildest dreams.",
    avatar: "https://picsum.photos/40/40?v=a",
    name: "Alex Johnson",
  },
  {
    image: "https://picsum.photos/800/600?v=2",
    dataAiHint: "cityscape night",
    quote: "A seamless process from start to finish. The results speak for themselves.",
    avatar: "https://picsum.photos/40/40?v=b",
    name: "Maria Garcia",
  },
  {
    image: "https://picsum.photos/800/600?v=3",
    dataAiHint: "abstract art",
    quote: "Lofingo turned our vision into a stunning reality. Highly recommended!",
    avatar: "https://picsum.photos/40/40?v=c",
    name: "Chen Wei",
  },
  {
    image: "https://picsum.photos/800/600?v=4",
    dataAiHint: "nature landscape",
    quote: "Professional, responsive, and incredibly talented. A pleasure to work with.",
    avatar: "https://picsum.photos/40/40?v=d",
    name: "Fatima Al-Fassi",
  },
];

export default function AlternateTestimonialStrip() {
  return (
    <section id="about" className="py-12 md:py-24 bg-card">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 4500,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2">
                <Card className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                  <Image
                    src={testimonial.image}
                    alt={`Testimonial background ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    data-ai-hint={testimonial.dataAiHint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                    <blockquote className="text-lg md:text-xl font-medium text-white">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="mt-4 flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <cite className="text-base font-semibold text-white not-italic">{testimonial.name}</cite>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 hidden md:flex" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
}
