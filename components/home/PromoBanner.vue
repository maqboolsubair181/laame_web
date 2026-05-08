<template>
  <section class="relative overflow-hidden bg-[#1C1C1C] my-0">
    <div class="absolute inset-0">
      <NuxtImg
        src="/images/cover2.jpg"
        alt="Laame Jewels Bridal Collection"
        class="w-full h-full object-cover opacity-40"
        width="1400"
        height="600"
        loading="lazy"
      />
    </div>

    <div class="relative max-w-[1400px] mx-auto px-4 md:px-8 py-24 md:py-36 text-center">
      <span class="text-xs tracking-[0.25em] text-[#E8D5A3] uppercase block mb-5">Limited Edition</span>
      <h2 class="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-tight max-w-3xl mx-auto mb-4">
        The Bridal Edit<br />
        <em class="not-italic text-[#B8942E]">has arrived</em>
      </h2>
      <p class="text-white/60 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
        Heirloom-quality pieces crafted for your most significant moments. 22kt gold, kundan, and certified diamonds — curated by master karigars.
      </p>
      <NuxtLink to="/shop?category=Bridal+Sets" class="btn-primary bg-[#B8942E] hover:bg-[#FAF8F5] hover:text-[#1C1C1C]">
        Explore Bridal Sets
      </NuxtLink>
    </div>
  </section>
</template>
