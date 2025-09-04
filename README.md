# Ram Fakir Singh Sewa Samiti Website

Modern, responsive website built with Next.js (App Router), React, Tailwind CSS, and MongoDB.

## Tech Stack
- Next.js 14 (App Router) + React 18 + TypeScript
- Tailwind CSS
- API routes for backend
- MongoDB + Mongoose for storing applications

## Getting Started
1. Install Node.js 18+
2. Create `.env.local` in project root:
```
MONGODB_URI=YOUR_MONGODB_CONNECTION_STRING
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```
3. Install dependencies and run:
```
npm install
npm run dev
```
4. Open http://localhost:3000

## Pages
- `/` Home with hero and dashboard stats
- `/about` Organization mission, vision, history, images
- `/careers` Openings list + application form
- `/contact` Contact info + contact form

## API
- `POST /api/apply` Save application `{ name, email, phone, education, resumeUrl }`
- `POST /api/contact` Send contact message `{ name, email, message }`

## Deployment
- Frontend: Vercel
- DB: MongoDB Atlas
- If needed, separate backend can be hosted on Render/Railway.

## Future Enhancements
- Direct resume file upload (S3, Firebase Storage)
- Admin dashboard (auth-protected) to view submissions
- Email notifications (Nodemailer)

