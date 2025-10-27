import { useState, FormEvent } from 'react';
import { Mail, MessageSquare, User, Send } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    try {
      const { error } = await supabase.from('contact_submissions').insert([
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
      ]);

      if (error) throw error;

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again.');
      console.error('Error submitting form:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-brand-blue-light to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Have questions or feedback? We'd love to hear from you! Whether you have a question, comment, or just want to say hello, we're here to help.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="bg-brand-blue p-8 lg:p-12 text-white">
                  <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
                  <p className="mb-8 opacity-90">
                    Ready to start your transformation journey? Fill out the form and we'll get back to you as soon as possible.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-brand-blue-lighter rounded-lg flex items-center justify-center mr-4">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email Us</h3>
                        <p className="opacity-90 text-sm">
                          We'll respond within 24 hours
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-brand-blue-lighter rounded-lg flex items-center justify-center mr-4">
                        <MessageSquare className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Ask Questions</h3>
                        <p className="opacity-90 text-sm">
                          We're here to answer all your questions
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-brand-blue-lighter rounded-lg flex items-center justify-center mr-4">
                        <User className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Free Consultation</h3>
                        <p className="opacity-90 text-sm">
                          Schedule your complimentary session
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8 lg:p-12">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all resize-none"
                        placeholder="Tell us how we can help you..."
                      />
                    </div>

                    {status === 'success' && (
                      <div className="bg-green-50 text-green-800 px-4 py-3 rounded-lg">
                        Thank you for your message! We'll get back to you soon.
                      </div>
                    )}

                    {status === 'error' && (
                      <div className="bg-red-50 text-red-800 px-4 py-3 rounded-lg">
                        {errorMessage}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="w-full flex items-center justify-center px-6 py-4 bg-brand-blue text-white font-semibold rounded-lg hover:bg-brand-blue-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                    >
                      {status === 'sending' ? (
                        'Sending...'
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
