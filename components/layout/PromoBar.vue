<template>
  <div class="bg-[#B8942E] py-2.5 px-4 text-center fixed top-0 left-0 right-0 z-[60]">
    <p class="text-[11px] tracking-[0.15em] uppercase text-white font-medium">
      {{ messages[currentIndex] }}
    </p>
    <div class="absolute right-4 top-1/2 -translate-y-1/2 flex gap-1">
      <button
        v-for="(_, i) in messages"
        :key="i"
        :class="['w-1 h-1 rounded-full transition-all duration-300', i === currentIndex ? 'bg-white' : 'bg-white/40']"
        @click="currentIndex = i"
        :aria-label="`Promo ${i + 1}`"
      />
    </div>
  </div>
</template>

<script setup>
const messages = [
  'Free shipping on orders above ₹1000',
  'New Collection Now Available — Explore Now',
]

const currentIndex = ref(0)

onMounted(() => {
  const interval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % messages.length
  }, 4000)
  onUnmounted(() => clearInterval(interval))
})
</script>
