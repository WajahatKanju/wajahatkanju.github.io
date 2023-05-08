import { useState } from "react";
import "./styles/ContactForm.scss";

function ContactForm() {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");

const handleSubmit = async (e) => {
e.preventDefault();
const data = {
name: name,
email: email,
message: message,
};try {
  const response = await fetch("https://getform.io/f/my_key", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    setName("");
    setEmail("");
    setMessage("");
    console.log(response);
  } else {
    throw new Error("Network response was not ok");
  }
} catch (error) {
  console.log(error);
}
};

return (
<section className="contact__form" id="contact">
<div className="contact__form__container">
<h2 className="form__header">Contact Me</h2>
<form method="POST" acceptCharset="UTF-8" id="form" onSubmit={handleSubmit}>
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
<input
type="hidden"
name="_gotcha"
style={{ display: "none" }}
/>
<button type="submit">Submit</button>
</form>
</div>
</section>
);
}

export default ContactForm;