# 🚀 DigiTools — Digital Tools Marketplace

> A modern, fully responsive digital tools buying platform built with React.js, Tailwind CSS, and DaisyUI.

![DigiTools Banner](./public/banner.png)

---

## 📖 About the Project

**DigiTools** is a feature-rich digital marketplace where users can browse, add to cart, and purchase premium digital tools — from resume builders and social media managers to design suites and e-commerce solutions. The platform features a clean, purple-accented UI with smooth interactions and toast notifications.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| ⚛️ **React.js** | Component-based UI framework |
| 🎨 **Tailwind CSS** | Utility-first CSS styling |
| 🌼 **DaisyUI** | Pre-built component library on top of Tailwind |
| ⚡ **Vite** | Fast build tool & dev server |
| 🔔 **React-Toastify** | Toast notifications for cart actions |
| 📦 **JSON** | Local product data storage |

---

## ✨ Key Features

### 🛒 Smart Cart System
- Add/remove products dynamically
- Cart count shown live in the Navbar
- Proceed to Checkout clears all cart items
- Toast notifications on every cart action (add, remove, checkout)

### 🃏 Dynamic Product Cards
- 8 products loaded from JSON data
- 3-column responsive grid layout
- Each card shows: name, description, price, period, tag, features, and icon
- "Added to Cart" button feedback on click

### 📱 Fully Responsive
- Works seamlessly on mobile, tablet, and desktop
- Collapsible mobile navigation menu
- Adaptive grid layouts for all screen sizes

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/digitools.git

# Navigate to project folder
cd digitools

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
digitools/
├── public/
│   ├── banner.png
│   ├── rocket.png
│   └── ... (product icons)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Banner.jsx
│   │   ├── Stats.jsx
│   │   ├── MainSection.jsx
│   │   ├── ProductCard.jsx
│   │   ├── CartItem.jsx
│   │   ├── Steps.jsx
│   │   ├── Pricing.jsx
│   │   └── Footer.jsx
│   ├── products.json
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## 📸 Sections

- **Navbar** — Logo, nav links, live cart count badge
- **Hero Banner** — Headline, description, CTA buttons, floating badge
- **Stats** — 4 key metrics with icon cards
- **Products / Cart** — Toggle between product grid and cart view
- **How It Works** — 4-step process section
- **Pricing** — 3-tier pricing cards with popular plan highlighted
- **Footer** — Links, social icons, newsletter subscription

---

## 🎯 Assignment

This project was built as part of the **A-6 Digital Tools Buying Website** assignment.

- **Deadline:** 1st April, 2026

---

## 📄 License

MIT License © 2025 DigiTools
