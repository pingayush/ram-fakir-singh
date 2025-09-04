'use client'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { FormEvent, useState } from 'react'

const JOBS = [
  { id: '1', title: 'Data Entry Operator', location: 'Varanasi', type: 'Full-time' },
  { id: '2', title: 'Office Assistant', location: 'Varanasi', type: 'Contract' },
  { id: '3', title: 'Field Supervisor', location: 'Varanasi', type: 'Full-time' },
]

export default function CareersPage() {
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    setError(null)
    setSuccess(null)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const res = await fetch('/api/apply', {
        method: 'POST',
        body: formData
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Failed to submit')
      setSuccess('Application submitted successfully!')
      form.reset()
    } catch (err: any) {
      setError(err.message || 'Something went wrong')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <Navbar />
      <main className="container-responsive py-12">
        <h1 className="text-3xl font-bold">Careers</h1>
        <p className="mt-2 text-gray-700">We are hiring skilled professionals. Apply now.</p>

        <div className="mt-8 grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <h2 className="text-xl font-semibold">Open Positions</h2>
            <ul className="mt-4 space-y-3">
              {JOBS.map((job) => (
                <li key={job.id} className="rounded-md border p-4 bg-white">
                  <div className="font-medium">{job.title}</div>
                  <div className="text-xs text-gray-600">{job.location} • {job.type}</div>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h2 className="text-xl font-semibold">Apply Now</h2>
            <form onSubmit={handleSubmit} className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4" encType="multipart/form-data">
              <input name="name" required placeholder="Full Name" className="border rounded-md p-2" />
              <input name="email" type="email" required placeholder="Email" className="border rounded-md p-2" />
              <input name="phone" required placeholder="Phone" className="border rounded-md p-2" />
              <input name="education" required placeholder="Education Details" className="border rounded-md p-2" />
              <input name="resumeUrl" required placeholder="Resume Link (PDF/DOC in Drive)" className="border rounded-md p-2 col-span-1 sm:col-span-2" />
              <button disabled={submitting} className="col-span-1 sm:col-span-2 inline-flex justify-center items-center px-4 py-2 rounded-md bg-primary-600 text-white">
                {submitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </form>
            {success && <p className="mt-3 text-green-700">{success}</p>}
            {error && <p className="mt-3 text-red-700">{error}</p>}
            <p className="mt-4 text-xs text-gray-500">Note: Upload your resume to Google Drive/Dropbox and paste the shareable link above. Direct file uploads can be enabled later via storage integration.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
