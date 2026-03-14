export const siteContent = {
  hero: {
    name: "Žiga Žlogar",
    eyebrow: "IT Project Manager · Business Analyst · Solution Architect",
    headline: "Helping organizations turn business needs into clear digital solutions",
    subheadline:
      "I work on IT projects, business analysis, and solution design, helping organizations introduce digital systems in a structured and practical way.",
    stats: [
      "Structured project work",
      "Business and technology alignment",
      "Responsible digitalization",
    ],
    profileImage:
      "https://media.licdn.com/dms/image/v2/D4D03AQF5lNdX3h7Vew/profile-displayphoto-shrink_400_400/B4DZYlC3d9HAAo-/0/1744378231431?e=1775088000&v=beta&t=Gh6jGCnJtfIo1YXJTqD6yS2R_mpG9Ub9R-Z9U69C6SM",
  },
  intro: {
    title: "Hi, I’m Žiga",
    paragraphs: [
      "I work on IT and digitalization projects that help organizations introduce practical digital solutions.",
      "My work usually sits somewhere between business needs, processes, and technology. I enjoy turning complex situations into structured solutions that people can actually use.",
      "Over time I’ve worked in project coordination, business analysis, and solution design. What I value most is clarity: making systems understandable, processes simpler, and technology useful for the people who rely on it.",
    ],
  },
  statements: {
    first: "Digital systems should simplify work, not complicate it.",
    second: "Clear thinking matters just as much as the technology itself.",
    third: "I’m interested in systems that stay useful over time.",
  },
  about: {
    title: "Hi, I’m Žiga",
    paragraphs: [
      "I work at the intersection of business processes and technology. In my work I focus on helping organizations introduce digital solutions that are clear, practical, and useful in everyday work.",
      "Across IT projects, business analysis, and solution design, I try to simplify complexity and turn ideas into working systems.",
      "I’m particularly interested in responsible digitalization, process improvement, and building systems that people can actually use and trust.",
    ],
  },
  whatIDo: [
    {
      title: "IT Project Coordination",
      description:
        "I coordinate digital and IT projects with attention to scope, communication, timelines, and practical delivery.",
    },
    {
      title: "Business Analysis",
      description:
        "I work with business needs, requirements, and everyday processes to help shape solutions that make sense in practice.",
    },
    {
      title: "Solution Design",
      description:
        "I support solution design with a focus on clarity, maintainability, and a good fit between business expectations and technical implementation.",
    },
    {
      title: "Digitalization Support",
      description:
        "I work on digitalization efforts that improve processes through digital tools, document management, and systems that reduce friction instead of adding it.",
    },
    {
      title: "Data and Reporting",
      description:
        "I use reporting, analytics, and structured information to support clearer visibility and more informed decisions.",
    },
  ],
  experience: [
    {
      role: "IT Project Manager",
      company: "Mikrografija d.o.o.",
      period: "Jan 2024 – Present",
      location: "Novo Mesto, Slovenia · Hybrid",
      description:
        "I work on IT implementation projects across coordination, business analysis, solution design, and day-to-day communication with clients, teams, and vendors.",
    },
    {
      role: "Business Analyst",
      company: "GEN-I d.o.o.",
      period: "Dec 2022 – Dec 2023",
      location: "Ljubljana, Slovenia · Hybrid",
      description:
        "I contributed to analytics and digitalization work through reporting, process analysis, requirements work, and support on document management improvement projects.",
    },
    {
      role: "Sales and Logistics Support Associate",
      company: "GEN-I SONCE",
      period: "2021 – 2022",
      location: "Slovenia",
      description:
        "I supported day-to-day operations for solar installation projects through customer communication, CRM administration, and sales coordination.",
    },
    {
      role: "Train Conductor",
      company: "Slovenske železnice",
      period: "2016 – 2021",
      location: "Slovenia",
      description:
        "I managed passenger operations and service quality, building communication skills, responsibility, and calm decision-making in real-time situations.",
    },
  ],
  education: [
    {
      institution: "Faculty of Information Studies in Novo mesto",
      credential: "Master’s Degree (ongoing)",
      field: "Computer Science and Web Technologies",
      period: "2025 – Present",
      details: [],
    },
    {
      institution: "Faculty of Information Studies in Novo mesto",
      credential: "Bachelor’s Degree",
      field: "Computer Science / Social Informatics",
      period: "2025",
      details: [
        "Thesis: Overview and Analysis of Digitalization in the European Union: The Case of Slovenia",
        "Grade: 9",
        "Vice-President of the Student Council",
        "Member of the Faculty Senate",
      ],
    },
    {
      institution: "Šolski center Novo mesto",
      credential: "Professional Higher Education",
      field: "Computer Science / Informatics",
      period: "2020",
      details: [
        "Grade: 10",
        "Thesis: Comparison of Game Engines Unity and Unreal Engine and Development of a Video Game",
      ],
    },
  ],
  values: {
    title: "A practical view of responsible digitalization",
    paragraphs: [
      "I believe digitalization should simplify work rather than make it more complicated.",
      "For me, responsible digitalization means building systems that people understand, trust, and actually use.",
      "Good technology should support people, improve processes, and create value over time.",
    ],
  },
  contact: {
    email: "zlogar.ziga@gmail.com",
    linkedin: "https://www.linkedin.com/in/zigazlogar-it/",
    cta: "This site is a simple introduction to the kind of work I do and how I approach digital projects.",
    closing:
      "If you’d like to connect, collaborate, or discuss digital projects, feel free to reach out.",
  },
} as const;

export type SiteContent = typeof siteContent;
