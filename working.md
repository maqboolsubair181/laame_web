# Laame Jewels — Working Document

> Last updated: 2026-05-12
> This file is meant for handoff to another agent or session. It documents everything built, what works, and what remains.

---

## Project Overview

**Brand**: LaaMe Jewels
**Type**: Production-level jewellery e-commerce site
**Stack**: Nuxt 3 + Vue 3 + Tailwind CSS v4 + Pinia + Nuxt Content
**Repo**: https://github.com/maqboolsubair181/laame_web
**Hosting**: Vercel (auto-deploy from `main` branch)
**Status**: ✅ Live on Vercel, all features functional

---

## Product Catalogue Reality

> ⚠️ CRITICAL — All products are NOT real gold/diamonds. They are:
> - **18K Gold Plated** 316 & 304 Stainless Steel
> - **Anti-tarnish** and **hypoallergenic**
> - All JSON descriptions and component copy reflect this correctly.
> - Never revert to "22kt gold", "real diamonds", "BIS Hallmarked", or "certified" language anywhere.

---

## What Was Built

### Project Config Files
| File | Status | Notes |
|---|---|---|
| `package.json` | ✅ | Pinia 2.x, @pinia/nuxt 0.5.x, @pinia-plugin-persistedstate/nuxt 1.2.1, legacy-peer-deps |
| `nuxt.config.ts` | ✅ | All modules, components pathPrefix:false, Google Fonts, runtimeConfig.whatsappPhone |
| `tailwind.config.js` | ✅ | Custom palette, fonts, aspect ratios |
| `assets/css/main.css` | ✅ | All design tokens, component classes, scrollbar |
| `.gitignore` | ✅ | node_modules, .nuxt, .output, dist, .env excluded |

---

### Data Layer
| File | Status | Notes |
|---|---|---|
| `PRODUCTS.md` | ✅ | Auto-generated professional catalog overview — 20 JSON products |
| `content/products/18k-gold-plated-rose-flower.json` | ✅ | Rings |
| `content/products/dainty-double-layered-heart.json` | ✅ | Necklaces |
| `content/products/elegant-crystal-stone-dangler.json` | ✅ | Earrings |
| `content/products/floral-crystal-bracelet.json` | ✅ | Bracelets |
| `content/products/gold-plated-minimal-rectangle-crystal.json` | ✅ | Necklaces |
| `content/products/golden-airtick-pendant.json` | ✅ | Necklaces — Bestseller on homepage |
| `content/products/vintage-gold-cuff-bracelet.json` | ✅ | Bracelets |
| `content/products/diamond-tennis-bracelet.json` | ✅ | Bracelets (Crystal, not diamond) |
| `content/products/emerald-beaded-bracelet.json` | ✅ | Bracelets |
| `content/products/sapphire-drop-pendant.json` | ✅ | Necklaces |
| `content/products/pearl-choker-necklace.json` | ✅ | Necklaces |
| `content/products/ruby-solitaire-chain.json` | ✅ | Necklaces |
| `content/products/traditional-temple-necklace.json` | ✅ | Necklaces |
| `content/products/rose-gold-layered-chain.json` | ✅ | Necklaces |
| `content/products/kundan-bridal-set.json` | ✅ | Necklaces (listed as choker, NOT bridal) |
| `content/products/geometric-gold-pendant.json` | ✅ | Necklaces |
| `content/products/vintage-locket-necklace.json` | ✅ | Necklaces |
| `content/products/crystal-halo-pendant.json` | ✅ | Necklaces |
| `content/products/emerald-choker-set.json` | ✅ | Necklaces |
| `content/products/floral-diamond-necklace.json` | ✅ | Necklaces (Crystal, not diamond) |

---

### State & Composables
| File | Status | Notes |
|---|---|---|
| `stores/cart.js` | ✅ | Pinia store, persist:true |
| `stores/wishlist.js` | ✅ | Pinia store, persist:true — created 2026-05-10 (migrated from composable) |
| `composables/useWhatsAppOrder.js` | ✅ | Phone from runtimeConfig; fallback `919744880434` |
| `composables/useWishlist.js` | ✅ | Thin wrapper around `useWishlistStore` — backward compatible with all components |

---

### Layout Components
| File | Status | Notes |
|---|---|---|
| `components/layout/PromoBar.vue` | ✅ | Fixed `top-0 z-[60]`; slides away with `translateY(-100%)` on scroll (≥40px); PromoBar collapses first, header fills gap |
| `components/layout/AppHeader.vue` | ✅ | Injects `scrolledPastPromo` from `app.vue` (no own scroll listener); transitions from `top-[37px]` → `top-0` when promo collapses |
| `components/layout/AppFooter.vue` | ✅ | Phone: +91 97448 80434, Email: laamejewels@gmail.com |

