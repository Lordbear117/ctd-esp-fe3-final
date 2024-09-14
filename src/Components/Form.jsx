/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [textArea, setTextArea] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleTextAreaChange = (e) => {
    setTextArea(e.target.value);
  };
  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length > 5 && validateEmail(email)) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
    setShowMessage(true);
  };

  const clearInputs = () => {
    setName("");
    setEmail("");
    setTextArea("");
    setShowMessage(false);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
          required
        />
        {name && name.length <= 5 && (
          <p className="error">Name must be longer than 5 characters</p>
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        {email && !validateEmail(email) && (
          <p className="error">Please enter a valid email address</p>
        )}

        <textarea
          name="message"
          id="message"
          placeholder="Write your message here"
          value={textArea}
          onChange={handleTextAreaChange}
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>

      {showMessage && (
        isFormValid ? (
          alert(`Gracias ${name}, te contactaremos cuando antes vía mail`),
          clearInputs()
        ) : (
          <p>Please verify your information and try again.</p>
        )
      )}
    </div>
  );
};

export default Form;
