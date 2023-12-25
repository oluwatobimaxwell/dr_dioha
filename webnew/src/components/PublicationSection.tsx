import { useGetPublicationData } from "../api/hooks";
import googleScholar from "../assets/web/image/google-scholar.png";
import researchGate from "../assets/web/image/research-gate.jpg";

export const PublicationSection = () => {
  const { data } = useGetPublicationData();

  return (
    <section
      className="skill-section features-section section-block publications"
      id="skill-section"
    >
      <div className="container">
        <div className="row">
          <div
            className="col-xl-12 content-block"
            data-aos="fade-right"
            data-aos-duration={1500}
            data-aos-delay={400}
          >
            <h2 className="block-title">
              <span>{data?.section}</span>
              {data?.title}
            </h2>
            <p>{data?.description}</p>
            <ul className="features-list">
              {(data?.publication || []).map((publication) => (
                <li key={publication.id} className="d-flex align-items-start">
                  <div className="icon-block">
                    <a href={publication.link} target="_blank">
                      <div className="icon-box">
                        <i className="pe-7s-link" />
                      </div>
                    </a>
                  </div>
                  <div className="content-wrapper">
                    <h4>{publication.title}</h4>
                    <p>
                      <small
                        dangerouslySetInnerHTML={{
                          __html: publication.reference,
                        }}
                      />
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="publication-website">
          <div className="scholar">
            <a
              href="https://scholar.google.com/citations?user=okNOLCwAAAAJ&hl=en"
              target="_blank"
            >
              <img src={googleScholar} alt="Google Scholar" />
            </a>
          </div>
          <div className="scholar">
            <a
              href="https://www.researchgate.net/profile/Michael-Dioha-2"
              target="_blank"
            >
              <img src={researchGate} alt="Research Gate" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
