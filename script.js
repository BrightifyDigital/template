
/* =========================================================
   BRIGHTIFY DIGITAL — UNIVERSAL BUSINESS TEMPLATE

   CUSTOMIZATION GUIDE:
   1. Change the business information below.
   2. Change the theme colors.
   3. Add or remove services.
   4. Replace the FAQs.
   5. Replace the images with client-approved images.
   ========================================================= */


/* ---------------------------------------------------------
   1. BUSINESS CONFIGURATION
   --------------------------------------------------------- */

const BUSINESS = {

    // Basic business details
    name: "Business Name",
    initials: "BN",
    tagline: "Good work. A better experience.",

    // Contact information
    email: "hello@example.com",
    phone: "",
    location: "Your City, State",
    hours: "Contact us for availability",

    // Homepage content
    heroLabel: "LOCAL BUSINESS · PERSONAL SERVICE",
    heroHeading: "Good work. A better experience.",
    heroDescription:
        "We help our customers get what they need through thoughtful service, reliable work, and attention to the details that matter.",

    introHeading: "A business built around doing things right.",
    introDescription:
        "Finding the right business should feel straightforward. We focus on good communication, dependable service, and work we're proud to put our name on.",

    differenceHeading: "The details make the difference.",
    differenceDescription:
        "We believe a good customer experience starts before the work even begins. From the first conversation to the finished result, we aim to make every step clear and easy.",

    ctaHeading: "Have something in mind?",
    ctaDescription:
        "Tell us what you're looking for. We'd be happy to talk through the next steps.",

    footerDescription:
        "Good service starts with a conversation.",

    // Button labels and destinations
    primaryButtonText: "Get started",
    primaryButtonLink: "contact.html",

    bottomButtonText: "Contact us",

    // Image URLs
    heroImage:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2000&q=90",

    featureImage:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85",

    aboutImage:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85",

    // Service page text
    servicesIntro:
        "Take a look at what we offer and find the right place to start. If you aren't sure what you need, get in touch and we'll help.",

    serviceNote:
        "Need something different? Contact us to discuss your project and find out whether we can help.",

    // About page content
    aboutIntro:
        "Learn a little more about who we are, what we do, and what matters to us.",

    aboutHeading:
        "A straightforward approach to good service.",

    aboutParagraphOne:
        "Every business has a reason it started. For us, it comes down to providing a service people can feel comfortable choosing and recommending.",

    aboutParagraphTwo:
        "We focus on understanding what customers need, being clear about what we offer, and following through on the work. That's the standard we aim to bring to every interaction."
};


/* ---------------------------------------------------------
   2. THEME CONFIGURATION

   Change these colors to create different client themes.
   --------------------------------------------------------- */

const THEME = {

    primary: "#183b32",
    primaryLight: "#285548",
    accent: "#a9c6a5",

    background: "#ffffff",
    surface: "#f5f6f2",
    surfaceDark: "#e9ede7",

    heading: "#202923",
    text: "#5e6962",
    muted: "#89928b",
    border: "#e4e9e3"

};


/* ---------------------------------------------------------
   3. SERVICES

   Each service can have:
   - title
   - description
   - icon
   - link

   Use a short text symbol or letter for the icon.
   --------------------------------------------------------- */

const SERVICES = [

    {
        title: "Service One",
        description:
            "Describe the first service in a clear, helpful way. Explain what customers can expect and who it is for.",
        icon: "01",
        link: "contact.html"
    },

    {
        title: "Service Two",
        description:
            "Use this section to highlight another service, package, or area of expertise your business provides.",
        icon: "02",
        link: "contact.html"
    },

    {
        title: "Service Three",
        description:
            "Explain the value of this option without making promises you cannot guarantee.",
        icon: "03",
        link: "contact.html"
    },

    {
        title: "Service Four",
        description:
            "Add another service here if your business offers more than three options.",
        icon: "04",
        link: "contact.html"
    },

    {
        title: "Custom Projects",
        description:
            "Describe custom work or additional services that customers can ask about.",
        icon: "05",
        link: "contact.html"
    },

    {
        title: "Consultation",
        description:
            "Give visitors a way to start a conversation if they are unsure which option is right for them.",
        icon: "06",
        link: "contact.html"
    }

];


/* ---------------------------------------------------------
   4. FAQ CONFIGURATION

   Replace these with questions the actual business receives.
   --------------------------------------------------------- */

const FAQS = [

    {
        question: "What services do you offer?",
        answer:
            "We offer several services to help customers with different needs. Visit our Services page for an overview of the available options."
    },

    {
        question: "How do I get started?",
        answer:
            "The easiest way to get started is to contact us. Tell us what you are looking for, and we'll help you understand the next steps."
    },

    {
        question: "How much do your services cost?",
        answer:
            "Pricing depends on the service and the details of your request. Contact us for information about pricing and any available packages."
    },

    {
        question: "Where do you provide services?",
        answer:
            "We currently serve customers in the area listed on our website. Contact us if you would like to confirm whether your location is covered."
    },

    {
        question: "How can I contact you?",
        answer:
            "You can reach us through the contact information on this website or send an inquiry using the Contact page."
    }

];


