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
      label="What's New"
      title="Fresh Arrivals"
      :is-new="true"
      :limit="4"
      view-all-link="/shop?filter=new"
    />

    <Testimonials />
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Laame Jewels — Handcrafted Gold & Diamond Jewellery',
  description: 'Discover handcrafted gold, diamond & gemstone jewellery at Laame Jewels. Earrings, necklaces, rings, bangles & bridal sets — BIS Hallmarked, delivered to your door.',
  ogTitle: 'Laame Jewels — Handcrafted Gold & Diamond Jewellery',
  ogDescription: 'Discover handcrafted gold, diamond & gemstone jewellery at Laame Jewels.',
  ogType: 'website',
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'JewelryStore',
        name: 'Laame Jewels',
        description: 'Handcrafted gold, diamond and gemstone jewellery. BIS Hallmarked.',
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
