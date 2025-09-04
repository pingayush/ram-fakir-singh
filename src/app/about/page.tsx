import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="container-responsive py-12">
        <h1 className="text-3xl font-bold">About Us</h1>
        <p className="mt-3 text-gray-700 max-w-3xl">Ram Fakir Singh Sewa Samiti is a Varanasi-based organization led by Sushil Kumar Singh. Our mission is to deliver dependable manpower solutions and execute government tenders with integrity and excellence.</p>

        <div className="mt-10 grid md:grid-cols-2 gap-8">
          <div className="rounded-lg border p-6 bg-white">
            <h2 className="text-xl font-semibold">Mission</h2>
            <p className="mt-2 text-gray-700">To empower government departments with skilled manpower and timely project execution, ensuring efficiency and public trust.</p>
          </div>
          <div className="rounded-lg border p-6 bg-white">
            <h2 className="text-xl font-semibold">Vision</h2>
            <p className="mt-2 text-gray-700">To be a benchmark in manpower services and tender execution across Uttar Pradesh, known for quality and reliability.</p>
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <div key={i} className="aspect-video rounded-lg bg-gray-100 border flex items-center justify-center text-gray-400">Image Placeholder</div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
