"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Activity, Zap, Heart, TrendingDown, BarChart2, Cpu, ArrowRight, ChevronDown, CheckCircle2 } from "lucide-react";

const iconMap: Record<string, any> = {
  activity: Activity,
  zap: Zap,
  heart: Heart,
  "trending-down": TrendingDown,
  "bar-chart-2": BarChart2,
  cpu: Cpu,
};

export default function ServicesGridInteractive({ services }: { services: any[] }) {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  return (
    <section className="relative py-24 overflow-hidden bg-slate-50" ref={containerRef}>
      {/* Ambient Moving Background */}
      <div 
        className="absolute inset-0 bg-gradient-animated opacity-60 pointer-events-none"
        style={{ background: "linear-gradient(-45deg, #F4FAFC 0%, #E8F4FB 50%, #F4FAFC 100%)" }} 
      />
      <motion.div 
        animate={{ y: [0, -30, 0], x: [0, 20, 0], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-200 rounded-full blur-[150px] pointer-events-none"
      />
      <motion.div 
        animate={{ y: [0, 40, 0], x: [0, -20, 0], opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-accent-200 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Uniform balanced grid — no oversized cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Activity;
            const isExpanded = expandedId === service.slug;
            const isFeatured = index === 0;

            return (
              <motion.div
                layout
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.08 * index, ease: [0.22, 1, 0.36, 1] }}
                whileHover={!isExpanded ? { y: -4 } : {}}
                onClick={() => setExpandedId(isExpanded ? null : service.slug)}
                className={`group relative bg-white border rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 flex flex-col ${
                  isFeatured 
                    ? "border-primary-200/70 shadow-md hover:shadow-xl ring-1 ring-primary-100/50" 
                    : "border-slate-200/60 shadow-sm hover:shadow-lg hover:border-primary-200/50"
                }`}
              >
                {/* Top accent bar — uses each service's color */}
                <div 
                  className="h-1 w-full"
                  style={{ background: `linear-gradient(90deg, ${service.color || '#1B6CA8'}, ${service.color ? service.color + '90' : '#0BA898'})` }}
                />

                <motion.div layout className="relative z-10 flex flex-col flex-1 p-5 lg:p-6">
                  
                  {/* Row 1: Icon + Featured badge */}
                  <div className="flex items-center justify-between mb-4">
                    <motion.div 
                      layout
                      className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-400 group-hover:scale-110 group-hover:rotate-3 ${
                        isFeatured 
                          ? 'bg-gradient-to-br from-primary-600 to-accent-500 text-white shadow-md' 
                          : 'border border-slate-100 group-hover:border-primary-200 group-hover:bg-primary-50'
                      }`}
                      style={!isFeatured ? { backgroundColor: `${service.color}0A`, color: service.color } : {}}
                    >
                      <Icon size={20} />
                    </motion.div>

                    {isFeatured && (
                      <span className="px-2.5 py-0.5 rounded-full bg-accent-50 text-accent-700 text-[10px] font-bold uppercase tracking-wider border border-accent-100">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  {/* Row 2: Title */}
                  <motion.h2 layout className="text-lg font-bold text-slate-800 font-heading leading-snug mb-2">
                    {service.title}
                  </motion.h2>

                  {/* Row 3: Description */}
                  <motion.p layout className="text-sm text-slate-500 leading-relaxed mb-5 line-clamp-3">
                    {service.shortDescription}
                  </motion.p>

                  {/* Separator */}
                  <div className="w-full h-px bg-slate-100 group-hover:bg-primary-100/80 transition-colors duration-300" />
                  
                  {/* Row 4: Tags + CTA — pushed to bottom */}
                  <AnimatePresence mode="popLayout">
                    {!isExpanded && (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.97 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.97 }}
                        transition={{ duration: 0.2 }}
                        className="mt-auto pt-4 flex flex-col gap-3"
                      >
                        {/* Symptom chips */}
                        <div className="flex flex-wrap gap-1.5">
                          {service.symptoms.slice(0, 3).map((sym: string) => (
                            <span key={sym} className="px-2 py-0.5 rounded-md bg-slate-50 text-slate-500 border border-slate-100 text-[11px]">
                              {sym}
                            </span>
                          ))}
                          {service.symptoms.length > 3 && (
                            <span className="flex items-center gap-0.5 font-semibold px-2 py-0.5 rounded-md border border-primary-100 bg-primary-50 text-primary-600 text-[11px] group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                              +{service.symptoms.length - 3} more <ChevronDown size={11} className="group-hover:translate-y-0.5 transition-transform" />
                            </span>
                          )}
                        </div>

                        {/* CTA link */}
                        <Link 
                          href={`/services/${service.slug}`}
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-600 group-hover:text-primary-700 transition-colors"
                        >
                          Learn more <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Expanded Content Area */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 mt-4">
                          <h4 className="font-bold text-slate-800 font-heading mb-3 flex items-center gap-2 text-sm">
                            <Activity size={14} className="text-primary-600" /> Treatment Scope
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-3 mb-5">
                            {service.symptoms.map((sym: string) => (
                              <div key={sym} className="flex items-start gap-2 text-sm text-slate-600">
                                <CheckCircle2 size={14} className="text-accent-500 shrink-0 mt-0.5" />
                                <span>{sym}</span>
                              </div>
                            ))}
                          </div>
                          
                          <Link 
                            href={`/services/${service.slug}`}
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center justify-center w-full gap-2 text-white font-bold px-6 py-2.5 rounded-full transition-all duration-300 shadow-md hover:-translate-y-0.5 hover:shadow-lg active:scale-95 text-sm"
                            style={{ background: 'linear-gradient(-45deg, #1B6CA8 0%, #0BA898 50%, #1B6CA8 100%)' }}
                          >
                            View Full Details
                            <ArrowRight size={14} />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
