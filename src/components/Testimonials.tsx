import Image from 'next/image'

type Testimonial = { name: string; role: string; rating: number; quote: string; avatar: string }

export default function Testimonials({ items }: { items: Testimonial[] }) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {items.map((t, i) => (
        <div key={i} className="card p-6">
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12 rounded-full overflow-hidden">
              <Image src={t.avatar} alt={t.name} fill className="object-cover" />
            </div>
            <div>
              <div className="font-semibold">{t.name}</div>
              <div className="text-xs text-gray-500">{t.role}</div>
            </div>
            <div className="ml-auto text-amber-500">{'★'.repeat(t.rating)}</div>
          </div>
          <p className="mt-4 text-gray-700">“{t.quote}”</p>
        </div>
      ))}
    </div>
  )
}


