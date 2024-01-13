import React, { useState, ChangeEvent, FormEvent } from 'react';
import emailjs from 'emailjs-com';
import InputField from '../../../../../StyledElements/FormElements/InputField';
import SubmitButton from '../../../../../StyledElements/FormElements/SubmitButton';
import TextAreaField from '../../../../../StyledElements/FormElements/TextAreaField';
import Success from '../../../../../StyledElements/Success';
import Error from '../../../../../StyledElements/Error';

interface IFormData {
  [key: string]: string;
  from_name: string;
  to_name: string;
  email: string;
  message: string;
}

function MailForm() {
  const [formData, setFormData] = useState<IFormData>({
    from_name: '',
    to_name: '',
    email: '',
    message: '',
  });
  const [emailSent, setEmailSent] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .send(
        'service_5unh2nq',
        'template_d0mo0kr',
        formData,
        'vhgfdP39yA4k-tbC1'
      )
      .then(
        result => {
          console.log('Email successfully sent!', result.text);
          setEmailSent(true);
        },
        error => {
          console.log('Failed to send email.', error.text);
          setEmailError(true);
        }
      );
  };

  return (
    <>
      <form onSubmit={sendEmail}>
        <InputField
          label="Full name"
          id="from_name"
          type="text"
          onChange={handleChange}
          required
        />
        <InputField
          label="Email"
          id="email"
          type="email"
          onChange={handleChange}
          required
        />
        <TextAreaField
          label="Message"
          id="message"
          onChange={handleChange}
          required
        />
        <SubmitButton />
      </form>
      {emailSent && <Success />}
      {emailError && <Error />}
    </>
  );
}

export default MailForm;
