import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { CheckCircle } from 'lucide-react'
import { useEffect } from 'react'

const Success = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-lg">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h1 className="text-3xl font-bold text-secondary mb-4">
          Solicitação Enviada!
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          Obrigado pelo contato. Nossa equipe já recebeu sua mensagem e
          retornará o mais breve possível com seu orçamento.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link to="/">Voltar para Home</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              Siga-nos no Instagram
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Success
