/* ═══════════════════════════════════
   EXTERNAL JAVASCRIPT
   Extracted from index-v2.html
═══════════════════════════════════ */

/* ═══════════════════════════════════
   i18n TRANSLATIONS
═══════════════════════════════════ */
const translations = {
  ar: {
    "nav.about": "من أنا",
    "nav.skills": "المهارات",
    "nav.products": "المنتجات",
    "nav.contact": "تواصل معي",
    "hero.badge": "🟢 متاح للمشاريع والاستشارات",
    "hero.desc": 'أبني <strong>حلولاً رقمية متكاملة</strong> — من تطوير الـ Backend والمواقع إلى بناء استراتيجيات تسويقية تحقق <strong>مبيعات فعلية</strong> في السوق الجزائري.',
    "hero.cta1": "🚀 اطّلع على المنتجات",
    "hero.cta2": "💬 تواصل مباشر",
    "hero.stat1": "سنوات خبرة",
    "hero.stat2": "منتجات رقمية",
    "hero.stat3": "السوق المحلي",
    "hero.stat4": "تطوير + تسويق",
    "about.title": 'من <span>أنا؟</span>',
    "about.sub": "مطور ومسوّق رقمي من الجزائر — من الفكرة إلى الإطلاق",
    "about.story.title": "👋 القصة",
    "about.story.body": 'بدأت رحلتي في <strong>التسويق الرقمي</strong> من خلال فهم السوق الجزائري وتحليل <strong>عقلية الزبون المحلي</strong>، خاصة في مجال بيع المنتجات الرقمية وCOD. على مدار أكثر من سنتين، طورت استراتيجيات تحقق <strong>مبيعات فعلية</strong> وليس مجرد تفاعل. مع الوقت، طورت مهاراتي التقنية في <strong>Python وJavaScript</strong> وتخصصت في بناء <strong>REST APIs</strong>.',
    "about.spec.title": "تخصصاتي",
    "about.spec.1": "بيع المنتجات الرقمية في السوق الجزائري",
    "about.spec.2": "استشارات بيع المنتجات بنظام COD",
    "about.spec.3": "تطوير أنظمة إدارة الطلبات",
    "about.spec.4": "حلول تحسين معدل التحويل",
    "about.trust.title": "لماذا يمكنك الوثوق بي؟",
    "about.trust.1": "خبرة تقنية في REST API وبناء الأنظمة",
    "about.trust.2": "تطوير تطبيقات الهاتف باستخدام Flutter",
    "about.trust.3": "فهم عميق للسوق الجزائري وسلوك الزبائن",
    "about.trust.4": "مزيج قوي: برمجة + تسويق + تصميم",
    "skills.title": 'خريطة <span>المهارات</span>',
    "skills.sub": "مرر الماوس أو اضغط على أي قسم لعرض التفاصيل الكاملة",
    "skills.expand": "اضغط لعرض المستويات",
    "skills.tech.name": "البرمجة والتقنية",
    "skills.tech.s1": "Python · JavaScript · تصميم وبناء APIs",
    "skills.tech.s2": "تطبيقات الهاتف متقاطعة المنصات",
    "skills.tech.s3": "إدارة المشاريع والتعاون",
    "skills.tech.s4": "إنشاء ورفع المواقع كاملاً",
    "skills.mkt.name": "التسويق الرقمي",
    "skills.mkt.s1n": "السوق الجزائري",
    "skills.mkt.s1": "تحليل عقلية الزبون المحلي",
    "skills.mkt.s2n": "استراتيجيات COD",
    "skills.mkt.s2": "الدفع عند الاستلام",
    "skills.mkt.s3n": "استشارات تسويقية",
    "skills.mkt.s3": "مبنية على تجربة عملية",
    "skills.mkt.s4": "إدارة الحملات الإعلانية",
    "skills.biz.name": "البيزنس والمنتجات",
    "skills.biz.s1n": "حلول COD",
    "skills.biz.s1": "تقليل المشاكل التشغيلية",
    "skills.biz.s2n": "المنتجات الرقمية",
    "skills.biz.s2": "إنشاء وبيع في السوق الجزائري",
    "skills.biz.s3n": "خرائط الطريق",
    "skills.biz.s3": "البدء في البيع الرقمي",
    "skills.biz.s4": "قوالب إدارة الطلبات",
    "skills.design.name": "التصميم والـ 3D",
    "skills.design.s1": "مستوى متقدم",
    "skills.design.s2": "قيد التعلم والتطوير",
    "products.title": 'المنتجات <span>الرقمية</span>',
    "products.sub": "أدوات وأنظمة مجربة مصممة للسوق الجزائري — جاهزة للاستخدام",
    "products.p1.tag": "خريطة طريق",
    "products.p1.title": "خريطة بيع المنتجات الرقمية",
    "products.p1.desc": "رود ماب تفاعلية شاملة من الصفر إلى الربح — 5 مراحل تشمل وسائل التواصل والمتاجر والإعلانات المدفوعة.",
    "products.p1.cta": "اكتشف الخريطة ←",
    "products.p2.tag": "دليل شامل",
    "products.p2.title": "99+ مصدر للمنتجات الرقمية",
    "products.p2.desc": "مكتبة موثّقة تضم أكثر من 99 منصة — IPTV وVPN واشتراكات ومفاتيح ألعاب. كل الروابط متحقق منها.",
    "products.p2.cta": "تصفح المكتبة ←",
    "products.p3.tag": "نظام إدارة",
    "products.p3.title": "DigiStore — نظام تأكيد الطلبات",
    "products.p3.desc": "قالب Google Sheets احترافي لتنظيم وتتبع الطلبات — مثالي لمتاجر COD لتقليل الأخطاء.",
    "products.p3.cta": "تحميل القالب ←",
    "products.p4.tag": "استشارة",
    "products.p4.title": "استشارة مباشرة واحد على واحد",
    "products.p4.desc": "جلسة استشارية مخصصة — تحليل وضعك، تحديد الفرص، وبناء خطة عمل قابلة للتنفيذ في الجزائر.",
    "products.p4.cta": "احجز الآن ←",
    "contact.title": "حوّل فكرتك إلى<br>نظام يبيع يومياً 🚀",
    "contact.sub": "إذا كنت جاداً في تطوير مشروعك الرقمي أو التجاري في الجزائر، تواصل معي مباشرة.",
    "contact.btn": "💬 تواصل عبر واتساب"
  },
  fr: {
    "nav.about": "À propos",
    "nav.skills": "Compétences",
    "nav.products": "Produits",
    "nav.contact": "Contact",
    "hero.badge": "🟢 Disponible pour projets & consultations",
    "hero.desc": "Je crée des <strong>solutions numériques complètes</strong> — du développement Backend aux stratégies marketing qui génèrent de <strong>vraies ventes</strong> sur le marché algérien.",
    "hero.cta1": "🚀 Voir les produits",
    "hero.cta2": "💬 Contact direct",
    "hero.stat1": "ans d'expérience",
    "hero.stat2": "produits numériques",
    "hero.stat3": "marché local",
    "hero.stat4": "Dev + Marketing",
    "about.title": 'Qui <span>suis-je ?</span>',
    "about.sub": "Développeur & marketeur digital d'Algérie — de l'idée au lancement",
    "about.story.title": "👋 Mon parcours",
    "about.story.body": "J'ai commencé dans le <strong>marketing digital</strong> en analysant le marché algérien et la <strong>mentalité du client local</strong>, notamment dans la vente de produits numériques et le COD. En plus de 2 ans, j'ai développé des stratégies générant de <strong>vraies ventes</strong>. J'ai ensuite renforcé mes compétences techniques en <strong>Python et JavaScript</strong>, me spécialisant dans la création de <strong>REST APIs</strong>.",
    "about.spec.title": "Mes spécialités",
    "about.spec.1": "Vente de produits numériques sur le marché algérien",
    "about.spec.2": "Consultations vente produits via système COD",
    "about.spec.3": "Développement de systèmes de gestion de commandes",
    "about.spec.4": "Solutions d'optimisation du taux de conversion",
    "about.trust.title": "Pourquoi me faire confiance ?",
    "about.trust.1": "Expertise technique en REST API et systèmes",
    "about.trust.2": "Développement d'apps mobiles avec Flutter",
    "about.trust.3": "Compréhension approfondie du marché algérien",
    "about.trust.4": "Combinaison unique : dev + marketing + design",
    "skills.title": 'Carte des <span>compétences</span>',
    "skills.sub": "Survolez ou cliquez une section pour voir les niveaux",
    "skills.expand": "Cliquer pour voir les niveaux",
    "skills.tech.name": "Dev & Technique",
    "skills.tech.s1": "Python · JavaScript · Conception d'APIs",
    "skills.tech.s2": "Applications mobiles cross-platform",
    "skills.tech.s3": "Gestion de projets & collaboration",
    "skills.tech.s4": "Création et déploiement de sites",
    "skills.mkt.name": "Marketing Digital",
    "skills.mkt.s1n": "Marché algérien",
    "skills.mkt.s1": "Analyse du comportement local",
    "skills.mkt.s2n": "Stratégies COD",
    "skills.mkt.s2": "Paiement à la livraison",
    "skills.mkt.s3n": "Consultations marketing",
    "skills.mkt.s3": "Basées sur l'expérience terrain",
    "skills.mkt.s4": "Gestion de campagnes publicitaires",
    "skills.biz.name": "Business & Produits",
    "skills.biz.s1n": "Solutions COD",
    "skills.biz.s1": "Réduction des problèmes opérationnels",
    "skills.biz.s2n": "Produits numériques",
    "skills.biz.s2": "Création et vente en Algérie",
    "skills.biz.s3n": "Roadmaps",
    "skills.biz.s3": "Démarrer la vente numérique",
    "skills.biz.s4": "Templates de gestion des commandes",
    "skills.design.name": "Design & 3D",
    "skills.design.s1": "Niveau avancé",
    "skills.design.s2": "En cours d'apprentissage",
    "products.title": 'Produits <span>numériques</span>',
    "products.sub": "Outils et systèmes testés conçus pour le marché algérien — prêts à l'emploi",
    "products.p1.tag": "Roadmap",
    "products.p1.title": "Roadmap vente produits numériques",
    "products.p1.desc": "Plan interactif complet du zéro au profit — 5 phases couvrant réseaux sociaux, marketplaces, votre boutique et publicités payantes.",
    "products.p1.cta": "Découvrir la roadmap ←",
    "products.p2.tag": "Guide complet",
    "products.p2.title": "99+ sources de produits numériques",
    "products.p2.desc": "Bibliothèque documentée avec plus de 99 plateformes fiables — IPTV, VPN, abonnements, clés de jeux. Tous les liens vérifiés.",
    "products.p2.cta": "Voir la bibliothèque ←",
    "products.p3.tag": "Système de gestion",
    "products.p3.title": "DigiStore — Système de confirmation commandes",
    "products.p3.desc": "Template Google Sheets professionnel pour organiser et suivre vos commandes — idéal pour boutiques COD.",
    "products.p3.cta": "Télécharger le template ←",
    "products.p4.tag": "Consultation",
    "products.p4.title": "Consultation directe one-to-one",
    "products.p4.desc": "Session de consulting personnalisée — analyse de votre situation, identification des opportunités et plan d'action pour le marché algérien.",
    "products.p4.cta": "Réserver maintenant ←",
    "contact.title": "Transformez votre idée en<br>système qui vend chaque jour 🚀",
    "contact.sub": "Si vous êtes sérieux dans le développement de votre projet digital ou commercial en Algérie, contactez-moi directement.",
    "contact.btn": "💬 Contacter via WhatsApp"
  },
  en: {
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.products": "Products",
    "nav.contact": "Contact",
    "hero.badge": "🟢 Available for projects & consultations",
    "hero.desc": "I build <strong>complete digital solutions</strong> — from Backend development and websites to marketing strategies that drive <strong>real sales</strong> in the Algerian market.",
    "hero.cta1": "🚀 View Products",
    "hero.cta2": "💬 Direct Contact",
    "hero.stat1": "years experience",
    "hero.stat2": "digital products",
    "hero.stat3": "local market",
    "hero.stat4": "Dev + Marketing",
    "about.title": 'Who <span>am I?</span>',
    "about.sub": "Developer & digital marketer from Algeria — from idea to launch",
    "about.story.title": "👋 My Story",
    "about.story.body": "I started my journey in <strong>digital marketing</strong> by understanding the Algerian market and analyzing the <strong>local customer mindset</strong>, especially in digital product sales and COD. Over more than 2 years, I built strategies that achieve <strong>real sales</strong> — not just engagement. I then developed technical skills in <strong>Python and JavaScript</strong>, specializing in building <strong>REST APIs</strong>.",
    "about.spec.title": "My Specialties",
    "about.spec.1": "Selling digital products in the Algerian market",
    "about.spec.2": "COD product sales consulting",
    "about.spec.3": "Order management systems development",
    "about.spec.4": "Conversion rate optimization solutions",
    "about.trust.title": "Why trust me?",
    "about.trust.1": "Technical expertise in REST API and system building",
    "about.trust.2": "Mobile app development with Flutter",
    "about.trust.3": "Deep understanding of Algerian market behavior",
    "about.trust.4": "Unique blend: development + marketing + design",
    "skills.title": 'Skills <span>Map</span>',
    "skills.sub": "Hover or click any section to view detailed levels",
    "skills.expand": "Click to view skill levels",
    "skills.tech.name": "Dev & Technology",
    "skills.tech.s1": "Python · JavaScript · API design",
    "skills.tech.s2": "Cross-platform mobile applications",
    "skills.tech.s3": "Project management & collaboration",
    "skills.tech.s4": "Full website creation & deployment",
    "skills.mkt.name": "Digital Marketing",
    "skills.mkt.s1n": "Algerian Market",
    "skills.mkt.s1": "Local customer behavior analysis",
    "skills.mkt.s2n": "COD Strategies",
    "skills.mkt.s2": "Cash on delivery systems",
    "skills.mkt.s3n": "Marketing Consulting",
    "skills.mkt.s3": "Based on hands-on experience",
    "skills.mkt.s4": "Ad campaign management",
    "skills.biz.name": "Business & Products",
    "skills.biz.s1n": "COD Solutions",
    "skills.biz.s1": "Reducing operational issues",
    "skills.biz.s2n": "Digital Products",
    "skills.biz.s2": "Creating & selling in Algeria",
    "skills.biz.s3n": "Roadmaps",
    "skills.biz.s3": "Getting started with digital selling",
    "skills.biz.s4": "Order management templates",
    "skills.design.name": "Design & 3D",
    "skills.design.s1": "Advanced level",
    "skills.design.s2": "Currently learning & improving",
    "products.title": 'Digital <span>Products</span>',
    "products.sub": "Tested tools and systems designed for the Algerian market — ready to use immediately",
    "products.p1.tag": "Roadmap",
    "products.p1.title": "Digital Products Sales Roadmap",
    "products.p1.desc": "A comprehensive interactive roadmap from zero to profit — 5 phases covering social media, marketplaces, your own store and paid ads.",
    "products.p1.cta": "Explore the Roadmap ←",
    "products.p2.tag": "Complete Guide",
    "products.p2.title": "99+ Digital Product Sources",
    "products.p2.desc": "Documented library with 99+ trusted platforms — IPTV, VPN, subscriptions, game keys and gift cards. All links verified.",
    "products.p2.cta": "Browse the Library ←",
    "products.p3.tag": "Management System",
    "products.p3.title": "DigiStore — Order Confirmation System",
    "products.p3.desc": "Professional Google Sheets template to organize and track orders — perfect for COD stores to reduce errors and increase efficiency.",
    "products.p3.cta": "Download Template ←",
    "products.p4.tag": "Consultation",
    "products.p4.title": "Direct One-on-One Consultation",
    "products.p4.desc": "Personalized consulting session — analyze your situation, identify opportunities, and build an actionable plan for the Algerian market.",
    "products.p4.cta": "Book Now ←",
    "contact.title": "Turn your idea into a<br>system that sells daily 🚀",
    "contact.sub": "If you're serious about developing your digital or commercial project in Algeria, contact me directly — I'm here to help you achieve real results.",
    "contact.btn": "💬 Contact via WhatsApp"
  }
};

