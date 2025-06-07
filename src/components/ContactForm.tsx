import React, { useState } from 'react';
import { ContactMessage } from '../../types';
import Alert from './Alert';

interface ContactFormProps {
  onSubmitForm: (data: ContactMessage) => Promise<{success: boolean; message: string}>;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmitForm }) => {
  const [formData, setFormData] = useState<ContactMessage>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<ContactMessage>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const validate = (): boolean => {
    const newErrors: Partial<ContactMessage> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required.';
    if (!formData.message.trim()) newErrors.message = 'Message is required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactMessage]) {
      setErrors(prev => ({...prev, [name]: undefined}));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus(null);
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const result = await onSubmitForm(formData);
      if (result.success) {
        setSubmitStatus({ type: 'success', message: result.message });
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' }); // Reset form
      } else {
        setSubmitStatus({ type: 'error', message: result.message });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'An unexpected error occurred. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-xl">
      {submitStatus && <Alert type={submitStatus.type} message={submitStatus.message} onClose={() => setSubmitStatus(null)} />}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-neutral-700">Full Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          className={`mt-1 block w-full px-3 py-2 border ${errors.name ? 'border-red-500' : 'border-neutral-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
        />
        {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-neutral-700">Email Address</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          className={`mt-1 block w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-neutral-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
        />
        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-neutral-700">Phone Number (Optional)</label>
        <input
          type="tel"
          name="phone"
          id="phone"
          value={formData.phone || ''}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-neutral-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-neutral-700">Subject</label>
        <input
          type="text"
          name="subject"
          id="subject"
          value={formData.subject}
          onChange={handleChange}
          className={`mt-1 block w-full px-3 py-2 border ${errors.subject ? 'border-red-500' : 'border-neutral-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
        />
        {errors.subject && <p className="mt-1 text-xs text-red-500">{errors.subject}</p>}
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-neutral-700">Message</label>
        <textarea
          name="message"
          id="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className={`mt-1 block w-full px-3 py-2 border ${errors.message ? 'border-red-500' : 'border-neutral-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
        ></textarea>
        {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
      </div>
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;