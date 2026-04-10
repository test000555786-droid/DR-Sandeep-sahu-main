import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://drsandeepkumarsahu.com";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL },
    { "@type": "ListItem", "position": 2, "name": "Privacy Policy", "item": `${BASE_URL}/privacy-policy` },
  ],
};

export const metadata: Metadata = {
  title: "Privacy Policy | Dr. Sandeep K. Sahu, Cuttack",
  description:
    "Privacy Policy for drsandeepkumarsahu.com and SAI SHREE HEALTH CARE, Cuttack. Learn how we collect, use, and protect your personal information.",
  alternates: { canonical: `${BASE_URL}/privacy-policy` },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
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
          <h1 className="text-4xl font-bold text-slate-900 font-heading mb-3">Privacy Policy</h1>
          <p className="text-slate-500 text-sm">Last updated: April 2025 &nbsp;·&nbsp; SAI SHREE HEALTH CARE, Cuttack</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 text-slate-600 leading-relaxed">

            <div>
              <h2 className="text-xl font-bold text-slate-900 font-heading mb-3">1. Introduction</h2>
              <p>
                SAI SHREE HEALTH CARE, operated by Dr. Sandeep K. Sahu (DM Endocrinology, Assistant Professor — S.C.B. Medical College and Hospital, Cuttack), is committed to protecting the privacy and confidentiality of all patients and website visitors. This Privacy Policy explains how we collect, use, store, and protect your personal information when you visit <strong>drsandeepkumarsahu.com</strong> or contact our clinic at Near Shreema Hospital, Ring Road, Mangalabag, Cuttack – 753001, Odisha.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 font-heading mb-3">2. Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li><strong>Contact information:</strong> Name, phone number, and email address provided through our appointment request form.</li>
                <li><strong>Health information:</strong> Condition or reason for visit, entered voluntarily in the contact form.</li>
                <li><strong>Usage data:</strong> Pages visited, time on site, browser type, and device type (collected anonymously).</li>
                <li><strong>Communication records:</strong> Messages sent via WhatsApp or email to our clinic.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 font-heading mb-3">3. How We Use Your Information</h2>
              <p>Your information is used only to:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Respond to appointment requests and patient inquiries.</li>
                <li>Provide relevant medical information and appointment reminders.</li>
                <li>Improve the quality of our website and patient communication.</li>
                <li>Comply with applicable legal and medical regulatory requirements in India.</li>
              </ul>
              <p className="mt-3">
                We do <strong>not</strong> sell, rent, or share your personal information with third parties for marketing purposes.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 font-heading mb-3">4. Data Storage and Security</h2>
              <p>
                Appointment requests submitted via this website are transmitted through WhatsApp (Meta Platforms Inc.), which applies end-to-end encryption. We do not store form submissions on our servers. Any data shared via email is stored within secure, password-protected accounts.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 font-heading mb-3">5. Cookies</h2>
              <p>
                This website may use essential cookies to ensure basic functionality. We do not use advertising or tracking cookies. Analytics, if used, are configured to anonymise all visitor data in compliance with applicable privacy standards.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 font-heading mb-3">6. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Request access to any personal data we hold about you.</li>
                <li>Request correction or deletion of your personal data.</li>
                <li>Opt out of any future communications from our clinic.</li>
              </ul>
              <p className="mt-3">
                To exercise these rights, contact us at <strong>+91 7008512773</strong> or visit us at SAI SHREE HEALTH CARE, Mangalabag, Cuttack.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 font-heading mb-3">7. Medical Disclaimer</h2>
              <p>
                Content on this website is for informational purposes only and does not constitute medical advice, diagnosis, or treatment. Always consult a qualified healthcare professional for medical decisions. Dr. Sandeep K. Sahu and SAI SHREE HEALTH CARE shall not be liable for any actions taken based on information provided on this website.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 font-heading mb-3">8. Changes to This Policy</h2>
              <p>
                We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page with an updated revision date. Continued use of this website after changes constitutes acceptance of the updated policy.
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
              <Link href="/terms" className="text-blue-600 hover:underline text-sm font-medium">
                Terms of Service →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
