import { NextResponse } from 'next/server'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1),
})

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const data = contactSchema.parse(body)

    // Ici tu peux ajouter : envoi d'email, sauvegarde en BDD, webhook, etc.
    console.log('Message reçu :', data)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { success: false, error: 'Invalid input' },
      { status: 400 }
    )
  }
}
