import SectionTitle from "components/SectionTitle";
export default function ContactForm() {
  return (
    <div className="container mx-auto">
      <SectionTitle title={"Get in touch"} />
      <div className="mx-auto block text-center">
        <form
          action="sumbit"
          className="mx-auto inline-block text-left"
          autoComplete="on"
        >
          <label htmlFor="name">Name*</label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Joe Doe"
            size="50"
            required
          />
          <br />
          <label htmlFor="email">Email address*</label>
          <br />
          <input
            type="text"
            id="email"
            name="email"
            placeholder="example@smth.com"
            size="50"
            required
          />
          <br />
          <label htmlFor="phone">Phone number</label>
          <br />
          <input
            type="text"
            id="phone"
            placeholder="***-***-****"
            name="phone"
            size="50"
          />
          <br />
          <label htmlFor="message">Message*</label>
          <br />
          <textarea
            type="text"
            id="message"
            name="message"
            required
            rows="4"
            cols="50"
            style={{ paddingBottom: "150px" }}
          />
          <button type="submit" className="block mx-auto">
            Send
          </button>
        </form>
      </div>

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
