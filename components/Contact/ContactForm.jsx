import React from "react";
import SectionTitle from "../../components/SectionTitle";
import emailjs from "emailjs-com";
import ContactFormResponse from "./ContactFormResponse";
import { useForm } from "../../components/Hooks/useForm";
export default function ContactForm() {
  const [showResponse, setShowResponse] = React.useState({
    display: false,
    code: null,
  });
  const { values, handleChange, reset } = useForm({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "default_service",
        process.env.NEXT_PUBLIC_templateid,
        e.target,
        process.env.NEXT_PUBLIC_userid
      )
      .then(
        (result) => {
          console.log(result.text);
          handleSubmit(200);
        },
        (error) => {
          console.log(error.text);
          handleSubmit(404);
        }
      );
  }
  const handleSubmit = (code) => {
    setShowResponse(() => ({ display: true, code: code }));
    reset();
  };
  const responseCode = showResponse.code;
  return (
    <div className="container mx-auto max-w-sm">
      <SectionTitle title={"Get in touch"} />
      <div className="mx-auto block text-center lg:w-1/2 sm:w-3/4 w-11/12">
        <form
          action="sumbit"
          className="mx-auto inline-block text-left w-full"
          autoComplete="on"
          onSubmit={sendEmail}
        >
          <label htmlFor="name">Name*</label>
          <br />
          <div className="w-full">
            <input
              className="w-full"
              type="text"
              id="name"
              name="name"
              placeholder="Joe Doe"
              required
              value={values.name}
              onChange={handleChange}
            />
          </div>

          <label htmlFor="email">Email address*</label>
          <br />
          <div className="w-full">
            <input
              className="w-full"
              type="text"
              id="email"
              name="email"
              placeholder="example@smth.com"
              required
              value={values.email}
              onChange={handleChange}
            />
          </div>
          <label htmlFor="phone">Phone number</label>
          <br />
          <div className="w-full">
            <input
              className="w-full"
              type="text"
              id="phone"
              placeholder="***-***-****"
              name="phone"
              value={values.phone}
              onChange={handleChange}
            />
          </div>
          <label htmlFor="message">Message*</label>
          <br />
          <div className="w-full">
            <textarea
              className="w-full"
              type="text"
              id="message"
              name="message"
              required
              rows="4"
              style={{ paddingBottom: "150px" }}
              value={values.message}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="block mx-auto hover:opacity-75 shadow-lg"
          >
            Send
          </button>
        </form>
      </div>
      <ContactFormResponse
        setShowResponse={setShowResponse}
        responseCode={responseCode}
        showResponse={showResponse.display}
      />
      <style jsx>{`
        input,
        textarea {
          background: rgba(229, 229, 229, 0.5);
          margin: 10px 0 20px 0;
          padding: 5px 20px 5px 15px;
          vertical-align: middle;
          display: inline-block;
        }
        label {
          font-weight: 700;
          font-size: 16px;
          line-height: 19px;
          color: #000000;
          line-height: 19px;
        }
        form {
          padding-bottom: 50px;
        }
        button {
          background-color: #895b4a;
          border-radius: 15px;
          padding: 10px 80px;
          color: white;
          font-weight: bold;
          font-size: 16px;
          margin-top: 50px;
        }
      `}</style>
    </div>
  );
}
