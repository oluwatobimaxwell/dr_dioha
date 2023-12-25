import contactElement1 from "../assets/web/image/design-elements/contact-element-1.png";
import contactElement2 from "../assets/web/image/design-elements/contact-element-2.png";

export const GetInTouchSection = () => {
  return (
    <section className="contact-section section-block" id="contact-section">
      <div className="container">
        <div className="section-title">
          <h2>Get in Touch</h2>
          <p className="lead">
            I would love to hear from you! Please don't hesitate to reach out
            for inquiries, collaborations, or just to say hello.
          </p>
        </div>
        <div className="row contact-options">
          <div
            className="col-lg-12 d-flex justify-content-xxl-center align-items-xl-center"
            data-aos="fade-down"
            data-aos-duration={1000}
            data-aos-delay={400}
          >
            <div className="icon-box">
              <i className="pe-7s-mail" />
            </div>
            <div className="content-wrapper">
              <h4>Email</h4>
              <a href="mailto:michael@dioha.us">michael@dioha.us</a>
            </div>
          </div>
        </div>
      </div>
      <div className="design-elements">
        <img
          className="de-contact-1 elem-updown"
          src={contactElement1}
          alt="contact element 1"
        />
        <img
          className="de-contact-2 elem-updown"
          src={contactElement2}
          alt="contact element 2"
        />
      </div>
    </section>
  );
};
