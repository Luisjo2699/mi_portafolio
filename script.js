// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
    // ===========================
    // Theme toggle
    // ===========================
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('.theme-icon');

    const savedTheme = localStorage.getItem('theme') ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeIcon.textContent = '☀️';
    } else {
        document.documentElement.removeAttribute('data-theme');
        themeIcon.textContent = '🌙';
    }

    themeToggle.addEventListener('click', function () {
        const currentTheme = document.documentElement.getAttribute('data-theme');

        if (currentTheme === 'dark') {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            themeIcon.textContent = '🌙';
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            themeIcon.textContent = '☀️';
        }
    });

    // ===========================
    // Language toggle + translations
    // ===========================
    const languageToggle = document.getElementById('language-toggle');

    const translations = {
        es: {
            welcomeText: 'Bienvenido a mi Portafolio',
            downloadCV: 'Descargar CV',
            aboutTitle: 'Sobre Mí',
            aboutText1: 'Ingeniero en información especializado en la creación de soluciones técnicas robustas y en el análisis visual de datos. Utilizo herramientas como JavaScript, CSS, HTML, Python, Power BI y Excel como medios para construir, optimizar y comunicar resultados de manera efectiva.',
            portfolioTitle: 'Portafolio',
            project1Title: 'Dashboard Para Análisis de Datos',
            project1Desc: 'Panel de control interactivo para visualización de datos con gráficos dinámicos personalizables y reportes en tiempo real.',
            project2Title: 'SaaS de Inventarios',
            project2Desc: 'Sistema de planificación de recursos empresariales enfocado en la gestión integral de inventarios, entradas, salidas, alertas de stock y reportes de movimiento en tiempo real.',
            project3Title: 'Sistema de Control de Pacientes de Odontología',
            project3Desc: 'Aplicación web para odontólogos que permite registrar pacientes, historial clínico, citas, tratamientos y facturación de forma centralizada y segura.',
            project4Title: 'App Personal de Finanzas, Entrenamientos y Tareas',
            project4Desc: 'Aplicación web integral para el seguimiento de finanzas personales, rutinas de entrenamiento, plan de alimentación y gestión de tareas diarias, con dashboards y recordatorios.',
            educationTitle: 'Educación',
            eduItem1Title: 'Ingeniería en Información',
            eduItem1Desc: 'Estudiante de penúltimo trimestre del programa.',
            eduItem2Title: 'Diplomado de Python Avanzado',
            eduItem2Desc: 'Enfoque en algoritmos de aprendizaje automático y procesamiento de lenguaje natural.',
            viewButton: 'Ver',
            viewProjects: 'Ver proyecto',
            // Títulos dentro de las páginas de proyecto
            erpPageTitle: 'SaaS de Inventarios',
            dentalPageTitle: 'Sistema de Control de Pacientes de Odontología',
            personalPageTitle: 'App Personal de Finanzas, Entrenamientos y Tareas',
            dashboardPageTitle: 'Dashboard Para Análisis de Datos',
            // README content labels
            readmeBtn: 'readme',
            galleryTitle: 'Visualización del proyecto',
            backToPortfolio: '← Volver al portafolio',
            skillsTitle: 'Habilidades',
            techSkillsTitle: 'Habilidades Técnicas',
            softSkillsTitle: 'Habilidades Blandas',
            softSkill1: 'Trabajo en equipo',
            softSkill2: 'Resolución de problemas',
            softSkill3: 'Comunicación efectiva',
            softSkill4: 'Gestión de tiempo',
            softSkill5: 'Adaptabilidad',
            softSkill6: 'Pensamiento crítico',
            contactTitle: 'Contacto',
            emailTitle: 'Email:',
            phoneTitle: 'Teléfono:',
            footerText: '&copy; 2025 Luis Sánchez. Todos los derechos reservados.'
        },
        en: {
            welcomeText: 'Welcome to my Portfolio',
            downloadCV: 'Download CV',
            aboutTitle: 'About Me',
            aboutText1: 'Information engineer specializing in the creation of robust technical solutions and visual data analysis. I use tools such as JavaScript, CSS, HTML, Python, Power BI, and Excel to build, optimize, and effectively communicate results.',
            portfolioTitle: 'Portfolio',
            project1Title: 'Dashboard for Data Analysis',
            project1Desc: 'Interactive dashboard for data visualization with customizable dynamic charts and real-time reports.',
            project2Title: 'Inventory SaaS',
            project2Desc: 'Enterprise resource planning system focused on comprehensive inventory management, stock in/out, low-stock alerts and real-time movement reports.',
            project3Title: 'Dental Patient Management System',
            project3Desc: 'Web application for dentist that allows registering patients, clinical history, appointments, treatments and billing in a centralized and secure way.',
            project4Title: 'Personal Finance, Training & Tasks App',
            project4Desc: 'All-in-one web app for tracking personal finances, workout routines, meal plans and daily tasks, featuring dashboards and reminders.',
            educationTitle: 'Education',
            eduItem1Title: 'Information Engineering',
            eduItem1Desc: 'Student in the second-to-last trimester of the program.',
            eduItem2Title: 'Advanced Python Diploma',
            eduItem2Desc: 'Focus on machine learning algorithms and natural language processing.',
            viewButton: 'View',
            viewProjects: 'View project',
            // Project page titles
            erpPageTitle: 'Inventory SaaS',
            dentalPageTitle: 'Dental Patient Management System',
            personalPageTitle: 'Personal Finance, Training & Tasks App',
            dashboardPageTitle: 'Dashboard for Data Analysis',
            // README content labels
            readmeBtn: 'readme',
            galleryTitle: 'Project Gallery',
            backToPortfolio: '← Back to portfolio',
            skillsTitle: 'Skills',
            techSkillsTitle: 'Technical Skills',
            softSkillsTitle: 'Soft Skills',
            softSkill1: 'Teamwork',
            softSkill2: 'Problem-solving',
            softSkill3: 'Effective communication',
            softSkill4: 'Time management',
            softSkill5: 'Adaptability',
            softSkill6: 'Critical thinking',
            contactTitle: 'Contact',
            emailTitle: 'Email:',
            phoneTitle: 'Phone:',
            footerText: '&copy; 2025 Luis Sánchez. All rights reserved.'
        }
    };

    function updateContent(language) {
        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (translations[language] && translations[language][key] !== undefined) {
                if (key === 'footerText') {
                    element.innerHTML = translations[language][key];
                } else {
                    element.textContent = translations[language][key];
                }
            }
        });

        const langToggleBtn = document.getElementById('language-toggle');
        langToggleBtn.querySelector('.language-icon').textContent =
            language === 'en' ? 'EN/ES' : 'ES/EN';

        // Actualizar textos de botones de galería según estado abierto/cerrado
        document.querySelectorAll('.btn-toggle-gallery').forEach(btn => {
            const isOpen = btn.getAttribute('aria-expanded') === 'true';
            btn.textContent = isOpen
                ? translations[language].hideProjects
                : translations[language].viewProjects;
        });
    }

    let currentLanguage = localStorage.getItem('language') || 'es';
    updateContent(currentLanguage);

    languageToggle.addEventListener('click', function () {
        currentLanguage = currentLanguage === 'es' ? 'en' : 'es';
        localStorage.setItem('language', currentLanguage);
        updateContent(currentLanguage);
    });

    // ===========================
    // Mobile menu
    // ===========================
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');

    menuToggle.addEventListener('click', function () {
        sidebar.classList.toggle('open');
        menuToggle.classList.toggle('open');
    });

    // ===========================
    // Smooth scroll & active link
    // ===========================
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

                if (sidebar.classList.contains('open')) {
                    sidebar.classList.remove('open');
                    menuToggle.classList.remove('open');
                }
            }
        });
    });

    // Cerrar menú al hacer clic fuera (móvil)
    document.addEventListener('click', function (e) {
        if (
            window.innerWidth <= 900 &&
            !sidebar.contains(e.target) &&
            !menuToggle.contains(e.target) &&
            sidebar.classList.contains('open')
        ) {
            sidebar.classList.remove('open');
            menuToggle.classList.remove('open');
        }
    });

    // ===========================
    // Modal PDF
    // ===========================
    const modal = document.getElementById('pdf-modal');
    const closeBtn = document.querySelector('.close-btn');
    const pdfViewer = document.getElementById('pdf-viewer');
    const pdfButtons = document.querySelectorAll('.btn-ver-pdf');

    pdfButtons.forEach(button => {
        button.addEventListener('click', function () {
            const pdfSrc = this.getAttribute('data-pdf-src');
            pdfViewer.src = pdfSrc;
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });

    function closeModal() {
        modal.style.display = 'none';
        pdfViewer.src = '';
        document.body.style.overflow = '';
    }

    closeBtn.addEventListener('click', closeModal);

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });

    function openImageDialog(src) {
        if (imageDialog && typeof imageDialog.showModal === 'function') {
            const img = imageDialog.querySelector('img');
            img.src = src;
            imageDialog.showModal();
        } else {
            window.open(src, '_blank');
        }
    }

    if (imageDialog) {
        imageDialog.addEventListener('click', e => {
            if (e.target === imageDialog) {
                imageDialog.close();
            }
        });

        // Cerrar con Escape (nativo de <dialog>, pero por si acaso)
        imageDialog.addEventListener('cancel', () => {
            imageDialog.close();
        });
    }
});
