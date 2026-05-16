<template>
  <div
    :class="[
      'fixed top-0 left-0 right-0 z-[60] transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]',
      scrolledPastPromo ? '-translate-y-full' : 'translate-y-0',
    ]"
  >
    <div class="bg-[#B8942E] py-2.5 px-4 text-center">
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
  </div>
</template>

<script setup>
const scrolledPastPromo = inject('scrolledPastPromo', ref(false))

const messages = [
  'New Collection Available — Explore Now',
]

const currentIndex = ref(0)

onMounted(() => {
  const interval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % messages.length
  }, 4000)
  onUnmounted(() => clearInterval(interval))
})
</script>
