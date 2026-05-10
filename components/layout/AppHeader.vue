<template>
  <header
    :class="[
      'fixed top-[37px] left-0 right-0 z-50 transition-all duration-500',
      scrolled ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-sm' : 'bg-[#FAF8F5]',
    ]"
  >
    <div class="max-w-[1400px] mx-auto px-4 md:px-8">
      <div class="flex items-center justify-between h-16 md:h-20">
        <!-- Mobile: Hamburger -->
        <button
          class="md:hidden btn-icon"
          @click="mobileOpen = true"
          aria-label="Open menu"
        >
          <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
            <line x1="0" y1="1" x2="22" y2="1" stroke="#1C1C1C" stroke-width="1.5"/>
            <line x1="4" y1="8" x2="22" y2="8" stroke="#1C1C1C" stroke-width="1.5"/>
            <line x1="8" y1="15" x2="22" y2="15" stroke="#1C1C1C" stroke-width="1.5"/>
          </svg>
        </button>

        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-2.5 shrink-0">
          <NuxtImg
            src="/images/jewel.png"
            alt="LaaMe Jewels"
            width="36"
            height="36"
            class="w-8 h-8 md:w-9 md:h-9 object-contain"
          />
          <span class="font-serif text-xl md:text-2xl text-[#1C1C1C] tracking-wide">LaaMe Jewels</span>
        </NuxtLink>

        <!-- Desktop Nav -->
        <nav class="hidden md:flex items-center gap-1" role="navigation">
          <NuxtLink
            to="/shop?filter=new"
            class="nav-link"
          >What's New</NuxtLink>

          <NuxtLink
            v-for="cat in navCategories"
            :key="cat.name"
            :to="`/shop?category=${encodeURIComponent(cat.name)}`"
            class="nav-link"
          >{{ cat.name }}</NuxtLink>

          <div
            class="relative group"
            @mouseenter="activeMenu = 'budget'"
            @mouseleave="activeMenu = null"
          >
            <button class="nav-link flex items-center gap-1">
              Shop by Budget
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" class="transition-transform duration-200 group-hover:rotate-180">
                <path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.2"/>
              </svg>
            </button>
            <Transition name="mega">
              <div
                v-if="activeMenu === 'budget'"
                class="absolute top-full left-1/2 -translate-x-1/2 w-44 bg-[#FAF8F5] border border-[#E8D5A3] shadow-lg pt-4 pb-6 px-6 mt-2"
              >
                <p class="label text-[10px] mb-4">Budget</p>
                <ul class="space-y-2.5">
                  <li v-for="b in budgets" :key="b.label">
                    <NuxtLink
                      :to="`/shop?budget=${b.val}`"
                      class="text-sm text-[#1C1C1C] hover:text-[#B8942E] transition-colors duration-200"
                      @click="activeMenu = null"
                    >{{ b.label }}</NuxtLink>
                  </li>
                </ul>
              </div>
            </Transition>
          </div>
        </nav>

        <!-- Icons -->
        <div class="flex items-center gap-1 md:gap-2">
          <button class="btn-icon hidden md:flex" aria-label="Search" @click="searchOpen = true">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="7.5" cy="7.5" r="6" stroke="#1C1C1C" stroke-width="1.4"/>
              <path d="M12 12L16.5 16.5" stroke="#1C1C1C" stroke-width="1.4" stroke-linecap="round"/>
            </svg>
          </button>

          <NuxtLink to="/wishlist" class="btn-icon hidden md:flex" aria-label="Wishlist">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 15.5S1.5 10.5 1.5 5.5a4 4 0 017.5-2 4 4 0 017.5 2c0 5-7.5 10-7.5 10z" stroke="#1C1C1C" stroke-width="1.4"/>
            </svg>
          </NuxtLink>

          <button class="btn-icon relative" aria-label="Cart" @click="cart.openCart()">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M1.5 1.5h2l2.5 9h8l2-6.5H5" stroke="#1C1C1C" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="7.5" cy="15" r="1" fill="#1C1C1C"/>
              <circle cx="13.5" cy="15" r="1" fill="#1C1C1C"/>
            </svg>
            <span v-if="cart.count > 0" class="cart-badge">{{ cart.count > 9 ? '9+' : cart.count }}</span>
          </button>
        </div>
      </div>
    </div>
  </header>

  <!-- Mobile Slide Menu -->
  <Transition name="slide-left">
    <div
      v-if="mobileOpen"
      class="fixed inset-0 z-[60] flex md:hidden"
    >
      <div class="absolute inset-0 bg-black/40" @click="mobileOpen = false" />
      <nav class="relative w-[300px] bg-[#FAF8F5] h-full overflow-y-auto flex flex-col">
        <div class="flex items-center justify-between px-6 py-5 border-b border-[#E8D5A3]">
          <span class="font-serif text-xl">Menu</span>
          <button @click="mobileOpen = false" class="text-[#7A7A7A]">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M2 2L18 18M18 2L2 18" stroke="#1C1C1C" stroke-width="1.5"/>
            </svg>
          </button>
        </div>

        <div class="px-6 py-6 flex flex-col gap-1">
          <NuxtLink to="/shop?filter=new" class="mobile-link" @click="mobileOpen = false">What's New</NuxtLink>

          <NuxtLink
            v-for="cat in navCategories"
            :key="cat.name"
            :to="`/shop?category=${encodeURIComponent(cat.name)}`"
            class="mobile-link"
            @click="mobileOpen = false"
          >{{ cat.name }}</NuxtLink>
        </div>

        <div class="px-6 py-4 mt-auto border-t border-[#E8D5A3]">
          <NuxtLink to="/about" class="mobile-link" @click="mobileOpen = false">About Us</NuxtLink>
        </div>
      </nav>
    </div>
  </Transition>

  <!-- Search Overlay -->
  <Transition name="fade">
    <div
      v-if="searchOpen"
      class="fixed inset-0 z-[70] bg-[#FAF8F5]/98 flex flex-col items-center justify-start pt-32 px-4"
      @keydown.esc="searchOpen = false"
    >
      <button class="absolute top-6 right-8 text-[#7A7A7A] hover:text-[#1C1C1C]" @click="searchOpen = false">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M3 3L21 21M21 3L3 21" stroke="#1C1C1C" stroke-width="1.5"/>
        </svg>
      </button>
      <p class="label mb-4">Search</p>
      <input
        ref="searchInput"
        v-model="searchQuery"
        type="text"
        placeholder="Search for earrings, necklaces, rings…"
        class="input-field max-w-2xl text-lg py-4 text-center"
        @keydown.enter="doSearch"
        autofocus
      />
    </div>
  </Transition>
