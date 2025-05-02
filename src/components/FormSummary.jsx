export default function FormSummary({ formData }) {
    return (
      <div>
        <h2>Form Summary</h2>
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Message:</strong> {formData.message}</p>
      </div>
    );
  }
  