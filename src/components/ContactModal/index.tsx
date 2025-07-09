'use client';
import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function ContactModal({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const { language } = useLanguage();

const placeholders = {
  fr: {
    name: 'Nom',
    email: 'Email',
    message: 'Comment améliorer DealScout ? Soyez le plus précis possible.',
    send: 'Envoyer',
  },
  en: {
    name: 'Name',
    email: 'Email',
    message: 'Any way to improve DealScout? Be exhaustive if you can.',
    send: 'Send',
  },
  es: {
    name: 'Nombre',
    email: 'Correo electrónico',
    message: '¿Cómo mejorar DealScout? Sé lo más detallado posible.',
    send: 'Enviar',
  },
};

const t = placeholders[language];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-[linear-gradient(to_bottom,var(--gradient-top),var(--gradient-mid),var(--gradient-bottom))] rounded-lg p-6 w-full max-w-md relative text-white">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-white text-xl"
        >
          ✕
        </button>

        <h3 className="text-center text-xl font-bold mb-4 text-white">Contact</h3>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
            type="text"
            name="name"
            placeholder={t.name}
            className="border px-3 py-2 rounded"
            value={formData.name}
            onChange={handleChange}
            required
        />
        <input
            type="email"
            name="email"
            placeholder={t.email}
            className="border px-3 py-2 rounded"
            value={formData.email}
            onChange={handleChange}
            required
        />
        <textarea
            name="message"
            placeholder={t.message}
            className="border px-3 py-2 rounded resize-none"
            rows={8}
            value={formData.message}
            onChange={handleChange}
            required
            maxLength={15000}
            />
            <p className={`text-sm text-right ${formData.message.length > 14000 ? 'text-red-500' : 'text-white/70'}`}>
    {formData.message.length}/15000
  </p>
        <div className="flex justify-center">
            <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
            >
            {t.send}
            </button>
    </div>
</form>

      </div>
    </div>
  );
}
