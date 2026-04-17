# Execution Plan - Modern Professional Portfolio

## Project Overview
This execution plan outlines the step-by-step process for scaffolding and implementing James Denny's modern professional portfolio website based on the Gemini design specifications.

## Phase 1: Project Setup & Foundation

### 1.1 Initialize Next.js Project
```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
```

### 1.2 Configure Tailwind CSS Grid System
- Create custom grid utilities for 6/12/24 column layouts
- Set up design tokens (colors, spacing, typography)
- Configure responsive breakpoints

### 1.3 Project Structure Setup
```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── projects/
│   └── contact/
├── components/
│   ├── ui/
│   ├── layout/
│   ├── sections/
│   ├── projects/
│   └── forms/
├── data/
│   ├── career.ts
│   ├── tech-stack.ts
│   ├── profile.ts
│   └── case-studies.ts
├── types/
│   └── index.ts
└── lib/
    ├── utils.ts
    ├── actions.ts
    ├── github-api.ts
    └── cache.ts
```

## Phase 2: Core Components Development

### 2.1 Layout Components
- **Header**: Responsive navigation with hamburger menu
- **Footer**: Simple footer component
- **GridContainer**: Custom 24-column grid wrapper
- **Sidebar**: Sticky tech stack display

### 2.2 UI Components
- **Button**: Reusable button with variants
- **Card**: Content card component
- **TechIcon**: Technology icon display
- **TimelineEntry**: Career timeline item
- **ProjectCard**: GitHub project display component
- **CaseStudyCard**: Commercial case study component

### 2.2 Typography System
- **Headers**: Montserrat (bold sans-serif) - CHOSEN
- **Body**: System font stack for performance
- **Brand Logo**: Original handwritten font (preserved)
- **Scale**: rem units for accessibility

### 2.3 Form Components
- **ContactForm**: Secure contact form with honeypot
- **CVDownload**: Secure CV download component
- **FormValidation**: Client-side validation utilities

## Phase 3: Page Development

### 3.1 Home Page Layout
- **Hero Section**: Profile photo + experience headline
- **Main Content**: Sidebar + career timeline
- **Projects Section**: GitHub projects + commercial case studies
- **Contact Section**: Contact form integration

### 3.2 Projects Page
- **GitHub Integration**: Dynamic project loading from API
- **Case Studies**: Commercial experience highlights
- **Filtering**: Technology and category filters
- **Caching**: HTML caching with webhook invalidation

### 3.3 Responsive Implementation
- Mobile-first approach
- Tablet adaptations
- Desktop enhancements

### 3.4 Data Integration
- Career timeline data structure
- Tech stack configuration
- Profile information management
- GitHub API integration setup

## Phase 4: Security & Forms

### 4.1 Contact Form Implementation
**Option A: Formspree (Simplest)**
- Sign up for Formspree account
- Configure form endpoint
- Implement form component

**Option B: Next.js Server Actions with Resend**
- Set up Resend account
- Create server action for email sending
- Implement form with server-side validation

### 4.2 CV Download Security
- Client-side link obfuscation
- Bot prevention techniques
- User interaction requirements

### 4.3 Spam Protection
- Honeypot field implementation
- Server-side validation
- Rate limiting considerations

## Phase 5: Content & Assets

### 5.1 Image Preparation
- Professional headshot optimization
- Company logo collection
- Tech stack icon sourcing

### 5.2 Content Population
- Career timeline data entry (5 companies with specific dates/roles)
- Tech stack selection (6 categories with 20+ technologies)
- Profile information completion (18+ years experience, BSc Computer Science)
- GitHub API integration for Projects section
- Reference letter integration (testimonials section)

### 5.3 GitHub API Integration
- **Project Sources**: Tagged GitHub repositories + commercial case studies
- **API Implementation**: GitHub REST API with caching
- **Cache Strategy**: HTML caching with GitHub webhook invalidation
- **Content Extraction**: README parsing and metadata extraction

