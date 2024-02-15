import { SetStateAction, useContext, useState } from 'react';
import InputField from '../../FormElements/InputField';
import SubmitButton from '../../FormElements/SubmitButton';
import axios from 'axios';
import { ActiveComponentContext } from '../../../../ActiveComponentContext';

function LoginModal({ closeModal }: { closeModal: () => void }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { setActiveComponent } = useContext(ActiveComponentContext);

  const handleText = (e: {
    target: { id: string; value: SetStateAction<string> };
  }) => {
    if (e.target.id === 'username') {
      setUsername(e.target.value);
    } else if (e.target.id === 'password') {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:3001/api/check-credentials',
        { username, password }
      );

      if (response.data.success) {
        localStorage.setItem('token', response.data.token);
        console.log('Login successful! 🟢');

        setTimeout(() => {
          setActiveComponent('dashboard');
          closeModal();
          window.hideButton();
        }, 2000);
      } else {
        console.log('Login failed! 🔴');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputField
          label="Username"
          id="username"
          type="text"
          onChange={handleText}
          required
        />
        <InputField
          label="Password"
          id="password"
          type="password"
          onChange={handleText}
          required
        />
        <SubmitButton text="Login" />
      </form>
    </>
  );
}

export default LoginModal;
