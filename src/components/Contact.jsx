import { useState } from 'react';
import ModelViewer from './model/ModelViewer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
        console.error(result.error);
      }
    } catch (err) {
      console.error('Submit error:', err);
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-around bg-gray-950 text-yellow-100 px-6 py-10 mt-20">
      {/* Contact form left */}
      <div className="animate-slide-in-left max-w-lg w-full mb-10 lg:mb-0">
        <h2 className="text-3xl font-bold text-yellow-200 mb-4">Contact Me</h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 rounded bg-gray-800 text-white"
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 rounded bg-gray-800 text-white"
          />
          <input
            name="phone"
            type="tel"
            placeholder="Your Phone"
            value={formData.phone}
            onChange={handleChange}
            className="p-3 rounded bg-gray-800 text-white"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="p-3 rounded bg-gray-800 text-white"
          />
          <button type="submit" className="bg-yellow-200 text-black font-bold py-2 rounded hover:bg-yellow-300 transition">
            Send
          </button>
        </form>

        {/* Success/Error Mesajı */}
        {status === 'success' && (
          <p className="text-green-400 mt-4">Message sent successfully!</p>
        )}
        {status === 'error' && (
          <p className="text-red-400 mt-4">Something went wrong. Please try again.</p>
        )}
      </div>

      {/* Model right */}
      <div className="animate-slide-in-right w-full max-w-md">
        <ModelViewer
          modelPath="/models/cloud_station.glb"
          scale={0.8}
          position={[0, -0.8, 0]}
          rotation={[0, 0, 0]}
        />
        <p className="text-sm mt-5 text-center italic text-gray-400">3D Model Visualization</p>
      </div>
    </div>
  );
};

export default Contact;
