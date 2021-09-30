import React, { ReactElement } from "react";

interface Props {}

export const Contact = () => {
  return (
    <section className="contactContainer" id="contact">
      <div className="header">
        <h1>Get in touch✉️</h1>
      </div>
      <form>
        <input type="email" placeholder="email..." />
        <textarea name="" id="" placeholder="message..."></textarea>
        <button>SEND</button>
      </form>
    </section>
  );
};
