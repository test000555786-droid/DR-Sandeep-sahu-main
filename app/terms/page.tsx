import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://drsandeepkumarsahu.com";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL },
    { "@type": "ListItem", "position": 2, "name": "Terms of Service", "item": `${BASE_URL}/terms` },
  ],
};

export const metadata: Metadata = {
  title: "Terms of Service | Dr. Sandeep K. Sahu, Cuttack",
  description:
    "Terms of Service for drsandeepkumarsahu.com and SAI SHREE HEALTH CARE, Cuttack. Read our terms governing website use, appointments, and medical information.",
  alternates: { canonical: `${BASE_URL}/terms` },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="page-hero">
        <div className="absolute inset-0 hero-bg" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <p className="text-sm text-blue-600 font-semibold mb-2">Legal</p>
          <h1 className="text-4xl font-bold text-slate-900 font-heading mb-3">Terms of Service</h1>
          <p className="text-slate-500 text-sm">Last updated: April 2025 &nbsp;·&nbsp; SAI SHREE HEALTH CARE, Cuttack</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 text-slate-600 leading-relaxed">

            <div>
              <h2 className="text-xl font-bold text-slate-900 font-heading mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing and using <strong>drsandeepkumarsahu.com</strong> (the "Website"), you agree to be bound by these Terms of Service and all applicable laws and regulations. This Website is operated by SAI SHREE HEALTH CARE, led by Dr. Sandeep K. Sahu (DM Endocrinology), located at Near Shreema Hospital, Ring Road, Mangalabag, Cuttack – 753001, Odisha, India. If you do not agree with any of these terms, please do not use this Website.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 font-heading mb-3">2. Medical Information Disclaimer</h2>
              <p>
                All content on this Website — including articles, blog posts, service descriptions, and FAQ answers — is provided for <strong>general informational and educational purposes only</strong>. It does not constitute medical advice, diagnosis, or treatment recommendations. Always seek the advice of a qualified physician or other qualified health provider with any questions you may have regarding a medical condition.
              </p>
              <p className="mt-3">
                Dr. Sandeep K. Sahu and SAI SHREE HEALTH CARE expressly disclaim all liability for any adverse outcomes, errors, or omissions resulting from reliance on information published on this Website.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 font-heading mb-3">3. Appointment Requests</h2>
              <p>
                Appointment requests submitted via this Website's contact form or WhatsApp are <strong>requests only</strong> and do not constitute a confirmed appointment until acknowledged by our clinic. SAI SHREE HEALTH CARE reserves the right to decline appointment requests at its discretion. For urgent medical concerns, please call <strong>+91 7008512773</strong> directly or visit the clinic in person.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 font-heading mb-3">4. Intellectual Property</h2>
              <p>
                All content on this Website, including but not limited to text, graphics, logos, images, and service descriptions, is the property of SAI SHREE HEALTH CARE or its content suppliers and is protected under applicable intellectual property laws. You may not reproduce, distribute, or use any content from this Website without express written permission.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 font-heading mb-3">5. Third-Party Links</h2>
              <p>
                This Website may contain links to third-party websites (including WhatsApp, Google Maps, and health information resources) for your convenience. SAI SHREE HEALTH CARE does not endorse or assume responsibility for the content or practices of any third-party websites. Accessing third-party links is done entirely at your own risk.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 font-heading mb-3">6. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, SAI SHREE HEALTH CARE and Dr. Sandeep K. Sahu shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of or inability to use this Website, its content, or services described herein.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 font-heading mb-3">7. Governing Law</h2>
              <p>
                These Terms of Service are governed by the laws of India. Any disputes arising out of the use of this Website shall be subject to the exclusive jurisdiction of the courts of Cuttack, Odisha, India.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 font-heading mb-3">8. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to this page. Continued use of the Website after any such changes constitutes your agreement to the new Terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 font-heading mb-3">9. Contact</h2>
              <address className="not-italic text-slate-700 space-y-1">
                <p><strong>SAI SHREE HEALTH CARE</strong></p>
                <p>Near Shreema Hospital, Ring Road, Mangalabag</p>
                <p>Cuttack – 753001, Odisha, India</p>
                <p>Phone: <a href="tel:+917008512773" className="text-blue-600 hover:underline">+91 7008512773</a></p>
              </address>
            </div>

            <div className="pt-8 border-t border-slate-100 flex flex-wrap gap-6">
              <Link href="/" className="text-blue-600 hover:underline text-sm font-medium">
                ← Return to Homepage
              </Link>
              <Link href="/privacy-policy" className="text-blue-600 hover:underline text-sm font-medium">
                Privacy Policy →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
