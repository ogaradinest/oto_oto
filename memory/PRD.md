# otobrothers Website - PRD

## Project Overview
AI Automation Consultancy website for otobrothers, serving SMBs across UK and Europe.

## Original Problem Statement
Build a website based on a JSON specification file for otobrothers AI Automation Consultancy. Subsequently modified to match reference site at otobrothers-preview.preview.emergentagent.com.

## User Personas
1. **SMB Decision Makers** - CEOs, Operations Directors looking to implement AI automation
2. **Business Operators** - Managers seeking efficiency improvements through automation
3. **Potential Clients** - Companies exploring AI consultancy services

## Core Requirements (Static)
- Professional consultancy website
- Clear service offerings (Audit, Design & Deployment, Training)
- Case studies with measurable results
- Newsletter signup for lead generation
- Calendar booking for discovery calls
- Legal compliance (Privacy, Terms, Cookies)

## Tech Stack
- **Frontend**: React 19, Tailwind CSS, Radix UI components
- **Backend**: FastAPI (minimal usage for this static site)
- **Embeds**: Beehiiv (newsletter), Google Calendar (booking)

## Pages Implemented
| Page | Route | Status |
|------|-------|--------|
| Home | / | ✅ Complete |
| Case Studies | /case-studies | ✅ Complete |
| About | /about | ✅ Complete |
| Newsletter | /newsletter | ✅ Complete |
| Contact | /contact | ✅ Complete |
| Community | /community | ✅ Complete (hidden from nav) |
| Privacy Policy | /privacy | ✅ Complete |
| Terms of Service | /terms | ✅ Complete |
| Cookie Policy | /cookies | ✅ Complete |

## What's Been Implemented (22 March 2026)

### MVP Complete - Iteration 1
- [x] Initial website build from JSON spec
- [x] All pages created with content

### Design Update - Iteration 2 (Matches Reference)
- [x] Header: Orange "Your call" CTA button, removed Community from nav
- [x] Hero: New text structure with numbered steps
- [x] Services: Gray background, white cards, icons inline with titles, checkmark bullets
- [x] FAQ: White background, clean accordion styling  
- [x] Contact: Gray background with calendar embed
- [x] Case Studies: 3 updated case studies (Marketing Agency Romania, Property Management UK, Manufacturing France)
- [x] About: Simplified with co-founders image
- [x] Newsletter: Beehiiv embed with "What you'll receive" section and lead magnet

### SEO + GDPR + Refactoring - Iteration 3 (21 April 2026)
- [x] SEO meta tags via react-helmet-async on all pages (title, description, OG tags)
- [x] Open Graph + Twitter Card base tags in index.html
- [x] GDPR cookie consent banner (localStorage-based, Accept/Decline, links to Cookies PDF)
- [x] File refactoring: Newsletter.jsx → FreeResources.jsx, Contact.jsx → Products.jsx
- [x] App.js wrapped with HelmetProvider

### Key Features
- **Beehiiv Integration**: Newsletter signup form embedded
- **Google Calendar**: 25 min discovery call booking
- **Legal Compliance**: Full Privacy, Terms, Cookies policies
- **SEO**: Per-page meta titles, descriptions, Open Graph tags
- **GDPR**: Cookie consent banner with localStorage persistence

## Prioritized Backlog

### P0 (Critical) - Done
- All core pages implemented and styled to match reference

### P1 (High Priority) - Future
- [ ] Analytics integration (Google Analytics — needs G-XXXXXXXXXX ID from client)
- [ ] SEO optimization (schema markup / JSON-LD for structured data)
- [ ] Blog/Resources section

### P2 (Medium Priority) - Future
- [ ] Cookie consent banner
- [ ] Additional case studies

### P3 (Nice to Have)
- [ ] Real-time chat support
- [ ] Client portal integration
- [ ] Multi-language support

## Next Tasks
1. Add Google Analytics tracking
2. Implement cookie consent banner
3. Add meta tags for SEO
4. Consider adding blog section for thought leadership
