<template>
  <div class="min-h-screen bg-[#FAF8F5]">
    <div class="max-w-[1400px] mx-auto px-4 md:px-8 py-12 md:py-16">
      <div class="mb-10 text-center">
        <span class="label">Your Collection</span>
        <h1 class="section-title">Wishlist</h1>
        <p class="text-sm text-[#7A7A7A] mt-2">
          {{ wishlist.wishlistCount }} piece{{ wishlist.wishlistCount !== 1 ? 's' : '' }} saved
        </p>
      </div>

      <!-- Empty State -->
      <div v-if="wishlist.wishlistCount === 0" class="text-center py-20">
        <div class="w-16 h-16 rounded-full bg-[#E8D5A3]/30 flex items-center justify-center mx-auto mb-6">
          <svg width="24" height="24" viewBox="0 0 18 18" fill="none">
            <path d="M9 15.5S1.5 10.5 1.5 5.5a4 4 0 017.5-2 4 4 0 017.5 2c0 5-7.5 10-7.5 10z" stroke="#B8942E" stroke-width="1.4"/>
          </svg>
        </div>
        <h2 class="font-serif text-2xl text-[#1C1C1C] mb-3">Your wishlist is empty</h2>
        <p class="text-[#7A7A7A] mb-8">Discover pieces you love and save them here.</p>
        <NuxtLink to="/shop" class="btn-primary">Explore Collection</NuxtLink>
      </div>

      <!-- Loading State -->
      <div v-else-if="pending" class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        <div v-for="i in wishlist.wishlistCount" :key="i">
           <div class="skeleton aspect-[3/4] w-full mb-3" />
           <div class="skeleton h-4 w-2/3 mb-2" />
           <div class="skeleton h-3 w-1/3" />
        </div>
      </div>

      <!-- Wishlist Grid -->
      <ProductGrid 
        v-else 
        :products="wishlistedProducts || []" 
        :skeleton-count="wishlist.wishlistCount"
      />
    </div>
  </div>
</template>

<script setup>
import { useWishlist } from '~/composables/useWishlist'

const wishlist = useWishlist()

// Fetch only the products that are in the wishlist
const { data: wishlistedProducts, pending } = await useAsyncData(
  'wishlist-products',
  () => {
    if (wishlist.wishlist.value.length === 0) return Promise.resolve([])
    return queryContent('products')
      .where({ id: { $in: wishlist.wishlist.value } })
      .find()
  },
  {
    watch: [() => wishlist.wishlist.value],
    immediate: true
  }
)

useSeoMeta({
  title: 'Wishlist — Laame Jewels',
  description: 'View your saved jewellery pieces.',
})
</script>
