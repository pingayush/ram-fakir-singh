import Image from 'next/image'

export default function LogoWall({ logos }: { logos: { src: string; alt: string }[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
      {logos.map((logo, idx) => (
        <div key={idx} className="relative h-10 grayscale hover:grayscale-0 transition">
          <Image src={logo.src} alt={logo.alt} fill className="object-contain" />
        </div>
      ))}
    </div>
  )
}


