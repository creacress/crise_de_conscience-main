'use client'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const schema = z.object({
  name: z.string().min(2, 'Nom requis'),
  email: z.string().email('Email invalide'),
  message: z.string().min(10, 'Message trop court'),
})

type FormData = z.infer<typeof schema>

export default function ContactForm() {
  const [sent, setSent] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = (data: FormData) => {
    console.log(data)
    setSent(true)
  }

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Contact – Crise de Conscience',
            description:
              "Contactez l'association Crise de Conscience pour toute question ou témoignage.",
            url: 'https://criseconscience.org/contact',
            publisher: {
              '@type': 'NGO',
              name: 'Crise de Conscience',
              url: 'https://criseconscience.org',
            },
          }),
        }}
      />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="py-16 px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-emerald-700 mb-4">Contactez-nous</h1>
        <p className="text-gray-700 mb-2">
          Vous traversez une période difficile ou souhaitez simplement discuter ?
        </p>
        <p className="text-sm text-gray-600 mb-6">
          Nous sommes là pour vous écouter, vous aider, vous orienter. Écrivez-nous en toute confidentialité.
        </p>

        {sent ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-emerald-100 border border-emerald-300 text-emerald-800 px-4 py-3 rounded"
          >
            Merci pour votre message. Nous reviendrons vers vous sous peu.
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-800">
                Nom
              </label>
              <input
                id="name"
                {...register('name')}
                className="mt-1 w-full border rounded-md p-2 shadow-sm focus:ring-2 focus:ring-emerald-500"
              />
              <AnimatePresence>
                {errors.name && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="text-sm text-red-600"
                  >
                    {errors.name.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-800">
                Email
              </label>
              <input
                id="email"
                type="email"
                {...register('email')}
                className="mt-1 w-full border rounded-md p-2 shadow-sm focus:ring-2 focus:ring-emerald-500"
              />
              <AnimatePresence>
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="text-sm text-red-600"
                  >
                    {errors.email.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-800">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                {...register('message')}
                className="mt-1 w-full border rounded-md p-2 shadow-sm focus:ring-2 focus:ring-emerald-500"
              />
              <AnimatePresence>
                {errors.message && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="text-sm text-red-600"
                  >
                    {errors.message.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-emerald-600 text-white py-2 rounded-md hover:bg-emerald-700 transition-colors"
            >
              Envoyer
            </motion.button>
          </form>
        )}

        {/* CTA bas de page */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center border-t pt-6"
        >
          <h2 className="text-xl font-semibold text-emerald-700 mb-2">
            Ensemble, on avance.
          </h2>
          <p className="text-gray-600 text-sm">
            Partagez notre site à une personne qui pourrait en avoir besoin 💚
          </p>
        </motion.div>
      </motion.main>
    </>
  )
}
