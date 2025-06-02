# Mukul Singh - Professional Portfolio Website

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://mukulkrsingh.github.io)
[![GitHub Pages](https://img.shields.io/badge/Deployed%20on-GitHub%20Pages-blue)](https://pages.github.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## 🚀 Overview

Welcome to my professional portfolio website! This is a modern, responsive web application showcasing my expertise as a Senior Software Engineer specializing in Flutter, GoLang, and Full-Stack Development. The portfolio is designed to attract potential clients and demonstrate my technical capabilities through a clean, professional interface.

## 🌐 Live Website

Visit the live portfolio: **[https://mukulkrsingh.github.io](https://mukulkrsingh.github.io)**

## 👨‍💻 About Me

I'm **Mukul Singh**, a Senior Software Engineer with 5+ years of experience in:
- **Mobile Development**: Flutter, Android, iOS
- **Backend Development**: GoLang, GraphQL, MongoDB, Firebase
- **Full-Stack Solutions**: End-to-end application development
- **Technical Leadership**: Team management and project delivery

Currently serving as Lead Software Engineer at GoEasyCare (Canada's leading healthcare workforce management solution).

## 🎯 Portfolio Features

### 🔥 Design & User Experience
- **Responsive Design**: Fully optimized for all devices (desktop, tablet, mobile)
- **Modern UI/UX**: Clean, professional interface with smooth animations
- **Dark Mode**: Toggle between light and dark themes with system preference detection
- **Interactive Elements**: Particle animation in hero section and smooth scroll effects
- **Fast Loading**: Optimized performance with efficient CSS and JavaScript
- **SEO Optimized**: Meta tags for better search engine visibility

### 📱 Portfolio Sections
1. **Hero Section**: Professional introduction with social links
2. **About**: Personal summary and contact details
3. **Experience**: Timeline of professional work history with achievements
4. **Projects**: Showcase of key projects with descriptions and technologies
5. **Skills**: Technical skills organized by category
6. **Contact**: Functional contact form with direct email delivery using FormSubmit

## 🛠️ Technical Implementation

### Core Technologies
- **HTML5**: Modern semantic markup
- **CSS3**: Custom styling with variables for easy theme customization
- **JavaScript**: Vanilla JavaScript for all interactions and animations
- **Particles.js**: For interactive particle background
- **Font Awesome**: For icons
- **Google Fonts**: For typography
- **FormSubmit**: Server-less form processing for contact form

### Dynamic Content Management
All portfolio content is stored in `assets/js/content.js` for easy maintenance, allowing for updates without changing the core HTML or CSS. This separation makes the portfolio extremely maintainable.

## 📱 Responsive Design

The portfolio is built with a mobile-first approach, ensuring optimal viewing experience across a wide range of devices:
- **Desktop**: Full content display with optimized spacing
- **Tablet**: Responsive grid adjustments for medium-sized screens
- **Mobile**: Optimized layouts with collapsible navigation and stacked content

## ✉️ Contact Form Functionality

The portfolio features a fully functional contact form that allows visitors to send messages directly to your email without requiring a backend server:

- **FormSubmit Integration**: Uses FormSubmit.co service to deliver messages to your inbox
- **Custom Thank You Page**: Provides feedback to users after message submission
- **Form Validation**: Client-side validation ensures all required fields are completed
- **No Backend Required**: Works perfectly with GitHub Pages static hosting
- **Spam Protection**: Basic protection against spam messages

## 🚀 Deployment Guide

### Hosting on GitHub Pages

1. **Repository Setup**:
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to repository Settings
   - Navigate to Pages section
   - Select `main` branch as source
   - Save the settings

3. **Custom Domain** (Optional):
   - Add your domain in GitHub Pages settings
   - Create CNAME DNS record pointing to `[username].github.io`
   - Add CNAME file to repository root

### Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/MukulKrSingh/MukulKrSingh.github.io.git
   cd MukulKrSingh.github.io
   ```

2. **Open with a live server**:
   - Use VS Code Live Server extension
   - Or use Python's HTTP server: `python3 -m http.server`

## 🔧 Customization Guide

### Updating Personal Information
Edit `assets/js/content.js` to update personal details:

```javascript
const personalInfo = {
    name: "Your Name",
    title: "Your Title",
    tagline: "Your Professional Tagline",
    // ... other fields
};
```

### Adding Work Experience
Add new entries to the experience array:

```javascript
const experience = [
    {
        position: "Position Title",
        company: "Company Name",
        period: "MM/YYYY - MM/YYYY",
        // ... other fields
    },
    // Add more experience items
];
```

### Adding Projects
Add new projects to the projects array:

```javascript
const projects = [
    {
        title: "Project Name",
        period: "MM/YYYY - MM/YYYY",
        description: "Project description...",
        technologies: ["Tech1", "Tech2"]
    },
    // Add more projects
];
```

### Customizing Contact Form
To update the contact form email destination:

1. Change the form action in `index.html`:
   ```html
   <form class="contact-form" id="contactForm" action="https://formsubmit.co/your-email@example.com" method="POST">
   ```

2. Update the hidden fields as needed:
   ```html
   <input type="hidden" name="_subject" value="Custom Subject Line">
   <input type="hidden" name="_next" value="https://yourdomain.com/thank-you.html">
   ```

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

For inquiries or opportunities, please contact:
- Email: singhmukul96@gmail.com
- LinkedIn: [linkedin.com/in/mukul-kumar-singh-50356a159](https://linkedin.com/in/mukul-kumar-singh-50356a159)
- GitHub: [github.com/MukulKrSingh](https://github.com/MukulKrSingh)