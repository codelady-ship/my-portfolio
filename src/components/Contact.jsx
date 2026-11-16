import { useState } from 'react';
import ModelViewer from './model/ModelViewer';
import usePageMeta from '../hooks/usePageMeta';
import { API_URL, CONTACT_EMAIL, EMPTY, buildMailto, validate } from '../lib/contact';

const inputClass = (hasError) =>
  `p-3 rounded bg-gray-800 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-yellow-400 ${
    hasError ? 'ring-2 ring-red-400' : ''
  }`;

const Contact = () => {
  const [formData, setFormData] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');

  usePageMeta({
    title: 'Contact',
    description: `Contact Antiqa Jalilova, full stack developer. Send a message or email ${CONTACT_EMAIL}.`,
    path: '/contact',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const found = validate(formData);
    setErrors(found);
    if (Object.keys(found).length) {
      setStatus('');
      const first = e.currentTarget.querySelector(`[name="${Object.keys(found)[0]}"]`);
      first?.focus();
      return;
    }

    if (!API_URL) {
      window.location.href = buildMailto(formData);
      setStatus('mailto');
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus('success');
      setFormData(EMPTY);
    } catch (err) {
      console.error('Contact form error:', err);
      setStatus('error');
    }
  };

  const field = (name) => ({
    id: `contact-${name}`,
    name,
    value: formData[name],
    onChange: handleChange,
    'aria-invalid': errors[name] ? 'true' : undefined,
    'aria-describedby': errors[name] ? `contact-${name}-error` : undefined,
    className: inputClass(errors[name]),
  });

  const errorText = (name) =>
    errors[name] ? (
      <p id={`contact-${name}-error`} className="text-red-400 text-sm -mt-2">
        {errors[name]}
      </p>
    ) : null;

  return (
    <section className="min-h-screen flex flex-col lg:flex-row items-center justify-around gap-10 bg-gray-950 text-yellow-100 px-6 pt-28 pb-10">
      {/* Contact form */}
      <div className="animate-slide-in-left max-w-lg w-full">
        <h1 className="text-3xl font-bold text-yellow-200 mb-2">Contact Me</h1>
        <p className="mb-6 text-sm text-gray-300">
          Fill in the form and your email app will open with the message ready to send. Or write to me directly at{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-yellow-400 underline-offset-4 hover:underline">
            {CONTACT_EMAIL}
          </a>
          .
        </p>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit} noValidate>
          <label htmlFor="contact-name" className="sr-only">Your name</label>
          <input {...field('name')} type="text" placeholder="Your Name" autoComplete="name" required />
          {errorText('name')}

          <label htmlFor="contact-email" className="sr-only">Your email</label>
          <input {...field('email')} type="email" placeholder="Your Email" autoComplete="email" required />
          {errorText('email')}

          <label htmlFor="contact-phone" className="sr-only">Your phone (optional)</label>
          <input {...field('phone')} type="tel" placeholder="Your Phone (optional)" autoComplete="tel" />
          {errorText('phone')}

          <label htmlFor="contact-message" className="sr-only">Your message</label>
          <textarea {...field('message')} placeholder="Your Message" rows="5" required />
          {errorText('message')}

          <button
            type="submit"
            disabled={status === 'sending'}
            className="bg-yellow-200 text-black font-bold py-2 rounded hover:bg-yellow-300 transition disabled:opacity-60"
          >
            {status === 'sending' ? 'Sending…' : 'Send'}
          </button>
        </form>

        <div aria-live="polite" className="mt-4 text-sm">
          {status === 'mailto' && (
            <p className="text-green-400">
              Your email app should open now with the message ready. If nothing happened, email me at{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="underline">{CONTACT_EMAIL}</a>.
            </p>
          )}
          {status === 'success' && <p className="text-green-400">Message sent successfully. Thank you!</p>}
          {status === 'error' && (
            <p className="text-red-400">
              Something went wrong. Please email me at{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="underline">{CONTACT_EMAIL}</a>.
            </p>
          )}
        </div>
      </div>

      {/* 3D model */}
      <div className="animate-slide-in-right w-full max-w-md">
        <ModelViewer
          modelPath="/models/cloud_station.glb"
          poster="/models/posters/cloud_station.webp"
          alt="3D model of a cloud station floating in pink clouds"
          scale={0.8}
          position={[0, -0.8, 0]}
          rotation={[0, 0, 0]}
        />
        <p className="text-sm mt-5 text-center italic text-gray-400">3D Model Visualization</p>
      </div>
    </section>
  );
};

export default Contact;
