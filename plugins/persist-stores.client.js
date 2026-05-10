// persist-stores.client.js
// Runs ONLY in the browser after hydration.
// Bypasses pinia-plugin-persistedstate (which defaults to session cookies in Nuxt SSR).
// Uses localStorage directly — survives page reloads and new browser windows.
// Only clearing browser data / incognito mode will reset state (expected behaviour).

import { useCartStore } from '~/stores/cart'
import { useWishlistStore } from '~/stores/wishlist'

const CART_KEY = 'lj_cart_v2'
const WISHLIST_KEY = 'lj_wishlist_v2'

export default defineNuxtPlugin(() => {
  const cart = useCartStore()
  const wishlist = useWishlistStore()

  // ── Restore ──────────────────────────────────────────────────────────────
  try {
    const savedCart = localStorage.getItem(CART_KEY)
    if (savedCart) {
      const parsed = JSON.parse(savedCart)
      if (Array.isArray(parsed) && parsed.length > 0) {
        cart.$patch({ items: parsed })
      }
    }
  } catch {}

  try {
    const savedWishlist = localStorage.getItem(WISHLIST_KEY)
    if (savedWishlist) {
      const parsed = JSON.parse(savedWishlist)
      if (Array.isArray(parsed)) {
        wishlist.$patch({ ids: parsed })
      }
    }
  } catch {}

  // ── Save on every change ─────────────────────────────────────────────────
  cart.$subscribe((_mutation, state) => {
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(state.items))
    } catch {}
  })

  wishlist.$subscribe((_mutation, state) => {
    try {
      localStorage.setItem(WISHLIST_KEY, JSON.stringify(state.ids))
    } catch {}
  })
})
