import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyCTA from "@/components/layout/StickyCTA";

const BASE_URL = "https://drsandeepkumarsahu.com";

const globalSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Physician",
      "@id": `${BASE_URL}/#doctor`,
      "name": "Dr. Sandeep K. Sahu",
      "url": BASE_URL,
      "image": `${BASE_URL}/images/home-hero.webp`,
      "description": "Dr. Sandeep K. Sahu is a highly experienced Endocrinologist and Assistant Professor of Endocrinology at S.C.B. Medical College and Hospital, Cuttack. He specialises in diabetes, thyroid disorders, PCOS, obesity, growth disorders, and metabolic diseases, serving patients across Cuttack and Odisha.",
      "medicalSpecialty": "Endocrinology",
      "jobTitle": "Assistant Professor of Endocrinology",
      "worksFor": [
        {
          "@type": "MedicalClinic",
          "@id": `${BASE_URL}/#clinic`
        },
        {
          "@type": "EducationalOrganization",
          "name": "S.C.B. Medical College and Hospital, Cuttack",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Cuttack",
            "addressRegion": "Odisha",
            "addressCountry": "IN"
          }
        }
      ],
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "degree",
          "name": "MBBS",
          "recognizedBy": { "@type": "Organization", "name": "S.C.B Medical College, Cuttack" }
        },
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "degree",
          "name": "MD (Medicine)",
          "recognizedBy": { "@type": "Organization", "name": "S.C.B Medical College, Cuttack" }
        },
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "degree",
          "name": "DM (Endocrinology)",
          "recognizedBy": { "@type": "Organization", "name": "S.C.B Medical College, Cuttack" }
        }
      ],
      "telephone": "+91-7008512773",
      "email": "drsadeepsahu@saishreehealthcare.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Near Shreema Hospital, Ring Road, Mangalabag",
        "addressLocality": "Cuttack",
        "addressRegion": "Odisha",
        "postalCode": "753001",
        "addressCountry": "IN"
      },
      "sameAs": [BASE_URL]
    },
    {
      "@type": ["MedicalClinic", "LocalBusiness"],
      "@id": `${BASE_URL}/#clinic`,
      "name": "SAI SHREE HEALTH CARE",
      "alternateName": "Sai Shree Health Care Cuttack",
      "url": BASE_URL,
      "telephone": "+91-7008512773",
      "email": "drsadeepsahu@saishreehealthcare.com",
      "image": `${BASE_URL}/images/home-hero.webp`,
      "logo": `${BASE_URL}/images/home-hero.webp`,
      "description": "SAI SHREE HEALTH CARE is Cuttack's leading endocrinology clinic, led by Dr. Sandeep K. Sahu (DM Endocrinology). Expert care for diabetes, thyroid disorders, PCOS, obesity, growth disorders, and metabolic conditions — serving all of Odisha.",
      "priceRange": "₹₹",
      "currenciesAccepted": "INR",
      "paymentAccepted": "Cash, UPI",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Near Shreema Hospital, Ring Road, Mangalabag",
        "addressLocality": "Cuttack",
        "addressRegion": "Odisha",
        "postalCode": "753001",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "20.4625",
        "longitude": "85.8830"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "10:00",
          "closes": "14:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "17:00",
          "closes": "20:00"
        }
      ],
      "medicalSpecialty": "Endocrinology",
      "hasMap": "https://maps.google.com/?q=SAI+SHREE+HEALTH+CARE,+Mangalabag,+Cuttack",
      "availableService": [
        { "@type": "MedicalTherapy", "name": "Diabetes Management in Cuttack" },
        { "@type": "MedicalTherapy", "name": "Thyroid Disorder Treatment in Cuttack" },
        { "@type": "MedicalTherapy", "name": "PCOS Treatment in Cuttack" },
        { "@type": "MedicalTherapy", "name": "Obesity Management in Odisha" },
        { "@type": "MedicalTherapy", "name": "Growth Disorder Treatment in Cuttack" },
        { "@type": "MedicalTherapy", "name": "Metabolism Disorder Management in Cuttack" }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: {
    default: "Dr. Sandeep K. Sahu | Endocrinologist, Cuttack",
    template: "%s | Dr. Sahu – Endocrinologist, Cuttack",
  },
  description:
    "Dr. Sandeep K. Sahu – DM Endocrinologist & Assistant Professor at S.C.B. Medical College, Cuttack. Expert in Diabetes, Thyroid, PCOS, Obesity & Hormonal disorders. Book an appointment at SAI SHREE HEALTH CARE, Mangalabag, Cuttack.",
  keywords: [
    "endocrinologist in Cuttack",
    "best endocrinologist in Odisha",
    "best endocrinologist in Cuttack",
    "diabetes doctor in Cuttack",
    "diabetes specialist Cuttack",
    "thyroid doctor Cuttack",
    "thyroid specialist Odisha",
    "PCOS treatment Cuttack",
    "PCOS specialist Odisha",
    "obesity specialist Cuttack",
    "obesity management Odisha",
    "hormone specialist Cuttack",
    "DM endocrinology Cuttack",
    "endocrine clinic Cuttack",
    "metabolic disorder doctor Cuttack",
    "growth disorder specialist Odisha",
    "Dr Sandeep Sahu endocrinologist",
    "SAI SHREE HEALTH CARE Cuttack",
    "S.C.B. Medical College endocrinologist",
    "Assistant Professor Endocrinology Cuttack",
  ],
  authors: [{ name: "Dr. Sandeep K. Sahu", url: BASE_URL }],
  creator: "SAI SHREE HEALTH CARE",
  publisher: "SAI SHREE HEALTH CARE",
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "Dr. Sandeep K. Sahu – Endocrinologist in Cuttack",
    title: "Best Endocrinologist in Cuttack | Dr. Sandeep K. Sahu – DM Endocrinology",
    description:
      "Expert care for Diabetes, Thyroid, PCOS, Obesity & all Hormonal Disorders in Cuttack, Odisha. Dr. Sandeep K. Sahu – Assistant Professor of Endocrinology at S.C.B. Medical College, Cuttack.",
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
      "Expert Endocrinologist in Cuttack. DM in Endocrinology. Specialist for Diabetes, Thyroid, PCOS, Obesity & Hormonal conditions. Book now at SAI SHREE HEALTH CARE.",
    images: ["/images/home-hero.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Local SEO geo tags */}
        <meta name="geo.region" content="IN-OR" />
        <meta name="geo.placename" content="Cuttack, Odisha, India" />
        <meta name="geo.position" content="20.4625;85.8830" />
        <meta name="ICBM" content="20.4625, 85.8830" />
        {/* Global JSON-LD: Physician + MedicalClinic + LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalSchema) }}
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <StickyCTA />
        <Footer />
      </body>
    </html>
  );
}
