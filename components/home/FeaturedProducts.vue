<template>
  <section class="py-16 md:py-24 bg-[#FAF8F5]">
    <div class="max-w-[1400px] mx-auto px-4 md:px-8">
      <!-- Header -->
      <div class="flex flex-col md:flex-row md:items-end md:justify-between mb-10 md:mb-12 gap-4">
        <div>
          <span class="label">{{ label }}</span>
          <h2 class="section-title">{{ title }}</h2>
        </div>
        <NuxtLink :to="viewAllLink" class="btn-ghost self-start md:self-auto shrink-0">
          View All
        </NuxtLink>
      </div>

      <!-- Loading Skeleton -->
      <div v-if="pending" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        <div v-for="i in 4" :key="i">
          <div class="skeleton aspect-[3/4] w-full mb-3" />
          <div class="skeleton h-3 w-2/3 mb-2" />
          <div class="skeleton h-4 w-full mb-2" />
          <div class="skeleton h-3 w-1/3" />
        </div>
      </div>

      <!-- Products -->
      <div v-else class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  label: { type: String, default: 'Bestsellers' },
  title: { type: String, default: 'Most Loved Pieces' },
  collection: { type: String, default: null },
  featured: { type: Boolean, default: false },
  isNew: { type: Boolean, default: false },
  limit: { type: Number, default: 4 },
  viewAllLink: { type: String, default: '/shop' },
})

const buildQuery = () => {
  const q = queryContent('products')
  if (props.collection) q.where({ collection: props.collection })
  if (props.featured) q.where({ isFeatured: true })
  if (props.isNew) q.where({ isNew: true })
  q.limit(props.limit)
  return q
}

const { data: products, pending } = useLazyAsyncData(
  `featured-${props.label}-${props.collection}-${props.isNew}-${props.featured}`,
  () => buildQuery().find()
)
</script>
