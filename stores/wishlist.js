import { defineStore } from 'pinia'

export const useWishlistStore = defineStore('wishlist', {
  state: () => ({
    ids: [],
  }),

  getters: {
    count: (state) => state.ids.length,
    isEmpty: (state) => state.ids.length === 0,
    isWishlisted: (state) => (id) => state.ids.includes(id),
  },

  actions: {
    toggle(id) {
      const idx = this.ids.indexOf(id)
      if (idx === -1) {
        this.ids.push(id)
      } else {
        this.ids.splice(idx, 1)
      }
    },
    add(id) {
      if (!this.ids.includes(id)) {
        this.ids.push(id)
      }
    },
    remove(id) {
      this.ids = this.ids.filter((i) => i !== id)
    },
    clear() {
      this.ids = []
    },
  },

})
