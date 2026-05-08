<template>
  <div>
    <!-- Main Image -->
    <div class="relative overflow-hidden aspect-[3/4] bg-[#F0ECE4]">
      <NuxtImg
        :src="images[activeIndex] || '/images/placeholder.jpg'"
        :alt="alt"
        class="w-full h-full object-cover transition-opacity duration-500"
        width="600"
        height="800"
        :key="activeIndex"
      />
    </div>

    <!-- Thumbnails -->
    <div v-if="images.length > 1" class="flex gap-2 mt-3">
      <button
        v-for="(img, i) in images"
        :key="i"
        class="relative overflow-hidden aspect-square w-16 md:w-20 bg-[#F0ECE4] shrink-0"
        :class="[
          'border transition-all duration-300',
          i === activeIndex ? 'border-[#B8942E]' : 'border-transparent hover:border-[#E8D5A3]'
        ]"
        @click="activeIndex = i"
        :aria-label="`View image ${i + 1}`"
      >
        <NuxtImg
          :src="img"
          :alt="`${alt} view ${i + 1}`"
          class="w-full h-full object-cover"
          width="80"
          height="80"
          loading="lazy"
        />
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
  alt: {
    type: String,
    default: 'Product image',
  },
})

const activeIndex = ref(0)
</script>
