# Jewellery Store — Project Rules & Design System

You are building a production-level jewellery e-commerce site. The visual references are:
- **The Jewelbox** (thejewelbox.in) — clean, modern Indian jewellery store. Category-rich navigation, minimal product cards, strong promo banners.
- **Nihira Jewels** (nihirajewels.in) — premium, editorial, luxury feel. Rich imagery, sophisticated typography, story-driven layout.

Blend both: the clean navigation structure of Jewelbox + the premium editorial aesthetic of Nihira. No AI-looking UI. No generic templates. Every pixel must feel intentional.

---
### Website Name
- Laame Jewels
- use the jewel.png for logo reference

## Stack

- Nuxt 3 (latest)
- Vue 3 Composition API — always `<script setup>`
- Tailwind CSS v4
- Pinia + pinia-plugin-persistedstate
- Nuxt Content v3 (products as local JSON files)
- @nuxt/image (every image goes through NuxtImg)
- VueUse

---

## Typography & Colours

```
Font Headings : Cormorant Garamond (serif, elegant, premium)
Font Body     : DM Sans (clean, modern, readable)
Google Fonts  : both imported in nuxt.config.ts head

Colours:
  --cream      : #FAF8F5   (page background)
  --ink        : #1C1C1C   (headings, body)
  --gold       : #B8942E   (accent, borders, highlights)
  --gold-light : #E8D5A3   (soft gold for backgrounds)
  --muted      : #7A7A7A   (captions, metadata)
  --white      : #FFFFFF
  --green-wa   : #25D366   (WhatsApp button only)
```

Never use default Tailwind colours (blue, indigo, etc). Only use the palette above.

---

## Design Rules — Non-Negotiable

- **Spacing**: generous. Sections need breathing room. Min `py-20` on desktop sections.
- **Images**: always `object-cover`, full-bleed where possible. Use aspect ratios — product cards `aspect-[3/4]`, hero `aspect-[16/7]`.
- **Hover**: always `transition-all duration-500`. Product images scale `1.04` on hover.
- **Buttons**: no `rounded-full`. Use `rounded-none` (sharp) for primary, `rounded-sm` for secondary.
- **Cards**: no card shadows. Use subtle `border border-[#E8D5A3]` or none at all.
- **Nav**: inspired by Jewelbox — logo center or left, mega dropdown for categories, sticky on scroll with backdrop blur.
- **Promo bar**: top of page, thin gold background, small centered text (e.g. "Free shipping on orders above ₹1000").
- **Mobile**: hamburger menu slides in from left. Bottom of mobile shows sticky "View Cart" bar when cart has items.
- **Typography hierarchy**: section labels in small uppercase gold tracking (`text-xs tracking-[0.2em] text-[#B8942E] uppercase`), headings in Cormorant Garamond, body in DM Sans.
- No lorem ipsum. Write real jewellery copy everywhere.

---

## Navigation Structure (from Jewelbox reference)

```
Top promo bar → Logo + Nav + Icons (search, wishlist, cart)

Nav categories:
  What's New
  Earrings       → Studs | Jhumkas | Hoops | Chandbalis | Drop & Danglers | Ear Cuffs
  Necklaces      → Pendants & Chains | Chokers | Layered | Long Necklaces
  Rings          → Stackable | Solitaire | Statement | Bands
  Bracelets      → Chain | Cuffs & Bangles | Charm | Tennis | Beaded
  Bangles & Anklets
  Bridal Sets
  Shop by Budget → Under ₹500 | Under ₹1000 | Under ₹2000 | Above ₹2000
```

---

## Project Structure

```
/
├── AGENTS.md
├── assets/
│   └── css/main.css
├── components/
│   ├── layout/
│   │   ├── AppHeader.vue       ← sticky, blurred, mega menu
│   │   ├── PromoBar.vue        ← gold top strip
│   │   └── AppFooter.vue
│   ├── product/
│   │   ├── ProductCard.vue     ← image zoom, name, price, wishlist icon
│   │   ├── ProductGrid.vue     ← responsive grid wrapper
│   │   └── ProductGallery.vue  ← main image + thumbnails
│   ├── cart/
│   │   ├── CartDrawer.vue      ← slides in from right
│   │   └── CartItem.vue
│   ├── ui/
│   │   ├── WhatsAppButton.vue
│   │   ├── WhatsAppModal.vue   ← name/phone/address form before sending
│   │   ├── WishlistButton.vue
│   │   └── FilterBar.vue
│   └── home/
│       ├── HeroBanner.vue
│       ├── CategoryGrid.vue
│       ├── FeaturedProducts.vue
│       ├── PromoBanner.vue     ← full-bleed mid-page banner
│       └── Testimonials.vue
├── composables/
│   ├── useWhatsAppOrder.js
│   └── useWishlist.js
├── content/
│   └── products/
│       └── [slug].json
├── pages/
│   ├── index.vue
│   ├── shop/
│   │   ├── index.vue
│   │   └── [slug].vue
│   ├── collections/
│   │   └── [slug].vue
│   └── about.vue
├── stores/
│   └── cart.js
└── nuxt.config.ts
```

