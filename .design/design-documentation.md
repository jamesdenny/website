# Design Documentation - Modern Professional Portfolio

## Design System Overview

### Grid Architecture
The foundation of the design is a responsive CSS grid system that adapts across three breakpoints:

- **Mobile**: 6-column grid (320px+)
- **Tablet**: 12-column grid (768px+)  
- **Desktop**: 24-column grid (1024px+)

### Color Palette
```css
--primary-teal: #2C96AD;
--slate-grey: #F4F7F6;
--charcoal: #1A1A1B;
--white: #FFFFFF;
```

### Typography System
- **Headers**: Montserrat (bold sans-serif) - CHOSEN
- **Body**: System font stack for performance
- **Brand Logo**: Original handwritten font (preserved)
- **Scale**: rem units for accessibility

## Layout Specifications

### Desktop Layout (24-Column Grid)

#### Header (24 columns)
- Logo: Left-aligned, "James Denny" branding
- Navigation: Right-aligned links
- Height: 80px, sticky on scroll

#### Hero Section (24 columns)
- **Left 8 columns**: Professional headshot
- **Right 16 columns**: 
  - "Hello" greeting
  - "18+ Years Commercial Experience" headline
  - Professional summary
  - Call-to-action buttons

#### Main Content Area
- **Sidebar (7 columns)**: Sticky tech stack display
  - React, Node.js, JavaScript icons
  - Additional technologies
  - Subtle grey background (#F4F7F6)
- **Content (16 columns + 1 gutter)**: Career timeline
  - White background for readability
  - Chronological work history
  - Company logos and descriptions

### Tablet Layout (12-Column Grid)

#### Hero Section
- **Left 4 columns**: Profile photo
- **Right 8 columns**: Text content

#### Main Content
- **Sidebar (4 columns)**: Condensed tech stack
- **Content (8 columns)**: Career timeline

### Mobile Layout (6-Column Grid)

#### Header
- Sticky teal bar with hamburger menu
- "James Denny" branding always visible

#### Content Flow
- Single vertical column stacking
- Profile photo (full width)
- Experience headline
- Tech stack icons (2-3 rows)
- Career timeline
- Contact form

## Component Design

### Tech Stack Display
- **Icons**: Sharp, professional SVG icons
- **Layout**: Grid arrangement with equal spacing
- **Hover**: Subtle scale animation
- **Mobile**: 2-3 rows for touch accessibility
- **Categories**: 
  - **Core Frontend**: JavaScript (ES5/6), HTML5, CSS3, React, jQuery, SASS/SCSS
  - **Backend/Full-stack**: Node.js, PHP, WordPress, MongoDB, Entity Framework
  - **Frameworks**: Ember.js, Preact, ASP.NET MVC, C#
  - **Tools/DevOps**: Webpack, Babel, Gulp, Cypress, Jest, NPM, ESLint
  - **Design/Planning**: Figma, Adobe Creative Cloud
  - **Collaboration**: Git, BitBucket, Jira, Trello, Slack

### Career Timeline
- **Format**: Vertical timeline with alternating alignment
- **Content**: Company name, role, dates, achievements
- **Visual**: Connecting lines between entries
- **Emphasis**: Long-term tenure highlighted (NetScout - 6 years, Integrated Ideas - 4 years, Call Connection - 4 years)
- **Timeline Data**:
  - **SimpleClick Solutions** (2023-2026) - Web Developer
  - **MIC Global** (2022-2023) - UI Developer  
  - **NetScout** (2016-2022) - Front-End Software Engineer
  - **Integrated Ideas Agency** (2012-2016) - Web Developer
  - **Call Connection** (2008-2012) - Web Developer
  - **Family Business** (2003-2008) - Career break

### Contact Form
- **Layout**: Centered 12-column span on desktop
- **Fields**: Name, email, message, hidden honeypot
- **Styling**: Consistent with design system
- **Validation**: Client-side + server-side

### CV Download Button
- **Placement**: Sidebar or hero section
- **Styling**: Primary teal background
- **Security**: Client-side obfuscation
- **UX**: Clear call-to-action with security explanation

## Responsive Behaviors

### Breakpoint Strategy
```css
/* Mobile First Approach */
.grid-container {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;
}

@media (min-width: 768px) {
  .grid-container {
    grid-template-columns: repeat(12, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid-container {
    grid-template-columns: repeat(24, 1fr);
  }
}
```

### Component Adaptations
- **Navigation**: Horizontal links → Hamburger menu
- **Sidebar**: Sticky → Static → Stacked
- **Images**: Responsive sizing with lazy loading
- **Typography**: Fluid scaling using clamp()

## Visual Design Elements

### Background Textures
- **Hero & Sidebar**: Subtle paper texture
- **Content Areas**: Clean white backgrounds
- **Purpose**: Maintain brand identity while ensuring readability

### Interactive States
- **Buttons**: Teal background with white text
- **Links**: Underline on hover
- **Form Fields**: Focus states with teal borders
- **Cards**: Subtle shadows and hover effects

### Spacing System
- **Base Unit**: 0.25rem (4px)
- **Scale**: 0.25rem, 0.5rem, 1rem, 1.5rem, 2rem, 3rem, 4rem
- **Usage**: Consistent padding and margins throughout

## Accessibility Considerations

### Color Contrast
- All text meets WCAG AA contrast ratios
- Interactive elements have clear focus states
- Color not used as sole information carrier

### Keyboard Navigation
- Tab order follows logical flow
- Focus indicators clearly visible
- Skip links for main content areas

### Screen Reader Support
- Semantic HTML structure
- ARIA labels where needed
- Alt text for images and icons

## Performance Optimizations

### Image Strategy
- Next.js Image component for optimization
- Responsive images with appropriate sizing
- Lazy loading for below-fold content

### CSS Architecture
- Tailwind CSS for utility-first approach
- Custom CSS for grid system
- Minimal custom animations

### Font Loading
- System fonts for performance
- Preload critical webfonts
- Font-display: swap for brand fonts
