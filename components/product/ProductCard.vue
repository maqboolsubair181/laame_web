<template>
  <div class="product-card group cursor-pointer" @click="goToProduct">
    <div class="image-wrap">
      <!-- Badges -->
      <div class="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
        <span v-if="product.isNew" class="tag bg-[#1C1C1C] text-[#FAF8F5] border-[#1C1C1C]">New</span>
        <span v-if="product.salePrice" class="tag bg-[#B8942E] text-white border-[#B8942E]">Sale</span>
      </div>

      <!-- Wishlist -->
      <button
        class="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center bg-white/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        @click.stop="wishlist.toggleWishlist(product.id)"
        :aria-label="wishlist.isWishlisted(product.id) ? 'Remove from wishlist' : 'Add to wishlist'"
      >
        <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
          <path
            d="M9 15.5S1.5 10.5 1.5 5.5a4 4 0 017.5-2 4 4 0 017.5 2c0 5-7.5 10-7.5 10z"
            :fill="wishlist.isWishlisted(product.id) ? '#B8942E' : 'none'"
            :stroke="wishlist.isWishlisted(product.id) ? '#B8942E' : '#1C1C1C'"
            stroke-width="1.4"
          />
        </svg>
      </button>

      <NuxtImg
        :src="product.images?.[0] || '/images/placeholder.jpg'"
        :alt="product.name"
        class="card-img"
        width="400"
        height="533"
        loading="lazy"
      />
    </div>

    <div class="mt-3">
      <p class="text-[10px] tracking-[0.15em] text-[#7A7A7A] uppercase mb-1">{{ product.material }}</p>
      <h3 class="name">{{ product.name }}</h3>
      <div class="flex items-baseline gap-2 mt-1">
        <span v-if="product.salePrice" class="text-sm font-medium text-[#B8942E]">
          ₹{{ product.salePrice.toLocaleString('en-IN') }}
        </span>
        <span
          :class="[
            'text-sm',
            product.salePrice ? 'text-[#7A7A7A] line-through text-xs' : 'text-[#7A7A7A]'
          ]"
        >
          ₹{{ product.price.toLocaleString('en-IN') }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useWishlist } from '~/composables/useWishlist'

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})

const wishlist = useWishlist()

const goToProduct = () => {
  navigateTo(`/shop/${props.product.slug}`)
}
</script>