/* ---------------------------------------------------------
   5. HELPER FUNCTIONS
   --------------------------------------------------------- */

// Update all elements that share a particular data attribute.
function setText(selector, value) {
    if (value === undefined || value === null) return;

    document.querySelectorAll(selector).forEach((element) => {
        element.textContent = value;
    });
}


// Safely update image sources and alternative text.
function setImage(selector, source, alt) {
    const image = document.querySelector(selector);

    if (!image || !source) return;

    image.src = source;
    image.alt = alt;
}


// Create initials from a business name if no initials are supplied.
function createInitials(name) {
    return name
        .trim()
        .split(/\s+/)
        .slice(0, 2)
        .map((word) => word.charAt(0).toUpperCase())
        .join("");
}


// Apply the theme settings to the website.
function applyTheme() {
    const root = document.documentElement;

    root.style.setProperty("--color-primary", THEME.primary);
    root.style.setProperty("--color-primary-light", THEME.primaryLight);
    root.style.setProperty("--color-accent", THEME.accent);

    root.style.setProperty("--color-background", THEME.background);
    root.style.setProperty("--color-surface", THEME.surface);
    root.style.setProperty("--color-surface-dark", THEME.surfaceDark);

    root.style.setProperty("--color-heading", THEME.heading);
    root.style.setProperty("--color-text", THEME.text);
    root.style.setProperty("--color-muted", THEME.muted);
    root.style.setProperty("--color-border", THEME.border);
}


// Apply business information to shared page elements.
function applyBusinessInformation() {

    const initials = BUSINESS.initials || createInitials(BUSINESS.name);

    setText("[data-business-name]", BUSINESS.name);
    setText("[data-brand-initials]", initials);

    setText("[data-email]", BUSINESS.email);
    setText("[data-phone]", BUSINESS.phone || "Contact us");
    setText("[data-location]", BUSINESS.location);
    setText("[data-hours]", BUSINESS.hours);

    setText("[data-footer-description]", BUSINESS.footerDescription);
    setText("[data-current-year]", new Date().getFullYear());

    setText("[data-hero-label]", BUSINESS.heroLabel);
    setText("[data-hero-heading]", BUSINESS.heroHeading);
    setText("[data-hero-description]", BUSINESS.heroDescription);
    setText("[data-hero-location]", BUSINESS.location);

    setText("[data-intro-heading]", BUSINESS.introHeading);
    setText("[data-intro-description]", BUSINESS.introDescription);

    setText("[data-difference-heading]", BUSINESS.differenceHeading);
    setText("[data-difference-description]", BUSINESS.differenceDescription);

    setText("[data-cta-heading]", BUSINESS.ctaHeading);
    setText("[data-cta-description]", BUSINESS.ctaDescription);

    setText("[data-services-intro]", BUSINESS.servicesIntro);
    setText("[data-service-note]", BUSINESS.serviceNote);

    setText("[data-about-intro]", BUSINESS.aboutIntro);
    setText("[data-about-heading]", BUSINESS.aboutHeading);
    setText("[data-about-paragraph-one]", BUSINESS.aboutParagraphOne);
    setText("[data-about-paragraph-two]", BUSINESS.aboutParagraphTwo);

    document.querySelectorAll("[data-email-link]").forEach((element) => {
        element.href = BUSINESS.email
            ? `mailto:${BUSINESS.email}`
            : "#";
    });

    document.querySelectorAll("[data-phone-link]").forEach((element) => {
        element.href = BUSINESS.phone
            ? `tel:${BUSINESS.phone.replace(/[^\d+]/g, "")}`
            : "#";
    });

    const primaryButton = document.querySelector("[data-primary-cta]");

    if (primaryButton) {
        primaryButton.textContent = BUSINESS.primaryButtonText;
        primaryButton.href = BUSINESS.primaryButtonLink;
    }

    const bottomButton = document.querySelector("[data-bottom-cta]");

    if (bottomButton) {
        bottomButton.textContent = BUSINESS.bottomButtonText;
    }

    setImage(
        "[data-feature-image]",
        BUSINESS.featureImage,
        `${BUSINESS.name} featured image`
    );

    setImage(
        "[data-about-image]",
        BUSINESS.aboutImage,
        `${BUSINESS.name} team or business`
    );

    const heroImage = document.querySelector(".hero-image");

    if (heroImage && BUSINESS.heroImage) {
        heroImage.style.backgroundImage = `
            linear-gradient(
                90deg,
                rgba(12, 30, 25, 0.91) 0%,
                rgba(12, 30, 25, 0.72) 48%,
                rgba(12, 30, 25, 0.25) 100%
            ),
            url("${BUSINESS.heroImage}")
        `;
    }

    document.title = document.title.replace(
        "Business Name",
        BUSINESS.name
    );
}


