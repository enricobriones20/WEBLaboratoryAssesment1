export default function ContactForm({ formData, setFormData }) {
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };
  
    return (
      <form>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
        />
        <br />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
        />
      </form>
    );
  }
  