const keywords = [
  "Brand Strategy", "UI/UX Design", "Web Development", "Mobile Apps", "E-commerce",
  "Digital Marketing", "Content Creation", "SEO Optimization", "Motion Graphics",
  "Product Design", "Social Media", "Data Analytics"
];

const Marquee = ({ words, reverse = false }: { words: string[], reverse?: boolean }) => (
  <div className="relative flex overflow-x-hidden">
    <div className={`py-4 flex whitespace-nowrap ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'} hover:[animation-play-state:paused]`}>
      {words.map((word, index) => (
        <span key={index} className="mx-4 text-2xl md:text-3xl font-semibold font-headline">
          {word}
        </span>
      ))}
    </div>
    <div className={`absolute top-0 py-4 flex whitespace-nowrap ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'} hover:[animation-play-state:paused]`} aria-hidden="true">
      {words.map((word, index) => (
        <span key={index} className="mx-4 text-2xl md:text-3xl font-semibold font-headline">
          {word}
        </span>
      ))}
    </div>
  </div>
);

export default function DoubleMarquee() {
  return (
    <section id="services" className="py-12 md:py-20 bg-background">
      <div className="flex flex-col gap-4">
        <div className="bg-card text-card-foreground">
            <Marquee words={keywords} />
        </div>
        <div className="bg-primary text-primary-foreground">
            <Marquee words={keywords} reverse={true} />
        </div>
      </div>
    </section>
  );
}
