import { useState, useEffect } from "react";
import "./styles/ContactForm.scss";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    switch (submissionStatus) {
      case "success":
        setStatusMessage(
          <p className="success-message">Thanks for contacting us!</p>
        );
        break;
      case "submission_in_progress":
        setStatusMessage(
          <p className="progress-message">Submitting The Form Please wait</p>
        );
        break;
      case "error":
        setStatusMessage(
          <p className="error-message">
            There was an error submitting the form. Please try again later.
          </p>
        );
        break;
      default:
        setStatusMessage("");
        break;
    }
  }, [submissionStatus]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus("submission_in_progress");
    const data = {
      name: name,
      email: email,
      message: message,
    };
    try {
      const response = await fetch(
        "https://getform.io/f/07960d38-ead6-46e2-b463-1ee6c6b0d6ab",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        setName("");
        setEmail("");
        setMessage("");
        setSubmissionStatus("success");
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.log(error);
      setSubmissionStatus("error");
    }
  };

  const handleBlur = (event) => {
    event.target.classList.add("blur");
    if (event.target.value === "") {
      event.target.classList.add("empty");
    } else {
      event.target.classList.remove("empty");
    }
  }

  return (
    <section className="contact-form" id="contact">
      <div className="contact-form__container">
        <h2 className="contact-form__header">Contact Me</h2>
        <div className="status-message">{statusMessage}</div>

        <form
          method="POST"
          acceptCharset="UTF-8"
          id="form"
          onSubmit={handleSubmit}
        >
          <div className="form-input-container">
            <input
            className="empty"
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onBlur={handleBlur}
              required
            />
            <label htmlFor="name">Name</label>
          </div>
          <div className="form-input-container">
            <input
            className="empty"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={handleBlur}
              required
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="form-input-container">
            <textarea
            className="empty"
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onBlur={handleBlur}
              required
            />
            <label htmlFor="message">Message</label>
          </div>
          <input type="hidden" name="_gotcha" style={{ display: "none" }} />
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
