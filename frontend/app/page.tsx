import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import Footer from "@/components/Footer";
import CreatorTypes from "@/components/CreatorTypes";
import HowItWorks from "@/components/HowItWorks";
import CTA from "@/components/CTA";
import Link from "next/link";
export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <Hero />

      {/* Features */}
      <Link href="/intro" className="bg-violet-600 text-white px-8 py-4 rounded-x1">Get Started</Link>
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">
          Everything a Creator Needs
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard
            title="Creator DNA"
            description="Analyze storytelling, humor, education, motivation and audience engagement patterns."
          />

          <FeatureCard
            title="Creator Memory"
            description="Store and search every story, lesson, hook and content idea."
          />

          <FeatureCard
            title="Creator Chat"
            description="Chat with your content and discover hidden insights."
          />
        </div>
      </section>

      <HowItWorks />

      <CreatorTypes />
      <CTA />
      <Footer />
    </main>
  );
}