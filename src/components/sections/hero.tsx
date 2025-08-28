import { LofingoO } from "@/components/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  const animationDelay = (index: number) => ({ animationDelay: `${index * 0.15}s` });

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-background text-center">
      <div className="relative z-10 flex flex-col items-center p-6">
        <h1 className="font-headline text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl">
          <span className="inline-block animate-fade-in" style={animationDelay(0)}>Where</span>{' '}
          <span className="inline-block animate-fade-in" style={animationDelay(1)}>ideas</span>{' '}
          <span className="inline-block animate-fade-in" style={animationDelay(2)}>turn</span>{' '}
          <span className="inline-block animate-fade-in" style={animationDelay(3)}>into</span>{' '}
          <br className="hidden md:block" />
          <span className="inline-block animate-fade-in" style={animationDelay(4)}>unforgettable</span>{' '}
          <span className="inline-block animate-fade-in bg-gradient-to-r from-primary to-muted-foreground bg-clip-text text-transparent" style={animationDelay(5)}>experiences</span>
        </h1>
        <p className="mt-6 max-w-2xl animate-fade-in text-lg text-muted-foreground md:text-xl" style={animationDelay(6)}>
          Available for New Projects
        </p>
        <div className="mt-10 animate-fade-in" style={animationDelay(7)}>
          <Button size="lg" asChild>
            <Link href="#portfolio">View Our Work</Link>
          </Button>
        </div>
      </div>
      <LofingoO className="absolute -bottom-1/4 -right-1/4 h-1/2 w-1/2 animate-float text-primary/5 opacity-50 md:h-2/3 md:w-2/3" />
      <LofingoO className="absolute -top-1/4 -left-1/4 h-1/2 w-1/2 animate-float text-primary/10 opacity-50 [animation-delay:-3s] md:h-2/3 md:w-2/3" />
    </section>
  );
}
