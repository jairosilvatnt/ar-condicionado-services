import { MessageCircle } from 'lucide-react'

export function WhatsAppButton() {
  const handleClick = () => {
    const message = encodeURIComponent(
      'Olá! Gostaria de um orçamento para meu ar-condicionado.',
    )
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank')
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-[#22C55E] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group animate-bounce-subtle"
      aria-label="Fale conosco no WhatsApp"
    >
      <div className="absolute inset-0 rounded-full bg-[#22C55E] animate-ping opacity-20"></div>
      <MessageCircle className="w-8 h-8 fill-current" />
    </button>
  )
}
