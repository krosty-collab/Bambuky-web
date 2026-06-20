import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Why from "@/components/Why";
import About from "@/components/About";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import ScrollReveal from "@/components/ScrollReveal";
import { GLOBAL_FAQS } from "@/lib/faqs";
import { faqSchema, organizationSchema } from "@/lib/seo";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(GLOBAL_FAQS)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema()),
        }}
      />
      <Nav />
      <main>
        <Hero />
        <ScrollReveal><Intro /></ScrollReveal>
        <ScrollReveal><Services /></ScrollReveal>
        <ScrollReveal><Gallery /></ScrollReveal>
        <ScrollReveal><Why /></ScrollReveal>
        <ScrollReveal><About /></ScrollReveal>
        <ScrollReveal><Process /></ScrollReveal>
        <ScrollReveal><Testimonials /></ScrollReveal>
        <ScrollReveal><FAQ items={GLOBAL_FAQS} id="preguntas-frecuentes" /></ScrollReveal>
        <ScrollReveal><CTA /></ScrollReveal>
      </main>
      <Footer />
      <WhatsAppFloat />
      <MobileStickyCTA />
    </>
  );
}
