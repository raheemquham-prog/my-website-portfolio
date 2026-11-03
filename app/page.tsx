import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import {
  AboutPreview,
  ContactCta,
  CredentialsStrip,
  ExperiencePreview,
  FeaturedProjects,
} from "@/components/sections/home-sections";
import { SkillsSection } from "@/components/sections/skills";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Web Application Security & Penetration Testing",
  description: site.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <SkillsSection />
      <FeaturedProjects />
      <ExperiencePreview />
      <CredentialsStrip />
      <ContactCta />
    </>
  );
}
