import type { Metadata } from "next";
import PatientCornerContent from "./PatientCornerContent";

const BASE_URL = "https://drsandeepkumarsahu.com";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL },
    { "@type": "ListItem", "position": 2, "name": "Patient Corner", "item": `${BASE_URL}/patient-corner` },
  ],
};

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "name": "Patient Corner – Endocrinology FAQs & Resources",
  "url": `${BASE_URL}/patient-corner`,
  "description":
    "Patient resources, FAQs, and visit preparation guides for patients of Dr. Sandeep K. Sahu at SAI SHREE HEALTH CARE, Cuttack.",
  "author": { "@id": `${BASE_URL}/#doctor` },
  "about": { "@type": "MedicalClinic", "@id": `${BASE_URL}/#clinic` },
};

export const metadata: Metadata = {
  title: "Patient Corner & FAQs | Dr. Sahu – Endocrinologist, Cuttack",
  description:
    "Patient resources, FAQs, and visit preparation guides for Dr. Sandeep K. Sahu's patients at SAI SHREE HEALTH CARE, Cuttack. Find answers about diabetes, thyroid, PCOS, and more.",
  keywords: [
    "patient corner endocrinology Cuttack",
    "FAQs Dr Sandeep Sahu",
    "endocrinology patient guide Cuttack",
    "diabetes FAQ Cuttack",
    "thyroid FAQ Odisha",
    "SAI SHREE HEALTH CARE patient resources",
  ],
  alternates: {
    canonical: `${BASE_URL}/patient-corner`,
  },
  openGraph: {
    url: `${BASE_URL}/patient-corner`,
    title: "Patient Corner & FAQs | Dr. Sahu – Endocrinologist, Cuttack",
    description:
      "Patient resources and FAQs for endocrinology patients in Cuttack. Prepare for your visit with Dr. Sandeep K. Sahu at SAI SHREE HEALTH CARE.",
    images: [{ url: "/images/hero-patient.webp", width: 1200, height: 630, alt: "Patient Corner – Dr. Sandeep K. Sahu, Cuttack" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Patient Corner & FAQs | Dr. Sahu, Cuttack",
    description: "Patient resources, visit guides & FAQs for endocrinology patients at SAI SHREE HEALTH CARE, Cuttack.",
    images: ["/images/hero-patient.webp"],
  },
};

export default function PatientCornerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />
      <PatientCornerContent />
    </>
  );
}
