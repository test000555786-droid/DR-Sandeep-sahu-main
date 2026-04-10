import type { Metadata } from "next";
import ContactForm from "./ContactForm";

const BASE_URL = "https://drsandeepkumarsahu.com";

export const metadata: Metadata = {
  title: "Book Appointment | Endocrinologist, Cuttack",
  description:
    "Book an appointment with Dr. Sandeep K. Sahu — leading Endocrinologist in Cuttack. Visit SAI SHREE HEALTH CARE, Near Shreema Hospital, Ring Road, Mangalabag, Cuttack or call +91 7008512773.",
  keywords: [
    "book endocrinologist appointment Cuttack",
    "endocrinology clinic Cuttack",
    "SAI SHREE HEALTH CARE contact",
    "Dr Sandeep Sahu appointment",
    "endocrinologist near me Cuttack",
  ],
  alternates: {
    canonical: `${BASE_URL}/contact`,
  },
  openGraph: {
    url: `${BASE_URL}/contact`,
    title: "Book Appointment | Endocrinologist, Cuttack",
    description:
      "Book a consultation with Dr. Sandeep K. Sahu at SAI SHREE HEALTH CARE, Mangalabag, Cuttack. Expert endocrinology care for Diabetes, Thyroid, PCOS, Obesity & more.",
    images: [{ url: "/images/hero-contact.webp", width: 1200, height: 630, alt: "Book Appointment – SAI SHREE HEALTH CARE, Cuttack" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book Appointment | Endocrinologist, Cuttack",
    description: "Book a consultation at SAI SHREE HEALTH CARE, Cuttack with Dr. Sandeep K. Sahu. Call +91 7008512773.",
    images: ["/images/hero-contact.webp"],
  },
};

export default function ContactPage() {
  return <ContactForm />;
}
