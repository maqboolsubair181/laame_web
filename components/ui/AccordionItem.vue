<template>
  <div class="accordion-item">
    <button
      class="flex items-center justify-between w-full text-left py-1"
      @click="open = !open"
      :aria-expanded="open"
    >
      <span class="text-sm font-medium tracking-[0.06em] uppercase text-[#1C1C1C]">{{ label }}</span>
      <svg
        width="14"
        height="8"
        viewBox="0 0 14 8"
        fill="none"
        :class="['transition-transform duration-300', open && 'rotate-180']"
      >
        <path d="M1 1L7 7L13 1" stroke="#7A7A7A" stroke-width="1.2" stroke-linecap="round"/>
      </svg>
    </button>

    <Transition name="accordion">
      <div v-if="open" class="pt-3 pb-1">
        <p class="text-sm text-[#7A7A7A] leading-relaxed">{{ content }}</p>
      </div>
    </Transition>
  </div>
</template>

<script setup>
defineProps({
  label: { type: String, required: true },
  content: { type: String, required: true },
})

const open = ref(false)
</script>

<style scoped>
.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}
.accordion-enter-from,
.accordion-leave-to {
  max-height: 0;
  opacity: 0;
}
.accordion-enter-to,
.accordion-leave-from {
  max-height: 200px;
  opacity: 1;
}
</style>
