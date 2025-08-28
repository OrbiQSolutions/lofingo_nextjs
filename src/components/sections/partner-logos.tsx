import Image from "next/image";

const logos = [
  { name: "Partner 1", dataAiHint: "company logo" },
  { name: "Partner 2", dataAiHint: "tech logo" },
  { name: "Partner 3", dataAiHint: "brand logo" },
  { name: "Partner 4", dataAiHint: "startup logo" },
  { name: "Partner 5", dataAiHint: "corporate logo" },
  { name: "Partner 6", dataAiHint: "minimalist logo" },
  { name: "Partner 7", dataAiHint: "geometric logo" },
  { name: "Partner 8", dataAiHint: "abstract logo" },
  { name: "Partner 9", dataAiHint: "text logo" },
  { name: "Partner 10", dataAiHint: "icon logo" },
];

const duplicatedLogos = [...logos, ...logos];

export default function PartnerLogos() {
  return (
    <div className="bg-background py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-muted-foreground">
          Trusted by the world’s most innovative teams
        </h2>
        <div
          className="relative mt-10 overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          }}
        >
          <div className="flex animate-marquee hover:[animation-play-state:paused]">
            {duplicatedLogos.map((logo, index) => (
              <div key={index} className="flex-shrink-0 px-8">
                <Image
                  className="max-h-12 w-full object-contain filter grayscale transition-all hover:grayscale-0"
                  src={`https://picsum.photos/158/48?random=${index + 1}`}
                  alt={logo.name}
                  width={158}
                  height={48}
                  data-ai-hint={logo.dataAiHint}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
