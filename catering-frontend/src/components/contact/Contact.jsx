import React from "react";
import styles from "../menu/Menu.module.css";

const Contact = () => {
  return (
    <>
      {/* Hero Section Title */}
      <div
        className={`container-fluid text-center ${styles.hero}`}
        style={{ height: "40vh" }}
      >
        <div
          className={`${styles.content} ps-md-4`}
          style={{ paddingTop: "6rem" }}
        />
        <h1 className="poppins-bold">Contact Us</h1>
        <p className={`text-muted text-center ${styles.heroText}`}>
          Get in touch with us for orders, catering inquiries, or any questions
          you might have.
        </p>
      </div>

      {/* Main section */}
      <div className="container-fluid pt-5 pb-3 border border-success">
        <div className="row border border-danger">
          <div className="col-md-6 col-12 border border-primary">
            <h3 className="lato-bold mb-4">Send Us a Message</h3>
            <form>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="fullname">Full Name</label>
                  <input
                    type="fullname"
                    className="form-control"
                    id="fullname"
                    placeholder="Your name"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div className="col-12 mb-3">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className="form-control"
                    placeholder="Your phone number"
                  />
                </div>
                <div className="col-12 mb-3">
                  <label htmlFor="inputSubject">Subject</label>
                  <input type="text" name="subject" className="form-control" placeholder="What is this regarding?" />
                </div>
                <div className="col-12 mb-3">
                  <label htmlFor="inputMessage">Message</label>
                  <textarea id="message" name="message" rows='4' cols='50' className="form-control" placeholder="How can we help you?" />
                </div>
              </div>
            </form>
            <button className={`btn btn-light px-3 py-md-2 py-3`} style={{ backgroundColor: 'rgb(var(--orange))', color: 'white', border: 'none' }}>Send Message</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
