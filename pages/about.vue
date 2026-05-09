<template>
  <div class="pt-[100px] min-h-screen bg-[#FAF8F5]">
    <!-- Hero -->
    <div class="relative overflow-hidden bg-[#1C1C1C]">
      <div class="absolute inset-0 opacity-30">
        <NuxtImg
          src="/images/cover3.webp"
          alt="Laame Jewels Workshop"
          class="w-full h-full object-cover"
          width="1400"
          height="600"
          loading="lazy"
        />
      </div>
      <div class="relative max-w-[1400px] mx-auto px-4 md:px-8 py-24 md:py-36">
        <span class="label text-[#E8D5A3]">Our Story</span>
        <h1 class="font-serif text-5xl md:text-7xl text-white leading-tight max-w-2xl">
          Crafted with<br />
          <em class="not-italic text-[#B8942E]">intention</em>
        </h1>
      </div>
    </div>

    <!-- Story -->
    <div class="max-w-[900px] mx-auto px-4 md:px-8 py-20 md:py-28">
      <div class="grid md:grid-cols-2 gap-12 md:gap-20 items-center mb-20">
        <div>
          <span class="label">Who We Are</span>
          <h2 class="font-serif text-4xl text-[#1C1C1C] mb-6">A love letter to Indian craftsmanship</h2>
          <p class="text-[#7A7A7A] text-sm leading-relaxed mb-4">
            Laame Jewels was born from a simple belief: that every woman deserves jewellery that tells her story. We work directly with master karigars across Rajasthan, Tamil Nadu, and Bengal — craftspeople who have inherited techniques passed down through generations.
          </p>
          <p class="text-[#7A7A7A] text-sm leading-relaxed">
            Every piece we create carries the fingerprints of its maker. The subtle asymmetry of a hand-pressed petal. The brilliance of our 18K gold plating. This is not factory jewellery. This is legacy.
          </p>
        </div>
        <div class="aspect-[4/5] overflow-hidden bg-[#F0ECE4]">
          <NuxtImg
            src="/images/about-craft.jpg"
            alt="Jewellery crafting"
            class="w-full h-full object-cover"
            width="400"
            height="500"
            loading="lazy"
          />
        </div>
      </div>

      <!-- Values -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 py-16 border-t border-b border-[#E8D5A3]">
        <div v-for="v in values" :key="v.title" class="text-center">
          <div class="w-12 h-12 border border-[#B8942E] flex items-center justify-center mx-auto mb-5" v-html="v.icon" />
          <h3 class="font-serif text-xl mb-2">{{ v.title }}</h3>
          <p class="text-sm text-[#7A7A7A] leading-relaxed">{{ v.desc }}</p>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center pt-16">
        <span class="label">Begin Your Journey</span>
        <h2 class="section-title mb-8">Find Your Piece</h2>
        <NuxtLink to="/shop" class="btn-primary">Explore the Collection</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'About Us — Laame Jewels',
  description: 'Learn about Laame Jewels — our commitment to handcrafted, Anti-Tarnish jewellery made by master karigars across India.',
})

const values = [
  {
    title: 'Authenticity',
    desc: 'Every piece is Anti-Tarnish. What you see is exactly what you get — in durability and craftsmanship.',
    icon: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2L12.5 7.5H18L13.5 11L15.5 17L10 13.5L4.5 17L6.5 11L2 7.5H7.5L10 2Z" stroke="#B8942E" stroke-width="1.2"/></svg>',
  },
  {
    title: 'Craftsmanship',
    desc: 'We collaborate with family-run workshops that have been making jewellery for three to five generations.',
    icon: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 16l3-3 9-9a1.5 1.5 0 00-2-2L5 11l-1 5z" stroke="#B8942E" stroke-width="1.2" stroke-linejoin="round"/></svg>',
  },
  {
    title: 'Transparency',
    desc: 'We share the weight, material, and purity of every piece. No hidden charges, no inflated markups.',
    icon: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="#B8942E" stroke-width="1.2"/><path d="M10 6v4l3 3" stroke="#B8942E" stroke-width="1.2" stroke-linecap="round"/></svg>',
  },
]
</script>
