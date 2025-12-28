import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { WhatsAppButton } from './WhatsAppButton'

export default function Layout() {
  return (
    <main className="flex flex-col min-h-screen font-sans text-foreground bg-background">
      <Navbar />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
