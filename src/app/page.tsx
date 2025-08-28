import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import PartnerLogos from '@/components/sections/partner-logos';
import TestimonialSlider from '@/components/sections/testimonial-slider';
import AlternateTestimonialStrip from '@/components/sections/alternate-testimonial-strip';
import DoubleMarquee from '@/components/sections/double-marquee';
import PortfolioCarousel from '@/components/sections/portfolio-carousel';
import RecentPosts from '@/components/sections/recent-posts';
import TestimonialWall from '@/components/sections/testimonial-wall';
import CtaRow from '@/components/sections/cta-row';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <PartnerLogos />
        <TestimonialSlider />
        <AlternateTestimonialStrip />
        <DoubleMarquee />
        <PortfolioCarousel />
        <RecentPosts />
        <TestimonialWall />
        <CtaRow />
      </main>
      <Footer />
    </div>
  );
}
