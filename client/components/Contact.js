import React from 'react';
import { Link } from 'react-router';

// Component //

export default function Contact () {
  return (
        <div id="contact-div">
          <h1 className="fancy-type caps" id="contact-header">get in touch.</h1>
          <form className="form-horizontal" action="mailto:acres.emilygrace@gmail.com" enctype="text/plain" >
            <div className="form-group" id="form-name" >
              <div className="">
                <input type="name" className="form-control" placeholder="name" />
              </div>
            </div>
            <div className="form-group" id="form-email">
              <div className="">
                <input type="email" className="form-control"  placeholder="email" />
              </div>
            </div>
            <textarea className="form-control form-group" rows="3"></textarea>
            <div className="">
              <div className="">
                <button type="submit" className="chat-btn btn btn-default">let's chat</button>
              </div>
            </div>
            <h3 id="flash-msg">thanks for the message, i'll get back to you soon!</h3>
          </form>
          <a href="mailto:acres.emilygrace@gmail.com"><img className="contact-img" id="email-img" src="/img/email.png" /></a>
           <a className="img-width" href="https://linkedin.com/in/emily-acres/"><img className="contact-img" src="/img/linkedin.png" /></a>
           <a className="img-width" href="https://github.com/emilyacres"><img className="contact-img" src="/img/github.png" /></a>
           <h3 id="contact-msg">drop me a line at any of the above and i'll get back to you lickety split.</h3>
        </div>
  );
}
