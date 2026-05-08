import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
    isOpen: false,
  }),

  getters: {
    total: (state) =>
      state.items.reduce((sum, i) => sum + i.price * i.qty, 0),

    count: (state) =>
      state.items.reduce((sum, i) => sum + i.qty, 0),

    isEmpty: (state) => state.items.length === 0,

    formattedTotal: (state) => {
      const total = state.items.reduce((sum, i) => sum + i.price * i.qty, 0)
      return `₹${total.toLocaleString('en-IN')}`
    },
  },

  actions: {
    addItem(product) {
      const existing = this.items.find((i) => i.id === product.id)
      if (existing) {
        existing.qty++
      } else {
        this.items.push({ ...product, qty: 1 })
      }
      this.isOpen = true
    },

    removeItem(id) {
      this.items = this.items.filter((i) => i.id !== id)
    },

    updateQty(id, qty) {
      const item = this.items.find((i) => i.id === id)
      if (item) item.qty = Math.max(1, qty)
    },

    clearCart() {
      this.items = []
    },

    openCart() {
      this.isOpen = true
    },

    closeCart() {
      this.isOpen = false
    },

    toggleCart() {
      this.isOpen = !this.isOpen
    },
  },

  persist: true,
})
