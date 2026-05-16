<template>
  <div class="min-h-screen bg-[#FAF8F5]">
    <div class="max-w-[1400px] mx-auto px-4 md:px-8 py-12 md:py-16">
      <div class="mb-10">
        <span class="label">{{ route.params.slug }}</span>
        <h1 class="section-title capitalize">{{ collectionTitle }}</h1>
      </div>

      <ProductGrid :products="products || []" :loading="pending" :skeleton-count="8" />
    </div>
  </div>
</template>

<script setup>
const route = useRoute()

const collectionTitle = computed(() => {
  const slug = route.params.slug?.toString() || ''
  return slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
})

const { data: products, pending } = await useAsyncData(
  `collection-${route.params.slug}`,
  () => queryContent('products').where({ collection: route.params.slug }).find()
)

useSeoMeta({
  title: `${collectionTitle.value} Collection — Laame Jewels`,
  description: `Explore the ${collectionTitle.value} collection at Laame Jewels. Handcrafted 18K gold plated jewellery.`,
})
</script>
