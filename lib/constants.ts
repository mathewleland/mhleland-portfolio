export const aboutSection = {
    id: 'about',
    image: {
        src: '/mathew.JPG',
        alt: 'Profile of Mathew Leland',
    },
    heading: 'About Me',
    shortBio: "I'm a software engineer dedicated to making software engineering enjoyable for everyone...",
    fullBio: "I'm a software engineer dedicated to making software engineering enjoyable for everyone around me. With extensive experience designing intuitive user interfaces and compelling data visualizations, I also excel at producing clear, thoughtful technical documentation and end-to-end feature planning. I'm confident scaling applications smoothly to serve millions of users, placing particular emphasis on defining precise metrics and observability frameworks. This ensures we deeply understand user journeys and swiftly pinpoint any friction points. In collaboration with product managers, I actively contribute to writing detailed product requirements documents, ensuring alignment across teams. My experience spans extensive interactions with vendor SaaS providers to seamlessly integrate their solutions, as well as partnering closely with solutions engineers to resolve integration challenges swiftly and effectively. Above all, I approach coding as a craft, bringing charisma and enthusiasm to every team I join, always striving to be a valuable and uplifting presence.",
    buttons: {
        readLess: 'Read Less',
        readMore: 'Read More',
        downloadCv: 'Download CV',
        contactMe: 'Contact Me',
    },
    skills: {
        heading: 'Core Skills',
        list: [
            "React/Next.js",
            "TypeScript",
            "Node.js",
            "CI/CD",
            "Technical Writing",
            "UI/UX Design",
        ],
        activeText: (skill: string) => `${skill}: Click to see projects using this skill!`,
    },
    interests: {
        heading: 'Interests',
        list: [
            { icon: "🐣", label: "Simplifying ideas" },
            { icon: "📊", label: "Data Visualization" },
            { icon: "🤖", label: "Large Language Models" },
            { icon: "🍦", label: "Writing Vanilla ______" }, // Emojis are fine as constants
        ],
    },
};

export const heroSection = {
    title: 'Mathew Leland | Software Engineer',
    typewriterSequence: [
        "Crafting clarity from complexity",
        1000,
        "Apps that scale to millions",
        1000,
        "RFCs that drive decisions ",
        1000,
    ],
    buttons: {
        projects: 'View Projects',
        contact: 'Contact Me'
    },
    links: {
        projects: '/#projects',
        contact: '/#contact'
    }
};

// Add other sections below as we process them