---

### Product Components
| File | Status | Notes |
|---|---|---|
| `components/product/ProductCard.vue` | ✅ | |
| `components/product/ProductGrid.vue` | ✅ | |
| `components/product/ProductGallery.vue` | ✅ | |

---

### Cart Components
| File | Status | Notes |
|---|---|---|
| `components/cart/CartDrawer.vue` | ✅ | |
| `components/cart/CartItem.vue` | ✅ | |

---

### UI Components
| File | Status | Notes |
|---|---|---|
| `components/ui/WhatsAppButton.vue` | ✅ | |
| `components/ui/WhatsAppModal.vue` | ✅ | Accepts `qty` prop; total = price × qty (bug fixed) |
| `components/ui/WishlistButton.vue` | ✅ | |
| `components/ui/FilterBar.vue` | ✅ | |
| `components/ui/AccordionItem.vue` | ✅ | |

---

### Home Components
| File | Status | Notes |
|---|---|---|
| `components/home/HeroBanner.vue` | ✅ | "New Collection 2026"; 3 slides: `cover1.png`, `cover4.jpg` (updated), `cover5.webp`; crossfade 1.2s with zoom in/out; 5s interval |
| `components/home/CategoryGrid.vue` | ✅ | 4 categories only: Earrings, Necklaces, Rings, Bracelets |
| `components/home/FeaturedProducts.vue` | ✅ | |
| `components/home/PromoBanner.vue` | ✅ | "The New Edit" (bridal removed); uses `cover2.jpg` |
| `components/home/Testimonials.vue` | ❌ DELETED | Removed at user request — not on homepage |

---

### Pages
| File | Status | Notes |
|---|---|---|
| `app.vue` | ✅ | PromoBar (fixed) + Header (fixed at top-[37px]) + CartDrawer + Footer + Mobile cart bar; `<main>` has `pt-[101px] md:pt-[117px]` |
| `pages/index.vue` | ✅ | Full homepage with SEO + JSON-LD; Testimonials removed |
| `pages/shop/index.vue` | ✅ | 4 filter pills (All/Earrings/Necklaces/Rings/Bracelets), fuzzy search via fuse.js, IntersectionObserver infinite scroll |
| `pages/shop/[slug].vue` | ✅ | Weight tag removed; no Size Guide accordion; no-returns accordion; WhatsApp modal receives `:qty` |
| `pages/collections/[slug].vue` | ✅ | Dynamic collection page |
| `pages/about.vue` | ✅ | Uses `cover3.webp` as hero |
| `pages/wishlist.vue` | ✅ | |
| `pages/shipping.vue` | ✅ | "Bridal Sets" → "Custom Pieces" |
| `pages/returns.vue` | ✅ | States NO returns or exchanges policy |
| `pages/size-guide.vue` | ✅ | Page exists but NOT linked in nav/footer |
| `pages/care.vue` | ✅ | |
| `pages/privacy.vue` | ✅ | |
| `pages/terms.vue` | ✅ | |

---

### Public Images
| Path | Used By |
|---|---|
| `public/images/cover1.png` | `HeroBanner.vue` slide 1 |
| `public/images/cover2.jpg` | `PromoBanner.vue` |
| `public/images/cover3.webp` | `pages/about.vue` |
| `public/images/cover4.jpg` | `HeroBanner.vue` slide 2 (updated 2026-05-12 from LAAME WEB PIC) |
| `public/images/cover5.webp` | `HeroBanner.vue` slide 3 |
| `public/images/jewel.png` | AppHeader + AppFooter logos |
| `public/images/products/earrings1.jpg` | Elegant Crystal Stone Dangler |
| `public/images/products/rings1.jpg` | 18K Gold-Plated Rose Flower |
| `public/images/products/bracelet1.png` | Floral Crystal Bracelet |
| `public/images/products/bracelet2.png` | Vintage Gold Cuff Bracelet |
| `public/images/products/bracelet3.png` | Crystal Tennis Bracelet |
| `public/images/products/bracelet4.png` | Emerald Beaded Bracelet |
| `public/images/products/necklace1.jpeg` | Gold-Plated Minimal Rectangle Crystal |
| `public/images/products/necklace2.png` | Dainty Double Layered Heart |
| `public/images/products/necklace3.jpeg` | Golden Airtick Pendant |
| `public/images/products/necklace4.png` | Sapphire Drop Pendant |
| `public/images/products/necklace5.png` | Pearl Choker Necklace |
| `public/images/products/necklace6.png` | Ruby Solitaire Chain |
| `public/images/products/necklace7.png` | Traditional Temple Necklace |
| `public/images/products/necklace8.png` | Rose Gold Layered Chain |
| `public/images/products/necklace9.png` | Kundan Bridal (Choker) Set |
| `public/images/products/necklace10.png` | Geometric Gold Pendant |
| `public/images/products/necklace11.png` | Vintage Locket Necklace |
| `public/images/products/necklace12.png` | Crystal Halo Pendant |
| `public/images/products/necklace13.png` | Emerald Choker Set |
| `public/images/products/necklace14.png` | Floral Crystal Necklace |

