// Thin wrapper — delegates to the Pinia wishlist store for persistence.
// Components that call useWishlist() continue to work unchanged.
import { useWishlistStore } from '~/stores/wishlist'

export const useWishlist = () => {
  const store = useWishlistStore()

  return {
    wishlist: computed(() => store.ids),
    wishlistCount: computed(() => store.count),
    isWishlisted: (id) => store.isWishlisted(id),
    toggleWishlist: (id) => store.toggle(id),
    addToWishlist: (id) => store.add(id),
    removeFromWishlist: (id) => store.remove(id),
  }
}
