<template>
  <div>
    <PromoBar />
    <AppHeader />
    <main>
      <NuxtPage />
    </main>
    <AppFooter />
    <CartDrawer />

    <!-- Mobile sticky cart bar -->
    <Transition name="slide-up">
      <div
        v-if="!cart.isEmpty && !cart.isOpen"
        class="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#1C1C1C] px-4 py-3 flex items-center justify-between"
      >
        <div class="flex items-center gap-3">
          <span class="cart-badge static w-5 h-5 text-[10px]">{{ cart.count }}</span>
          <span class="text-white text-sm">{{ cart.count }} {{ cart.count === 1 ? 'item' : 'items' }}</span>
        </div>
        <button
          class="flex items-center gap-2 text-[#B8942E] text-sm font-medium tracking-[0.08em] uppercase"
          @click="cart.openCart()"
        >
          View Cart
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
          </svg>
        </button>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { useCartStore } from '~/stores/cart'

const cart = useCartStore()
</script>

<style>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.3s ease;
}
.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%);
}
</style>
