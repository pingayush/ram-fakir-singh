import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="container-responsive py-3 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold text-primary-700">Ram Fakir Singh Sewa Samiti</Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <Link href="/" className="hover:text-primary-700">Home</Link>
          <Link href="/about" className="hover:text-primary-700">About</Link>
          <Link href="/#dashboard" className="hover:text-primary-700">Dashboard</Link>
          <Link href="/careers" className="hover:text-primary-700">Careers</Link>
          <Link href="/contact" className="hover:text-primary-700">Contact</Link>
        </nav>
        <Link href="/careers" className="md:hidden inline-flex items-center px-3 py-1.5 rounded-md bg-primary-600 text-white text-sm">Careers</Link>
      </div>
    </header>
  )
}
