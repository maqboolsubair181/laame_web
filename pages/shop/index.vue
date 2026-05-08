<template>
  <div class="pt-[100px] min-h-screen bg-[#FAF8F5]">
    <div class="max-w-[1400px] mx-auto px-4 md:px-8 py-12 md:py-16">
      <!-- Header -->
      <div class="mb-10">
        <span class="label">{{ route.query.category || 'All Jewellery' }}</span>
        <h1 class="section-title">
          {{ pageTitle }}
        </h1>
        <p class="text-sm text-[#7A7A7A] mt-2">{{ filteredProducts.length }} piece{{ filteredProducts.length !== 1 ? 's' : '' }}</p>
      </div>

      <!-- Filter + Sort -->
      <FilterBar
        v-model="activeCategory"
        v-model:sort="activeSort"
        :categories="allCategories"
      />

      <!-- Grid -->
      <ProductGrid
        :products="paginatedProducts"
        :loading="pending"
        :skeleton-count="8"
      />

      <!-- Infinite scroll sentinel -->
      <div ref="sentinel" class="h-10" />

      <!-- Loading more indicator -->
      <div v-if="loadingMore" class="py-8 text-center">
        <div class="inline-flex gap-1">
          <span v-for="i in 3" :key="i" class="w-2 h-2 bg-[#B8942E] rounded-full animate-bounce" :style="{ animationDelay: `${i * 0.15}s` }" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useIntersectionObserver } from '@vueuse/core'
import Fuse from 'fuse.js'

const route = useRoute()

useSeoMeta({
  title: 'Shop All Jewellery — Laame Jewels',
  description: 'Browse our complete collection of handcrafted gold, diamond and gemstone jewellery. Filter by category, price and more.',
})

// Fetch all products
const { data: allProducts, pending } = await useAsyncData('shop-products', () =>
  queryContent('products').find()
)

const allCategories = ['All', 'Earrings', 'Necklaces', 'Rings', 'Bracelets']

// Reactive filters
const activeCategory = ref(route.query.category?.toString() || 'All')
const activeSort = ref('newest')

// Sync route changes
watch(() => route.query.category, (val) => {
  activeCategory.value = val?.toString() || 'All'
})

// Filtered + sorted products
const filteredProducts = computed(() => {
  let products = allProducts.value || []

  if (route.query.filter === 'new') {
    products = products.filter(p => p.isNew)
  }
  if (route.query.budget) {
    const b = route.query.budget
    if (b === 'above') products = products.filter(p => p.price > 2000)
    else products = products.filter(p => p.price <= Number(b))
  }
  if (route.query.q) {
    const fuse = new Fuse(products, {
      keys: ['name', 'category', 'subcategory', 'material', 'description', 'tags'],
      threshold: 0.3,
      distance: 100
    })
    const results = fuse.search(route.query.q.toString())
    products = results.map(r => r.item)
  }
  if (activeCategory.value !== 'All') {
    products = products.filter(p => p.category === activeCategory.value)
  }

  if (activeSort.value === 'price-asc') return [...products].sort((a, b) => a.price - b.price)
  if (activeSort.value === 'price-desc') return [...products].sort((a, b) => b.price - a.price)
  return products
})

// Infinite scroll
const PAGE_SIZE = 8
const page = ref(1)
const loadingMore = ref(false)
const sentinel = ref(null)

const paginatedProducts = computed(() =>
  filteredProducts.value.slice(0, page.value * PAGE_SIZE)
)

const { stop } = useIntersectionObserver(sentinel, ([{ isIntersecting }]) => {
  if (isIntersecting && !loadingMore.value && paginatedProducts.value.length < filteredProducts.value.length) {
    loadingMore.value = true
    setTimeout(() => {
      page.value++
      loadingMore.value = false
    }, 600)
  }
})

onUnmounted(stop)

// Reset page on filter change
watch([activeCategory, activeSort, () => route.query], () => {
  page.value = 1
})

const pageTitle = computed(() => {
  if (route.query.q) return `Search: "${route.query.q}"`
  if (route.query.filter === 'new') return "What's New"
  if (activeCategory.value !== 'All') return activeCategory.value
  return 'All Jewellery'
})
</script>
