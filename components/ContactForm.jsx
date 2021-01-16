import SectionTitle from "components/SectionTitle";
import emailjs from "emailjs-com";
import ContactFormResponse from "./ContactFormResponse";
export default function ContactForm() {
  const [showResponse, setShowResponse] = React.useState(false);
  // console.log(showResponse);
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "default_service",
        process.env.templateid,
        e.target,
        process.env.userid
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <div className="container mx-auto max-w-sm">
      <SectionTitle title={"Get in touch"} />
      <div className="mx-auto block text-center lg:w-1/2 w-3/4">
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
            />
          </div>
          <button
            type="submit"
            className="block mx-auto hover:opacity-75 shadow-lg"
          >
            Send
          </button>
        </form>
        <button onClick={() => setShowResponse(true)}>Test</button>
      </div>
      <ContactFormResponse
        setShowResponse={setShowResponse}
        showResponse={showResponse}
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
