# Laame Jewels — Working Document

> Last updated: 2026-04-28
> This file is meant for handoff to another agent or session. It documents everything built, what works, and what remains.

---

## Project Overview

**Brand**: LaAme Jewels  
**Type**: Production-level jewellery e-commerce site  
**Stack**: Nuxt 3 + Vue 3 + Tailwind CSS + Pinia + Nuxt Content  
**Status**: ✅ Scaffolded and running locally  

---

## What Was Built

### Project Files
| File | Status | Notes |
|---|---|---|
| `package.json` | ✅ | Pinia 2.x, @pinia/nuxt 0.5.x, @pinia-plugin-persistedstate/nuxt 1.2.1, legacy-peer-deps |
| `nuxt.config.ts` | ✅ | All modules, components pathPrefix:false, Google Fonts |
| `tailwind.config.js` | ✅ | Custom palette, fonts, aspect ratios |
| `assets/css/main.css` | ✅ | All design tokens, component classes, scrollbar |

### Data Layer
| File | Status | Notes |
|---|---|---|
| `PRODUCTS.md` | ✅ | Auto-generated professional catalog overview of all JSON products |
| `content/products/18k-gold-plated-rose-flower.json` | ✅ |
| `content/products/dainty-double-layered-heart.json` | ✅ |
| `content/products/elegant-crystal-stone-dangler.json` | ✅ |
| `content/products/floral-crystal-bracelet.json` | ✅ |
| `content/products/gold-plated-minimal-rectangle-crystal.json` | ✅ |
| `content/products/golden-airtick-pendant.json` | ✅ |
| `content/products/vintage-gold-cuff-bracelet.json` | ✅ |
| `content/products/diamond-tennis-bracelet.json` | ✅ |
| `content/products/emerald-beaded-bracelet.json` | ✅ |
| `content/products/sapphire-drop-pendant.json` | ✅ |
| `content/products/pearl-choker-necklace.json` | ✅ |
| `content/products/ruby-solitaire-chain.json` | ✅ |
| `content/products/traditional-temple-necklace.json` | ✅ |
| `content/products/rose-gold-layered-chain.json` | ✅ |
| `content/products/kundan-bridal-set.json` | ✅ |
| `content/products/geometric-gold-pendant.json` | ✅ |
| `content/products/vintage-locket-necklace.json` | ✅ |
| `content/products/crystal-halo-pendant.json` | ✅ |
| `content/products/emerald-choker-set.json` | ✅ |
| `content/products/floral-diamond-necklace.json` | ✅ |

### State & Composables
| File | Status | Notes |
|---|---|---|
| `stores/cart.js` | ✅ | Pinia store, persist:true |
| `composables/useWhatsAppOrder.js` | ✅ | Phone from runtimeConfig |
| `composables/useWishlist.js` | ✅ | useState + localStorage |

### Layout Components
| File | Status | Notes |
|---|---|---|
| `components/layout/PromoBar.vue` | ✅ | Rotating messages, gold bg |
| `components/layout/AppHeader.vue` | ✅ | Sticky, blur, mega menu, mobile hamburger, search overlay |
| `components/layout/AppFooter.vue` | ✅ | 4-col footer, WhatsApp/Instagram, payment icons |

### Product Components
| File | Status |
|---|---|
| `components/product/ProductCard.vue` | ✅ |
| `components/product/ProductGrid.vue` | ✅ |
| `components/product/ProductGallery.vue` | ✅ |

### Cart Components
| File | Status |
|---|---|
| `components/cart/CartDrawer.vue` | ✅ |
| `components/cart/CartItem.vue` | ✅ |

### UI Components
| File | Status |
|---|---|
| `components/ui/WhatsAppButton.vue` | ✅ |
| `components/ui/WhatsAppModal.vue` | ✅ |
| `components/ui/WishlistButton.vue` | ✅ |
| `components/ui/FilterBar.vue` | ✅ |
| `components/ui/AccordionItem.vue` | ✅ |

### Home Components
| File | Status |
|---|---|
| `components/home/HeroBanner.vue` | ✅ |
| `components/home/CategoryGrid.vue` | ✅ |
| `components/home/FeaturedProducts.vue` | ✅ |
| `components/home/PromoBanner.vue` | ✅ |
| `components/home/Testimonials.vue` | ✅ |

### Pages
| File | Status | Notes |
|---|---|---|
| `app.vue` | ✅ | PromoBar + Header + CartDrawer + Footer + Mobile cart bar |
| `pages/index.vue` | ✅ | Full homepage with SEO + JSON-LD |
| `pages/shop/index.vue` | ✅ | FilterBar, IntersectionObserver infinite scroll |
| `pages/shop/[slug].vue` | ✅ | Full product detail, accordion, related products |
| `pages/collections/[slug].vue` | ✅ | Dynamic collection page |
| `pages/about.vue` | ✅ | Brand story, values |
| `pages/wishlist.vue` | ✅ | Stub |
| `pages/shipping.vue` | ✅ | Stub |
| `pages/returns.vue` | ✅ | Stub |
| `pages/size-guide.vue` | ✅ | Stub |
| `pages/care.vue` | ✅ | Stub |
| `pages/privacy.vue` | ✅ | Stub |
| `pages/terms.vue` | ✅ | Stub |

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
- **Fuzzy Search**: Implemented `fuse.js` in `pages/shop/index.vue` for premium fuzzy text matching across multiple product fields (name, category, description, tags, etc.).
- **WhatsApp phone**: Stored in `runtimeConfig.public.whatsappPhone`. Change in `nuxt.config.ts` only.
- **Product images**: Generated with AI image tool, stored in `public/images/products/`. Replace with real photos when available.

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
- WhatsApp number is `919744421599` → updated in `nuxt.config.ts` runtimeConfig
- No real payment gateway — checkout is purely WhatsApp based

---

## Next Steps (if continuing work)

1. Review and refine product details in JSON.
2. Connect to real image CDN via `@nuxt/image` provider config if necessary.
