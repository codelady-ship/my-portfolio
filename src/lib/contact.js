export const CONTACT_EMAIL = 'jalilova.antiqa@gmail.com';

// Optional backend. When VITE_API_URL is set at build time (for example
// https://my-api.example.com), the form POSTs JSON to `${VITE_API_URL}/api/contact`.
// When it is empty (the default on Vercel), the form opens the visitor's
// email app with a pre-filled message instead - no server needed.
export const API_URL = (import.meta.env.VITE_API_URL || '').replace(/\/+$/, '');

export const EMPTY = { name: '', email: '', phone: '', message: '' };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+()\d\s-]{7,20}$/;

export const validate = ({ name, email, phone, message }) => {
  const errors = {};
  if (name.trim().length < 2) errors.name = 'Please enter your name.';
  if (!EMAIL_RE.test(email.trim())) errors.email = 'Please enter a valid email address.';
  if (phone.trim() && !PHONE_RE.test(phone.trim())) errors.phone = 'Please enter a valid phone number or leave it empty.';
  if (message.trim().length < 10) errors.message = 'Please write a message of at least 10 characters.';
  return errors;
};

export const buildMailto = ({ name, email, phone, message }) => {
  const subject = `Portfolio contact from ${name.trim()}`;
  const body = [
    message.trim(),
    '',
    '---',
    `Name: ${name.trim()}`,
    `Email: ${email.trim()}`,
    phone.trim() ? `Phone: ${phone.trim()}` : null,
  ]
    .filter((line) => line !== null)
    .join('\n');
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};
