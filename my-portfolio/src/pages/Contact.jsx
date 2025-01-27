import '../styles/Contact.css'
import { useState, useEffect } from 'react'; 
import { useForm } from 'react-hook-form'; 

function Contact() {
  const { register, handleSubmit, reset } = useForm(); 
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
      if (result.success) {
        setResult(result.message);
        reset();
      }
    } catch (error) {
      setResult('An error occurred while submitting the form.');
    }
  };

  useEffect(() => {
    document.body.classList.add('contact-page');
    return () => {
      document.body.classList.remove('contact-page'); 
    };
  }, []);


  return (
    <div className="contact-container">
      <h1>Contact Me!</h1>
      <h2>I welcome any feedback or inquiries you may have about my portfolio, as well as any job opportunities you'd like to discuss!</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register('name', { required: true })}
          placeholder="Name"
        />
        <input
          type="email"
          {...register('email', { required: true })}
          placeholder="Email"
        />
        <textarea
          {...register('message', { required: true })}
          placeholder="Message"
        ></textarea>
        <button type="submit">Send Message</button>
        {result && <div className="result-message">{result}</div>}
      </form>
    </div>
  )
}

export default Contact;