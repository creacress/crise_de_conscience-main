'use client';

import { useState } from 'react'

const predefined = [5, 10, 20, 50]

export default function StripeDonationForm() {
    const [amount, setAmount] = useState<number | null>(null)
    const [customAmount, setCustomAmount] = useState('')
    const [loading, setLoading] = useState(false)

    const finalAmount = amount ?? Number(customAmount)

    const handleDonate = async () => {
        if (!finalAmount || finalAmount < 1) return
        setLoading(true)
        const res = await fetch('/api/create-checkout-session', {
            method: 'POST',
            body: JSON.stringify({ amount: finalAmount }),
        })
        const data = await res.json()
        window.location.href = data.url
    }

    return (
        <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
                {predefined.map((val) => (
                    <button
                        key={val}
                        onClick={() => {
                            setAmount(val)
                            setCustomAmount('')
                        }}
                        className={`px-4 py-2 rounded border ${amount === val
                                ? 'bg-emerald-600 text-white border-emerald-600'
                                : 'bg-white text-emerald-600 border-emerald-300 hover:bg-emerald-50'
                            }`}
                    >
                        {val} €
                    </button>
                ))}
            </div>

            <input
                type="number"
                min="1"
                step="1"
                placeholder="Autre montant"
                value={customAmount}
                onChange={(e) => {
                    setCustomAmount(e.target.value)
                    setAmount(null)
                }}
                className="w-full px-4 py-2 border rounded border-gray-300 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 text-sm text-gray-800 placeholder-gray-400"
            />


            <button
                onClick={handleDonate}
                disabled={loading || finalAmount < 1}
                className="bg-emerald-600 text-white px-6 py-3 rounded hover:bg-emerald-700 transition text-sm w-full"
            >
                {loading ? 'Redirection...' : `Faire un don de ${finalAmount || '...'} €`}
            </button>
        </div>
    )
}