</template>

<script setup>
import { useCartStore } from '~/stores/cart'

const cart = useCartStore()
const scrollY = ref(0)
const scrolled = computed(() => scrollY.value > 60)

onMounted(() => {
  const handleScroll = () => { scrollY.value = window.scrollY }
  window.addEventListener('scroll', handleScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', handleScroll))
})


const mobileOpen = ref(false)
const activeMenu = ref(null)
const searchOpen = ref(false)
const searchQuery = ref('')
const searchInput = ref(null)

const navCategories = [
  { name: 'Earrings' },
  { name: 'Necklaces' },
  { name: 'Rings' },
  { name: 'Bracelets' },
]

const budgets = [
  { label: 'Under ₹500', val: '500' },
  { label: 'Under ₹1,000', val: '1000' },
  { label: 'Under ₹2,000', val: '2000' },
  { label: 'Above ₹2,000', val: 'above' },
]

const doSearch = () => {
  if (searchQuery.value.trim()) {
    navigateTo(`/shop?q=${encodeURIComponent(searchQuery.value.trim())}`)
    searchOpen.value = false
    searchQuery.value = ''
  }
}

watch(searchOpen, (val) => {
  if (val) nextTick(() => searchInput.value?.focus())
})
</script>

<style scoped>
.nav-link {
  @apply px-3 py-2 text-[12px] tracking-[0.08em] text-[#1C1C1C] hover:text-[#B8942E] transition-colors duration-200 uppercase font-medium whitespace-nowrap;
}
.mobile-link {
  @apply block py-3.5 text-[13px] tracking-[0.06em] text-[#1C1C1C] hover:text-[#B8942E] transition-colors duration-200 uppercase font-medium border-b border-[#F0ECE4];
}
.mega-enter-active,
.mega-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.mega-enter-from,
.mega-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(-6px);
}
.slide-left-enter-active,
.slide-left-leave-active {
  transition: opacity 0.3s ease;
}
.slide-left-enter-active nav,
.slide-left-leave-active nav {
  transition: transform 0.3s ease;
}
.slide-left-enter-from nav,
.slide-left-leave-to nav {
  transform: translateX(-100%);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
