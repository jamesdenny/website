# Website Requirements - Modern Professional Portfolio

## Project Overview
A modern, responsive professional portfolio website for James Denny showcasing 18+ years of commercial experience in software development.

## Functional Requirements

### Core Features
- **Responsive Design**: 24-column desktop / 12-column tablet / 6-column mobile CSS grid
- **Professional Profile**: Headshot, experience summary, and tech stack display
- **Career Timeline**: Detailed work history with emphasis on long-term tenure
- **Secure Contact**: Anti-spam contact form with honeypot protection
- **CV Download**: Secure, obfuscated CV download functionality
- **Navigation**: Responsive header with hamburger menu on mobile

### Content Requirements
- **Hero Section**: Profile photo + "18+ Years Commercial Experience" headline
- **Tech Stack Sidebar**: React, Node.js, JavaScript (expandable to other technologies)
- **Career Timeline**: Companies including NetScout and MIC Global with dates/roles
- **Contact Information**: Secure form submission (no plain-text email/phone)
- **CV Access**: Protected PDF download with bot prevention

## Technical Requirements

### Framework & Hosting
- **Framework**: Next.js 14+ with App Router
- **Hosting**: Vercel (linked to GitHub repository)
- **Deployment**: Zero-config deployment with preview environments

### Styling & Design
- **CSS Framework**: Tailwind CSS with custom 24-column grid system
- **Color Palette**: 
  - Primary Teal: #2C96AD
  - Slate Grey: #F4F7F6
  - Charcoal: #1A1A1B
- **Typography**: Sans-serif headers (Inter/Montserrat) + handwritten branding font
- **Spacing**: rem units for accessibility and scalability
- **Background**: Paper texture (subtle, non-intrusive)

### Form & Security
- **Contact Forms**: Either Formspree service or Next.js Server Actions with Resend
- **Spam Protection**: Honeypot field technique
- **CV Security**: Client-side link obfuscation or gated access

## Non-Functional Requirements

### Performance
- **Load Speed**: Optimized images and lazy loading
- **SEO**: Meta tags, structured data, semantic HTML
- **Accessibility**: WCAG 2.1 AA compliance, keyboard navigation

### Responsive Behavior
- **Desktop (24-col)**: Asymmetric 8/16 hero split, 7-col sticky sidebar
- **Tablet (12-col)**: 4/8 hero split, condensed sidebar
- **Mobile (6-col)**: Single column flow, stacked elements, hamburger menu

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Progressive enhancement for older browsers

## Content Management
- **Career Data**: JSON/MDX format for easy updates
- **Tech Stack**: Configurable array of technologies with icons
- **Profile Info**: Easily updatable personal information

## Security Considerations
- No plain-text contact information in HTML
- Bot prevention for CV downloads
- Form validation and sanitization
- HTTPS enforcement via hosting provider

## Success Criteria
- Professional appearance that reflects senior experience
- Mobile-first responsive design
- Fast loading and smooth interactions
- Secure contact and CV access
- Easy content updates for future maintenance
