import React, { useState } from 'react';
import { Phone, Mail, Send, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/gardenData';
import { ContactFormData } from '../types';

interface ContactFormProps {
  defaultService?: string;
  className?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ defaultService, className = '' }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    email: '',
    service: defaultService || 'garden-maintenance',
    gardenSize: 'medium',
    message: '',
    preferredContact: 'phone',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!formData.name.trim()) {
      setErrorMsg('Please enter your name.');
      return;
    }
    if (!formData.phone.trim() && !formData.email.trim()) {
      setErrorMsg('Please provide either a phone number or an email address.');
      return;
    }

    setSubmitting(true);
    // Simulate swift, reliable submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: defaultService || 'garden-maintenance',
      gardenSize: 'medium',
      message: '',
      preferredContact: 'phone',
    });
  };

  if (submitted) {
    return (
      <div className={`p-8 sm:p-10 rounded-3xl bg-[#0f281d] text-[#faf8f5] border border-[#26533c] shadow-lg ${className}`}>
        <div className="w-14 h-14 rounded-2xl bg-[#1b4330] border border-[#2e684a] flex items-center justify-center text-[#d4ec6f] mb-6">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#faf8f5]">
          Thank You, {formData.name}
        </h3>
        <p className="text-[#c7dacd] text-base mt-2 leading-relaxed">
          Your inquiry regarding{' '}
          <span className="text-[#d4ec6f] font-medium">
            {SERVICES.find((s) => s.id === formData.service)?.title || 'Gardening Services'}
          </span>{' '}
          in Zürich has been received. We will review your request and get in touch via{' '}
          <span className="font-semibold text-white">
            {formData.preferredContact === 'phone' ? formData.phone || formData.email : formData.email || formData.phone}
          </span>
          .
        </p>

        <div className="mt-6 p-4 rounded-xl bg-[#153828] border border-[#275d42] text-xs sm:text-sm text-[#bed1c4] space-y-2">
          <div className="flex items-center gap-2 text-[#d4ec6f] font-semibold">
            <ShieldCheck className="w-4 h-4" />
            <span>Need Immediate Assistance?</span>
          </div>
          <p>
            You can also connect with us directly by telephone right away.
          </p>
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="inline-flex items-center gap-2 font-bold text-white hover:text-[#d4ec6f] transition-colors pt-1"
          >
            <Phone className="w-3.5 h-3.5 text-[#d4ec6f]" />
            <span>Call: {BUSINESS_INFO.phone}</span>
          </a>
        </div>

        <button
          onClick={handleReset}
          id="submit-another-inquiry-btn"
          className="mt-6 text-xs text-[#a3b8aa] hover:text-[#faf8f5] underline cursor-pointer"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`p-6 sm:p-10 rounded-3xl bg-[#0f281d] text-[#faf8f5] border border-[#234d36] shadow-xl space-y-5 ${className}`}
    >
      <div>
        <span className="text-xs uppercase tracking-wider text-[#d4ec6f] font-bold block mb-1">
          Direct Inquiry
        </span>
        <h4 className="font-editorial text-2xl sm:text-3xl font-bold text-[#faf8f5]">
          Request a Garden Consultation
        </h4>
        <p className="text-xs sm:text-sm text-[#b4c7bb] mt-1">
          Serving residential properties and private gardens across Zürich, Switzerland.
        </p>
      </div>

      {errorMsg && (
        <div className="p-3 rounded-lg bg-[#3b1919] border border-[#7a2e2e] text-xs text-[#fca5a5]">
          {errorMsg}
        </div>
      )}

      {/* Name and Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-name" className="block text-xs font-medium text-[#c5d8cb] mb-1.5">
            Your Name *
          </label>
          <input
            id="contact-name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Thomas Müller"
            className="w-full px-4 py-3 rounded-xl bg-[#143626] border border-[#27573f] text-[#faf8f5] placeholder-[#799182] text-sm focus:outline-none focus:border-[#d4ec6f] transition-colors"
          />
        </div>

        <div>
          <label htmlFor="contact-phone" className="block text-xs font-medium text-[#c5d8cb] mb-1.5">
            Telephone Number *
          </label>
          <input
            id="contact-phone"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="e.g. +41 79 123 45 67"
            className="w-full px-4 py-3 rounded-xl bg-[#143626] border border-[#27573f] text-[#faf8f5] placeholder-[#799182] text-sm focus:outline-none focus:border-[#d4ec6f] transition-colors"
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="contact-email" className="block text-xs font-medium text-[#c5d8cb] mb-1.5">
          Email Address
        </label>
        <input
          id="contact-email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="e.g. name@example.ch"
          className="w-full px-4 py-3 rounded-xl bg-[#143626] border border-[#27573f] text-[#faf8f5] placeholder-[#799182] text-sm focus:outline-none focus:border-[#d4ec6f] transition-colors"
        />
      </div>

      {/* Service Selection */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-service" className="block text-xs font-medium text-[#c5d8cb] mb-1.5">
            Primary Service Required
          </label>
          <select
            id="contact-service"
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-[#143626] border border-[#27573f] text-[#faf8f5] text-sm focus:outline-none focus:border-[#d4ec6f] transition-colors cursor-pointer"
          >
            {SERVICES.map((s) => (
              <option key={s.id} value={s.id} className="bg-[#102a1e]">
                {s.title}
              </option>
            ))}
            <option value="combined" className="bg-[#102a1e]">
              Multiple / Seasonal Overhaul
            </option>
          </select>
        </div>

        <div>
          <label htmlFor="contact-preferred" className="block text-xs font-medium text-[#c5d8cb] mb-1.5">
            Preferred Contact Method
          </label>
          <select
            id="contact-preferred"
            value={formData.preferredContact}
            onChange={(e) =>
              setFormData({ ...formData, preferredContact: e.target.value as 'phone' | 'email' })
            }
            className="w-full px-4 py-3 rounded-xl bg-[#143626] border border-[#27573f] text-[#faf8f5] text-sm focus:outline-none focus:border-[#d4ec6f] transition-colors cursor-pointer"
          >
            <option value="phone" className="bg-[#102a1e]">
              Phone Call (Fastest)
            </option>
            <option value="email" className="bg-[#102a1e]">
              Email Reply
            </option>
          </select>
        </div>
      </div>

      {/* Message & Garden details */}
      <div>
        <label htmlFor="contact-message" className="block text-xs font-medium text-[#c5d8cb] mb-1.5">
          Garden Details or Specific Needs
        </label>
        <textarea
          id="contact-message"
          rows={3}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Tell us about your hedge type, lawn condition, or seasonal tasks needed in Zürich..."
          className="w-full px-4 py-3 rounded-xl bg-[#143626] border border-[#27573f] text-[#faf8f5] placeholder-[#799182] text-sm focus:outline-none focus:border-[#d4ec6f] transition-colors"
        ></textarea>
      </div>

      {/* Submit button */}
      <button
        type="submit"
        disabled={submitting}
        id="submit-inquiry-btn"
        className="w-full py-3.5 px-6 rounded-xl bg-[#d4ec6f] hover:bg-[#bcdb3e] text-[#0a1b13] font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg disabled:opacity-50 cursor-pointer"
      >
        {submitting ? (
          <span>Submitting inquiry...</span>
        ) : (
          <>
            <span>Send Garden Consultation Request</span>
            <Send className="w-4 h-4" />
          </>
        )}
      </button>

      {/* Quick reassurance */}
      <div className="flex items-center justify-between pt-2 text-[11px] text-[#9cb1a3]">
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-[#d4ec6f]" />
          No obligation inquiry
        </span>
        <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-[#d4ec6f] hover:underline font-medium">
          Direct: {BUSINESS_INFO.phone}
        </a>
      </div>
    </form>
  );
};