---

## Design System

```
Fonts:
  Headings: Cormorant Garamond (serif)
  Body:     DM Sans

Colours:
  --cream:      #FAF8F5  (bg)
  --ink:        #1C1C1C  (headings/body)
  --gold:       #B8942E  (accent)
  --gold-light: #E8D5A3  (soft gold)
  --muted:      #7A7A7A  (captions)
  --green-wa:   #25D366  (WhatsApp only)
```

---

## Key Technical Decisions

- **`--legacy-peer-deps`**: Required because `@pinia/nuxt` 0.5.x requires pinia 2.x, while 0.9.x requires pinia 3.x. Stayed at 0.5.x + pinia 2.x for compatibility with persistedstate.
- **`components.pathPrefix: false`**: Set in nuxt.config so `PromoBar`, `AppHeader`, etc. resolve without folder prefix.
- **No `group` in `@apply`**: Tailwind v3 disallows `@apply group`. The `group` class is added directly in templates; hover scale uses plain CSS `.product-card:hover .card-img`.
- **Fuzzy Search**: Implemented `fuse.js` in `pages/shop/index.vue` for premium fuzzy text matching across product fields.
- **WhatsApp phone**: Stored in `runtimeConfig.public.whatsappPhone` (`919744880434`). Change in `nuxt.config.ts` only.
- **Contact email**: `laamejewels@gmail.com` (updated 2026-05-12).
- **Mobile menu fix**: `AppHeader.vue` mobile overlay moved outside `<header>` tag to prevent clipping from `backdrop-filter` containing block.
- **WhatsApp total bug fixed**: `WhatsAppModal.vue` now accepts a `:qty` prop. Total is calculated as `price × qty`, fixing the bug where total showed ₹0.
- **No returns policy**: `returns.vue` and product accordion both state explicitly that no returns or exchanges are accepted.
- **Product material accuracy**: All JSON files and Vue copy updated — material = `18K Gold Plated Stainless Steel`, purity = `Anti-Tarnish`. No references to real gold/diamonds.
- **Scroll behavior fix (2026-05-12)**: Single scroll source in `app.vue` (threshold > 40px). PromoBar uses `translateY(-100%)` for smooth upward slide. AppHeader injects `scrolledPastPromo` from `app.vue` (no own scroll listener). Previously AppHeader had a conflicting duplicate listener causing it to appear to collapse instead of the PromoBar.
- **Wishlist persistence fix (2026-05-10)**: Wishlist migrated from `useState` + manual `localStorage` to a proper Pinia store (`stores/wishlist.js`) with `persist: true`. `useWishlist.js` is now a thin backward-compatible wrapper. Cart was already using Pinia correctly.

---

## How to Run

```bash
cd c:\Users\user\OneDrive\Desktop\Jewellery-Web
npm run dev
# Visit http://localhost:3000
```

---

## Known Issues / TODOs

- `#app-manifest` Vite pre-transform warnings: cosmetic only, doesn't break SSR
- `pages/size-guide.vue` still exists but is intentionally unlinked from nav and footer

---

## Removed / Intentionally Absent

| Item | Reason |
|---|---|
| Testimonials section & `Testimonials.vue` | User removed — not needed |
| Bridal Sets category & sub-pages | User removed — not stocked |
| Bangles & Anklets category | User removed — not stocked |
| Size Guide link (nav + footer) | User removed |
| Weight tag on product pages | User removed |
| "Use code FIRST10" promo message | User removed |
| "BIS Hallmarked" / "22kt gold" copy | Inaccurate — replaced with 18K gold plated |
| Returns & exchange policy | Business decision — no returns accepted |

---

## Next Steps (if continuing work)

1. Replace `public/images/products/` with higher-resolution real photos when available.
2. Consider adding a second earring product (only 1 earring currently).
3. Connect to a real image CDN via `@nuxt/image` provider config if bandwidth becomes an issue.
