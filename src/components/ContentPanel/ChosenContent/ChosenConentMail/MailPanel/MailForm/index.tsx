import InputField from '../../../../../StyledElements/FormElements/InputField';
import SubmitButton from '../../../../../StyledElements/FormElements/SubmitButton';
import TextAreaField from '../../../../../StyledElements/FormElements/TextAreaField';

function MailForm() {
  return (
    <>
      <InputField label="Full name" id="name" type="text" />
      <InputField label="Email" id="email" type="email" />
      <TextAreaField label="Message" id="message" />
      <SubmitButton />
    </>
  );
}

export default MailForm;
