document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('js-ready');

  const yearNode = document.querySelector('[data-year]');
  if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
  }

  const translations = {
    es: {
      'nav.profile': 'Perfil',
      'nav.experience': 'Experiencia',
      'nav.skills': 'Habilidades',
      'nav.projects': 'Proyectos',
      'nav.contact': 'Contacto',
      'hero.location': 'Medellín, Colombia',
      'hero.title': 'Desarrollo de software, datos y automatización.',
      'hero.lead': 'Combino desarrollo web, análisis de datos y automatización para resolver problemas y mejorar procesos. Mi experiencia incluye soluciones con Python, SQL y Power BI, además de tecnologías de desarrollo full stack.',
      'hero.primaryCta': 'Contactar',
      'hero.secondaryCta': 'Ver experiencia',
      'hero.github': 'GitHub',
      'profile.eyebrow': 'Perfil',
      'profile.title': 'Tecnología para resolver problemas concretos.',
      'profile.text': 'Soy estudiante de último semestre de Ingeniería de Sistemas en la Universidad Católica Luis Amigó. Me interesa construir soluciones que conecten desarrollo web, bases de datos y automatización. Me caracterizan el compromiso, la capacidad de aprendizaje y el trabajo en equipo, con una orientación práctica a la resolución de problemas y la mejora de procesos.',
      'interest.web.title': 'Desarrollo web',
      'interest.web.text': 'Interfaces y soluciones full stack.',
      'interest.data.title': 'Datos y automatización',
      'interest.data.text': 'Análisis, reportes y optimización de procesos.',
      'interest.security.title': 'Ciberseguridad',
      'interest.security.text': 'Conocimientos e interés en seguridad y encriptación.',
      'experience.eyebrow': 'Experiencia',
      'experience.title': 'Trayectoria profesional.',
      'experience.item1.company': 'Colombia Móvil S.A. E.S.P. — Tigo',
      'experience.item1.role': 'Prácticas de Ingeniería de Sistemas',
      'experience.item1.location': 'Medellín, Colombia',
      'experience.item1.li1': 'Apoyo en el análisis y procesamiento de datos y la construcción de dashboards con Power BI para la toma de decisiones.',
      'experience.item1.li2': 'Desarrollo de soluciones y automatización de procesos con Python.',
      'experience.item1.li3': 'Consultas y gestión de bases de datos con SQL.',
      'experience.item1.li4': 'Generación de reportes e indicadores con Excel avanzado y participación en la optimización de procesos mediante análisis de información.',
      'experience.item2.company': 'Emtelco S.A.S. — Tigo',
      'experience.item2.role': 'Creador de Experiencias Senior',
      'experience.item2.location': 'Medellín, Colombia',
      'experience.item2.li1': 'Gestión y seguimiento de órdenes de trabajo en campo para instalación, soporte, corte y reconexión en diversas tecnologías.',
      'experience.item2.li2': 'Administración y optimización de asignaciones mediante herramientas digitales y aplicaciones móviles.',
      'skills.eyebrow': 'Habilidades',
      'skills.title': 'Competencias técnicas y de trabajo.',
      'skills.frontend': 'Frontend',
      'skills.backend': 'Backend',
      'skills.db': 'Bases de datos',
      'skills.data': 'Datos y automatización',
      'skills.security': 'Seguridad',
      'skills.security.item1': 'Conocimientos en ciberseguridad',
      'skills.security.item2': 'Encriptación',
      'skills.collab': 'Colaboración',
      'skills.collab.item1': 'Resolución de problemas',
      'skills.collab.item2': 'Trabajo en equipo',
      'skills.collab.item3': 'Capacidad de aprendizaje',
      'skills.collab.item4': 'Optimización de procesos',
      'skills.languages.label': 'Idiomas:',
      'skills.languages.value': 'español nativo e inglés básico.',
      'projects.eyebrow': 'Proyectos',
      'projects.title': 'Explora mi trabajo en GitHub.',
      'projects.text': 'Visita mi perfil para conocer mis repositorios y explorar el código de mis proyectos.',
      'projects.cta': 'Ir a GitHub',
      'education.eyebrow': 'Formación',
      'education.title': 'Formación académica y complementaria.',
      'education.degree': 'Ingeniería de Sistemas',
      'education.university': 'Universidad Católica Luis Amigó',
      'education.degreeStatus': 'Estado reportado: estudiante de último semestre.',
      'education.courseTitle': 'Cursos y certificaciones',
      'education.courseName': 'Habilidades en programación y desarrollo web',
      'education.courseMeta': 'MinTIC y Universidad Pontificia Bolivariana, 2022',
      'contact.eyebrow': 'Contacto',
      'contact.title': 'Conversemos sobre tu próximo proyecto o una oportunidad profesional.',
      'contact.text': 'Puedes escribirme por correo o conectar conmigo en LinkedIn.',
      'contact.emailLabel': 'Email',
      'contact.phoneLabel': 'Teléfono',
      'contact.linkedinLabel': 'LinkedIn',
      'contact.linkedinValue': 'Perfil profesional',
      'contact.githubLabel': 'GitHub',
      'contact.locationLabel': 'Ubicación',
      'contact.locationValue': 'Medellín, Antioquia, Colombia',
      'contact.submit': 'Enviar correo',
      'contact.copy': 'Copiar correo',
      'footer.back': 'Volver al inicio',
    },
    en: {
      'nav.profile': 'Profile',
      'nav.experience': 'Experience',
      'nav.skills': 'Skills',
      'nav.projects': 'Projects',
      'nav.contact': 'Contact',
      'hero.location': 'Medellín, Colombia',
      'hero.title': 'Software development, data, and automation.',
      'hero.lead': 'I combine web development, data analysis, and automation to solve problems and improve processes. My experience includes solutions with Python, SQL, and Power BI, as well as full-stack development technologies.',
      'hero.primaryCta': 'Contact',
      'hero.secondaryCta': 'See experience',
      'hero.github': 'GitHub',
      'profile.eyebrow': 'Profile',
      'profile.title': 'Technology to solve concrete problems.',
      'profile.text': 'I am a final-semester student in Systems Engineering at Universidad Católica Luis Amigó. I am interested in building solutions that connect web development, databases, and automation. I am characterized by commitment, the ability to learn, and teamwork, with a practical orientation toward problem solving and process improvement.',
      'interest.web.title': 'Web development',
      'interest.web.text': 'Interfaces and full-stack solutions.',
      'interest.data.title': 'Data and automation',
      'interest.data.text': 'Analysis, reporting, and process optimization.',
      'interest.security.title': 'Cybersecurity',
      'interest.security.text': 'Knowledge and interest in security and encryption.',
      'experience.eyebrow': 'Experience',
      'experience.title': 'Professional trajectory.',
      'experience.item1.company': 'Colombia Móvil S.A. E.S.P. — Tigo',
      'experience.item1.role': 'Systems Engineering internship',
      'experience.item1.location': 'Medellín, Colombia',
      'experience.item1.li1': 'Support in data analysis and processing, and in building Power BI dashboards for decision-making.',
      'experience.item1.li2': 'Development of solutions and process automation with Python.',
      'experience.item1.li3': 'Database queries and management with SQL.',
      'experience.item1.li4': 'Generation of reports and indicators with advanced Excel and participation in process optimization through information analysis.',
      'experience.item2.company': 'Emtelco S.A.S. — Tigo',
      'experience.item2.role': 'Senior Experience Creator',
      'experience.item2.location': 'Medellín, Colombia',
      'experience.item2.li1': 'Management and follow-up of field work orders for installation, support, disconnection, and reconnection across multiple technologies.',
      'experience.item2.li2': 'Administration and optimization of assignments using digital tools and mobile applications.',
      'skills.eyebrow': 'Skills',
      'skills.title': 'Technical and teamwork competencies.',
      'skills.frontend': 'Frontend',
      'skills.backend': 'Backend',
      'skills.db': 'Databases',
      'skills.data': 'Data and automation',
      'skills.security': 'Security',
      'skills.security.item1': 'Knowledge in cybersecurity',
      'skills.security.item2': 'Encryption',
      'skills.collab': 'Collaboration',
      'skills.collab.item1': 'Problem solving',
      'skills.collab.item2': 'Teamwork',
      'skills.collab.item3': 'Learning ability',
      'skills.collab.item4': 'Process optimization',
      'skills.languages.label': 'Languages:',
      'skills.languages.value': 'native Spanish and basic English.',
      'projects.eyebrow': 'Projects',
      'projects.title': 'Explore my work on GitHub.',
      'projects.text': 'Visit my profile to discover my repositories and explore the code behind my projects.',
      'projects.cta': 'Go to GitHub',
      'education.eyebrow': 'Education',
      'education.title': 'Academic and complementary training.',
      'education.degree': 'Systems Engineering',
      'education.university': 'Universidad Católica Luis Amigó',
      'education.degreeStatus': 'Reported status: final-semester student.',
      'education.courseTitle': 'Courses and certifications',
      'education.courseName': 'Programming and web development skills',
      'education.courseMeta': 'MinTIC and Universidad Pontificia Bolivariana, 2022',
      'contact.eyebrow': 'Contact',
      'contact.title': 'Let’s talk about your next project or a professional opportunity.',
      'contact.text': 'You can reach me by email or connect with me on LinkedIn.',
      'contact.emailLabel': 'Email',
      'contact.phoneLabel': 'Phone',
      'contact.linkedinLabel': 'LinkedIn',
      'contact.linkedinValue': 'Professional profile',
      'contact.githubLabel': 'GitHub',
      'contact.locationLabel': 'Location',
      'contact.locationValue': 'Medellín, Antioquia, Colombia',
      'contact.submit': 'Send email',
      'contact.copy': 'Copy email',
      'footer.back': 'Back to top',
    },
  };

  const header = document.querySelector('.site-header');
  const setHeaderState = () => {
    if (!header) return;
    header.classList.toggle('scrolled', window.scrollY > 12);
  };

  setHeaderState();
  window.addEventListener('scroll', setHeaderState, { passive: true });

  const navLinks = document.querySelectorAll('.site-nav a, .mobile-nav a');
  const sections = document.querySelectorAll('main section[id]');

  const updateMenuLabel = (lang, expanded) => {
    const menuButton = document.querySelector('.menu-toggle');
    if (!menuButton) return;
    const label = lang === 'es'
      ? (expanded ? 'Cerrar menú de navegación' : 'Abrir menú de navegación')
      : (expanded ? 'Close navigation menu' : 'Open navigation menu');
    menuButton.setAttribute('aria-label', label);
  };

  const applyTranslations = (lang) => {
    const dict = translations[lang];
    if (!dict) return;

    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const value = dict[element.dataset.i18n];
      if (value) {
        element.textContent = value;
      }
    });

    const nav = document.querySelector('.site-nav');
    if (nav) {
      nav.setAttribute('aria-label', lang === 'es' ? 'Navegación principal' : 'Main navigation');
    }

    const mobileNav = document.querySelector('.mobile-nav');
    if (mobileNav) {
      mobileNav.setAttribute('aria-label', lang === 'es' ? 'Navegación móvil' : 'Mobile navigation');
    }

    const menuButton = document.querySelector('.menu-toggle');
    if (menuButton) {
      updateMenuLabel(lang, menuButton.getAttribute('aria-expanded') === 'true');
    }

    const copyButton = document.querySelector('[data-copy-email]');
    const statusMessage = document.querySelector('[data-copy-status]');
    if (copyButton && statusMessage) {
      copyButton.textContent = lang === 'es' ? 'Copiar correo' : 'Copy email';
      const currentStatus = statusMessage.textContent.trim();
      if (currentStatus === 'Correo copiado al portapapeles.' || currentStatus === 'Email copied to clipboard.') {
        statusMessage.textContent = lang === 'es' ? 'Correo copiado al portapapeles.' : 'Email copied to clipboard.';
      }
    }

    document.querySelectorAll('.lang-btn').forEach((button) => {
      const active = button.dataset.lang === lang;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
  };

  if ('IntersectionObserver' in window && navLinks.length && sections.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const id = entry.target.id;
          navLinks.forEach((link) => {
            const matches = link.getAttribute('href') === `#${id}`;
            link.classList.toggle('active', matches);
          });
        });
      },
      {
        rootMargin: '-28% 0px -52% 0px',
        threshold: 0.1,
      }
    );

    sections.forEach((section) => observer.observe(section));
  }

  const menuButton = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');

  if (menuButton && mobileNav) {
    const closeMenu = () => {
      mobileNav.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
      updateMenuLabel(document.documentElement.lang || 'es', false);
    };

    const openMenu = () => {
      mobileNav.classList.add('is-open');
      menuButton.setAttribute('aria-expanded', 'true');
      updateMenuLabel(document.documentElement.lang || 'es', true);
    };

    menuButton.addEventListener('click', () => {
      const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    mobileNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
        closeMenu();
        menuButton.focus();
      }
    });
  }

  const revealItems = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    revealItems.forEach((item) => revealObserver.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  }

  const copyButton = document.querySelector('[data-copy-email]');
  const statusMessage = document.querySelector('[data-copy-status]');
  const emailValue = document.querySelector('[data-email-value]');
  const emailAddress = 'juanes1200@hotmail.com';

  if (copyButton && statusMessage && emailValue) {
    copyButton.addEventListener('click', async () => {
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(emailAddress);
          statusMessage.textContent = document.documentElement.lang === 'es'
            ? 'Correo copiado al portapapeles.'
            : 'Email copied to clipboard.';
          copyButton.textContent = document.documentElement.lang === 'es'
            ? 'Correo copiado'
            : 'Email copied';
          return;
        }

        throw new Error('Clipboard unavailable');
      } catch (error) {
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(emailValue);
        selection.removeAllRanges();
        selection.addRange(range);
        statusMessage.textContent = document.documentElement.lang === 'es'
          ? 'No se pudo copiar automáticamente. El correo quedó seleccionado para pegarlo manualmente.'
          : 'Automatic copying was not possible. The email was selected so you can paste it manually.';
      }
    });
  }

  document.querySelectorAll('.lang-btn').forEach((button) => {
    button.addEventListener('click', () => {
      const nextLang = button.dataset.lang || 'es';
      applyTranslations(nextLang);
    });
  });

  applyTranslations('es');
});