let currentLang = 'ar';

function setLang(lang) {
  currentLang = lang;
  const html = document.documentElement;

  if (lang === 'ar') {
    html.setAttribute('lang', 'ar');
    html.setAttribute('dir', 'rtl');
    document.body.style.fontFamily = "'Tajawal', sans-serif";
  } else {
    html.setAttribute('lang', lang);
    html.setAttribute('dir', 'ltr');
    document.body.style.fontFamily = "'Lexend', sans-serif";
  }
  html.setAttribute('data-lang', lang);

  // Update active button
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.lang-btn').forEach(b => {
    if(b.textContent === lang.toUpperCase()) b.classList.add('active');
  });

  // Translate elements
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if(t[key] !== undefined) el.innerHTML = t[key];
  });
}

/* ═══════════════════════════════════
   THEME TOGGLE
═══════════════════════════════════ */
function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute('data-theme');
  html.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
}

/* ═══════════════════════════════════
   SKILL CARDS — click to open
═══════════════════════════════════ */
function toggleSkill(el) {
  const isOpen = el.classList.contains('open');
  document.querySelectorAll('.skill-cat.open').forEach(c => c.classList.remove('open'));
  if (!isOpen) el.classList.add('open');
}

/* ═══════════════════════════════════
   SCROLL REVEAL & SKILL Animation
═══════════════════════════════════ */
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if(e.isIntersecting){ 
      e.target.classList.add('visible');
      // Trigger skill bar animation when skill cards come into view
      if(e.target.classList.contains('skill-cat')) {
        setTimeout(() => {
          const fills = e.target.querySelectorAll('.skill-fill');
          fills.forEach(fill => fill.style.animation = 'none');
          setTimeout(() => {
            fills.forEach(fill => fill.style.animation = '');
          }, 10);
        }, 100);
      }
      io.unobserve(e.target); 
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal, .skill-cat').forEach(el => io.observe(el));
