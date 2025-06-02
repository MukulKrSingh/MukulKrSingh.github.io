/**
 * Content Configuration for Mukul Singh's Portfolio Website
 * 
 * This file contains all the dynamic content for the website.
 * You can easily update your portfolio by modifying the data objects below.
 */

// Personal Information
const personalInfo = {
    name: "Mukul Singh",
    title: "Sr. Software Engineer",
    tagline: "Golang Developer | Flutter Developer | Full-Stack Engineer",
    email: "singhmukul96@gmail.com",
    phone: "+91-8595321667, +91-8373928887",
    location: "Greater Noida, India",
    linkedIn: "https://linkedin.com/in/mukul-kumar-singh-50356a159",
    github: "https://github.com/MukulKrSingh",
    twitter: "https://twitter.com/Mukul_Singh404",
    medium: "https://medium.com/@singhmukul96",
    education: "BTech (IT), 2015-2019",
    about: "Highly skilled Senior Software Engineer with a strong focus on building robust and scalable full-stack applications, combining expertise in GoLang for backend systems and Flutter for dynamic mobile frontends. Proven ability in API development (GraphQL), database management (MongoDB), cloud deployment, and performance optimization. Adept at leading development efforts, restructuring backend architectures, and driving efficient end-to-end software solutions."
};

// Work Experience
const experience = [
    {
        position: "Lead Software Engineer",
        company: "GoEasyCare",
        period: "07/2024 - 06/2025",
        location: "Canada",
        description: "GoEasyCare is Canada's leading workforce management solution, specifically tailored for healthcare facilities.",
        achievements: [
            "Lead development of key modules for Canada's leading healthcare workforce management solution, GoEasyCare, focusing on shift scheduling, shift management etc.",
            "Re-structuring the backend ensuring proper standards were followed.",
            "AI-driven development and tracing hence ensuring low development time and fast resolutions."
        ]
    },
    {
        position: "Senior Software Engineer",
        company: "Bacancy Software LLP",
        period: "03/2022 - 07/2024",
        location: "India",
        description: "Bacancy Software is an IT consultancy firm",
        achievements: [
            "Received On-Spot Award for delivering comprehensive Flutter trainings to 3 junior developers, enhancing team productivity by 60%",
            "Consistently received positive client feedback for delivering high-quality software solutions and exceeding project expectations on multiple projects",
            "Handled a team of 8 developers leading to a successful and timely goals achievement"
        ]
    },
    {
        position: "System Engineer",
        company: "Tata Consultancy Services Ltd.",
        period: "09/2019 - 03/2022",
        location: "India",
        description: "TCS is an IT giant from India",
        achievements: [
            "Conducted code reviews for 2 associates, identifying and resolving 5 critical issues, and improving code quality by 40%.",
            "Managed client escalations and ensured timely product delivery for multiple projects, resulting in a 80% reduction in post-launch issues.",
            "Led the successful migration of a key project to Flutter, improving performance by 100% and reducing maintenance overhead by 90%."
        ]
    }
];

// Projects
const projects = [
    {
        title: "GEC Kiosk + Mobile",
        period: "07/2024 - 06/2025",
        description: "Developed and maintained the Flutter-based GoEasyCare Kiosk and Mobile applications for healthcare workforce management, integrated with a GoLang backend using GraphQL API and MongoDB.",
        technologies: ["Flutter", "GoLang", "GraphQL", "MongoDB", "Docker"]
    },
    {
        title: "ION Bsense - Battery Management System",
        period: "03/2022 - 06/2024",
        description: "Contributed as a Flutter Developer to the ION Bsense Battery Management System, focusing on real-time data visualization and user interface development for monitoring and management.",
        technologies: ["Flutter", "IoT", "Real-time Data Visualization"]
    },
    {
        title: "The Stunt",
        period: "03/2023 - 05/2024",
        description: "Served as a Flutter Developer for 'The Stunt' application, responsible for front-end development, API integration, and UI/UX implementation to deliver a social media app built around US sports.",
        technologies: ["Flutter", "API Integration", "Social Media", "UI/UX"]
    },
    {
        title: "GIA - Gemmology Institute of America",
        period: "09/2019 - 03/2022",
        description: "Contributed to the GIA App, which provides a wealth of diamond resources, including 4Cs interactive tools, expert articles, videos, and secure database access for reports.",
        technologies: ["Android", "UI Design", "API Integration", "Video Playback"]
    }
];

// Skills
const skills = {
    mobile: ["Flutter", "Android", "Riverpod", "Bloc", "GetX", "Agora"],
    backend: ["GoLang", "Gin", "GraphQL", "MongoDB", "Open Telemetry", "MCP", "Firebase"],
    devops: ["GitHub", "Code Magic", "JIRA", "Docker"],
    languages: ["Java", "C/C++", "English", "Hindi"]
};

// Particles.js Configuration
const particlesConfig = {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#4361ee"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            }
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#4361ee",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 3,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "grab"
            },
            onclick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
};
