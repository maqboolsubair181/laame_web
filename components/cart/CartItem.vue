<template>
  <div class="flex gap-4 py-5 border-b border-[#F0ECE4]">
    <!-- Image -->
    <NuxtLink :to="`/shop/${item.slug}`" class="shrink-0 w-20 aspect-[3/4] overflow-hidden bg-[#F0ECE4]">
      <NuxtImg
        :src="item.images?.[0] || '/images/placeholder.jpg'"
        :alt="item.name"
        class="w-full h-full object-cover"
        width="80"
        height="107"
        loading="lazy"
      />
    </NuxtLink>

    <!-- Details -->
    <div class="flex-1 min-w-0">
      <NuxtLink :to="`/shop/${item.slug}`">
        <h4 class="font-serif text-base text-[#1C1C1C] leading-snug mb-0.5">{{ item.name }}</h4>
      </NuxtLink>
      <p class="text-xs text-[#7A7A7A] mb-3">{{ item.material }}</p>

      <div class="flex items-center justify-between">
        <!-- Qty -->
        <div class="flex items-center border border-[#E8D5A3]">
          <button
            class="w-7 h-7 flex items-center justify-center text-[#1C1C1C] hover:bg-[#F0ECE4] transition-colors text-lg leading-none"
            @click="cart.updateQty(item.id, item.qty - 1)"
            :disabled="item.qty <= 1"
          >−</button>
          <span class="w-8 text-center text-sm">{{ item.qty }}</span>
          <button
            class="w-7 h-7 flex items-center justify-center text-[#1C1C1C] hover:bg-[#F0ECE4] transition-colors"
            @click="cart.updateQty(item.id, item.qty + 1)"
          >+</button>
        </div>

        <!-- Price + Remove -->
        <div class="flex items-center gap-3">
          <span class="text-sm font-medium text-[#1C1C1C]">
            ₹{{ ((item.salePrice || item.price) * item.qty).toLocaleString('en-IN') }}
          </span>
          <button
            class="text-[#7A7A7A] hover:text-[#1C1C1C] transition-colors"
            @click="cart.removeItem(item.id)"
            aria-label="Remove item"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '~/stores/cart'

defineProps({
  item: { type: Object, required: true },
})

const cart = useCartStore()
</script>
