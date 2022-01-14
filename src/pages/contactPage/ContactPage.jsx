import React, { useEffect } from "react";
import "./ContactPage.scss";
import Icon from "../../components/atoms/icon/Icon";
import ContactForm from "../../components/organisms/contactForm/ContactForm";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0, "smooth");
  }, []);

  return (
    <div className="dkContactPage">
      <section id="heroSection" className="py-5 bg-secondary text-white">
        <div className="container">
          <div className="row">
            <h1 className="display-2 text-uppercase">Contact Us</h1>
            <p className="text-white">
              Let's connect and talk about your website and/or mobile app idea!
            </p>
          </div>
        </div>
      </section>
      <section id="contactSection" className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h1 className="text-uppercase pb-4">Let's get in touch</h1>
              <div id="addressInfo" className="mb-3">
                <h6 className="text-muted text-uppercase">Address</h6>
                <p>Spanish Fork, Utah, 84660</p>
              </div>
              <div id="emailInfo" className="mb-3">
                <h6 className="text-muted text-uppercase">Email</h6>
                <p>afitechfreelance.io@gmail.com</p>
              </div>
              <div id="phoneInfo" className="mb-3">
                <h6 className="text-muted text-uppercase">Phone</h6>
                <p>801-310-5876</p>
              </div>
              <div id="socialLinks" className="mb-3">
                <Icon
                  color="#333333"
                  iconStyle="fab"
                  icon="facebook"
                  size={20}
                  isClickable
                  marginRight={20}
                />
                <Icon
                  color="#333333"
                  iconStyle="fab"
                  icon="instagram"
                  size={20}
                  isClickable
                  marginRight={20}
                />
                <Icon
                  color="#333333"
                  iconStyle="fab"
                  icon="github"
                  size={20}
                  isClickable
                  marginRight={20}
                />
                <Icon
                  color="#333333"
                  iconStyle="fab"
                  icon="linkedin"
                  size={20}
                  isClickable
                />
              </div>
            </div>
            <div className="col-lg-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      <section id="featureSection" className="bg-dark text-white py-5">
        <div className="container py-3">
          <div className="row text-center">
            <div className="col-4">
              <div className="circle mx-auto mb-3">
                <Icon
                  iconStyle="fas"
                  icon="microphone-alt"
                  size={30}
                  color="purple"
                  margin="20"
                />
              </div>
              <h3>Fast Response!</h3>
              <p>We have an awesome reponse time to requests!</p>
            </div>
            <div className="col-4">
              <div className="circle mx-auto mb-3">
                <Icon
                  iconStyle="fas"
                  icon="handshake"
                  size={30}
                  color="purple"
                  margin="20"
                />
              </div>
              <h3>Let's Connect!</h3>
              <p>Check out our social media!</p>
            </div>
            <div className="col-4">
              <div className="circle mx-auto mb-3">
                <Icon
                  iconStyle="fas"
                  icon="flag-usa"
                  size={30}
                  color="purple"
                  margin="20"
                />
              </div>
              <h3>U.S. Based Business</h3>
              <p>We are proudly based in the United States</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
