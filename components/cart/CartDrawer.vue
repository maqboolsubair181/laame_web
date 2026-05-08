<template>
  <Transition name="drawer">
    <div v-if="cart.isOpen" class="fixed inset-0 z-[80] flex justify-end">
      <!-- Backdrop -->
      <div
        class="absolute inset-0 bg-black/40 backdrop-blur-sm"
        @click="cart.closeCart()"
      />

      <!-- Panel -->
      <div class="relative w-full max-w-[420px] bg-[#FAF8F5] flex flex-col h-full shadow-2xl">
        <!-- Header -->
        <div class="flex items-center justify-between px-6 py-5 border-b border-[#E8D5A3]">
          <h2 class="font-serif text-2xl text-[#1C1C1C]">Your Cart</h2>
          <span class="text-sm text-[#7A7A7A]">{{ cart.count }} {{ cart.count === 1 ? 'item' : 'items' }}</span>
          <button @click="cart.closeCart()" aria-label="Close cart" class="text-[#7A7A7A] hover:text-[#1C1C1C] transition-colors">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M2 2L18 18M18 2L2 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </button>
        </div>

        <!-- Empty -->
        <div v-if="cart.isEmpty" class="flex-1 flex flex-col items-center justify-center px-6 text-center">
          <div class="w-16 h-16 border border-[#E8D5A3] flex items-center justify-center mb-6">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" stroke="#B8942E" stroke-width="1.4"/>
              <line x1="3" y1="6" x2="21" y2="6" stroke="#B8942E" stroke-width="1.4"/>
              <path d="M16 10a4 4 0 01-8 0" stroke="#B8942E" stroke-width="1.4"/>
            </svg>
          </div>
          <h3 class="font-serif text-2xl mb-2">Your cart is empty</h3>
          <p class="text-sm text-[#7A7A7A] mb-8">Discover handcrafted jewellery crafted with love.</p>
          <button class="btn-primary" @click="exploreShop">
            Explore Collection
          </button>
        </div>

        <!-- Items -->
        <div v-else class="flex-1 overflow-y-auto px-6 py-4 space-y-0">
          <CartItem
            v-for="item in cart.items"
            :key="item.id"
            :item="item"
          />
        </div>

        <!-- Footer -->
        <div v-if="!cart.isEmpty" class="border-t border-[#E8D5A3] px-6 py-6 space-y-4">
          <div class="flex items-center justify-between">
            <span class="text-sm text-[#7A7A7A] uppercase tracking-[0.1em]">Subtotal</span>
            <span class="font-serif text-2xl">₹{{ cart.total.toLocaleString('en-IN') }}</span>
          </div>
          <p class="text-xs text-[#7A7A7A]">Shipping calculated at checkout. Free above ₹1,000.</p>
          <button
            class="btn-whatsapp"
            @click="openWhatsAppModal = true"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Order via WhatsApp
          </button>
          <button class="btn-ghost w-full justify-center" @click="cart.clearCart()">Clear Cart</button>
        </div>
      </div>
    </div>
  </Transition>

  <!-- WhatsApp Modal -->
  <WhatsAppModal v-model="openWhatsAppModal" />
</template>

<script setup>
import { useCartStore } from '~/stores/cart'

const cart = useCartStore()
const openWhatsAppModal = ref(false)

const exploreShop = () => {
  cart.closeCart()
  navigateTo('/shop')
}
</script>

<style scoped>
.drawer-enter-active .absolute,
.drawer-leave-active .absolute {
  transition: opacity 0.3s ease;
}
.drawer-enter-from .absolute,
.drawer-leave-to .absolute {
  opacity: 0;
}
.drawer-enter-active > div:last-child,
.drawer-leave-active > div:last-child {
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}
.drawer-enter-from > div:last-child,
.drawer-leave-to > div:last-child {
  transform: translateX(100%);
}
</style>
