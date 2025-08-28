"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

const portfolioItems = [
  {
    headline: "Project Alpha",
    tags: "#Branding #WebDesign",
    image: "https://picsum.photos/1200/800?v=p1",
    dataAiHint: "design agency"
  },
  {
    headline: "InnovateX",
    tags: "#MobileApp #UIUX",
    image: "https://picsum.photos/1200/800?v=p2",
    dataAiHint: "mobile app"
  },
  {
    headline: "EcoSolutions",
    tags: "#Ecommerce #Sustainability",
    image: "https://picsum.photos/1200/800?v=p3",
    dataAiHint: "sustainable product"
  },
  {
    headline: "QuantumLeap",
    tags: "#DigitalStrategy #Marketing",
    image: "https://picsum.photos/1200/800?v=p4",
    dataAiHint: "business meeting"
  },
]

export default function PortfolioCarousel() {
  return (
    <section id="portfolio" className="w-full py-12 md:py-24 bg-background overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl text-center mb-12">Our Recent Work</h2>
      </div>
      <Carousel className="w-full">
        <CarouselContent className="-ml-4">
          {portfolioItems.map((item, index) => (
            <CarouselItem key={index} className="pl-4 md:basis-1/2">
              <div className="p-1">
                <Card className="overflow-hidden group">
                  <CardContent className="relative flex aspect-[4/3] items-center justify-center p-0">
                    <Image
                      src={item.image}
                      alt={item.headline}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      data-ai-hint={item.dataAiHint}
                    />
                     <div className="absolute inset-0 bg-black/40" />
                    <div className="relative z-10 text-center text-white p-6">
                        <p className="text-sm font-medium uppercase tracking-widest text-white/80">{item.tags}</p>
                        <h3 className="mt-2 font-headline text-3xl font-bold md:text-4xl">{item.headline}</h3>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="mt-8 flex justify-center">
            <CarouselPrevious className="static translate-y-0 mx-2" />
            <CarouselNext className="static translate-y-0 mx-2" />
        </div>
      </Carousel>
    </section>
  )
}
