'use client';

import { useState, FormEvent } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    purpose: ''
  });
  const [status, setStatus] = useState<FormStatus>({ type: 'idle', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message || !formData.purpose) {
      setStatus({
        type: 'error',
        message: 'Please fill in all fields.'
      });
      return;
    }

    setStatus({ type: 'loading', message: 'Sending your message...' });

    try {
      // Using Web3Form API
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '0bf81e7a-4161-4a98-b6b4-3c4d5e0ded5a',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          purpose: formData.purpose,
          from_name: 'Premium Business Guide',
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully.'
        });
        setFormData({ name: '', email: '', message: '', purpose: '' });
        // Clear success message after 5 seconds
        setTimeout(() => setStatus({ type: 'idle', message: '' }), 5000);
      } else {
        setStatus({
          type: 'error',
          message: 'Something went wrong. Please try again.'
        });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-8 md:p-12 shadow-lg">
      <div className="space-y-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            required
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            required
          />
        </div>

        {/* Purpose Field - Important for Web3Form */}
        <div>
          <label htmlFor="purpose" className="block text-sm font-semibold mb-2">
            Purpose of Your Message
          </label>
          <select
            id="purpose"
            name="purpose"
            value={formData.purpose}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            required
          >
            <option value="">Select a purpose...</option>
            <option value="PDF Download Question">PDF Download Question</option>
            <option value="Consulting Inquiry">Consulting Inquiry</option>
            <option value="Partnership Opportunity">Partnership Opportunity</option>
            <option value="General Question">General Question</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message here..."
            rows={5}
            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
            required
          />
        </div>

        {/* Status Messages */}
        {status.type !== 'idle' && (
          <div className={`flex items-center gap-3 p-4 rounded-lg ${
            status.type === 'success'
              ? 'bg-green-500/10 border border-green-500/30 text-green-400'
              : status.type === 'error'
              ? 'bg-red-500/10 border border-red-500/30 text-red-400'
              : 'bg-primary/10 border border-primary/30 text-primary'
          }`}>
            {status.type === 'success' && <CheckCircle2 className="w-5 h-5 flex-shrink-0" />}
            {status.type === 'error' && <AlertCircle className="w-5 h-5 flex-shrink-0" />}
            <span className="text-sm font-medium">{status.message}</span>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status.type === 'loading'}
          className="group relative w-full px-8 py-4 font-semibold text-primary-foreground rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
          style={{
            background: status.type === 'loading'
              ? 'linear-gradient(135deg, #4a5f7f 0%, #3d4f67 100%)'
              : 'linear-gradient(135deg, #00E9FF 0%, #008C99 100%)',
          }}
        >
          <span className="flex items-center justify-center gap-2">
            {status.type === 'loading' ? 'Sending...' : 'Send Message'}
            {status.type !== 'loading' && <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
          </span>
        </button>

        {/* Privacy Notice */}
        <p className="text-xs text-muted-foreground text-center">
          We respect your privacy. Your information will never be shared with third parties.
        </p>
      </div>
    </form>
  );
}
