<template>
  <section class="py-16 md:py-20 bg-[#FAF8F5]">
    <div class="max-w-[1400px] mx-auto px-4 md:px-8">
      <div class="text-center mb-10">
        <span class="label">Shop by Category</span>
        <h2 class="section-title">Explore Our Collections</h2>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        <NuxtLink
          v-for="cat in categories"
          :key="cat.name"
          :to="`/shop?category=${encodeURIComponent(cat.name)}`"
          class="group relative overflow-hidden aspect-square bg-[#F0ECE4] cursor-pointer"
        >
          <NuxtImg
            :src="cat.image"
            :alt="cat.name"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            width="300"
            height="300"
            loading="lazy"
          />
          <!-- Overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          <!-- Text -->
          <div class="absolute bottom-0 left-0 p-3">
            <p class="text-white font-serif text-sm md:text-base leading-snug">{{ cat.name }}</p>
            <div class="h-[1px] w-0 bg-[#B8942E] transition-all duration-500 group-hover:w-full mt-1" />
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
const categories = [
  { name: 'Earrings', image: '/images/categories/earrings.jpg' },
  { name: 'Necklaces', image: '/images/categories/necklaces.jpg' },
  { name: 'Rings', image: '/images/categories/rings.jpg' },
  { name: 'Bracelets', image: '/images/categories/bracelets.jpg' },
]
</script>
