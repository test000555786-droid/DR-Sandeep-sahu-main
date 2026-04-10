import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import AboutPreview from "@/components/sections/AboutPreview";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import StatsSection from "@/components/sections/StatsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import BlogPreview from "@/components/sections/BlogPreview";
import CTASection from "@/components/sections/CTASection";
import { faqs } from "@/data/index";

const BASE_URL = "https://drsandeepkumarsahu.com";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((f) => ({
    "@type": "Question",
    "name": f.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": f.answer,
    },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL },
  ],
};

export const metadata: Metadata = {
  title: "Best Endocrinologist in Cuttack | Dr. Sandeep K. Sahu",
  description:
    "Dr. Sandeep K. Sahu – leading Endocrinologist & Assistant Professor at S.C.B. Medical College, Cuttack. Expert treatment for Diabetes, Thyroid disorders, PCOS, Obesity & Hormonal conditions in Cuttack, Odisha. Book an appointment at SAI SHREE HEALTH CARE today.",
  keywords: [
    "best endocrinologist in Cuttack",
    "endocrinologist in Cuttack",
    "diabetes specialist Cuttack",
    "thyroid doctor Cuttack",
    "PCOS treatment Cuttack",
    "obesity specialist Odisha",
    "hormone doctor Cuttack",
    "DM endocrinology Cuttack",
  ],
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    url: BASE_URL,
    title: "Best Endocrinologist in Cuttack | Dr. Sandeep K. Sahu",
    description:
      "Expert treatment for Diabetes, Thyroid, PCOS, Obesity & Hormonal disorders in Cuttack, Odisha. Dr. Sandeep K. Sahu – Assistant Professor of Endocrinology at S.C.B. Medical College, Cuttack.",
    images: [
      {
        url: "/images/home-hero.webp",
        width: 1200,
        height: 630,
        alt: "Dr. Sandeep K. Sahu – Best Endocrinologist in Cuttack, Odisha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Endocrinologist in Cuttack | Dr. Sandeep K. Sahu",
    description:
      "Expert treatment for Diabetes, Thyroid, PCOS, Obesity & Hormonal disorders in Cuttack, Odisha. Book your appointment at SAI SHREE HEALTH CARE.",
    images: ["/images/home-hero.webp"],
  },
};

export default function HomePage() {
  return (
    <>
      {/* FAQPage JSON-LD for Google rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* BreadcrumbList JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <HeroSection />
      <StatsSection />
      <AboutPreview />
      <ServicesSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <BlogPreview />
      <CTASection />
    </>
  );
}
