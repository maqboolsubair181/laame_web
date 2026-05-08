<template>
  <!-- Skeleton State -->
  <div v-if="loading" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
    <div v-for="i in skeletonCount" :key="i">
      <div class="skeleton aspect-[3/4] w-full mb-3" />
      <div class="skeleton h-3 w-2/3 mb-2" />
      <div class="skeleton h-4 w-full mb-2" />
      <div class="skeleton h-3 w-1/3" />
    </div>
  </div>

  <!-- Empty State -->
  <div v-else-if="!products || products.length === 0" class="py-24 text-center">
    <p class="label">No products found</p>
    <h3 class="font-serif text-3xl text-[#1C1C1C] mt-2 mb-4">Nothing here yet</h3>
    <p class="text-sm text-[#7A7A7A] mb-8">Try adjusting your filters or browse all jewellery.</p>
    <NuxtLink to="/shop" class="btn-primary">Browse All</NuxtLink>
  </div>

  <!-- Product Grid -->
  <div
    v-else
    class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
  >
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script setup>
defineProps({
  products: {
    type: Array,
    default: () => [],
  },
  loading: {
    type: Boolean,
    default: false,
  },
  skeletonCount: {
    type: Number,
    default: 8,
  },
})
</script>
