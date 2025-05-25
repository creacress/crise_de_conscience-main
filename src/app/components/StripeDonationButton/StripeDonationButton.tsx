'use client';

import { useState } from 'react';

export default function StripeDonationButton() {
  const [loading, setLoading] = useState(false);

  const handleDonate = async () => {
    setLoading(true);
    const res = await fetch('/api/create-checkout-session', {
      method: 'POST',
    });
    const data = await res.json();
    window.location.href = data.url;
  };

  return (
    <button
      onClick={handleDonate}
      disabled={loading}
      className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition text-sm"
    >
      {loading ? 'Redirection…' : 'Don CB / Apple Pay'}
    </button>
  );
}
