import React from 'react';
import SectionTitle from '../ui/SectionTitle/SectionTitle';
import emailjs from 'emailjs-com';
import { ContactFormResponse } from './ContactFormResponse';
import { useForm } from '../../hooks/useForm';
import Button from '../ui/Button/Button';
import styles from './ContactForm.module.css';
export default function ContactForm() {
  const [showResponse, setShowResponse] = React.useState<{
    display: boolean;
    code: number | null;
  }>({
    display: false,
    code: null
  });
  const { values, handleChange, reset } = useForm({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    emailjs
      .sendForm(
        'default_service',
        process.env.NEXT_PUBLIC_templateid as string,
        e.target as HTMLFormElement,
        process.env.NEXT_PUBLIC_userid as string
      )
      .then(
        result => {
          // console.log(result.text);
          handleSubmit(200);
        },
        error => {
          // console.log(error.text);
          handleSubmit(404);
        }
      );
  }
  const handleSubmit = (code: number) => {
    setShowResponse(() => ({ display: true, code: code }));
    reset();
  };
  const responseCode = showResponse.code;
  return (
    <div className={styles.container}>
      <SectionTitle>Get in touch</SectionTitle>

      <div className={styles.formWrapper}>
        <p className={styles.note}>
          Please do not change or cancel appointments over email. To modify your
          appointment call salon directly at 617-559-0660
        </p>
        <form
          action="sumbit"
          className={styles.form}
          autoComplete="on"
          onSubmit={sendEmail}
        >
          <div className={styles.field}>
            <label className={styles.label} htmlFor="name">
              Name
            </label>
            <input
              className={styles.input}
              type="text"
              id="name"
              name="name"
              placeholder="Joe Doe"
              required
              value={values.name}
              onChange={handleChange}
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="email">
              Email address
            </label>
            <input
              className={styles.input}
              type="text"
              id="email"
              name="email"
              placeholder="example@smth.com"
              required
              value={values.email}
              onChange={handleChange}
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="phone">
              Phone number
            </label>

            <input
              className={styles.input}
              type="text"
              id="phone"
              placeholder="***-***-****"
              name="phone"
              value={values.phone}
              onChange={handleChange}
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="message">
              Message
            </label>
            <textarea
              className={styles.input}
              id="message"
              name="message"
              required
              rows={8}
              value={values.message}
              onChange={handleChange}
            />
          </div>
          <Button type="submit" className={styles.submitButton}>
            Send
          </Button>
        </form>
      </div>
      <ContactFormResponse
        setShowResponse={setShowResponse}
        responseCode={responseCode}
        showResponse={showResponse.display}
      />
    </div>
  );
}
