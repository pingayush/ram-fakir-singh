import { Schema, model, models } from 'mongoose'

const ApplicationSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    education: { type: String, required: true },
    resumeUrl: { type: String, required: true },
  },
  { timestamps: true }
)

export type ApplicationDoc = {
  name: string
  email: string
  phone: string
  education: string
  resumeUrl: string
}

export default (models as any).Application || model('Application', ApplicationSchema)
