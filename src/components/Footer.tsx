export default function Footer() {
  return (
    <footer className="mt-auto border-t border-gray-100 bg-gray-50">
      <div className="container-responsive py-6 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span>© 2025 Ram Fakir Singh Sewa Samiti</span>
        </div>
        <div className="flex items-center gap-4">
          <a className="hover:text-primary-700" href="/about">About</a>
          <a className="hover:text-primary-700" href="/careers">Careers</a>
          <a className="hover:text-primary-700" href="/contact">Contact</a>
        </div>
      </div>
    </footer>
  )
}
