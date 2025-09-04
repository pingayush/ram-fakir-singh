import { NextRequest, NextResponse } from 'next/server'
import { connectToDatabase } from '@/lib/db'
import Application from '@/models/Application'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get('content-type') || ''
    if (contentType.includes('multipart/form-data')) {
      const formData = await req.formData()
      const name = String(formData.get('name') || '')
      const email = String(formData.get('email') || '')
      const phone = String(formData.get('phone') || '')
      const education = String(formData.get('education') || '')
      const resumeUrl = String(formData.get('resumeUrl') || '')

      if (!name || !email || !phone || !education || !resumeUrl) {
        return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
      }

      await connectToDatabase()
      const doc = await (Application as any).create({ name, email, phone, education, resumeUrl })
      return NextResponse.json({ ok: true, id: doc._id })
    }

    const payload = await req.json()
    const { name, email, phone, education, resumeUrl } = payload || {}

    if (!name || !email || !phone || !education || !resumeUrl) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    await connectToDatabase()
    const doc = await (Application as any).create({ name, email, phone, education, resumeUrl })
    return NextResponse.json({ ok: true, id: doc._id })
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