---

## nuxt.config.ts

```typescript
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxt/image',
    '@nuxt/content',
  ],
  css: ['~/assets/css/main.css'],
  image: {
    quality: 85,
    formats: ['webp'],
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: { lang: 'en' },
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&family=DM+Sans:wght@300;400;500&display=swap'
        }
      ]
    }
  }
})
```

---

## CSS — assets/css/main.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --cream: #FAF8F5;
  --ink: #1C1C1C;
  --gold: #B8942E;
  --gold-light: #E8D5A3;
  --muted: #7A7A7A;
  --green-wa: #25D366;
}

@layer base {
  html {
    background-color: var(--cream);
    color: var(--ink);
    font-family: 'DM Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  h1, h2, h3, h4, h5 {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 400;
    line-height: 1.15;
  }
}

@layer components {
  .btn-primary {
    @apply bg-[#1C1C1C] text-[#FAF8F5] px-8 py-3.5 text-xs tracking-[0.15em] uppercase font-medium transition-all duration-300 hover:bg-[#B8942E] rounded-none;
  }
  .btn-ghost {
    @apply border border-[#B8942E] text-[#1C1C1C] px-8 py-3.5 text-xs tracking-[0.15em] uppercase font-medium transition-all duration-300 hover:bg-[#B8942E] hover:text-white rounded-none;
  }
  .btn-whatsapp {
    @apply bg-[#25D366] text-white px-6 py-3.5 text-sm font-medium flex items-center justify-center gap-2.5 transition-all duration-300 hover:bg-[#1fbd5a] w-full rounded-none;
  }
  .label {
    @apply text-xs tracking-[0.2em] text-[#B8942E] uppercase block mb-3;
  }
  .section-title {
    @apply font-serif text-4xl md:text-5xl text-[#1C1C1C] leading-tight;
  }
  .product-card {
    @apply group cursor-pointer;
  }
  .product-card .image-wrap {
    @apply overflow-hidden aspect-[3/4] bg-[#F0ECE4];
  }
  .product-card img {
    @apply w-full h-full object-cover transition-transform duration-700 group-hover:scale-105;
  }
  .product-card .name {
    @apply font-serif text-lg text-[#1C1C1C] mt-3 leading-snug;
  }
  .product-card .price {
    @apply text-sm text-[#7A7A7A] mt-1;
  }
  .tag {
    @apply text-[10px] border border-[#B8942E] text-[#B8942E] px-2.5 py-1 tracking-[0.12em] uppercase;
  }
  .page-enter-active,
  .page-leave-active {
    transition: opacity 0.25s ease;
  }
  .page-enter-from,
  .page-leave-to {
    opacity: 0;
  }
}
```

---

## Product JSON Schema — content/products/[slug].json

```json
{
  "id": "ring-001",
  "slug": "22kt-gold-lotus-ring",
  "name": "22kt Gold Lotus Ring",
  "price": 24500,
  "salePrice": null,
  "category": "Rings",
  "subcategory": "Statement",
  "material": "22kt Gold",
  "purity": "BIS Hallmarked",
  "weight": "4.2g",
  "inStock": true,
  "isFeatured": true,
  "isNew": true,
  "tags": ["bridal", "gifting", "gold"],
  "images": [
    "/images/products/ring-001-a.jpg",
    "/images/products/ring-001-b.jpg",
    "/images/products/ring-001-c.jpg"
  ],
  "description": "Handcrafted lotus ring in 22kt gold. Each petal is individually set for maximum light play, inspired by South Indian temple jewellery. Delivered in a signature gift box.",
  "collection": "bridal"
}
```

---

## Pinia Cart Store — stores/cart.js

```javascript
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
    isOpen: false,
  }),
  getters: {
    total: (state) =>
      state.items.reduce((sum, i) => sum + i.price * i.qty, 0),
    count: (state) =>
      state.items.reduce((sum, i) => sum + i.qty, 0),
    isEmpty: (state) => state.items.length === 0,
  },
  actions: {
    addItem(product) {
      const existing = this.items.find(i => i.id === product.id)
      existing ? existing.qty++ : this.items.push({ ...product, qty: 1 })
      this.isOpen = true
    },
    removeItem(id) {
      this.items = this.items.filter(i => i.id !== id)
    },
    updateQty(id, qty) {
      const item = this.items.find(i => i.id === id)
      if (item) item.qty = Math.max(1, qty)
    },
    clearCart() { this.items = [] },
  },
  persist: { storage: localStorage },
})
```

---

## WhatsApp Composable — composables/useWhatsAppOrder.js

```javascript
export const useWhatsAppOrder = () => {
  // Replace with your number: country code + number, no + or spaces
  const PHONE = '919876543210'

  const openWhatsApp = (items, total, customer) => {
    const lines = items
      .map(i => `• ${i.name} × ${i.qty}  →  ₹${(i.price * i.qty).toLocaleString('en-IN')}`)
      .join('\n')

    const msg =
`Hello! I'd like to place an order 🛍️

*Items:*
${lines}

*Total: ₹${total.toLocaleString('en-IN')}*

*My Details:*
Name: ${customer.name}
Phone: ${customer.phone}
Address: ${customer.address}

Please confirm availability. Thank you!`

    window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return { openWhatsApp }
}
```

---

## Page Blueprints

### index.vue — Homepage
1. `<PromoBar />` — "Free shipping on orders above ₹1000 · Use code FIRST10 for 10% off"
2. `<AppHeader />` — logo left, nav center, icons right (search, wishlist, cart count badge)
3. `<HeroBanner />` — full-screen. Large Cormorant heading left, hero product image right. Two CTAs: "Shop Now" (dark btn) + "New Arrivals" (ghost btn). No gradients, no overlays. Real image.
4. `<CategoryGrid />` — row of 5–6 square image tiles. Category name overlaid bottom-left in white serif. Hover: subtle scale + gold underline on text.
5. `<FeaturedProducts />` — "Bestsellers" gold label + serif heading + 4-col product grid + "View All" ghost button.
6. `<PromoBanner />` — full-bleed dark image, white serif headline, gold CTA. Editorial feel, like Nihira.
7. `<FeaturedProducts collection="new" />` — "What's New" section.
8. Testimonials — 3 quotes. Italic serif quote text, customer name in small DM Sans caps. No stars, no avatars.
9. `<AppFooter />` — logo, one-line tagline, nav columns, WhatsApp + Instagram icons, copyright.

### shop/index.vue — Catalogue
- Category pill filters (All, Earrings, Necklaces, Rings, etc.)
- Sort dropdown: Newest, Price ↑, Price ↓
- 2-col mobile / 4-col desktop `<ProductGrid />`
- Each card: image with wishlist heart top-right on hover, name, material tag, price
- Infinite scroll via IntersectionObserver — no page number buttons

### shop/[slug].vue — Product Detail
- Breadcrumb: Home → Category → Product Name (small, muted)
- Left: `<ProductGallery />` — large main image, thumbnail strip below
- Right:
  - Gold label (subcategory)
  - Product name: `text-4xl font-serif`
  - Price: sale price in gold + original struck-through if on sale
  - Tags: material, purity, weight
  - Description paragraph
  - Qty selector (– 1 +)
  - `btn-primary` "Add to Cart" full width
  - `btn-ghost` "Add to Wishlist"
  - `btn-whatsapp` "Order via WhatsApp" — opens `<WhatsAppModal />`
  - Accordion: Care Instructions | Shipping | Returns
- Bottom: "You May Also Like" — 4 cards, same category

---

## Coding Standards

- All components under 150 lines — split if larger
- Always `<NuxtImg>` — never raw `<img>`
- All prices: `₹${value.toLocaleString('en-IN')}`
- Data via `queryContent()` only — never in `mounted()`
- Loading state: skeleton UI (not a spinner)
- Empty state: styled "no products found" message
- `useSeoMeta()` + JSON-LD on every product page
- WhatsApp number only in `useWhatsAppOrder.js`
- Mobile-first always


## Wroking md

- Generate a working.md so that i can give it to another agent to work on it or when i switch to another account it can understand what i want
- Always Update this file when i ask you to do something new 
