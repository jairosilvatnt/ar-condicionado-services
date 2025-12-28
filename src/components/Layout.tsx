import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { WhatsAppButton } from './WhatsAppButton'
import { ScrollRestoration } from 'react-router-dom'

export default function Layout() {
  return (
    <main className="flex flex-col min-h-screen font-sans text-foreground bg-background">
      <Navbar />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
      <WhatsAppButton />
      <ScrollRestoration />
    </main>
  )
}
