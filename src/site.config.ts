export const site = {
  name: 'Ram Fakir Singh Sewa Samiti',
  owner: 'Sushil Kumar Singh',
  location: 'Varanasi, Uttar Pradesh, India',
  stats: [
    { label: 'Government Tenders Executed', value: '100+' },
    { label: 'Manpower Supply Jobs Provided', value: '1000+' },
    { label: 'Consistent Employer Feedback', value: '5★' },
  ],
  clients: Array.from({ length: 12 }).map((_, i) => ({
    src: `/clients/client-${(i % 4) + 1}.png`,
    alt: 'Client logo',
  })),
  testimonials: [
    { name: 'Ananya Verma', role: 'Admin, Govt Dept.', rating: 5, quote: 'Reliable manpower and on-time delivery.', avatar: '/people/1.jpg' },
    { name: 'Ravi Kumar', role: 'Procurement Lead', rating: 5, quote: 'Professional team, responsive and compliant.', avatar: '/people/2.jpg' },
    { name: 'Priya Singh', role: 'Operations', rating: 4, quote: 'Smooth execution and great coordination.', avatar: '/people/3.jpg' },
  ],
  gallery: Array.from({ length: 9 }).map((_, i) => ({ src: `/gallery/gallery-${(i % 3) + 1}.jpg`, alt: 'Work gallery' })),
}

export type SiteConfig = typeof site

