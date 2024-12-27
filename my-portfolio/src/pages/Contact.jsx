import '../styles/Contact.css'
import { useState } from 'react'; 
import { useForm } from 'react-hook-form'; 

function Contact() {
  const { register, handleSubmit, reset } = useForm(); 
  const [isSuccess, setIsSuccess] = useState(false); 
  const [result, setResult] = useState(null); 
  const accessKey = '3adb68e7-0c88-4e36-b7a8-0de8eda71880';

  const onSubmit = async (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          ...data,
        }),
      });

      const result = await response.json();
      setIsSuccess(true);
      setResult(result.message);
      reset();
    } catch (error) {
      setIsSuccess(false);
      setResult('An error occurred while submitting the form.');
    }
  };

  return (
    <div className="contact-form section">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register('name', { required: true })}
          placeholder="Your Name"
        />
        <input
          type="email"
          {...register('email', { required: true })}
          placeholder="Your Email"
        />
        <textarea
          {...register('message', { required: true })}
          placeholder="Your Message"
        ></textarea>
        <button type="submit">Send Message</button>

        {isSuccess && <div className="success-message">Form submitted successfully!</div>}
        {result && <div className="result-message">{result}</div>}
      </form>
    </div>
  )
}

export default Contact;