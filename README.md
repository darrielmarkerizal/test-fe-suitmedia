# Suitmedia Frontend Developer Intern Test

**Nama:** Darriel Markerizal  
**Program:** Magang Berdampak 2025 - Frontend Developer Intern  
**Perusahaan:** Suitmedia

## 🚀 Demo

**Live Demo:** [https://project-test-darriel-markerizal.vercel.app/](https://project-test-darriel-markerizal.vercel.app/)

## 📋 Deskripsi Project

Project ini merupakan implementasi test untuk posisi Frontend Developer Intern di Suitmedia. Website ini menampilkan halaman Ideas dengan fitur-fitur yang telah ditentukan dalam requirement test.

## ✨ Fitur yang Diimplementasikan

### 1. Header

- ✅ **Fixed position** dengan hide/show behavior saat scroll
- ✅ **Transparent background** saat scroll ke bawah
- ✅ **Active state menu** sesuai halaman yang dikunjungi
- ✅ **Responsive design** untuk mobile dan desktop

### 2. Banner

- ✅ **Hero banner** dengan background image
- ✅ **Area miring** pada bagian bawah banner menggunakan SVG
- ✅ **Parallax effect** pada image dan text saat scroll
- ✅ **Responsive** untuk berbagai ukuran layar

### 3. List Post

- ✅ **Sorting** berdasarkan terbaru dan terlama
- ✅ **Show per page** dengan pilihan [10, 20, 50]
- ✅ **Pagination** dengan navigasi halaman
- ✅ **State persistence** - tidak reset saat refresh halaman
- ✅ **Consistent thumbnail ratio** (4:3) di semua cards
- ✅ **Lazy loading** pada images
- ✅ **Title limitation** maksimal 3 baris dengan ellipsis
- ✅ **Status indicator** showing current items range

### 4. API Integration

- ✅ **Proxy configuration** untuk mengakses Suitmedia API
- ✅ **Dynamic data fetching** dari `https://suitmedia-backend.suitdev.com/api/ideas`
- ✅ **URL parameters** handling untuk pagination, sorting, dan filtering
- ✅ **Image proxy** untuk mengatasi CORS issues
- ✅ **Error handling** dan loading states

## 🛠 Tech Stack

- **Framework:** Next.js 14.2.30 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **HTTP Client:** Axios
- **Deployment:** Vercel
- **Image Optimization:** Next.js Image component

## 📁 Struktur Project

```
src/
├── app/                    # App Router pages
│   ├── api/               # API routes (proxy)
│   ├── ideas/             # Ideas page
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── blog/             # Blog-related components
│   ├── BlogGrid.tsx      # Main blog grid
│   ├── HeroBanner.tsx    # Hero banner component
│   └── Navbar.tsx        # Navigation component
├── hooks/                # Custom React hooks
├── services/             # API services
├── types/                # TypeScript type definitions
└── utils/                # Utility functions
```

## 🔧 Installation & Setup

1. **Clone repository**

```bash
git clone [repository-url]
cd test-suit
```

2. **Install dependencies**

```bash
npm install
```

3. **Run development server**

```bash
npm run dev
```

4. **Build for production**

```bash
npm run build
```

## 🌐 API Configuration

Project ini menggunakan proxy configuration untuk mengakses Suitmedia API:

```javascript
// next.config.mjs
async rewrites() {
  return [
    {
      source: "/api/proxy/:path*",
      destination: "https://suitmedia-backend.suitdev.com/api/:path*",
    },
  ];
}
```

**API Endpoint:** `https://suitmedia-backend.suitdev.com/api/ideas`

**Parameters:**

- `page[number]`: Current page number
- `page[size]`: Items per page (10, 20, 50)
- `append[]`: Include small_image and medium_image
- `sort`: published_at atau -published_at

## 📱 Responsive Design

Website ini fully responsive dan telah dioptimasi untuk:

- ✅ Desktop (1024px+)
- ✅ Tablet (768px - 1023px)
- ✅ Mobile (< 768px)

## 🎯 Key Features Implemented

1. **URL State Management** - Filter states tersimpan di URL
2. **Infinite Scroll Alternative** - Pagination dengan navigasi yang intuitif
3. **Image Optimization** - Lazy loading dan responsive images
4. **Performance Optimization** - Code splitting dan optimized builds
5. **Error Handling** - Graceful error handling dengan retry functionality
6. **Loading States** - Smooth loading indicators

## 📊 Performance Features

- ✅ **Lazy loading** untuk images
- ✅ **Code splitting** dengan Next.js
- ✅ **Optimized images** dengan Next.js Image component
- ✅ **Caching** untuk API responses
- ✅ **Minimal bundle size** dengan tree shaking

## 🔗 Links

- **Live Demo:** [https://project-test-darriel-markerizal.vercel.app/](https://project-test-darriel-markerizal.vercel.app/)
- **Source Code:** [Repository Link]

---

**Dibuat oleh:** Darriel Markerizal  
**Untuk:** Suitmedia - Magang Berdampak 2025  
**Tanggal:** 2025
