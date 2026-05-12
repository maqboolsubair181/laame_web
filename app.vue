<template>
  <div>
    <PromoBar />
    <AppHeader />
    <main :style="mainPadding">
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

// Single scroll listener for the whole app — provided to children via inject.
// app.vue is the parent of both PromoBar and AppHeader, so provide() works here.
const scrollY = ref(0)
const scrolledPastPromo = computed(() => scrollY.value > 40)

// Provide to ALL descendant components (PromoBar & AppHeader use this)
provide('scrolledPastPromo', scrolledPastPromo)

onMounted(() => {
  const handleScroll = () => { scrollY.value = window.scrollY }
  window.addEventListener('scroll', handleScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', handleScroll))
})

// main padding-top:
// Promo visible  → promo(37) + header mobile(64) = 101px  / desktop(80) = 117px
// Promo hidden   → header only mobile(64)               / desktop(80)
const isMd = useMediaQuery('(min-width: 768px)')
const mainPadding = computed(() => ({
  paddingTop: scrolledPastPromo.value
    ? (isMd.value ? '80px' : '64px')
    : (isMd.value ? '117px' : '101px'),
  transition: 'padding-top 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
}))
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
