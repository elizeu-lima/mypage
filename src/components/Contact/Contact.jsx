import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs, { send } from "@emailjs/browser";
import { themeContext } from "../../Context";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [done, setDone] = useState(false)
  const form = useRef();
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')


  const sendEmail = (e) => {
    e.preventDefault();

    if(name === '' || email === '' || message === ''){
      alert("Preencha todos os campos");
      return;
    }

    emailjs.sendForm('service_7ydndgf', 'template_j7yavad', form.current, 'FissFCWM5qYZhndns')
      .then((result) => {
        console.log(result.text);
        setName('')
        setEmail('')
        setMessage('')
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className='contact-form'>

      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{ color: darkMode ? 'white' : '' }}>FALE COMIGO</span>
          <span>Envie Sua Menssagem!</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>

      <div className='c-right'>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user" placeholder="Name" 
          onChange={(e) => setName(e.target.value)}
          value={name}
          />
          <input type="email" name="user_email" className="user" placeholder="Email" 
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          />
          <textarea name="message" className="user" placeholder="Message" 
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          />
          <input type="submit" value="Send" className="button"/>
          <span>{done &&  "Obrigado Pela mensagem"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>

    </div>

  );
};
export default Contact;