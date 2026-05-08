<template>
  <Transition name="modal">
    <div v-if="modelValue" class="fixed inset-0 z-[90] flex items-center justify-center px-4">
      <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" @click="$emit('update:modelValue', false)" />

      <div class="relative w-full max-w-md bg-[#FAF8F5] p-8 shadow-2xl">
        <!-- Close -->
        <button
          class="absolute top-5 right-5 text-[#7A7A7A] hover:text-[#1C1C1C] transition-colors"
          @click="$emit('update:modelValue', false)"
          aria-label="Close"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M2 2L16 16M16 2L2 16" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
          </svg>
        </button>

        <span class="label">Confirm Order</span>
        <h2 class="font-serif text-3xl mb-1 text-[#1C1C1C]">Your Details</h2>
        <p class="text-sm text-[#7A7A7A] mb-7">We'll send your order directly via WhatsApp.</p>

        <form @submit.prevent="send" class="space-y-4">
          <div>
            <label class="text-xs tracking-[0.1em] uppercase text-[#7A7A7A] mb-1.5 block">Full Name *</label>
            <input
              v-model="form.name"
              type="text"
              required
              placeholder="Priya Sharma"
              class="input-field"
            />
          </div>

          <div>
            <label class="text-xs tracking-[0.1em] uppercase text-[#7A7A7A] mb-1.5 block">Phone Number *</label>
            <input
              v-model="form.phone"
              type="tel"
              required
              placeholder="+91 98765 43210"
              pattern="[0-9+\s\-]{10,15}"
              class="input-field"
            />
          </div>

          <div>
            <label class="text-xs tracking-[0.1em] uppercase text-[#7A7A7A] mb-1.5 block">Delivery Address *</label>
            <textarea
              v-model="form.address"
              required
              rows="3"
              placeholder="House No., Street, City, Pincode"
              class="input-field resize-none"
            />
          </div>

          <!-- Order Summary -->
          <div class="border-t border-[#E8D5A3] pt-4">
            <p class="text-xs text-[#7A7A7A] uppercase tracking-[0.1em] mb-3">Order Summary</p>
            <div class="space-y-1 text-sm text-[#1C1C1C] max-h-28 overflow-y-auto">
              <div v-for="item in cart.items" :key="item.id" class="flex justify-between">
                <span class="truncate mr-4">{{ item.name }} × {{ item.qty }}</span>
                <span class="shrink-0">₹{{ ((item.salePrice || item.price) * item.qty).toLocaleString('en-IN') }}</span>
              </div>
            </div>
            <div class="flex justify-between mt-3 pt-3 border-t border-[#E8D5A3] font-medium">
              <span>Total</span>
              <span class="font-serif text-lg">₹{{ cart.total.toLocaleString('en-IN') }}</span>
            </div>
          </div>

          <button type="submit" class="btn-whatsapp mt-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Send Order on WhatsApp
          </button>
        </form>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { useCartStore } from '~/stores/cart'
import { useWhatsAppOrder } from '~/composables/useWhatsAppOrder'

const props = defineProps({
  modelValue: Boolean,
  product: { type: Object, default: null },
})

const emit = defineEmits(['update:modelValue'])

const cart = useCartStore()
const { openWhatsApp } = useWhatsAppOrder()

const form = reactive({ name: '', phone: '', address: '' })

const send = () => {
  const items = props.product
    ? [{ ...props.product, qty: 1 }]
    : cart.items

  const total = props.product
    ? (props.product.salePrice || props.product.price)
    : cart.total

  openWhatsApp(items, total, form)
  emit('update:modelValue', false)
  form.name = ''
  form.phone = ''
  form.address = ''
}
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.25s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-active .relative,
.modal-leave-active .relative {
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.modal-enter-from .relative,
.modal-leave-to .relative {
  transform: scale(0.95) translateY(10px);
}
</style>
