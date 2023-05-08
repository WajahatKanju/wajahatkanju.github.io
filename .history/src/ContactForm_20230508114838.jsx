import { useState } from "react";
import "./styles/ContactForm.scss";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    fetch("https://getform.io/f/07960d38-ead6-46e2-b463-1ee6c6b0d6ab", {
        method: "POST",
        body: formData,
        headers: {
            "Accept": "application/json",
        },
    })
    .then(response => console.log(response))
    .catch(error => console.log(error))
  };

  return (
    <section className="contact__form" id="contact">
      <div className="contact__form__container">
        <h2 className="form__header">Contact Me</h2>
        <form  method="POST" acceptCharset="UTF-8" id="form" onSubmit={handleSubmit}>
          <input type="hidden" name="accessKey" value=" 7fdc9756-e3a4-41d2-8c11-eea0b802a3d5" />
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <input type="hidden" name="redirect" value="https://web3forms.com/success" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
