<template>
  <div>
    <HeroBanner />
    <CategoryGrid />

    <FeaturedProducts
      label="Bestsellers"
      title="Most Loved Pieces"
      :featured="true"
      :limit="4"
      view-all-link="/shop"
    />

    <PromoBanner />

    <FeaturedProducts
      label="Exclusive Offers"
      title="Combo Sets"
      collection="combos"
      :limit="4"
      view-all-link="/shop?category=Combos"
    />

    <FeaturedProducts
      label="What's New"
      title="Fresh Arrivals"
      :is-new="true"
      :limit="4"
      view-all-link="/shop?filter=new"
    />

  </div>
</template>

<script setup>
useSeoMeta({
  title: 'LaaMe Jewels — Handcrafted Gold & Diamond Jewellery',
  description: 'Discover handcrafted 18K gold plated jewellery at LaaMe Jewels. Earrings, necklaces, rings, bangles & statement pieces — Anti-Tarnish, delivered to your door.',
  ogTitle: 'LaaMe Jewels — Handcrafted Gold & Diamond Jewellery',
  ogDescription: 'Discover handcrafted 18K gold plated jewellery at LaaMe Jewels.',
  ogType: 'website',
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'JewelryStore',
        name: 'LaaMe Jewels',
        description: '18K gold plated and crystal jewellery. Anti-Tarnish.',
        url: 'https://laamejewels.com',
        telephone: '+91-98765-43210',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'IN',
        },
      }),
    },
  ],
})
</script>
