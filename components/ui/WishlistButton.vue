<template>
  <button
    @click="wishlist.toggleWishlist(productId)"
    :aria-label="wishlist.isWishlisted(productId) ? 'Remove from wishlist' : 'Add to wishlist'"
    :class="['flex items-center gap-2 btn-ghost justify-center', { 'bg-[#FAF8F5]': wishlist.isWishlisted(productId) }]"
  >
    <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
      <path
        d="M9 15.5S1.5 10.5 1.5 5.5a4 4 0 017.5-2 4 4 0 017.5 2c0 5-7.5 10-7.5 10z"
        :fill="wishlist.isWishlisted(productId) ? '#B8942E' : 'none'"
        :stroke="wishlist.isWishlisted(productId) ? '#B8942E' : '#1C1C1C'"
        stroke-width="1.4"
      />
    </svg>
    {{ wishlist.isWishlisted(productId) ? 'Wishlisted' : 'Add to Wishlist' }}
  </button>
</template>

<script setup>
import { useWishlist } from '~/composables/useWishlist'

defineProps({
  productId: { type: String, required: true },
})

const wishlist = useWishlist()
</script>
