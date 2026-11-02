import { useState } from "react";
import {
  ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Menu, X, Code2,
  Layers3, Smartphone, Globe2, Download, ExternalLink, BookOpen, Send,
  Sparkles, BriefcaseBusiness, GraduationCap, MapPin
} from "lucide-react";

const profile = {
  name: "Mohammed Ahmed Malik Ahmed",
  email: "Mohammed0911477@gmail.com",
  github: "https://github.com/Mohammed-malik-dev",
  linkedin: "https://www.linkedin.com/in/mohammad-malik-978847247"
};

const copy = {
  en: {
    nav: ["About", "Skills", "Projects", "Writing", "Contact"],
    available: "Open to remote opportunities",
    hello: "HELLO, I'M MOHAMMED",
    role: "Frontend Developer crafting thoughtful digital experiences.",
    intro: "I build responsive, accessible and user-friendly web interfaces with React.js, JavaScript and TypeScript. I enjoy turning ideas into clean, useful products.",
    work: "Explore my work", contact: "Let's talk",
    scroll: "SCROLL TO EXPLORE",
    eyebrow: "A LITTLE ABOUT ME",
    aboutTitle: "Building for the web, with curiosity and purpose.",
    aboutText: "I'm a Software Engineering graduate focused on frontend development. I care about clean code, thoughtful details and interfaces that feel simple to use. I'm continuously learning and looking for opportunities to grow with a collaborative team.",
    location: "Omdurman, Sudan",
    education: "Software Engineering",
    educationText: "Bachelor's degree",
    focus: "Current focus",
    focusText: "React.js · TypeScript · UI engineering",
    skillsEyebrow: "WHAT I WORK WITH",
    skillsTitle: "Tools for turning ideas into interfaces.",
    skillsText: "My toolkit is centered on modern frontend development, responsive layouts and reusable components.",
    projectsEyebrow: "SELECTED WORK",
    projectsTitle: "A few things I've been building.",
    projectsText: "A selection of practice and personal projects. More details and live links can be added as each project is published.",
    project1: "TeleSham Offers Store",
    project1d: "An Arabic RTL storefront concept featuring promotional product cards, responsive navigation, partner highlights and contact sections.",
    project2: "Al-Tariqa Al-Sammaniya Website",
    project2d: "A content-focused Arabic website concept for news, religious articles, lessons and community announcements.",
    project3: "React Practice Project",
    project3d: "A space for experimenting with reusable React components, API integration and responsive UI patterns.",
    viewGithub: "View GitHub profile",
    writingEyebrow: "NOTES & IDEAS",
    writingTitle: "Learning in public.",
    writingText: "I’m building a habit of sharing what I learn about frontend development, practical problem-solving and the journey of becoming a better engineer.",
    article1: "Making responsive layouts feel effortless",
    article1d: "A practical look at building flexible layouts with CSS Grid, Flexbox and a mobile-first mindset.",
    article2: "What reusable components really give you",
    article2d: "How thoughtful component boundaries can make a React project easier to maintain and grow.",
    article3: "My frontend learning roadmap",
    article3d: "The concepts and habits I'm focusing on as I grow from fundamentals into production-ready frontend work.",
    soon: "Draft topic",
    contactEyebrow: "HAVE A PROJECT IN MIND?",
    contactTitle: "Let's build something meaningful.",
    contactText: "Have an opportunity, an idea or just want to connect? My inbox is open.",
    emailMe: "Email me",
    footer: "Designed & built with care.",
    rights: "All rights reserved.",
    menu: "Open menu", close: "Close menu"
  },
  ar: {
    nav: ["نبذة عني", "المهارات", "المشاريع", "المقالات", "تواصل"],
    available: "متاح للفرص عن بُعد",
    hello: "مرحباً، أنا محمد",
    role: "مطور واجهات أمامية أصنع تجارب رقمية مدروسة.",
    intro: "أطوّر واجهات ويب متجاوبة وسهلة الاستخدام باستخدام React.js وJavaScript وTypeScript، وأستمتع بتحويل الأفكار إلى منتجات عملية ومنظمة.",
    work: "استكشف أعمالي", contact: "تواصل معي",
    scroll: "اكتشف المزيد",
    eyebrow: "نبذة مختصرة",
    aboutTitle: "أبني للويب بشغف وفضول وهدف واضح.",
    aboutText: "خريج هندسة برمجيات، أركز على تطوير الواجهات الأمامية. أهتم بالكود المنظم والتفاصيل المدروسة وتصميم واجهات بسيطة وسهلة الاستخدام. أواصل التعلم وأبحث عن فرص للنمو والعمل ضمن فريق متعاون.",
    location: "أم درمان، السودان",
    education: "هندسة البرمجيات",
    educationText: "درجة البكالوريوس",
    focus: "مجال التركيز",
    focusText: "React.js · TypeScript · هندسة الواجهات",
    skillsEyebrow: "أدواتي التقنية",
    skillsTitle: "تقنيات أحوّل بها الأفكار إلى واجهات.",
    skillsText: "تركّز أدواتي على تطوير الواجهات الحديثة، والتصاميم المتجاوبة، والمكونات القابلة لإعادة الاستخدام.",
    projectsEyebrow: "أعمال مختارة",
    projectsTitle: "بعض المشاريع التي أعمل عليها.",
    projectsText: "مجموعة من المشاريع الشخصية والتطبيقية. يمكن إضافة التفاصيل وروابط العرض المباشر عند نشر كل مشروع.",
    project1: "متجر عروض TeleSham",
    project1d: "تصور لمتجر عربي باتجاه RTL، يضم بطاقات عروض المنتجات، وتصفحاً متجاوباً، وقسماً للشركاء والتواصل.",
    project2: "موقع الطريقة السمانية",
    project2d: "تصور لموقع عربي يهتم بالأخبار والمقالات الدينية والدروس والإعلانات والمناسبات.",
    project3: "مشروع React تطبيقي",
    project3d: "مساحة لتجربة المكونات القابلة لإعادة الاستخدام وربط واجهات API وبناء واجهات متجاوبة.",
    viewGithub: "زيارة حساب GitHub",
    writingEyebrow: "ملاحظات وأفكار",
    writingTitle: "أتعلم وأشارك المعرفة.",
    writingText: "أعمل على مشاركة ما أتعلمه في تطوير الواجهات الأمامية، وحل المشكلات العملية، ورحلتي نحو أن أصبح مهندس برمجيات أفضل.",
    article1: "كيف نبني تصاميم متجاوبة بسلاسة؟",
    article1d: "نظرة عملية على بناء تخطيطات مرنة باستخدام CSS Grid وFlexbox ومنهجية البدء بالهاتف.",
    article2: "ما فائدة المكونات القابلة لإعادة الاستخدام؟",
    article2d: "كيف تساعدنا حدود المكونات المدروسة في تنظيم مشاريع React وتسهيل تطويرها.",
    article3: "خارطة تعلمي لتطوير الواجهات",
    article3d: "المفاهيم والعادات التي أركز عليها للانتقال من الأساسيات إلى تطوير واجهات جاهزة للعمل.",
    soon: "موضوع قيد الإعداد",
    contactEyebrow: "هل لديك فكرة أو مشروع؟",
    contactTitle: "لنبنِ شيئاً ذا قيمة معاً.",
    contactText: "لديك فرصة عمل أو فكرة أو ترغب في التواصل؟ يسعدني أن تصلك بي.",
    emailMe: "راسلني",
    footer: "صُمم وطُوّر بعناية.",
    rights: "جميع الحقوق محفوظة.",
    menu: "فتح القائمة", close: "إغلاق القائمة"
  }
};

