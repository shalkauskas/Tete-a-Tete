import React from "react";
import SectionTitle from "../../components/SectionTitle";
import emailjs from "emailjs-com";
import ContactFormResponse from "./ContactFormResponse";
import { useForm } from "../../components/Hooks/useForm";
import Button from "../Button";
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
          // console.log(result.text);
          handleSubmit(200);
        },
        (error) => {
          // console.log(error.text);
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

      <div className="mx-auto lg:w-1/2 sm:w-3/4 w-11/12">
        <p className="italic text-gray-500 text-sm mb-4">
          Please do not change or cancel appointments over email. To modify your
          appointment call salon directly at 617-559-0660
        </p>
        <form
          action="sumbit"
          className="mx-auto inline-block text-left w-full flex flex-col gap-4 pb-24"
          autoComplete="on"
          onSubmit={sendEmail}
        >
          <div className="w-full">
            <label className="font-bold" htmlFor="name">
              Name
            </label>
            <input
              className="w-full py-1 px-4"
              type="text"
              id="name"
              name="name"
              placeholder="Joe Doe"
              required
              value={values.name}
              onChange={handleChange}
            />
          </div>

          <div className="w-full">
            <label className="font-bold" htmlFor="email">
              Email address
            </label>
            <input
              className="w-full py-1 px-4"
              type="text"
              id="email"
              name="email"
              placeholder="example@smth.com"
              required
              value={values.email}
              onChange={handleChange}
            />
          </div>

          <div className="w-full">
            <label className="font-bold" htmlFor="phone">
              Phone number
            </label>

            <input
              className="w-full py-1 px-4"
              type="text"
              id="phone"
              placeholder="***-***-****"
              name="phone"
              value={values.phone}
              onChange={handleChange}
            />
          </div>

          <div className="w-full">
            <label className="font-bold" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full py-1 px-4"
              type="text"
              id="message"
              name="message"
              required
              rows="8"
              value={values.message}
              onChange={handleChange}
            />
          </div>
          <Button type="submit" className="px-24 mx-auto">
            Send
          </Button>
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
          vertical-align: middle;
          display: inline-block;
        }
        label:after {
          content: "*";
          color: red;
          font-size: 0.8rem;
          vertical-align: top;
        }
      `}</style>
    </div>
  );
}
