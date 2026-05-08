<template>
  <section class="py-20 md:py-28 bg-[#F7F3EE]">
    <div class="max-w-[1400px] mx-auto px-4 md:px-8">
      <div class="text-center mb-14">
        <span class="label">Stories from our customers</span>
        <h2 class="section-title">Worn with Love</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        <div
          v-for="(t, i) in testimonials"
          :key="i"
          class="text-center px-4 md:px-6"
        >
          <div class="flex justify-center gap-1 mb-6">
            <div
              v-for="j in 3"
              :key="j"
              class="w-1.5 h-1.5 rounded-full"
              :class="j === i + 1 ? 'bg-[#B8942E]' : 'bg-[#E8D5A3]'"
            />
          </div>

          <blockquote class="font-serif text-xl md:text-2xl italic text-[#1C1C1C] leading-relaxed mb-6">
            "{{ t.quote }}"
          </blockquote>

          <div class="gold-divider w-12 mx-auto mb-5" />

          <p class="text-xs tracking-[0.2em] uppercase text-[#7A7A7A]">{{ t.name }}</p>
          <p class="text-[11px] text-[#B8942E] mt-1 tracking-[0.1em] uppercase">{{ t.location }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const testimonials = [
  {
    quote: "I wore the Temple Gold Jhumkas on my wedding day. Every compliment I received led back to Laame Jewels. These pieces have a soul.",
    name: 'Meenakshi R.',
    location: 'Chennai',
  },
  {
    quote: "The craftsmanship is extraordinary. My mother gifted me the Golden Airtick Pendant and every stone is placed with such intention. Worth every rupee.",
    name: 'Ananya P.',
    location: 'Mumbai',
  },
  {
    quote: "I ordered the Diamond Solitaire Pendant for my anniversary. The packaging alone made me emotional — premium, thoughtful, and beautiful.",
    name: 'Kavitha S.',
    location: 'Bengaluru',
  },
]
</script>
