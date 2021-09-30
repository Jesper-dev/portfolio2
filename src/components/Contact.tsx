import { useState, useEffect } from "react";
import { emailjsObj } from "../keys";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [state, setState] = useState<{
    email: string;
    msg: string;
    loading: boolean;
    done: boolean;
    error: boolean;
  }>({
    email: "",
    msg: "",
    loading: false,
    done: false,
    error: false,
  });
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const template = {
      name: state.email,
      msg: state.msg,
    };
    setState((prev) => ({ ...prev, loading: true }));
    emailjs
      .send(emailjsObj.serviceID, emailjsObj.templateID, template)
      .then((res) => {
        setState((prev) => ({
          ...prev,
          loading: false,
          done: true,
          email: "",
          msg: "",
        }));
        console.log("success!", res.status, res.text);
      })
      .catch((err) => {
        setState((prev) => ({ ...prev, done: true }));
        console.log("failed", err);
      });
  };
  useEffect(() => {
    setTimeout(() => {
      setState((prev) => ({ ...prev, done: false, error: false }));
    }, 1500);
  }, [state.done, state.error]);
  const onChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    switch (e.target.id) {
      case "email":
        setState((prev) => ({ ...prev, email: e.target.value }));
        break;
      case "msg":
        setState((prev) => ({ ...prev, msg: e.target.value }));
        break;
      default:
        break;
    }
  };
  return (
    <section className="contactContainer" id="contact">
      <div className="header">
        <h1>Get in touch✉️</h1>
      </div>
      <form onSubmit={(e) => submit(e)} data-aos="flip-down">
        <input
          id="email"
          type="email"
          placeholder="email..."
          value={state.email}
          onChange={(e) => onChange(e)}
        />
        <textarea
          id="msg"
          placeholder="message..."
          value={state.msg}
          onChange={(e) => onChange(e)}
        ></textarea>
        <button>SEND</button>
      </form>
      {state.loading ? <p className="emailSendState">loading...</p> : null}
      {state.done ? <p className="emailSendState">SUCCESS!</p> : null}
      {state.error ? <p className="emailErrorState">ERROR!</p> : null}
    </section>
  );
};
