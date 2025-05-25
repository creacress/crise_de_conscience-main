import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-03-31.basil',
})

export async function POST(req: NextRequest) {
  const { amount } = await req.json()

  if (!amount || amount < 1) {
    return NextResponse.json({ error: 'Montant invalide' }, { status: 400 })
  }

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    mode: 'payment',
    line_items: [
      {
        price_data: {
          currency: 'eur',
          product_data: {
            name: 'Don à l’association',
          },
          unit_amount: amount * 100, // en centimes
        },
        quantity: 1,
      },
    ],
    success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/merci`,
    cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/dons`,
  })

  return NextResponse.json({ url: session.url })
}
