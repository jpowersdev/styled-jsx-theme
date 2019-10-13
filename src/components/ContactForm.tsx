import { themeValues } from '../styles/Theme';

const ContactForm = () => {
  return (
    <>
      <form id='contact-form' className='fullwidth'>
        <label form='contact-form'>
          <h3>Ask Us Your Questions</h3>
        </label>
        <input placeholder='Name' name='name' />
        <input placeholder='Email' name='name' />
        <input placeholder='Message' name='name' />
        <input type='submit' value='submit' />
      </form>
      <style jsx>{`
        form {
          background: ${themeValues.colorBgAlt};
          display: grid;
          grid-template-columns: repeat(4, auto);
          grid-template-rows: 8ch 2ch;
          justify-content: center;
          align-items: center;
          grid-gap: 2ch;
          padding: 1em 0 3em;
        }
        label {
          text-align: center;
          grid-column: 1 / -1;
        }
        input {
          padding: 5px 10px;
          margin-bottom: 0;
        }
      `}</style>
    </>
  );
};

export default ContactForm;
