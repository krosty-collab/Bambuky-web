import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Why from "@/components/Why";
import About from "@/components/About";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ScrollReveal><Intro /></ScrollReveal>
        <ScrollReveal><Services /></ScrollReveal>
        <ScrollReveal><Gallery /></ScrollReveal>
        <ScrollReveal><Why /></ScrollReveal>
        <ScrollReveal><About /></ScrollReveal>
        <ScrollReveal><Process /></ScrollReveal>
        <ScrollReveal><CTA /></ScrollReveal>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
