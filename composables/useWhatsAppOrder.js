export const useWhatsAppOrder = () => {
  const config = useRuntimeConfig()
  const PHONE = config.public.whatsappPhone || '919744421599'

  const openWhatsApp = (items, total, customer) => {
    const lines = items
      .map(
        (i) =>
          `• ${i.name} × ${i.qty}  →  ₹${(i.price * i.qty).toLocaleString('en-IN')}`
      )
      .join('\n')

    const msg = `Hello! I'd like to place an order 🛍️

*Items:*
${lines}

*Total: ₹${total.toLocaleString('en-IN')}*

*My Details:*
Name: ${customer.name}
Phone: ${customer.phone}
Address: ${customer.address}

Please confirm availability. Thank you!`

    window.open(
      `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`,
      '_blank'
    )
  }

  return { openWhatsApp }
}
