<template>
  <div class="pt-[100px] min-h-screen bg-[#FAF8F5]">
    <!-- Loading skeleton -->
    <div v-if="pending" class="max-w-[1400px] mx-auto px-4 md:px-8 py-12">
      <div class="skeleton h-3 w-48 mb-10" />
      <div class="grid md:grid-cols-2 gap-12 lg:gap-20">
        <div class="skeleton aspect-[3/4]" />
        <div class="space-y-4 py-4">
          <div class="skeleton h-3 w-24" />
          <div class="skeleton h-10 w-3/4" />
          <div class="skeleton h-6 w-32" />
          <div class="skeleton h-24 w-full mt-6" />
          <div class="skeleton h-12 w-full mt-6" />
        </div>
      </div>
    </div>

    <!-- Product not found -->
    <div v-else-if="!product" class="max-w-[1400px] mx-auto px-4 md:px-8 py-24 text-center">
      <span class="label">404</span>
      <h1 class="section-title mb-4">Product not found</h1>
      <p class="text-[#7A7A7A] mb-8">This piece may no longer be available.</p>
      <NuxtLink to="/shop" class="btn-primary">Back to Shop</NuxtLink>
    </div>

    <template v-else>
      <div class="max-w-[1400px] mx-auto px-4 md:px-8 py-10 md:py-14">
        <!-- Breadcrumb -->
        <nav class="flex items-center gap-2 text-xs text-[#7A7A7A] mb-10 tracking-[0.06em] uppercase" aria-label="Breadcrumb">
          <NuxtLink to="/" class="hover:text-[#B8942E] transition-colors">Home</NuxtLink>
          <span>›</span>
          <NuxtLink :to="`/shop?category=${encodeURIComponent(product.category)}`" class="hover:text-[#B8942E] transition-colors">{{ product.category }}</NuxtLink>
          <span>›</span>
          <span class="text-[#1C1C1C]">{{ product.name }}</span>
        </nav>

        <!-- Main -->
        <div class="grid md:grid-cols-2 gap-10 lg:gap-20 mb-20">
          <!-- Gallery -->
          <ProductGallery :images="product.images" :alt="product.name" />

          <!-- Details -->
          <div>
            <span class="label">{{ product.subcategory }}</span>
            <h1 class="font-serif text-4xl md:text-5xl text-[#1C1C1C] mb-4">{{ product.name }}</h1>

            <!-- Price -->
            <div class="flex items-baseline gap-3 mb-6">
              <span v-if="product.salePrice" class="font-serif text-3xl text-[#B8942E]">
                ₹{{ product.salePrice.toLocaleString('en-IN') }}
              </span>
              <span
                :class="[
                  'font-serif',
                  product.salePrice ? 'text-xl text-[#7A7A7A] line-through' : 'text-3xl text-[#1C1C1C]'
                ]"
              >
                ₹{{ product.price.toLocaleString('en-IN') }}
              </span>
              <span v-if="product.salePrice" class="tag">
                {{ Math.round((1 - product.salePrice / product.price) * 100) }}% off
              </span>
            </div>

            <!-- Meta tags -->
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="tag">{{ product.material }}</span>
              <span class="tag">{{ product.purity }}</span>
              <span class="tag">{{ product.weight }}</span>
              <span v-if="product.inStock" class="tag border-green-600 text-green-700">In Stock</span>
              <span v-else class="tag border-red-400 text-red-500">Out of Stock</span>
            </div>

            <p class="text-[#7A7A7A] text-sm leading-relaxed mb-8">{{ product.description }}</p>

            <!-- Qty Selector -->
            <div class="flex items-center gap-4 mb-6">
              <span class="text-xs uppercase tracking-[0.1em] text-[#7A7A7A]">Qty</span>
              <div class="flex items-center border border-[#E8D5A3]">
                <button
                  class="w-9 h-9 flex items-center justify-center text-[#1C1C1C] hover:bg-[#F0ECE4] transition-colors text-xl leading-none"
                  @click="qty = Math.max(1, qty - 1)"
                  :disabled="qty <= 1"
                >−</button>
                <span class="w-10 text-center text-sm">{{ qty }}</span>
                <button
                  class="w-9 h-9 flex items-center justify-center text-[#1C1C1C] hover:bg-[#F0ECE4] transition-colors"
                  @click="qty++"
                >+</button>
              </div>
            </div>

            <!-- Actions -->
            <div class="space-y-3 mb-8">
              <button
                class="btn-primary w-full justify-center flex"
                :disabled="!product.inStock"
                @click="addToCart"
              >
                {{ addedToCart ? 'Added to Cart ✓' : 'Add to Cart' }}
              </button>
              <WishlistButton :product-id="product.id" />
              <WhatsAppButton @click="showWhatsApp = true" />
            </div>

            <!-- Accordion -->
            <div class="border-t border-[#E8D5A3]">
              <AccordionItem
                v-for="acc in accordion"
                :key="acc.label"
                :label="acc.label"
                :content="acc.content"
              />
            </div>
          </div>
        </div>

        <!-- You May Also Like -->
        <div v-if="related && related.length > 0">
          <div class="text-center mb-10">
            <span class="label">Discover More</span>
            <h2 class="section-title">You May Also Like</h2>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <ProductCard
              v-for="p in related"
              :key="p.id"
              :product="p"
            />
          </div>
        </div>
      </div>
    </template>

    <!-- WhatsApp Modal for this product -->
    <WhatsAppModal v-model="showWhatsApp" :product="product" />
  </div>
</template>

<script setup>
import { useCartStore } from '~/stores/cart'

const route = useRoute()
const cart = useCartStore()

const { data: product, pending } = await useAsyncData(
  `product-${route.params.slug}`,
  () => queryContent('products').where({ slug: route.params.slug }).findOne()
)

// SEO — called at top-level (valid here in page setup)
useSeoMeta({
  title: computed(() => product.value ? `${product.value.name} — Laame Jewels` : 'Laame Jewels'),
  description: computed(() => product.value?.description || ''),
  ogTitle: computed(() => product.value?.name || ''),
  ogDescription: computed(() => product.value?.description || ''),
  ogImage: computed(() => product.value?.images?.[0] || ''),
})

// Related products — lazy, fetched after product resolves
const { data: related } = useLazyAsyncData(
  `related-${route.params.slug}`,
  () => {
    if (!product.value) return Promise.resolve([])
    return queryContent('products')
      .where({ category: product.value.category })
      .limit(5)
      .find()
      .then(results => results.filter(p => p.slug !== route.params.slug).slice(0, 4))
  },
  { watch: [product] }
)

const qty = ref(1)
const showWhatsApp = ref(false)
const addedToCart = ref(false)

const addToCart = () => {
  if (!product.value) return
  for (let i = 0; i < qty.value; i++) {
    cart.addItem(product.value)
  }
  addedToCart.value = true
  setTimeout(() => (addedToCart.value = false), 2000)
}

const accordion = computed(() => product.value ? [
  { label: 'Care Instructions', content: product.value.careInstructions },
  { label: 'Shipping & Delivery', content: product.value.shipping },
  { label: 'Returns & Exchanges', content: product.value.returns },
] : [])
</script>
