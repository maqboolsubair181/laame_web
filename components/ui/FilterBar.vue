<template>
  <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8">
    <!-- Category Pills -->
    <div class="flex flex-wrap gap-2">
      <button
        v-for="cat in categories"
        :key="cat"
        :class="[
          'px-4 py-2 text-xs tracking-[0.1em] uppercase transition-all duration-200',
          modelValue === cat
            ? 'bg-[#1C1C1C] text-white'
            : 'border border-[#E8D5A3] text-[#7A7A7A] hover:border-[#B8942E] hover:text-[#B8942E]'
        ]"
        @click="$emit('update:modelValue', cat)"
      >
        {{ cat }}
      </button>
    </div>

    <!-- Sort -->
    <div class="flex items-center gap-3">
      <span class="text-xs uppercase tracking-[0.1em] text-[#7A7A7A] shrink-0">Sort by</span>
      <select
        :value="sort"
        @change="$emit('update:sort', $event.target.value)"
        class="input-field w-auto py-2 text-xs cursor-pointer"
      >
        <option value="newest">Newest First</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
      </select>
    </div>
  </div>
</template>

<script setup>
defineProps({
  categories: { type: Array, required: true },
  modelValue: { type: String, default: 'All' },
  sort: { type: String, default: 'newest' },
})

defineEmits(['update:modelValue', 'update:sort'])
</script>
