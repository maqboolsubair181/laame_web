<template>
  <section class="relative min-h-[92vh] md:min-h-[85vh] flex items-center overflow-hidden bg-[#FAF8F5]">
    <div class="max-w-[1400px] mx-auto px-4 md:px-8 w-full grid grid-cols-1 md:grid-cols-2 items-center gap-8 py-20 md:py-0">
      <!-- Text -->
      <div class="order-2 md:order-1">
        <span class="label">New Collection 2026</span>
        <h1 class="font-serif text-5xl md:text-6xl lg:text-7xl text-[#1C1C1C] leading-[1.1] mb-6">
          Jewellery that<br />
          <em class="not-italic text-[#B8942E]">carries meaning</em>
        </h1>
        <p class="text-[#7A7A7A] text-base md:text-lg leading-relaxed max-w-[400px] mb-10">
          Crafted in 18K gold plated stainless steel and premium crystals. From intimate studs to statement pieces — each piece is made to be worn, remembered, and passed down.
        </p>
        <div class="flex flex-wrap gap-4">
          <NuxtLink to="/shop" class="btn-primary">Shop Now</NuxtLink>
          <NuxtLink to="/shop?filter=new" class="btn-ghost">New Arrivals</NuxtLink>
        </div>

        <!-- Trust badges -->
        <div class="flex items-center gap-6 mt-10 pt-8 border-t border-[#E8D5A3]">
          <div v-for="badge in badges" :key="badge.label" class="flex items-center gap-2">
            <span class="text-[#B8942E]" v-html="badge.icon" />
            <span class="text-xs text-[#7A7A7A] tracking-[0.06em] uppercase">{{ badge.label }}</span>
          </div>
        </div>
      </div>

      <!-- Hero Carousel -->
      <div class="order-1 md:order-2 relative">
        <div class="aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-[#F0ECE4] relative">
          <!-- Slides -->
          <TransitionGroup name="hero-fade" tag="div" class="relative w-full h-full">
            <NuxtImg
              v-for="(slide, i) in slides"
              v-show="currentSlide === i"
              :key="slide.src"
              :src="slide.src"
              :alt="slide.alt"
              class="absolute inset-0 w-full h-full object-cover object-center"
              width="700"
              height="875"
              :loading="i === 0 ? 'eager' : 'lazy'"
            />
          </TransitionGroup>

          <!-- Floating tag -->
          <div class="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-3 border-l-2 border-[#B8942E] z-10">
            <p class="text-[10px] tracking-[0.15em] uppercase text-[#7A7A7A] mb-0.5">Bestseller</p>
            <p class="font-serif text-base text-[#1C1C1C]">Golden Airtick Pendant</p>
            <p class="text-xs text-[#B8942E] mt-0.5">₹1,900</p>
          </div>

          <!-- Slide dots -->
          <div class="absolute bottom-6 right-6 flex gap-2 z-10">
            <button
              v-for="(_, i) in slides"
              :key="i"
              @click="goToSlide(i)"
              :aria-label="`Slide ${i + 1}`"
              :class="[
                'transition-all duration-300',
                currentSlide === i
                  ? 'w-6 h-1.5 bg-[#B8942E]'
                  : 'w-1.5 h-1.5 bg-white/60 rounded-full',
              ]"
            />
          </div>
        </div>

        <!-- Decorative element -->
        <div class="absolute -top-4 -right-4 w-32 h-32 border border-[#E8D5A3] -z-10 hidden md:block" />
      </div>
    </div>
  </section>
</template>

<script setup>
const slides = [
  { src: '/images/cover1.png', alt: 'Laame Jewels — Handcrafted Gold Jewellery' },
  { src: '/images/cover4.jpg', alt: 'Laame Jewels — New Collection' },
  { src: '/images/cover5.webp', alt: 'Laame Jewels — Premium Crystals' },
]

const currentSlide = ref(0)
let timer = null

const goToSlide = (i) => {
  currentSlide.value = i
  restartTimer()
}

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length
}

const restartTimer = () => {
  clearInterval(timer)
  timer = setInterval(nextSlide, 4000)
}

onMounted(() => restartTimer())
onUnmounted(() => clearInterval(timer))

const badges = [
  {
    label: 'Anti-Tarnish',
    icon: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1L10 5.5H15L11 8.5L12.5 13L8 10L3.5 13L5 8.5L1 5.5H6L8 1Z" fill="#B8942E"/></svg>',
  },
  {
    label: 'Stainless Steel',
    icon: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1.5L13.5 4V8.5C13.5 11.5 11 13.8 8 14.5C5 13.8 2.5 11.5 2.5 8.5V4L8 1.5Z" stroke="#B8942E" stroke-width="1.2" stroke-linejoin="round"/><path d="M5.5 8L7 9.5L10.5 6.5" stroke="#B8942E" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  },
  {
    label: '18K Gold Plated',
    icon: '<svg width="17" height="16" viewBox="0 0 17 16" fill="none"><ellipse cx="8.5" cy="9" rx="5.5" ry="2.5" stroke="#B8942E" stroke-width="1.2"/><ellipse cx="8.5" cy="7" rx="5.5" ry="2.5" stroke="#B8942E" stroke-width="1.2"/><path d="M8.5 3L9.3 4.7L11.2 5L9.85 6.3L10.15 8.2L8.5 7.35L6.85 8.2L7.15 6.3L5.8 5L7.7 4.7L8.5 3Z" fill="#B8942E"/></svg>',
  },
]
</script>

<style scoped>
.hero-fade-enter-active,
.hero-fade-leave-active {
  transition: opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1), transform 1.2s cubic-bezier(0.4, 0, 0.2, 1);
  position: absolute;
  inset: 0;
  will-change: opacity, transform;
}
.hero-fade-enter-from {
  opacity: 0;
  transform: scale(1.03);
}
.hero-fade-leave-to {
  opacity: 0;
  transform: scale(0.98);
}
.hero-fade-enter-to,
.hero-fade-leave-from {
  opacity: 1;
  transform: scale(1);
}
</style>