const skills = [
  { icon: Code2, title: "Frontend", items: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React.js", "Next.js (Basic)"] },
  { icon: Layers3, title: "UI & Styling", items: ["Tailwind CSS", "Responsive Design", "Flexbox", "CSS Grid", "Reusable Components"] },
  { icon: Smartphone, title: "Tools & Workflow", items: ["Git & GitHub", "VS Code", "npm", "REST APIs", "Problem Solving"] }
];

function App() {
  const [lang, setLang] = useState("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const t = copy[lang];
  const rtl = lang === "ar";
  const navIds = ["about", "skills", "projects", "writing", "contact"];
  const projects = [
    { n: "01", title: t.project1, desc: t.project1d, tag: "HTML · CSS · JavaScript", visual: "store" },
    { n: "02", title: t.project2, desc: t.project2d, tag: "React · Arabic RTL · UI", visual: "arabic" },
    { n: "03", title: t.project3, desc: t.project3d, tag: "React · REST API · Tailwind", visual: "code" }
  ];
  const articles = [
    { n: "01", title: t.article1, desc: t.article1d, category: "CSS / UI" },
    { n: "02", title: t.article2, desc: t.article2d, category: "REACT.JS" },
    { n: "03", title: t.article3, desc: t.article3d, category: "CAREER" }
  ];

  return (
    <div className={rtl ? "app rtl" : "app"} dir={rtl ? "rtl" : "ltr"}>
      <header className="header">
        <a className="brand" href="#home" aria-label="Mohammed Malik home"><span className="brand-mark">M<span>.</span></span><span>MOHAMMED<span className="brand-muted"> MALIK</span></span></a>
        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          {t.nav.map((label, i) => <a key={label} href={`#${navIds[i]}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
        </nav>
        <div className="header-actions">
          <button className="lang-btn" onClick={() => setLang(rtl ? "en" : "ar")}>{rtl ? "EN" : "عربي"} <Globe2 size={15}/></button>
          <a className="header-cta" href="#contact">{t.contact} <ArrowUpRight size={15}/></a>
          <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? t.close : t.menu}>{menuOpen ? <X/> : <Menu/>}</button>
        </div>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="availability"><span className="pulse"></span>{t.available}</div>
              <p className="eyebrow">{t.hello}</p>
              <h1>{t.role.split(" ").slice(0, rtl ? 3 : 4).join(" ")} <em>{t.role.split(" ").slice(rtl ? 3 : 4).join(" ")}</em></h1>
              <p className="hero-intro">{t.intro}</p>
              <div className="hero-buttons">
                <a className="btn-primary" href="#projects">{t.work}<ArrowUpRight size={17}/></a>
                <a className="btn-ghost" href="#contact">{t.contact}<ArrowUpRight size={17}/></a>
              </div>
              <div className="social-row">
                <a href={profile.github} target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn</a>
                <a href={`mailto:${profile.email}`}><Mail size={17}/> Email</a>
              </div>
            </div>
            <div className="hero-art" aria-label="Abstract developer illustration">
              <div className="art-orbit orbit-one"></div><div className="art-orbit orbit-two"></div>
              <div className="art-glow"></div>
              <div className="code-window">
                <div className="window-top"><div><i></i><i></i><i></i></div><span>developer.js</span><span>•••</span></div>
                <div className="code-lines">
                  <p><b>01</b><span><i>const</i> developer = {"{"}</span></p>
                  <p><b>02</b><span>&nbsp;&nbsp;name: <strong>'Mohammed'</strong>,</span></p>
                  <p><b>03</b><span>&nbsp;&nbsp;role: <strong>'Frontend Developer'</strong>,</span></p>
                  <p><b>04</b><span>&nbsp;&nbsp;stack: [<strong>'React'</strong>, <strong>'TS'</strong>],</span></p>
                  <p><b>05</b><span>&nbsp;&nbsp;curiosity: <i>true</i></span></p>
                  <p><b>06</b><span>{"}"}</span></p>
                  <p><b>07</b><span className="cursor-line"> </span></p>
                </div>
                <div className="window-footer"><span><span className="tiny-dot"></span> Ready to build</span><span>UTF-8&nbsp; &nbsp; JavaScript</span></div>
              </div>
              <div className="floating-chip chip-react"><span>⚛</span> React.js</div>
              <div className="floating-chip chip-ts"><span>TS</span> TypeScript</div>
              <div className="art-caption">DESIGN WITH INTENTION <span>✳</span> BUILD WITH CARE</div>
            </div>
          </div>
          <a href="#about" className="scroll-cue"><span>{t.scroll}</span><ArrowDown size={15}/></a>
          <div className="hero-index">01 / 05</div>
        </section>

        <section className="about section-pad" id="about">
          <div className="section-wrap">
            <div className="section-label"><span>01</span> {t.eyebrow}</div>
            <div className="about-grid">
              <h2>{t.aboutTitle}</h2>
              <div className="about-content"><p>{t.aboutText}</p>
                <div className="facts">
                  <div className="fact"><MapPin size={18}/><div><small>{rtl ? "الموقع" : "LOCATION"}</small><strong>{t.location}</strong></div></div>
                  <div className="fact"><GraduationCap size={19}/><div><small>{rtl ? "التعليم" : "EDUCATION"}</small><strong>{t.education}</strong><span>{t.educationText}</span></div></div>
                  <div className="fact"><BriefcaseBusiness size={18}/><div><small>{rtl ? "التركيز الحالي" : "CURRENT FOCUS"}</small><strong>{t.focus}</strong><span>{t.focusText}</span></div></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="skills section-pad" id="skills">
          <div className="section-wrap">
            <div className="section-label"><span>02</span> {t.skillsEyebrow}</div>
            <div className="section-heading"><h2>{t.skillsTitle}</h2><p>{t.skillsText}</p></div>
            <div className="skill-grid">
              {skills.map((s, i) => <article className="skill-card" key={s.title}>
                <div className="skill-top"><span className="skill-icon"><s.icon size={21}/></span><span className="card-number">0{i+1}</span></div>
                <h3>{s.title}</h3><div className="tag-list">{s.items.map(item => <span key={item}>{item}</span>)}</div>
              </article>)}
            </div>
          </div>
        </section>

        <section className="projects section-pad" id="projects">
          <div className="section-wrap">
            <div className="section-label"><span>03</span> {t.projectsEyebrow}</div>
            <div className="section-heading"><h2>{t.projectsTitle}</h2><p>{t.projectsText}</p></div>
            <div className="project-grid">
              {projects.map((p) => <article className="project-card" key={p.n}>
                <div className={`project-visual ${p.visual}`}>
                  <span className="project-count">{p.n} / PROJECT</span>
                  {p.visual === "store" && <div className="mock-store"><div className="mock-nav">TELESHAM <span>☰</span></div><div className="mock-banner"><small>LIMITED OFFERS</small><b>GOOD DEALS.<br/>GREAT DAYS.</b><span>DISCOVER MORE ↗</span></div><div className="mock-products"><i></i><i></i><i></i></div></div>}
                  {p.visual === "arabic" && <div className="mock-arabic"><span>✳</span><b>الطريقة السمانية</b><small>أخبار · مقالات · دروس</small><i></i></div>}
                  {p.visual === "code" && <div className="mock-code"><span>const</span> components = [<br/><b>&nbsp; Header,</b><br/><b>&nbsp; Projects,</b><br/><b>&nbsp; Contact</b><br/>];<br/><small>Build. Reuse. Improve.</small></div>}
                </div>
                <div className="project-info"><div><h3>{p.title}</h3><p>{p.desc}</p><div className="project-tags">{p.tag}</div></div><a href={profile.github} target="_blank" rel="noreferrer" aria-label="View GitHub profile"><ArrowUpRight size={20}/></a></div>
              </article>)}
            </div>
            <a className="text-link" href={profile.github} target="_blank" rel="noreferrer">{t.viewGithub}<ArrowUpRight size={16}/></a>
          </div>
        </section>

        <section className="writing section-pad" id="writing">
          <div className="section-wrap">
            <div className="section-label"><span>04</span> {t.writingEyebrow}</div>
            <div className="section-heading"><h2>{t.writingTitle}</h2><p>{t.writingText}</p></div>
            <div className="article-list">
              {articles.map(a => <article className="article-row" key={a.n}>
                <span className="article-num">{a.n}</span><div className="article-main"><span className="article-category"><BookOpen size={13}/>{a.category}</span><h3>{a.title}</h3><p>{a.desc}</p></div><span className="draft-label">{t.soon}</span>
              </article>)}
            </div>
          </div>
        </section>

        <section className="contact section-pad" id="contact">
          <div className="section-wrap contact-inner">
            <div className="section-label"><span>05</span> {t.contactEyebrow}</div>
            <div className="contact-grid"><h2>{t.contactTitle}</h2><div><p>{t.contactText}</p><a className="btn-primary" href={`mailto:${profile.email}`}>{t.emailMe}<Send size={16}/></a><div className="contact-email">{profile.email}</div></div></div>
            <div className="contact-decoration">LET'S MAKE IT<br/><em>HAPPEN.</em><Sparkles size={34}/></div>
          </div>
        </section>
      </main>

      <footer className="footer"><div className="section-wrap footer-inner"><a className="brand" href="#home"><span className="brand-mark">M<span>.</span></span><span>MOHAMMED<span className="brand-muted"> MALIK</span></span></a><p>© {new Date().getFullYear()} {profile.name}. {t.rights}</p><div className="footer-social"><a href={profile.github} target="_blank" rel="noreferrer"><Github size={17}/></a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/></a><a href={`mailto:${profile.email}`}><Mail size={17}/></a></div><span className="footer-note">{t.footer}</span></div></footer>
    </div>
  );
}

export default App;