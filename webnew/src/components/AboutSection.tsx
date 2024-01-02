import { useGetAboutMeData } from "../api/hooks";
import aboutElement1 from "../assets/web/image/design-elements/about-element-1.png";
import aboutElement2 from "../assets/web/image/design-elements/about-element-2.png";

export const AboutSection = () => {
  const { data } = useGetAboutMeData();
  return (
    <section
      className="about-section section-block"
      id="about-section"
      data-aos="fade-up"
    >
      <div className="container">
        <div className="row">
          <div
            className="col-xl-6 image-block"
            data-aos="fade-right"
            data-aos-delay={200}
            data-aos-duration={2000}
          >
            <div
              className="img-wrapper about-img-wrap"
              data-tilt
              data-tilt-max={10}
            >
              <img
                className="about-img-1 img-fluid"
                src={data?.image}
                alt="about image"
                width="380px"
                height="436px"
                style={{ borderRadius: "15px" }}
              />
            </div>
          </div>
          <div
            className="col-xl-6 content-block"
            data-aos="fade-right"
            data-aos-delay={400}
            data-aos-duration={2000}
          >
            <h2>
              <span>{data?.section}</span>{data?.title}
            </h2>
            <p dangerouslySetInnerHTML={{ __html: String(data?.about) }} />
            <div className="personal-details row"></div>{" "}
            {/* .personal-details */}
            <a
              className="btn-main"
              href="https://www.linkedin.com/in/michael-dioha-phd-563aa5b8/"
              target="_blank"
            >
              <i className="fab fa-linkedin" style={{ marginRight: "10px" }} />
              LinkedIn
            </a>
          </div>
        </div>{" "}
        {/* .row */}
      </div>{" "}
      {/* .container */}
      <div className="design-elements">
        <img
          className="de-about-1 elem-updown"
          src={aboutElement1}
          alt="about element 1"
        />
        <img
          className="de-about-2 elem-updown"
          src={aboutElement2}
          alt="about element 2"
        />
      </div>{" "}
      {/* .design-elements */}
    </section>
  );
};
