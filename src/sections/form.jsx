import React, { useState } from "react";
import axios from "axios";
import Select from "react-select";

const options = [
  { value: "General Inquiry", label: "General Inquiry" },
  { value: "Request more info", label: "Request more info" },
  { value: "Partnership", label: "Partnership" },
  { value: "Delegating question", label: "Delegating question" },
  { value: "Join our team", label: "Join our team" },
];

const FormSection = () => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  });
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });
    if (ok) {
      form.reset();
    }
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://getform.io/f/91ec1a86-3f14-494b-ac73-69b1c51922f4",
      data: new FormData(form),
    })
      .then((r) => {
        handleServerResponse(true, "Thank you for your message!", form);
      })
      .catch((r) => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };
  return (
    <section className="form" id="contact">
      <div className="container">
        <h2>Get in touch</h2>
        <p>Say hello via email or social networks</p>
      </div>
      <div className="container">
        <form onSubmit={handleOnSubmit}>
          <label htmlFor="firstname">
            Name
            <input id="firstname" type="text" name="firstname" required />
          </label>
          <label htmlFor="email">
            Email
            <input id="email" type="email" name="email" required />
          </label>
          <label htmlFor="topic">
            Topic
            <Select
              name="topic"
              options={options}
              className="form-select"
              classNamePrefix="react-select"
            />
          </label>
          <label htmlFor="message">
            Message
            <input id="message" type="text" name="message" required />
          </label>
          <button type="submit" disabled={serverState.submitting}>
            Send Message
          </button>
          {serverState.status && (
            <p className={!serverState.status.ok ? "errorMsg" : "success"}>
              {serverState.status.msg}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default FormSection;
