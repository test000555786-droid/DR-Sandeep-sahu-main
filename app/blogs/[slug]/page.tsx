import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, Calendar, Clock, BookOpen, ArrowRight, User } from "lucide-react";
import { blogs } from "@/data/index";
import { doctor } from "@/data/doctor";

const BASE_URL = "https://drsandeepkumarsahu.com";

export async function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }));
}

type Params = Promise<{ slug: string }>;

export async function generateMetadata(props: { params: Params }): Promise<Metadata> {
  const params = await props.params;
  const blog = blogs.find((b) => b.slug === params.slug);
  if (!blog) return { title: "Blog Not Found" };

  const canonicalUrl = `${BASE_URL}/blogs/${blog.slug}`;

  return {
    title: `${blog.title} | Dr. Sahu, Cuttack`,
    description: blog.excerpt,
    keywords: [
      blog.category,
      `${blog.category.toLowerCase()} Cuttack`,
      `${blog.category.toLowerCase()} Odisha`,
      "endocrinologist Cuttack",
      "Dr Sandeep Sahu",
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "article",
      url: canonicalUrl,
      title: blog.title,
      description: blog.excerpt,
      publishedTime: blog.date,
      authors: [doctor.name],
      tags: [blog.category, "Endocrinology", "Cuttack", "Odisha"],
      images: [
        {
          url: blog.image || "/images/hero-blogs.webp",
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.excerpt,
      images: [blog.image || "/images/hero-blogs.webp"],
    },
  };
}

const categoryColors: Record<string, string> = {
  Diabetes: "bg-blue-100 text-blue-700",
  Thyroid: "bg-purple-100 text-purple-700",
  PCOS: "bg-pink-100 text-pink-700",
  Obesity: "bg-green-100 text-green-700",
  General: "bg-slate-100 text-slate-700",
};

export default async function BlogDetailPage(props: { params: Params }) {
  const params = await props.params;

  const blog = blogs.find((b) => b.slug === params.slug);
  if (!blog) notFound();

  const related = blogs.filter((b) => b.slug !== params.slug && b.category === blog.category).slice(0, 3);
  const fallbackRelated = blogs.filter((b) => b.slug !== params.slug).slice(0, 3);
  const relatedPosts = related.length >= 2 ? related : fallbackRelated;

  const canonicalUrl = `${BASE_URL}/blogs/${blog.slug}`;

  // Article + BreadcrumbList JSON-LD
  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${canonicalUrl}#article`,
        "headline": blog.title,
        "description": blog.excerpt,
        "url": canonicalUrl,
        "datePublished": blog.date,
        "dateModified": blog.date,
        "author": {
          "@type": "Physician",
          "@id": `${BASE_URL}/#doctor`,
          "name": doctor.name,
          "url": `${BASE_URL}/about`,
        },
        "publisher": {
          "@type": "MedicalClinic",
          "@id": `${BASE_URL}/#clinic`,
          "name": "SAI SHREE HEALTH CARE",
          "logo": {
            "@type": "ImageObject",
            "url": `${BASE_URL}/images/home-hero.webp`,
          },
        },
        "image": blog.image ? `${BASE_URL}${blog.image}` : `${BASE_URL}/images/hero-blogs.webp`,
        "articleSection": blog.category,
        "keywords": `${blog.category}, endocrinology, Cuttack, Odisha, Dr Sandeep Sahu`,
        "about": {
          "@type": "MedicalCondition",
          "name": blog.category,
        },
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL },
          { "@type": "ListItem", "position": 2, "name": "Health Blog", "item": `${BASE_URL}/blogs` },
          { "@type": "ListItem", "position": 3, "name": blog.title, "item": canonicalUrl },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero */}
      <section className="page-hero">
        <div className="absolute inset-0 hero-bg" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 mb-6 transition-colors"
          >
            <ChevronLeft size={16} />
            Back to Blog
          </Link>
          <span className={`inline-block text-xs font-bold px-3 py-1.5 rounded-full mb-4 ${categoryColors[blog.category] || "bg-slate-100 text-slate-700"}`}>
            {blog.category}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-5 font-heading leading-tight">
            {blog.title}
          </h1>
          <div className="flex flex-wrap items-center gap-5 text-sm text-slate-500">
            <span className="flex items-center gap-2">
              <User size={14} />
              {doctor.name}
            </span>
            <span className="flex items-center gap-2">
              <Calendar size={14} />
              {new Date(blog.date).toLocaleDateString("en-IN", {
                day: "numeric", month: "long", year: "numeric"
              })}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={14} />
              {blog.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Article */}
            <article className="lg:col-span-2">
              {/* Featured Image */}
              {blog.image ? (
                <div className="w-full relative aspect-video rounded-2xl overflow-hidden mb-8 shadow-sm">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    priority
                  />
                </div>
              ) : (
                <div className="w-full aspect-video rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center mb-8 shadow-sm">
                  <BookOpen size={56} className="text-blue-300" />
                </div>
              )}

              <p className="text-slate-600 text-lg leading-relaxed mb-6 font-medium">
                {blog.excerpt}
              </p>

              <div className="prose prose-slate max-w-none">
                <p className="text-slate-600 leading-relaxed mb-5">
                  {blog.content}
                </p>
                <p className="text-slate-600 leading-relaxed mb-5">
                  Managing hormonal conditions requires a comprehensive approach that addresses not just the symptoms but the underlying causes. As an <strong>Assistant Professor of Endocrinology at S.C.B. Medical College and Hospital, Cuttack</strong>, Dr. Sahu combines academic expertise with hands-on clinical experience — ensuring every patient across Cuttack and Odisha receives an accurate diagnosis followed by a personalised treatment plan.
                </p>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 font-heading">
                  When Should You Seek Medical Help?
                </h2>
                <p className="text-slate-600 leading-relaxed mb-5">
                  If you are experiencing any of the symptoms described in this article, it is important to consult a qualified endocrinologist promptly. Early intervention leads to significantly better outcomes and helps prevent complications. Patients across Cuttack, Bhubaneswar, Kendrapara, and all of Odisha can access expert endocrine care at SAI SHREE HEALTH CARE.
                </p>
                <p className="text-slate-600 leading-relaxed mb-5">
                  At <strong>SAI SHREE HEALTH CARE</strong>, Near Shreema Hospital, Ring Road, Mangalabag, Cuttack, Dr. Sahu and his team are dedicated to providing the most current, evidence-based treatments for all endocrine conditions. Call <strong>+91 7008512773</strong> or visit us Monday to Saturday between 10 AM – 2 PM and 5 PM – 8 PM.
                </p>

                <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 my-8">
                  <p className="text-blue-800 font-semibold mb-2">Medical Disclaimer</p>
                  <p className="text-blue-700 text-sm leading-relaxed">
                    This article is written for educational purposes only and does not substitute professional medical advice. Always consult a qualified healthcare professional for diagnosis and treatment of any medical condition.
                  </p>
                </div>
              </div>

              {/* Author card */}
              <div className="card p-6 flex gap-5 items-start mt-10">
                <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-lg shrink-0">
                  SS
                </div>
                <div>
                  <p className="font-bold text-slate-800 font-heading">{doctor.name}</p>
                  <p className="text-blue-600 text-sm mb-1">{doctor.qualifications}</p>
                  <p className="text-primary-600 text-xs font-medium mb-2">Assistant Professor of Endocrinology, S.C.B. Medical College, Cuttack</p>
                  <p className="text-slate-500 text-sm leading-relaxed">{doctor.bio}</p>
                  <Link href="/about" className="text-blue-600 text-sm font-semibold mt-2 inline-flex items-center gap-1 hover:gap-2 transition-all">
                    View Full Profile <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6 lg:space-y-8">
              {/* Book CTA */}
              <div
                className="p-6 md:p-8 overflow-visible rounded-2xl shadow-xl transition-all hover:shadow-2xl bg-gradient-animated"
                style={{ background: 'var(--gradient-hero)', color: 'white' }}
              >
                <h3 className="text-xl md:text-2xl font-bold font-heading mb-3 text-white">
                  Have Questions?
                </h3>
                <p className="text-base mb-6 leading-relaxed" style={{ color: 'var(--color-accent-light)' }}>
                  Speak directly with Dr. Sahu about your concerns.
                </p>
                <div className="flex flex-col lg:flex-row flex-wrap gap-4">
                  <a
                    href={`tel:${doctor.phone}`}
                    className="flex-1 flex items-center justify-center font-bold py-3.5 px-4 rounded-xl transition-all hover:-translate-y-1 shadow-md whitespace-nowrap hover:shadow-lg"
                    style={{ backgroundColor: 'white', color: 'var(--color-primary)' }}
                  >
                    Call Now
                  </a>
                  <a
                    href={`https://wa.me/917008512773?text=${encodeURIComponent(`Hello, I would like to consult regarding ${blog?.title || 'an Endocrinology issue'}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center border-2 border-white/40 font-bold py-3.5 px-4 rounded-xl transition-all hover:bg-white/10 hover:-translate-y-1 whitespace-nowrap"
                    style={{ color: 'white' }}
                  >
                    Book Appointment
                  </a>
                </div>
              </div>

              {/* Related posts */}
              <div>
                <h3 className="font-bold text-slate-800 mb-4 font-heading">Related Articles</h3>
                <div className="space-y-4">
                  {relatedPosts.map((post) => (
                    <Link
                      key={post.slug}
                      href={`/blogs/${post.slug}`}
                      className="flex gap-3 p-3 rounded-xl hover:bg-blue-50 transition-colors group"
                    >
                      <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                        <BookOpen size={20} className="text-blue-300" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                          {post.title}
                        </p>
                        <p className="text-xs text-slate-400 mt-1">{post.readTime}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
