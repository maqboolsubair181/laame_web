<template>
  <footer class="bg-[#1C1C1C] text-[#FAF8F5] pt-16 pb-8">
    <div class="max-w-[1400px] mx-auto px-4 md:px-8">
      <!-- Top -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-white/10">
        <!-- Brand -->
        <div class="md:col-span-1">
          <NuxtLink to="/" class="flex items-center gap-2.5 mb-4">
            <NuxtImg
              src="/images/logo.png"
              alt="Laame Jewels"
              width="36"
              height="36"
              class="w-8 h-8 object-contain brightness-200"
            />
            <span class="font-serif text-2xl text-white tracking-wide">Laame Jewels</span>
          </NuxtLink>
          <p class="text-sm text-white/50 leading-relaxed max-w-[200px]">
            Handcrafted jewellery for every chapter of your story. BIS Hallmarked. Always authentic.
          </p>
          <div class="flex items-center gap-4 mt-6">
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener"
              aria-label="WhatsApp"
              class="text-white/50 hover:text-[#25D366] transition-colors duration-300"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
            <a
              href="https://instagram.com/laamejewels"
              target="_blank"
              rel="noopener"
              aria-label="Instagram"
              class="text-white/50 hover:text-[#B8942E] transition-colors duration-300"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <rect x="2" y="2" width="20" height="20" rx="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Collections -->
        <div>
          <h4 class="text-[10px] tracking-[0.2em] uppercase text-[#B8942E] mb-5">Collections</h4>
          <ul class="space-y-3">
            <li v-for="link in collectionLinks" :key="link.label">
              <NuxtLink :to="link.href" class="footer-link">{{ link.label }}</NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Help -->
        <div>
          <h4 class="text-[10px] tracking-[0.2em] uppercase text-[#B8942E] mb-5">Help</h4>
          <ul class="space-y-3">
            <li v-for="link in helpLinks" :key="link.label">
              <NuxtLink :to="link.href" class="footer-link">{{ link.label }}</NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="text-[10px] tracking-[0.2em] uppercase text-[#B8942E] mb-5">Contact</h4>
          <ul class="space-y-3 text-sm text-white/50">
            <li>Mon–Sat, 10am–7pm IST</li>
            <li>
              <a href="tel:+919876543210" class="hover:text-[#B8942E] transition-colors">+91 98765 43210</a>
            </li>
            <li>
              <a href="mailto:hello@laamejewels.com" class="hover:text-[#B8942E] transition-colors">hello@laamejewels.com</a>
            </li>
            <li class="pt-2">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener"
                class="btn-whatsapp text-xs py-3 rounded-none justify-start gap-2 px-4 w-auto inline-flex"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Chat with us
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom -->
      <div class="flex flex-col md:flex-row items-center justify-between pt-8 gap-4 text-[11px] text-white/30 tracking-[0.1em] uppercase">
        <p>© {{ new Date().getFullYear() }} Laame Jewels. All rights reserved.</p>
        <div class="flex items-center gap-4">
          <NuxtLink to="/privacy" class="hover:text-white/60 transition-colors">Privacy</NuxtLink>
          <NuxtLink to="/terms" class="hover:text-white/60 transition-colors">Terms</NuxtLink>
          <span class="flex items-center gap-1.5">
            <svg width="28" height="18" viewBox="0 0 38 24" fill="none"><rect width="38" height="24" rx="3" fill="#1A1F71"/><path d="M15 16.5h8M14 12h10M13 7.5h12" stroke="#FAF8F5" stroke-width="1.2" stroke-linecap="round"/></svg>
            <svg width="28" height="18" viewBox="0 0 38 24" fill="none"><rect width="38" height="24" rx="3" fill="#EB001B" fill-opacity=".08"/><circle cx="14" cy="12" r="7" fill="#EB001B"/><circle cx="24" cy="12" r="7" fill="#F79E1B"/><path d="M19 6.8a7 7 0 000 10.4A7 7 0 0019 6.8z" fill="#FF5F00"/></svg>
          </span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const collectionLinks = [
  { label: "What's New", href: '/shop?filter=new' },
  { label: 'Earrings', href: '/shop?category=Earrings' },
  { label: 'Necklaces', href: '/shop?category=Necklaces' },
  { label: 'Rings', href: '/shop?category=Rings' },
  { label: 'Bridal Sets', href: '/shop?category=Bridal+Sets' },
  { label: 'All Jewellery', href: '/shop' },
]

const helpLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Shipping & Delivery', href: '/shipping' },
  { label: 'Returns & Exchanges', href: '/returns' },
  { label: 'Size Guide', href: '/size-guide' },
  { label: 'Care Instructions', href: '/care' },
]
</script>

<style scoped>
.footer-link {
  @apply text-sm text-white/50 hover:text-[#B8942E] transition-colors duration-200;
}
</style>
