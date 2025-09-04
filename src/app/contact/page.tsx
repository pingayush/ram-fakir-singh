"use client"
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Button from '@/components/Button'
import { FormEvent, useState } from 'react'

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false)
  const [status, setStatus] = useState<string | null>(null)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    setStatus(null)
    const form = e.currentTarget
    const formData = new FormData(form)
    const payload = Object.fromEntries(formData.entries())
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Failed')
      setStatus('Message sent successfully!')
      form.reset()
    } catch (err: any) {
      setStatus(err.message || 'Something went wrong')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <Navbar />
      <main className="container-responsive py-12">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <div className="mt-6 grid md:grid-cols-2 gap-8">
          <div className="rounded-md border p-6 bg-white">
            <h2 className="text-xl font-semibold">Office</h2>
            <p className="mt-2 text-gray-700">Varanasi, Uttar Pradesh, India</p>
            <p className="mt-2 text-gray-700">Email: info@example.com</p>
            <p className="mt-1 text-gray-700">Phone: +91-XXXXXXXXXX</p>
          </div>
          <div className="rounded-md border p-6 bg-white">
            <h2 className="text-xl font-semibold">Send us a message</h2>
            <form onSubmit={handleSubmit} className="mt-4 grid grid-cols-1 gap-3">
              <input name="name" required placeholder="Your Name" className="border rounded-md p-2 focus:ring-2 focus:ring-primary-500" />
              <input name="email" required type="email" placeholder="Your Email" className="border rounded-md p-2 focus:ring-2 focus:ring-primary-500" />
              <textarea name="message" required placeholder="Message" className="border rounded-md p-2 min-h-32 focus:ring-2 focus:ring-primary-500" />
              <Button disabled={submitting} className="w-full">
                {submitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
            {status && <p className="mt-3 text-gray-700">{status}</p>}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}


