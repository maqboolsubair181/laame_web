export const useWishlist = () => {
  const wishlist = useState('wishlist', () => [])

  const isWishlisted = (id) => wishlist.value.includes(id)

  const toggleWishlist = (id) => {
    const idx = wishlist.value.indexOf(id)
    if (idx === -1) {
      wishlist.value.push(id)
    } else {
      wishlist.value.splice(idx, 1)
    }
    if (import.meta.client) {
      localStorage.setItem('lj_wishlist', JSON.stringify(wishlist.value))
    }
  }

  const addToWishlist = (id) => {
    if (!isWishlisted(id)) {
      wishlist.value.push(id)
      if (import.meta.client) {
        localStorage.setItem('lj_wishlist', JSON.stringify(wishlist.value))
      }
    }
  }

  const removeFromWishlist = (id) => {
    wishlist.value = wishlist.value.filter((i) => i !== id)
    if (import.meta.client) {
      localStorage.setItem('lj_wishlist', JSON.stringify(wishlist.value))
    }
  }

  const wishlistCount = computed(() => wishlist.value.length)

  // Restore from localStorage on client
  if (import.meta.client && wishlist.value.length === 0) {
    try {
      const saved = localStorage.getItem('lj_wishlist')
      if (saved) wishlist.value = JSON.parse(saved)
    } catch {}
  }

  return {
    wishlist,
    isWishlisted,
    toggleWishlist,
    addToWishlist,
    removeFromWishlist,
    wishlistCount,
  }
}
