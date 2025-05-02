import { useState } from 'react';
import ContactForm from '../components/ContactForm';
import FormSummary from '../components/FormSummary';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', message: '' });

  return (
    <div>
      <h1>Contact Us</h1>
      <ContactForm formData={formData} setFormData={setFormData} />
      <FormSummary formData={formData} />
    </div>
  );
}
