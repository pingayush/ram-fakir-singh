import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Button from '@/components/Button'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative">
          <div className="absolute inset-0 -z-10">
            <Image src="/hero-pattern.svg" alt="" fill priority className="object-cover" />
          </div>
          <div className="container-responsive py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm uppercase tracking-wide text-primary-700 font-semibold">Varanasi, Uttar Pradesh, India</p>
              <h1 className="mt-3 text-3xl md:text-5xl font-bold text-gray-900">Ram Fakir Singh Sewa Samiti</h1>
              <p className="mt-3 text-gray-700">Owned by <span className="font-semibold">Sushil Kumar Singh</span>. We specialize in manpower supply and execution of government tenders with a commitment to quality and reliability.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/careers"><Button size="lg">We are Hiring! Apply Now</Button></Link>
                <Link href="/about"><Button variant="outline" size="lg">Learn More</Button></Link>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-white border border-primary-100 rounded-xl p-6 shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="rounded-lg bg-white border p-5">
                  <div className="text-2xl font-bold text-primary-700">100+ </div>
                  <div className="text-sm text-gray-600">Government Tenders Executed</div>
                </div>
                <div className="rounded-lg bg-white border p-5">
                  <div className="text-2xl font-bold text-primary-700">1000+ </div>
                  <div className="text-sm text-gray-600">Manpower Supply Jobs Provided</div>
                </div>
                <div className="rounded-lg bg-white border p-5">
                  <div className="text-2xl font-bold text-primary-700">5★</div>
                  <div className="text-sm text-gray-600">Consistent Employer Feedback</div>
                </div>
              </div>
              <div className="mt-6 flex items-center gap-6 opacity-80">
                {['/client-1.png','/client-2.png','/client-3.png','/client-4.png'].map((src) => (
                  <div key={src} className="relative h-10 w-28">
                    <Image src={src} alt="Client logo" fill className="object-contain" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="dashboard" className="py-12">
          <div className="container-responsive">
            <h2 className="text-xl font-semibold">Dashboard Highlights</h2>
            <p className="text-gray-600 mt-2">Key metrics that define our reliability and scale.</p>
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: 'Active Contracts', value: '25+' },
                { title: 'On-time Delivery', value: '98%' },
                { title: 'Avg. Satisfaction', value: '4.8/5' },
                { title: 'Years of Service', value: '10+' },
              ].map((item) => (
                <div key={item.title} className="rounded-lg bg-white border p-5">
                  <div className="text-2xl font-bold text-primary-700">{item.value}</div>
                  <div className="text-sm text-gray-600">{item.title}</div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex items-center gap-6">
              <Image src="/govt-emblem.svg" alt="Govt tenders" width={56} height={56} />
              <p className="text-sm text-gray-600">Trusted partner in multiple government departments and public sector tenders.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}


