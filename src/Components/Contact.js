import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";
import emailjs from "emailjs-com";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactName: "",
      contactEmail: "",
      contactSubject: "",
      contactMessage: "",
      messageSuccess: false,
      messageError: false,
      showSuccessMessage: false
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { contactName, contactEmail, contactSubject, contactMessage } = this.state;
    const templateParams = {
      contactName,
      contactEmail,
      contactSubject,
      contactMessage
    };

    emailjs
      .send(
        "service_30lmbk2", // Replace with your EmailJS service ID
        "template_hwx9dbs", // Replace with your EmailJS template ID
        templateParams,
        "0NlYRTzn992amyGA6" // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          this.setState({
            messageSuccess: true,
            messageError: false,
            showSuccessMessage: true,
            contactName: "",
            contactEmail: "",
            contactSubject: "",
            contactMessage: ""
          });
          
          // Hide the success message after 5 seconds
          setTimeout(() => {
            this.setState({ showSuccessMessage: false });
          }, 5000);
        },
        (error) => {
          console.log("FAILED...", error);
          this.setState({ messageSuccess: false, messageError: true });
        }
      );
  };

  render() {
    if (!this.props.data) return null;

    const { name, address, phone, contactmessage } = this.props.data;
    const { street, city, state, zip } = address;
    const { showSuccessMessage, messageError } = this.state;

    return (
      <section id="contact">
        <Fade bottom duration={1000}>
          <div className="row section-head">
            <div className="two columns header-col">
              <h1>
                <span>Get In Touch.</span>
              </h1>
            </div>
            <div className="ten columns">
              <p className="lead">{contactmessage}</p>
            </div>
          </div>
        </Fade>

        <div className="row">
          <Slide left duration={1000}>
            <div className="eight columns">
              <form onSubmit={this.handleSubmit} id="contactForm" name="contactForm">
                <fieldset>
                  <div>
                    <label htmlFor="contactName">
                      Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      value={this.state.contactName}
                      size="35"
                      id="contactName"
                      name="contactName"
                      onChange={this.handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactEmail">
                      Email <span className="required">*</span>
                    </label>
                    <input
                      type="email"
                      value={this.state.contactEmail}
                      size="35"
                      id="contactEmail"
                      name="contactEmail"
                      onChange={this.handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactSubject">Subject</label>
                    <input
                      type="text"
                      value={this.state.contactSubject}
                      size="35"
                      id="contactSubject"
                      name="contactSubject"
                      onChange={this.handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactMessage">
                      Message <span className="required">*</span>
                    </label>
                    <textarea
                      cols="50"
                      rows="15"
                      value={this.state.contactMessage}
                      id="contactMessage"
                      name="contactMessage"
                      onChange={this.handleChange}
                    ></textarea>
                  </div>

                  <div>
                    <button type="submit" className="submit">Submit</button>
                    <span id="image-loader">
                      <img alt="" src="images/loader.gif" />
                    </span>
                  </div>
                </fieldset>
              </form>

              {messageError && <div id="message-warning"> Error: Could not send message</div>}
              {showSuccessMessage && (
                <div id="message-success">
                  <i className="fa fa-check"></i> Your message was sent, thank you!
                </div>
              )}
            </div>
          </Slide>

          <Slide right duration={1000}>
            <aside className="four columns footer-widgets">
              <div className="widget widget_contact">
                <h4>Address and Phone</h4>
                <p className="address">
                  {name}
                  <br />
                  {street} <br />
                  {city}, {state} {zip}
                  <br />
                  <span>{phone}</span>
                </p>
              </div>
              <div className="widget widget_tweets">
                <h4 className="widget-title">Latest Tweets</h4>
                <ul id="twitter">
                  <li>
                    <span>
                      DrugFormer: Graph‐Enhanced Language Model to Predict Drug Sensitivity
                      <br />
                      🧬 A groundbreaking model, DrugFormer, integrates graph-based knowledge with large language models to predict drug resistance at the single-cell level.
                      <br />
                      <a href="./">https://x.com/BiologyAIDaily/status/1831508466734920005</a>
                    </span>
                    <b>
                      <a>Sep 4, 2024</a>
                    </b>
                  </li>
                  {/* <li>
                    <span>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi
                      <a href="./">http://t.co/CGIrdxIlI3</a>
                    </span>
                    <b>
                      <a href="./">3 Days Ago</a>
                    </b>
                  </li> */}
                </ul>
              </div>
              
            </aside>


            
          </Slide>
        </div>
      </section>
    );
  }
}

export default Contact;
