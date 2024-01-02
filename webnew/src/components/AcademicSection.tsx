import { useGetAcademicData } from "../api/hooks";

export const AcademicSection = () => {
  const { data } = useGetAcademicData();
  return (
    <section
      className="features-section light-background section-block"
      id="academics-section-1"
    >
      <div className="container">
        <div className="row">
          <div
            className="col-xl-6 image-block"
            data-aos="fade-right"
            data-aos-duration={1500}
          >
            <div className="image-wrapper">
              <img
                className="img-fluid feature-photo"
                src={data?.image}
                alt="features photo"
                data-tilt
                data-tilt-max={10}
                style={{ borderRadius: "15px" }}
              />
            </div>
          </div>
          <div
            className="col-xl-6 content-block"
            data-aos="fade-right"
            data-aos-duration={1500}
            data-aos-delay={400}
          >
            <h2 className="block-title">
              <span>{data?.section}</span>
            </h2>
            {data?.description && <p>{data?.description}</p>}
            <ul className="features-list">
              {(data?.academics || []).map((academic) => (
                <li
                  key={academic.description}
                  className="d-flex align-items-start"
                >
                  <div className="icon-block">
                    <div className="icon-box">
                      <i className="pe-7s-check" />
                    </div>
                  </div>
                  <div className="content-wrapper">
                    <p>{academic.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
