export type Lang = "en" | "pl";

export const translations = {
  en: {
    navbar: {
      links: [
        { label: "About", href: "#about" },
        { label: "Projects", href: "#projects" },
        { label: "Accomplishments", href: "#accomplishments" },
        { label: "My Journey", href: "#journey" },
        { label: "Demo", href: "#demo" },
        { label: "Contact", href: "#contact" },
      ],
    },
    hero: {
      greeting: "Hello, I'm",
      name: "Lukasz",
      roles: [
        "ML Engineer",
        "CS Student @ TU Delft",
        "Chess Player (2002 ELO)",
        "AI Researcher",
      ],
      bio: "2nd-year Computer Science student at TU Delft with strong engineering foundations, specialising in artificial intelligence and machine learning. Passionate about building software that has real-world impact.",
      viewProjects: "View Projects",
      getInTouch: "Get in Touch",
      stats: [
        { label: "GPA", value: "8.5 / 10", sub: "TU Delft" },
        { label: "ELO", value: "2002", sub: "FIDE rated" },
        { label: "TOEFL", value: "108", sub: "Bilingual EN" },
        { label: "Year", value: "2nd", sub: "Class of 2027" },
      ],
    },
    projects: {
      title: "Projects",
      subtitle: "Things I've built, researched, and shipped.",
      items: [
        {
          title: "Children's Speech Recognition",
          year: "2026",
          description:
            "DrivenData competition — building the best ML model for children's speech recognition to enable early dyslexia detection and improve reading skills assessments.",
          tags: ["Python", "PyTorch", "ASR", "ML"],
          href: "https://www.drivendata.org",
          accent: "indigo",
        },
        {
          title: "Policy Pipeline Simulator",
          year: "2025–2026",
          description:
            "Agentic AI for the Dutch Ministry of the Interior (BZK). Simulates legislative processes using AI agents; built to the requirements of government officials.",
          tags: ["Agentic AI", "Python", "Web App", "LLM"],
          href: "#",
          accent: "violet",
        },
        {
          title: "Cross-Platform Note-Taking App",
          year: "2025",
          description:
            "Software engineering project — a cross-platform desktop note-taking app built in a team of five.",
          tags: ["Java", "Teamwork", "Desktop"],
          href: "#",
          accent: "sky",
        },
        {
          title: "Online Shop — branco.pl",
          year: "2024",
          description:
            "E-commerce store for a Polish clothing brand. Integrated AI models for personalised product recommendations and increased online sales.",
          tags: ["Next.js", "AI", "E-commerce"],
          href: "https://branco.pl",
          accent: "emerald",
        },
        {
          title: "CanSat",
          year: "2023",
          description:
            "High school competition: building and programming a can-sized satellite — full embedded software stack for on-board data collection.",
          tags: ["C++", "Embedded", "Hardware"],
          href: "#",
          accent: "amber",
        },
      ],
    },
    accomplishments: {
      title: "Accomplishments",
      subtitle: "Awards, olympiads, and recognition.",
      techStack: "Tech Stack",
      experience: "Experience",
      jobTitle: "Implementations Engineer",
      company: "Epoch · TU Delft",
      jobPeriod: "Oct 2025 – present",
      jobDesc:
        "Building, deploying, and maintaining ML infrastructure at TU Delft's student AI research centre.",
      skillCategories: ["Languages", "ML / AI", "Algorithms", "Other"],
      awards: [
        {
          year: "2024",
          title: "Top 0.1% — Poland Matura Examination",
          description:
            "Recognised by the National Education Commission for scoring in the top 0.1% of the national Matura exam.",
          diploma: "/Dyplomy/CKE.webp",
        },
        {
          year: "2024",
          title: "Finalist — Polish Technical Olympiad (OWT)",
          description:
            "Advanced to the final of the nationwide Polish Technical Olympiad — one of the most prestigious STEM competitions in Poland.",
          diploma: "/Dyplomy/OWT.webp",
        },
        {
          year: "2024",
          title: "Distinction — Polish Informatics Olympiad",
          description:
            "National distinction in the Informatics Olympiad for outstanding results in competitive programming.",
          diploma: "/Dyplomy/CamScanner 08-26-2024 21.16.webp",
        },
        {
          year: "2024",
          title: "Exempted from Matura Theory Exam",
          description:
            "Exempted from the theory portion of the Matura examination based on outstanding academic performance.",
          link: "https://zspkleszczow.pl/2023/03/26/charytatywny-turniej-szachowy-w-ramach-projektu-zwolnieni-z-teorii/",
        },
        {
          year: "2023",
          title: "ZDOLNI Scholar",
          description:
            "Selected for the ZDOLNI programme — a nationwide community for academically engaged secondary school students.",
          diploma: "/Dyplomy/Zdolni.webp",
        },
        {
          year: "2023",
          title: "CanSat Competition — Distinction",
          description:
            "National distinction in the CanSat competition — a high school satellite design and programming challenge.",
          diploma: "/Dyplomy/cansat_2023_wyróżnienie_17.webp",
        },
        {
          year: "2022",
          title: "Queen Hedvig Scholarship Laureate",
          description:
            "Polish Queen Jadwiga scholarship for top students, combined with an academic trip to Stanford University.",
          diploma: "/Dyplomy/QHS.webp",
        },
      ],
    },
    journey: {
      title: "My Journey",
      subtitle:
        "From a small town in Poland to the other side of the world — three chapters, one continuous path.",
      poland: {
        tag: "🇵🇱 Poland · 2004 – 2024",
        tagColor: "text-red-400",
        heading: "Origins",
        p1: "Born and raised in Bełchatów — a small industrial city in central Poland. The kind of place that teaches you to work hard and think bigger.",
        p2pre: "Attended ",
        p2school: "Technikum Nowoczesnych Technologii",
        p2post:
          " in nearby Kleszczów, where I first got serious about engineering and programming. It was the spark that set everything in motion.",
      },
      netherlands: {
        tag: "🇳🇱 Netherlands · 2024 – present",
        tagColor: "text-green-400",
        heading: "Current Chapter",
        p1pre: "2nd year of a ",
        p1degree: "BSc Computer Science & Engineering",
        p1mid: " at ",
        p1uni: "TU Delft",
        p1post: " — one of Europe's leading technical universities.",
        p2: "Specialising in AI and machine learning. Working at Epoch, TU Delft's student AI research organisation. Building things that matter.",
      },
      australia: {
        tag: "🇦🇺 Australia · Aug 2026",
        tagColor: "text-amber-400",
        heading: "Next Destination",
        p1pre: "Heading to ",
        p1uni: "UNSW Sydney",
        p1post:
          " for an exchange semester in August 2026 — the other side of the world, the next step forward.",
        p2: "Every chapter so far has been a deliberate leap. This one is no different.",
      },
    },
    video: {
      title: "Demo",
      subtitle: "Seeing is believing — a walkthrough of the work in action.",
      comingSoon: "🎬 Video demo — coming soon",
    },
    contact: {
      title: "Get in Touch",
      subtitle:
        "Open to research collaborations, internships, and interesting projects. Reach out — I usually reply within a day.",
      location: "Delft, Netherlands",
    },
    journeyPage: {
      back: "← Back",
      title: "My Journey",
      badge: "3 countries · 1 path",
      thePath: "The path so far",
      intro:
        "From a small town in Poland to the other side of the world — three chapters, one continuous path forward.",
    },
  },

  pl: {
    navbar: {
      links: [
        { label: "O mnie", href: "#about" },
        { label: "Projekty", href: "#projects" },
        { label: "Osiągnięcia", href: "#accomplishments" },
        { label: "Moja podróż", href: "#journey" },
        { label: "Demo", href: "#demo" },
        { label: "Kontakt", href: "#contact" },
      ],
    },
    hero: {
      greeting: "Cześć, jestem",
      name: "Łukasz",
      roles: [
        "Software Engineer",
        "Analityk danych",
        "Student CS @ TU Delft",
        "Szachista (2002 ELO)",
        "ML engineer @ Epoch",
      ],
      bio: "Student 2. roku informatyki na TU Delft z dużym doświadczeniem w programowaniu, specjalizujący się w sztucznej inteligencji i uczeniu maszynowym. Pasjonat budowania oprogramowania, które ma realny wpływ na świat.",
      viewProjects: "Zobacz projekty",
      getInTouch: "Napisz do mnie",
      stats: [
        /*
        { label: "GPA", value: "8,5 / 10", sub: "TU Delft" },
        { label: "ELO", value: "2002", sub: "FIDE" },
        { label: "TOEFL", value: "108", sub: "Dwujęzyczny" },
        { label: "Rok", value: "2.", sub: "Rocznik 2027" },
        */
        ],
    },
    projects: {
      title: "Projekty",
      subtitle: "To, co zbudowałem, zbadałem i wdrożyłem.",
      items: [
        {
          title: "On top of Pasketti",
          year: "2026",
          description:
            "Konkurs DrivenData — budowanie najlepszego modelu ML do rozpoznawania mowy dzieci w celu wczesnego wykrywania dysleksji i poprawy testów umiejętności czytania. Poprawiliśmy światowy benchmark o 8 punktów procentowych!",
          tags: ["Python", "PyTorch", "ASR", "ML"],
          href: "https://www.drivendata.org/competitions/309/childrens-phonetic-asr/leaderboard/",
          accent: "indigo",
        },
        {
          title: "Policy Pipeline Simulator",
          year: "2025–2026",
          description:
            "Agentyczna AI dla holenderskiego Ministerstwa Spraw Wewnętrznych (BZK). Symuluje procesy legislacyjne za pomocą agentów AI; zbudowany w celu zbadania możliwości AI w administracji rządowej.",
          tags: ["Agentic AI", "Python", "Web App", "LLM"],
          href: "https://virtuelekamer.github.io/",
          accent: "violet",
        },

        {
          title: "Online Shop — branco.pl",
          year: "2024",
          description:
            "E-commerce dla marki odzieżowej moich rodziców. Stworzyłem system generowania AI modelek do pokazania produktów w różnych rozmiarach i stylach. Uciąłem koszty, zwiększyłem zyski.",
          tags: ["Next.js", "AI", "E-commerce"],
          href: "https://branco.pl",
          accent: "emerald",
        },
      ],
    },
    accomplishments: {
      title: "Osiągnięcia w szkole średniej",
      subtitle: "Nagrody, olimpiady i wyróżnienia.",
      techStack: "Stack technologiczny",
      experience: "Doświadczenie",
      jobTitle: "Inżynier ds. wdrożeń",
      company: "Epoch · TU Delft",
      jobPeriod: "Paź 2025 – obecnie",
      jobDesc:
        "Budowanie, wdrażanie i utrzymywanie infrastruktury ML w studenckim centrum badań AI na TU Delft.",
      skillCategories: ["Języki", "ML / AI", "Algorytmy", "Inne"],
      awards: [
        {
          year: "2024",
          title: "Top 0,1% — Matura ogólnopolska",
          description:
            "Wyróżnienie Krajowej Komisji Edukacji za bycie wśród 230 najlepszych maturzystów.",
          diploma: "/Dyplomy/CKE.webp",
        },
        {
          year: "2024",
          title: "Finalista — Olimpiada Wiedzy Technicznej (OWT)",
          description:
            "Awans do finału ogólnopolskiej Olimpiady Wiedzy Technicznej — jednego z najbardziej prestiżowych konkursów STEM w Polsce.",
          diploma: "/Dyplomy/OWT.webp",
        },
        {
          year: "2024",
          title: "Wyróżnienie — Olimpiada Informatyczna",
          description:
            "Wyróżnienie ogólnopolskie w Olimpiadzie Informatycznej za wybitne wyniki w programowaniu konkursowym.",
          diploma: "/Dyplomy/InformatycznaOlimpiada.webp",
        },
        {
          year: "2024",
          title: "Zwolnieni z teorii — Charytatywny turniej",
          description:
            "Zorganizowaliśmy charytatywny turniej szachowy, zbierając fundusze na poszkodowanego 9-letniego młodszego kolegę-szachistę.",
          link: "https://zspkleszczow.pl/2023/03/26/charytatywny-turniej-szachowy-w-ramach-projektu-zwolnieni-z-teorii/",
        },
        {
          year: "2023",
          title: "Stypendysta ZDOLNI",
          description:
            "Wybrany do programu ZDOLNI — ogólnopolskiej społeczności dla naukowo zaangażowanych uczniów szkół średnich.",
          diploma: "/Dyplomy/Zdolni.webp",
        },
        {
          year: "2023",
          title: "Konkurs CanSat — Wyróżnienie",
          description:
            "Wyróżnienie w ogólnopolskim konkursie CanSat — konkurencji polegającej na projektowaniu i programowaniu satelity wielkości puszki.",
          diploma: "/Dyplomy/cansat_2023_wyróżnienie_17.webp",
        },
        {
          year: "2022",
          title: "Laureat Stypendium im. Królowej Jadwigi",
          description:
            "Polskie stypendium im. Królowej Jadwigi dla najlepszych uczniów, połączone z wyjazdem naukowym do Stanford University.",
          diploma: "/Dyplomy/QHS.webp",
        },
      ],
    },
    journey: {
      title: "Moja podróż",
      subtitle:
        "Z małego miasteczka w Polsce na drugi koniec świata — trzy rozdziały, jedna ciągła droga.",
      poland: {
        tag: "🇵🇱 Polska · 2004 – 2024",
        tagColor: "text-red-400",
        heading: "Początki",
        p1: "Urodzony i wychowany w Bełchatowie — małym przemysłowym mieście w centralnej Polsce. Miejscu, które uczy ciężkiej pracy i myślenia z rozmachem.",
        p2pre: "Uczęszczałem do ",
        p2school: "Technikum Nowoczesnych Technologii",
        p2post:
          " w pobliskim Kleszczowie, gdzie po raz pierwszy poważnie zainteresowałem się inżynierią i programowaniem. To była iskra, która zapoczątkowała wszystko.",
      },
      netherlands: {
        tag: "🇳🇱 Holandia · 2024 – dziś",
        tagColor: "text-green-400",
        heading: "Obecny rozdział",
        p1pre: "2. rok studiów ",
        p1degree: "BSc Computer Science & Engineering",
        p1mid: " na ",
        p1uni: "TU Delft",
        p1post: " — jednej z czołowych uczelni technicznych w Europie.",
        p2: "Specjalizuję się w AI i uczeniu maszynowym. Pracuję w Epoch — studenckim centrum badań AI na TU Delft. Buduję rzeczy, które mają znaczenie.",
      },
      australia: {
        tag: "🇦🇺 Australia · Sie 2026",
        tagColor: "text-amber-400",
        heading: "Następny cel",
        p1pre: "Wyjeżdżam na ",
        p1uni: "UNSW Sydney",
        p1post:
          " na semestr wymiany w sierpniu 2026 — na drugi koniec świata, kolejny krok do przodu.",
        p2: "Każdy dotychczasowy rozdział był świadomym skokiem. Ten nie jest wyjątkiem.",
      },
    },
    video: {
      title: "Demo",
      subtitle: "Lepiej raz zobaczyć — prezentacja projektu w akcji.",
      comingSoon: "🎬 Demo wideo — wkrótce",
    },
    contact: {
      title: "Napisz do mnie",
      subtitle:
        "Otwarty na współpracę badawczą, staże i ciekawe projekty. Odezwij się — zazwyczaj odpowiadam w ciągu dnia.",
      location: "Delft, Holandia",
    },
    journeyPage: {
      back: "← Wróć",
      title: "Moja podróż",
      badge: "3 kraje · 1 droga",
      thePath: "Droga do tej pory",
      intro:
        "Z małego miasteczka w Polsce na drugi koniec świata — trzy rozdziały, jedna ciągła droga naprzód.",
    },
  },
};

export type T = typeof translations.en;
