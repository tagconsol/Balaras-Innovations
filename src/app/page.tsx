
import Hero from '@/components/sections/hero';
import WhoAreWe from '@/components/sections/who-are-we';
import Services from '@/components/sections/services';
import DomainSolutions from '@/components/sections/domain-solutions';
import AboutUs from '@/components/sections/about-us';
import CaseStudies from '@/components/sections/case-studies';
import Consultation from '@/components/sections/consultation';
import CapabilitiesCarousel from '@/components/sections/capabilities-carousel';

export default function Home() {
  return (
    <>
      <Hero />
      <WhoAreWe />
      <CapabilitiesCarousel />
      <AboutUs />
      <Services />
      <DomainSolutions />
      <CaseStudies />
      <Consultation />
    </>
  );
}
