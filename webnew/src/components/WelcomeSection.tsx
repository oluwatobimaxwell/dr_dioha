import { useGetWelcomeData } from "../api/hooks";
import introElement1 from "../assets/web/image/design-elements/intro-element-1.png";

export const WelcomeSection = () => {
  const { data } = useGetWelcomeData();
  return (
    <section className="intro-section section-block">
      <div className="container">
        <div className="section-title">
          <h2>{data?.title}</h2>
          <p className="lead">{data?.description}</p>
        </div>
        <div className="row">
          {(data?.attributes || []).map((attribute, index) => (
            <div
              key={attribute.title}
              className="col-xl-4 col-lg-6"
              data-aos="fade-up"
              data-aos-delay={index * 300}
              data-aos-duration={1200}
            >
              <div className="item-wrapper">
                <div className="icon-box">
                  <i className={attribute.icon} />
                </div>
                <div className="content-wrapper">
                  <h3>{attribute.title}</h3>
                  <p>{attribute.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="design-elements">
        <img
          className="de-intro-1 elem-updown"
          src={introElement1}
          alt="intro element 1"
        />
      </div>
    </section>
  );
};
