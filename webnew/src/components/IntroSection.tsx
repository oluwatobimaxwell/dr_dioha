import heroElement1 from "../assets/web/image/design-elements/hero-element-1.png";
import heroElement2 from "../assets/web/image/design-elements/hero-element-2.png";
import heroElement3 from "../assets/web/image/design-elements/hero-element-3.png";
import heroElement4 from "../assets/web/image/design-elements/hero-element-4.png";
import heroElement5 from "../assets/web/image/design-elements/hero-element-5.png";
import { useGetMainData } from "../api/hooks";

export const IntroSection = () => {
  const { data } = useGetMainData();

  return (
    <section className="hero-area" id="hero-area">
      <div className="container">
        <div className="hero-content d-flex justify-content-center">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-xl-6 order-xl-last image-block">
              <div className="image-wrapper" data-tilt data-tilt-max={10}>
                <ul className="hero-facts">
                  <li style={{ visibility: "hidden" }}>
                    <p>
                      10<span>+</span>
                    </p>
                    <h4>
                      Total <br />
                      Projects
                    </h4>
                  </li>
                  <li style={{ visibility: "hidden" }}>
                    <p>
                      50<span>+</span>
                    </p>
                    <h4>
                      Academic <br />
                      Publications
                    </h4>
                  </li>
                </ul>
                <img
                  className="img-fluid"
                  src={data?.introImage}
                  alt="hero main image"
                  style={{ borderRadius: "20px" }}
                />
              </div>{" "}
              {/* .image-wrapper */}
            </div>{" "}
            {/* .image-block */}
            <div className="col-xl-6 order-xl-first content-block">
              <h1 className="hero-head">
                <small>{data?.intro} </small>
                {data?.firstName} <strong>{data?.lastName}</strong>, {data?.title}
              </h1>
              <p dangerouslySetInnerHTML={{ __html: String(data?.interest) }} />
              <hr />
              <p>
                <strong>{data?.professionInterestTitle}</strong>
                <br />
                {data?.professionalInterest}
              </p>
              <div className="link-group">
                <a className="btn-main" href="#contact-section">
                  Contact Me
                </a>
                <ul className="hero-social list-inline">
                  <li className="list-inline-item">
                    <a
                      href="https://www.linkedin.com/in/michael-dioha-phd-563aa5b8/"
                      target="_blank"
                    >
                      <i className="fab fa-linkedin" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://twitter.com/michael_dioha" target="_blank">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                </ul>{" "}
                {/* .hero-social */}
              </div>{" "}
              {/* .link-group */}
            </div>{" "}
            {/* .content-block */}
          </div>{" "}
          {/* .row */}
        </div>{" "}
        {/* .hero-content */}
      </div>{" "}
      {/* .container */}
      <div className="design-elements">
        <img
          className="de-hero-1 elem-updown"
          src={heroElement1}
          alt="hero element 1"
        />
        <img
          className="de-hero-2 elem-move"
          src={heroElement2}
          alt="hero element 2"
        />
        <img
          className="de-hero-3 elem-updown"
          src={heroElement3}
          alt="hero element 3"
        />
        <img
          className="de-hero-4 elem-updown"
          src={heroElement4}
          alt="hero element 4"
        />
        <img
          className="de-hero-5 elem-move"
          src={heroElement5}
          alt="hero element 5"
        />
      </div>
    </section>
  );
};
