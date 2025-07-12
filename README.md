# Suitmedia Frontend Developer Intern Test - Blog Ideas Page

**Candidate:** Darriel Markerizal  
**Program:** Magang Berdampak 2025 - Frontend Developer Intern  
**Company:** Suitmedia  
**Test Code:** NEmU5xR2yhE2

## 📋 Project Overview

This project is a blog ideas page implementation built as part of the Suitmedia Frontend Developer Intern recruitment test. The application displays a list of blog posts with sorting, pagination, and responsive design features.

## 🚀 Live Demo

[Deployment Link - To be added after deployment]

## 📁 Repository

[GitLab Repository Link - To be added]

## ✨ Features Implemented

### 1. Header Navigation

- ✅ Fixed position header with auto-hide on scroll down
- ✅ Auto-show on scroll up with transparent background
- ✅ Active state highlighting for current page
- ✅ Responsive design with mobile menu support

### 2. Hero Banner

- ✅ Dynamic banner image that can be updated via CMS
- ✅ Diagonal bottom edge design using SVG
- ✅ Parallax scrolling effect between image and text
- ✅ Responsive typography and layout

### 3. Blog Post List

- ✅ Sort functionality (newest/oldest)
- ✅ Items per page selection (10, 20, 50)
- ✅ Pagination with page navigation
- ✅ URL state persistence (sort, pagination, items per page)
- ✅ Consistent image aspect ratio (4:3)
- ✅ Lazy loading for images
- ✅ Title truncation with 3-line limit and ellipsis
- ✅ Responsive grid layout (1-4 columns based on screen size)

### 4. API Integration

- ✅ Proxy configuration for Suitmedia backend API
- ✅ Dynamic data fetching with proper error handling
- ✅ Image proxy for handling CORS issues
- ✅ Loading states and error boundaries

## 🛠 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **HTTP Client:** Axios
- **Image Optimization:** Next.js Image component
- **State Management:** React Hooks (useState, useCallback)
- **URL State:** Next.js navigation hooks

## 📦 Installation & Setup

```bash
# Clone the repository
git clone [repository-url]
cd test-suit

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🌐 API Configuration

The application uses Suitmedia's backend API with the following configuration:

- **Base URL:** `https://suitmedia-backend.suitdev.com/api/ideas`
- **Proxy Route:** `/api/proxy/*` → `https://suitmedia-backend.suitdev.com/api/*`
- **Image Proxy:** `/api/image-proxy` for handling image CORS issues

### API Parameters:

- `page[number]`: Current page number
- `page[size]`: Items per page (10, 20, 50)
- `append[]`: Include small_image and medium_image
- `sort`: `published_at` (oldest) or `-published_at` (newest)

## 📁 Project Structure
