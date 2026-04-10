export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  color: string;
  symptoms: string[];
  treatments: string[];
  keyFacts: { label: string; value: string }[];
  image?: string;
  faqs: ServiceFAQ[];
  keywords: string[];
}

export const services: Service[] = [
  {
    slug: "diabetes-management",
    title: "Diabetes Management",
    shortDescription:
      "Comprehensive care for Type 1, Type 2 & gestational diabetes with personalized treatment plans.",
    fullDescription:
      "Diabetes is one of the most prevalent chronic conditions affecting millions globally. Dr. Sahu provides comprehensive diabetes care — from initial diagnosis through advanced glycemic management, complication screening, and lifestyle counseling. Whether you have Type 1, Type 2, or gestational diabetes, we create personalized treatment plans tailored to your unique needs. As a leading diabetes specialist in Cuttack serving patients across Odisha, Dr. Sahu combines evidence-based medicine with compassionate, patient-centred care.",
    icon: "activity",
    color: "#3B82F6",
    image: "/images/specializations/diabetes-management.webp",
    symptoms: [
      "Frequent urination",
      "Excessive thirst",
      "Unexplained weight loss",
      "Fatigue",
      "Blurred vision",
      "Slow healing wounds",
      "Numbness in hands/feet",
    ],
    treatments: [
      "Blood sugar monitoring & HbA1c management",
      "Oral hypoglycemic agents",
      "Insulin therapy & optimization",
      "Dietary counseling & meal planning",
      "Diabetic complication screening",
      "Continuous glucose monitoring setup",
    ],
    keyFacts: [
      { label: "Prevalence", value: "537M worldwide" },
      { label: "Type 2 share", value: "90-95%" },
      { label: "Preventable", value: "Type 2 prevention possible" },
    ],
    faqs: [
      {
        question: "What is the best treatment for Type 2 diabetes in Cuttack?",
        answer:
          "The best treatment combines lifestyle modification (diet and exercise), oral medications like Metformin, and if needed, insulin therapy. Dr. Sandeep K. Sahu creates personalised diabetes treatment plans for every patient at SAI SHREE HEALTH CARE, Cuttack, based on HbA1c levels, age, and overall health.",
      },
      {
        question: "Can Type 2 diabetes be reversed?",
        answer:
          "Type 2 diabetes can go into remission — particularly with significant weight loss, dietary changes, and sustained physical activity, especially when caught early. While not a 'cure', many patients achieve normal blood sugar levels without medication. Dr. Sahu guides patients through scientifically proven diabetes reversal programmes in Cuttack.",
      },
      {
        question: "How often should a diabetes patient see an endocrinologist?",
        answer:
          "Most diabetes patients managed by Dr. Sahu are reviewed every 3 months to check HbA1c, kidney function, and eye and foot health. Patients who are newly diagnosed or on insulin may need more frequent visits initially. Regular follow-up is key to preventing complications.",
      },
      {
        question: "What is HbA1c and what is the target value?",
        answer:
          "HbA1c reflects your average blood sugar over the past 3 months. For most adults with diabetes, the target is below 7.0%. Dr. Sahu personalises your target depending on your age, complications, and overall health. Even a 1% reduction in HbA1c significantly reduces the risk of kidney, eye, and nerve damage.",
      },
      {
        question: "Does Dr. Sahu provide insulin therapy in Cuttack?",
        answer:
          "Yes. Dr. Sandeep K. Sahu provides comprehensive insulin therapy management at SAI SHREE HEALTH CARE, including insulin initiation, dose optimisation, and continuous glucose monitoring (CGM) setup for patients in Cuttack and across Odisha.",
      },
    ],
    keywords: [
      "diabetes treatment Cuttack",
      "diabetes specialist Cuttack",
      "diabetes doctor Odisha",
      "Type 2 diabetes treatment Cuttack",
      "HbA1c management Cuttack",
      "insulin therapy Cuttack",
    ],
  },
  {
    slug: "thyroid-disorders",
    title: "Thyroid Disorders",
    shortDescription:
      "Expert diagnosis and management of hypothyroidism, hyperthyroidism, goiter, and thyroid nodules.",
    fullDescription:
      "The thyroid gland plays a critical role in regulating your body's metabolism, energy, and overall well-being. Dr. Sahu specializes in the full spectrum of thyroid disorders, providing accurate diagnosis through advanced thyroid function testing, ultrasound, and when necessary, thyroid biopsies. Thyroid disease is highly prevalent across Odisha, and as one of Cuttack's leading thyroid specialists, Dr. Sahu provides comprehensive long-term care for every patient.",
    icon: "zap",
    color: "#8B5CF6",
    image: "/images/specializations/thyroid-disorders.webp",
    symptoms: [
      "Weight changes",
      "Fatigue or excessive energy",
      "Hair loss",
      "Feeling too hot or cold",
      "Heart palpitations",
      "Neck swelling",
      "Mood changes",
    ],
    treatments: [
      "Thyroid function panel & antibody testing",
      "Thyroid ultrasound evaluation",
      "Levothyroxine therapy for hypothyroidism",
      "Anti-thyroid medication for hyperthyroidism",
      "Radioiodine therapy coordination",
      "Long-term thyroid cancer follow-up",
    ],
    keyFacts: [
      { label: "Prevalence in India", value: "42 million" },
      { label: "Women affected", value: "5x more than men" },
      { label: "Treatable", value: "Highly manageable" },
    ],
    faqs: [
      {
        question: "What are the warning signs of thyroid problems?",
        answer:
          "Common warning signs include unexplained weight gain or loss, persistent fatigue, hair thinning, feeling too hot or too cold, neck swelling, heart palpitations, mood changes, and menstrual irregularities. If you experience these symptoms, consult Dr. Sahu at SAI SHREE HEALTH CARE, Cuttack, for a thyroid function test.",
      },
      {
        question: "How is hypothyroidism treated?",
        answer:
          "Hypothyroidism is treated with thyroid hormone replacement therapy — usually Levothyroxine (T4). Dr. Sahu carefully calibrates the dose based on your TSH levels, symptoms, and age. Most patients experience significant improvement in energy, weight, and mood within 4–8 weeks of starting treatment.",
      },
      {
        question: "Is thyroid disease common in Odisha?",
        answer:
          "Yes. Thyroid disease — particularly hypothyroidism and thyroid nodules — is quite prevalent in Odisha. Women are five times more likely to develop thyroid disorders than men. Early screening and treatment at a specialist clinic like SAI SHREE HEALTH CARE in Cuttack can prevent long-term complications.",
      },
      {
        question: "Do thyroid disorders cause weight gain?",
        answer:
          "Hypothyroidism (underactive thyroid) commonly causes weight gain, fluid retention, and difficulty losing weight. Hyperthyroidism (overactive thyroid) typically causes unexplained weight loss. Dr. Sahu addresses both the thyroid imbalance and its metabolic effects for comprehensive, patient-centred treatment.",
      },
      {
        question: "How long does thyroid treatment take?",
        answer:
          "Thyroid treatment for hypothyroidism is typically lifelong but it is safe, effective, and affordable. Patients take a daily tablet and are monitored every 6–12 months once stable. Some transient hyperthyroid conditions resolve within months. Dr. Sahu provides dedicated long-term follow-up care for all thyroid patients in Cuttack.",
      },
    ],
    keywords: [
      "thyroid doctor Cuttack",
      "hypothyroidism treatment Cuttack",
      "thyroid specialist Odisha",
      "thyroid nodule treatment Cuttack",
      "TSH test Cuttack",
      "thyroid disorder treatment Odisha",
    ],
  },
  {
    slug: "pcod-pcos",
    title: "PCOS / PCOD",
    shortDescription:
      "Specialized hormonal therapy for polycystic ovarian syndrome, menstrual irregularities, and fertility support.",
    fullDescription:
      "Polycystic Ovary Syndrome (PCOS) is a common hormonal disorder affecting women of reproductive age. It can cause irregular periods, excess androgens, and polycystic ovaries. Dr. Sahu's approach addresses the underlying hormonal imbalances and metabolic dysfunction that drive PCOS. With dedicated PCOS treatment in Cuttack, Dr. Sahu helps women across Odisha regain hormonal balance, manage symptoms, and protect long-term metabolic health.",
    icon: "heart",
    color: "#EC4899",
    image: "/images/specializations/pcod-pcos.webp",
    symptoms: [
      "Irregular periods",
      "Excess hair growth (hirsutism)",
      "Acne",
      "Weight gain",
      "Hair thinning",
      "Difficulty getting pregnant",
      "Mood swings",
    ],
    treatments: [
      "Hormonal evaluation & androgen profiling",
      "Metformin & insulin sensitizers",
      "Oral contraceptive therapy",
      "Anti-androgen medications",
      "Ovulation induction for fertility",
      "Lifestyle & dietary modification programs",
    ],
    keyFacts: [
      { label: "Affects", value: "1 in 10 women" },
      { label: "Age group", value: "15-44 years" },
      { label: "Metabolic link", value: "High diabetes risk" },
    ],
    faqs: [
      {
        question: "What is PCOS and how is it diagnosed in Cuttack?",
        answer:
          "Polycystic Ovary Syndrome (PCOS) is a hormonal disorder in women of reproductive age, characterised by irregular periods, elevated androgens, and polycystic ovaries. At SAI SHREE HEALTH CARE, Cuttack, Dr. Sahu diagnoses PCOS through hormonal blood tests (LH, FSH, testosterone, insulin), pelvic ultrasound, and clinical examination.",
      },
      {
        question: "Can PCOS cause infertility?",
        answer:
          "PCOS is one of the most common causes of female infertility due to irregular ovulation. However, with proper treatment — including ovulation induction medications — many women with PCOS successfully conceive. Dr. Sahu provides specialised fertility-supportive endocrine care for women with PCOS in Cuttack and Odisha.",
      },
      {
        question: "What lifestyle changes help manage PCOS symptoms?",
        answer:
          "Diet and exercise are the cornerstone of PCOS management. A low-glycaemic diet rich in fibre, vegetables, and lean proteins — combined with 150+ minutes of weekly exercise — can significantly improve hormonal balance, restore menstrual regularity, and reduce insulin resistance. Dr. Sahu provides personalised lifestyle counselling alongside medical therapy.",
      },
      {
        question: "Is PCOS linked to diabetes?",
        answer:
          "Yes. Up to 70% of women with PCOS have insulin resistance, which significantly increases the risk of developing Type 2 diabetes. Dr. Sahu often prescribes insulin-sensitising medications like Metformin alongside hormonal therapy to address both the metabolic and reproductive aspects of PCOS.",
      },
      {
        question: "What medications are used to treat PCOS?",
        answer:
          "Treatment depends on the patient's primary concern. For menstrual regulation, oral contraceptive pills are commonly used. For fertility, ovulation induction agents are prescribed. For metabolic control, Metformin or other insulin sensitisers are used. Anti-androgen medications address hirsutism and acne. Dr. Sahu tailors every PCOS treatment plan to the individual patient.",
      },
    ],
    keywords: [
      "PCOS treatment Cuttack",
      "PCOS specialist Odisha",
      "PCOS doctor Cuttack",
      "polycystic ovary treatment Cuttack",
      "PCOD treatment Cuttack",
      "PCOS fertility treatment Odisha",
    ],
  },
  {
    slug: "obesity-management",
    title: "Obesity Management",
    shortDescription:
      "Medical weight management combining nutrition, medications, and behavioral strategies for lasting results.",
    fullDescription:
      "Obesity is not a lifestyle choice — it is a complex metabolic condition with genetic, hormonal, and environmental components. Dr. Sahu provides evidence-based medical management of obesity, addressing the root hormonal causes and developing sustainable weight management strategies. As one of the few dedicated obesity specialists in Cuttack, Dr. Sahu helps patients across Odisha achieve lasting, medically supervised weight loss outcomes.",
    icon: "trending-down",
    color: "#10B981",
    image: "/images/specializations/obesity-management.webp",
    symptoms: [
      "BMI over 30",
      "Breathlessness on exertion",
      "Joint pain",
      "Sleep apnea",
      "High blood pressure",
      "Fatty liver",
      "Metabolic syndrome",
    ],
    treatments: [
      "Comprehensive metabolic evaluation",
      "Hormonal imbalance correction",
      "Medical anti-obesity pharmacotherapy",
      "Structured caloric deficit planning",
      "Behavioral and psychological support",
      "Bariatric surgery consultation if needed",
    ],
    keyFacts: [
      { label: "Global adults", value: "39% overweight" },
      { label: "Comorbidities", value: "200+ linked conditions" },
      { label: "Treatment success", value: "Highly effective medically" },
    ],
    faqs: [
      {
        question: "Is obesity a medical condition or a lifestyle choice?",
        answer:
          "Modern medicine recognises obesity as a complex chronic medical condition influenced by genetics, hormones, gut microbiome, neurological factors, and environment — not simply a lack of willpower. At SAI SHREE HEALTH CARE, Dr. Sahu provides ethical, evidence-based medical management of obesity without judgment.",
      },
      {
        question: "What medical treatments are available for obesity in Cuttack?",
        answer:
          "Dr. Sahu offers comprehensive obesity treatment at SAI SHREE HEALTH CARE including: hormonal imbalance correction (thyroid, insulin, cortisol), anti-obesity pharmacotherapy, structured dietary planning, comprehensive metabolic evaluation, behavioural counselling, and bariatric surgery referral when medically indicated.",
      },
      {
        question: "When should I see a doctor for weight management?",
        answer:
          "You should consider medical evaluation when your BMI is above 30 (or above 27.5 for South Asians), when weight is affecting your health (blood sugar, blood pressure, joints, sleep), or when self-managed weight loss attempts have not been successful. Dr. Sahu provides specialist obesity care for patients across Cuttack and Odisha.",
      },
      {
        question: "How does hormonal imbalance cause weight gain?",
        answer:
          "Hormonal imbalances — including hypothyroidism, insulin resistance, PCOS, Cushing's syndrome (excess cortisol), and growth hormone deficiency — can all contribute to unexplained weight gain. Dr. Sahu performs a comprehensive hormonal screening to identify underlying causes of obesity before prescribing treatment.",
      },
      {
        question: "Does Dr. Sahu recommend bariatric surgery for obesity?",
        answer:
          "Bariatric surgery is considered only when BMI is above 37.5 (or above 32.5 with significant medical complications) and when medical management has not produced sufficient results. Dr. Sahu provides pre- and post-surgical endocrine care, coordinates with surgical teams, and monitors metabolic health throughout the process.",
      },
    ],
    keywords: [
      "obesity management Cuttack",
      "obesity specialist Cuttack",
      "weight management doctor Odisha",
      "obesity treatment Cuttack",
      "medical weight loss Cuttack",
      "obesity doctor Odisha",
    ],
  },
  {
    slug: "growth-disorders",
    title: "Growth Disorders",
    shortDescription:
      "Pediatric and adult growth hormone evaluation, deficiency treatment, and height optimization.",
    fullDescription:
      "Growth disorders in children and adolescents require specialised endocrinological evaluation. Dr. Sahu assesses growth hormone deficiency, short stature, delayed puberty, and other growth abnormalities with precision testing and compassionate care. As a trusted growth disorder specialist in Cuttack, Dr. Sahu provides both paediatric and adult patients with tailored treatment plans designed to achieve the best possible outcomes.",
    icon: "bar-chart-2",
    color: "#F59E0B",
    image: "/images/specializations/growth-disorders.webp",
    symptoms: [
      "Short stature for age",
      "Slow growth rate",
      "Delayed puberty",
      "Delayed bone development",
      "Low muscle mass",
      "Fatigue in children",
      "Poor school performance",
    ],
    treatments: [
      "Growth hormone stimulation testing",
      "Bone age X-ray evaluation",
      "Growth hormone replacement therapy",
      "Puberty induction treatment",
      "Nutritional optimization",
      "Regular growth monitoring & adjustment",
    ],
    keyFacts: [
      { label: "GH Deficiency", value: "1 in 4000 children" },
      { label: "Treatable early", value: "Before growth plates close" },
      { label: "Treatment window", value: "Best before puberty" },
    ],
    faqs: [
      {
        question: "At what age should a child be evaluated for growth disorders?",
        answer:
          "A child should be evaluated if their height is significantly below average for age and sex, if growth rate drops below 4–5 cm per year, if puberty is delayed (no signs by age 13 in girls, 14 in boys), or if growth charts show falling percentiles. Early evaluation by Dr. Sahu in Cuttack can identify treatable causes during the optimal window.",
      },
      {
        question: "How is growth hormone deficiency diagnosed?",
        answer:
          "Growth hormone deficiency is diagnosed through growth hormone stimulation tests, bone age X-rays, IGF-1 blood levels, and in some cases MRI of the pituitary gland. Dr. Sahu performs a comprehensive evaluation at SAI SHREE HEALTH CARE, Cuttack, to confirm the diagnosis before recommending treatment.",
      },
      {
        question: "Is growth hormone therapy safe for children?",
        answer:
          "Yes, when prescribed by a qualified endocrinologist. Growth hormone replacement therapy is a well-established, extensively studied treatment with an excellent safety profile when monitored appropriately. Dr. Sahu provides careful dosing, regular follow-up, and growth monitoring to ensure optimal and safe outcomes for children in Cuttack and Odisha.",
      },
      {
        question: "What are the causes of short stature in children?",
        answer:
          "Short stature can be caused by familial (genetic) factors, growth hormone deficiency, hypothyroidism (underactive thyroid), chronic illness, nutritional deficiencies, Turner syndrome, and other conditions. Only a specialist like Dr. Sahu can determine the exact cause through clinical assessment and targeted investigations.",
      },
      {
        question: "Can growth disorders be treated in adults?",
        answer:
          "Yes. Adults with growth hormone deficiency (usually caused by pituitary problems) can benefit from growth hormone replacement therapy, which improves bone density, body composition, energy levels, and cardiovascular health. Dr. Sahu treats both paediatric and adult growth hormone disorders at his clinic in Cuttack.",
      },
    ],
    keywords: [
      "growth disorder treatment Cuttack",
      "growth hormone deficiency Odisha",
      "short stature treatment Cuttack",
      "pediatric endocrinologist Cuttack",
      "growth disorder specialist Odisha",
      "delayed puberty treatment Cuttack",
    ],
  },
  {
    slug: "metabolism-disorders",
    title: "Metabolism Disorders",
    shortDescription:
      "Diagnosis and treatment of lipid disorders, metabolic syndrome, adrenal issues, and pituitary conditions.",
    fullDescription:
      "The endocrine system regulates virtually every metabolic process in the body. Dr. Sahu manages a wide range of metabolic disorders including dyslipidaemia, metabolic syndrome, adrenal disorders, pituitary tumours, and calcium metabolism abnormalities. As one of the most experienced metabolism disorder specialists serving Cuttack and Odisha, Dr. Sahu delivers accurate diagnosis and personalised treatment for complex hormonal and metabolic conditions.",
    icon: "cpu",
    color: "#06B6D4",
    image: "/images/specializations/metabolism-disorders.webp",
    symptoms: [
      "Unexplained weight changes",
      "Persistent fatigue",
      "High cholesterol",
      "Bone pain",
      "Blood pressure changes",
      "Mood disturbances",
      "Abnormal blood tests",
    ],
    treatments: [
      "Complete hormonal profiling",
      "Lipid management & statin therapy",
      "Adrenal function evaluation",
      "Pituitary MRI & hormone assessment",
      "Calcium & vitamin D management",
      "Metabolic syndrome reversal programs",
    ],
    keyFacts: [
      { label: "Metabolic syndrome", value: "25% of adults globally" },
      { label: "Adrenal disorders", value: "Often undiagnosed" },
      { label: "Key", value: "Early detection critical" },
    ],
    faqs: [
      {
        question: "What is metabolic syndrome and how is it diagnosed?",
        answer:
          "Metabolic syndrome is a cluster of conditions — abdominal obesity, high blood pressure, high blood sugar, high triglycerides, and low HDL cholesterol — that significantly increases the risk of heart disease, diabetes, and stroke. Dr. Sahu diagnoses metabolic syndrome through clinical examination and targeted blood tests at SAI SHREE HEALTH CARE, Cuttack.",
      },
      {
        question: "How is metabolic syndrome treated?",
        answer:
          "Treatment involves lifestyle modifications (diet, exercise, weight loss) complemented by medications targeting each component — blood sugar control, lipid management, blood pressure treatment, and hormonal correction where relevant. Dr. Sahu develops comprehensive metabolic reversal programmes addressing the root hormonal drivers for patients in Cuttack and Odisha.",
      },
      {
        question: "What are the signs of adrenal gland disorders?",
        answer:
          "Adrenal disorders can present as unexplained weight gain (especially facial and abdominal), fatigue, high blood pressure, stretch marks, and mood changes (Cushing's syndrome), or conversely as extreme fatigue, weight loss, and low blood pressure (Addison's disease). If you have these symptoms, consult Dr. Sahu in Cuttack for adrenal function tests.",
      },
      {
        question: "How are pituitary gland disorders diagnosed?",
        answer:
          "Pituitary disorders are diagnosed through a combination of hormonal blood tests (prolactin, GH, IGF-1, cortisol, thyroid hormones), visual field testing, and MRI of the pituitary gland. Dr. Sahu coordinates all necessary investigations and provides specialist pituitary endocrine care at his Cuttack clinic.",
      },
      {
        question: "Can metabolic disorders be permanently managed?",
        answer:
          "Many metabolic disorders can be effectively managed to achieve long-term remission. Conditions like Type 2 diabetes, dyslipidaemia, and metabolic syndrome can go into remission with sustained lifestyle changes and optimal medical therapy. Specific hormonal tumours can be fully treated. Dr. Sahu aims for the best achievable outcomes for every patient in Cuttack and across Odisha.",
      },
    ],
    keywords: [
      "metabolism disorder treatment Cuttack",
      "metabolic syndrome Cuttack",
      "adrenal disorder doctor Cuttack",
      "pituitary disorder treatment Odisha",
      "hormone imbalance doctor Cuttack",
      "metabolic specialist Odisha",
    ],
  },
];
