import { useState } from "react";

import "./styles/ContactForm.scss";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission logic here
  };

  return (
    <section className="contact__form" id="contact">
      <div className="contact__form__container">
        <h2 className="form__header">Contact Me</h2>
        <form onSubmit={handleSubmit}  action="https://api.web3forms.com/submit" >
        <input type="hidden" name="access_key" value=" 7fdc9756-42dg-41d2-3x23-eea0b802a3d5" /> 

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