/* ---------------------------------------------------------
   6. RENDER SERVICE CARDS
   --------------------------------------------------------- */

function renderServices(containerId, limit = SERVICES.length) {

    const container = document.getElementById(containerId);

    if (!container) return;

    container.innerHTML = "";

    SERVICES.slice(0, limit).forEach((service) => {

        const article = document.createElement("article");
        article.className = "service-card";

        const icon = document.createElement("div");
        icon.className = "service-icon";
        icon.textContent = service.icon;

        const heading = document.createElement("h3");
        heading.textContent = service.title;

        const description = document.createElement("p");
        description.textContent = service.description;

        const link = document.createElement("a");
        link.className = "text-link";
        link.href = service.link;
        link.textContent = "Learn more ↗";

        article.append(icon, heading, description, link);
        container.appendChild(article);

    });

}


/* ---------------------------------------------------------
   7. RENDER FAQ ITEMS
   --------------------------------------------------------- */

function renderFAQs() {

    const container = document.getElementById("faq-list");

    if (!container) return;

    container.innerHTML = "";

    FAQS.forEach((faq, index) => {

        const item = document.createElement("article");
        item.className = "faq-item";

        const button = document.createElement("button");
        button.className = "faq-question";
        button.type = "button";
        button.setAttribute("aria-expanded", "false");
        button.setAttribute("aria-controls", `faq-answer-${index}`);

        const question = document.createElement("span");
        question.textContent = faq.question;

        const symbol = document.createElement("span");
        symbol.className = "faq-symbol";
        symbol.setAttribute("aria-hidden", "true");
        symbol.textContent = "+";

        button.append(question, symbol);

        const answer = document.createElement("div");
        answer.className = "faq-answer";
        answer.id = `faq-answer-${index}`;
        answer.textContent = faq.answer;

        button.addEventListener("click", () => {

            const isOpen = item.classList.contains("open");

            // Close other FAQ items.
            container.querySelectorAll(".faq-item").forEach((otherItem) => {
                otherItem.classList.remove("open");

                const otherButton = otherItem.querySelector(".faq-question");

                if (otherButton) {
                    otherButton.setAttribute("aria-expanded", "false");
                }
            });

            // Toggle the selected item.
            if (!isOpen) {
                item.classList.add("open");
                button.setAttribute("aria-expanded", "true");
            }

        });

        item.append(button, answer);
        container.appendChild(item);

    });

}


/* ---------------------------------------------------------
   8. MOBILE NAVIGATION
   --------------------------------------------------------- */

function setupMobileNavigation() {

    const menuButton = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".main-nav");

    if (!menuButton || !navigation) return;

    menuButton.addEventListener("click", () => {

        const isOpen = navigation.classList.toggle("open");

        menuButton.setAttribute("aria-expanded", String(isOpen));
        menuButton.setAttribute(
            "aria-label",
            isOpen ? "Close navigation" : "Open navigation"
        );

    });

    navigation.querySelectorAll("a").forEach((link) => {

        link.addEventListener("click", () => {
            navigation.classList.remove("open");
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.setAttribute("aria-label", "Open navigation");
        });

    });

}


/* ---------------------------------------------------------
   9. CONTACT FORM
   This version opens the visitor's email application.
   It does not store submissions or send them to a server.
   --------------------------------------------------------- */

function setupContactForm() {

    const form = document.getElementById("contact-form");

    if (!form) return;

    form.addEventListener("submit", (event) => {

        event.preventDefault();

        if (!form.reportValidity()) return;

        const formData = new FormData(form);

        const name = formData.get("name");
        const email = formData.get("email");
        const service = formData.get("service") || "Not specified";
        const message = formData.get("message");

        if (!BUSINESS.email || BUSINESS.email === "hello@example.com") {

            const status = document.getElementById("form-status");

            if (status) {
                status.textContent =
                    "The business email has not been configured yet.";
            }

            return;
        }

        const subject = encodeURIComponent(
            `Website inquiry from ${name}`
        );

        const body = encodeURIComponent(
            `Name: ${name}\n` +
            `Email: ${email}\n` +
            `Inquiry type: ${service}\n\n` +
            `Message:\n${message}`
        );

        const mailtoLink =
            `mailto:${BUSINESS.email}?subject=${subject}&body=${body}`;

        const status = document.getElementById("form-status");

        if (status) {
            status.textContent =
                "Opening your email application. Please review and send your message there.";
        }

        window.location.href = mailtoLink;

    });

}


/* ---------------------------------------------------------
   10. INITIALIZE WEBSITE
   --------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {

    applyTheme();

    applyBusinessInformation();

    renderServices("home-services", 3);
    renderServices("all-services");

    renderFAQs();

    setupMobileNavigation();

    setupContactForm();

});