### 5.4 SEO & Meta Tags
- Page titles and descriptions
- Open Graph tags
- Structured data implementation

## Phase 6: Performance & Optimization

### 6.1 Image Optimization
- Next.js Image component usage
- Responsive image sizing
- Lazy loading implementation

### 6.2 Performance Monitoring
- Lighthouse score optimization
- Core Web Vitals improvement
- Bundle size optimization

### 6.3 Accessibility Testing
- Screen reader compatibility
- Keyboard navigation testing
- Color contrast verification

## Phase 7: Deployment & Hosting

### 7.1 Vercel Setup
- Connect GitHub repository
- Configure environment variables
- Set up custom domain (if applicable)

### 7.2 CI/CD Configuration
- Automatic deployments on push
- Preview environments for PRs
- Build optimization

### 7.3 Monitoring & Analytics
- Error tracking setup
- Performance monitoring
- Analytics integration (optional)

## Technical Implementation Details

### Grid System Implementation
```typescript
// Custom grid utilities
const gridClasses = {
  mobile: 'grid-cols-6',
  tablet: 'md:grid-cols-12',
  desktop: 'lg:grid-cols-24'
}

// Usage examples
<div className="grid grid-cols-6 md:grid-cols-12 lg:grid-cols-24 gap-4">
  <div className="col-span-6 md:col-span-4 lg:col-span-8">
    <!-- Profile photo -->
  </div>
  <div className="col-span-6 md:col-span-8 lg:col-span-16">
    <!-- Hero content -->
  </div>
</div>
```

### Data Structure Examples
```typescript
// Career timeline data
interface CareerEntry {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate?: string;
  achievements: string[];
  logo?: string;
}

// Tech stack data
interface TechItem {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'frameworks' | 'tools' | 'design' | 'collaboration';
}

// GitHub project data
interface GitHubProject {
  id: string;
  name: string;
  description: string;
  html_url: string;
  stars: number;
  language: string;
  topics: string[];
  updated_at: string;
  readme: string;
}

// Case study data
interface CaseStudy {
  id: string;
  title: string;
  company: string;
  description: string;
  technologies: string[];
  achievements: string[];
  duration: string;
}
```

### GitHub API Implementation
```typescript
// GitHub API service
export async function getTaggedProjects() {
  const response = await fetch(
    `https://api.github.com/users/jdenny/repos?sort=updated&per_page=50`,
    {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'Authorization': `token ${process.env.GITHUB_TOKEN}`
      },
      next: { revalidate: 3600 } // Cache for 1 hour
    }
  );
  
  const repos = await response.json();
  return repos.filter(repo => repo.topics.includes('portfolio'));
}

// Cache invalidation webhook
export async function POST(request: Request) {
  const signature = request.headers.get('x-hub-signature-256');
  // Verify webhook signature
  // Invalidate cache for projects
  // Revalidate pages
}
```

### Form Security Implementation
```typescript
// Server action with honeypot check
export async function submitContactForm(formData: FormData) {
  const honeypot = formData.get('website') as string;
  
  if (honeypot) {
    throw new Error('Bot detected');
  }
  
  // Process legitimate form submission
}
```

## Success Metrics
- Lighthouse performance score > 90
- Mobile-first responsive design
- Secure contact and CV functionality
- Accessibility compliance (WCAG AA)
- Fast load times (< 2 seconds)

## Timeline Estimate
- **Phase 1-2**: 2-3 days (Foundation & Components)
- **Phase 3-4**: 2-3 days (Pages & Forms)
- **Phase 5-6**: 1-2 days (Content & Optimization)
- **Phase 7**: 1 day (Deployment)
- **Total**: 6-9 days

## Risk Mitigation
- **Content Delays**: Use placeholder data initially
- **Form Service Issues**: Have backup implementation ready
- **Design Iterations**: Modular component architecture for easy changes
- **Performance Issues**: Progressive enhancement approach
