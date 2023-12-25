import logoImg from "../assets/web/image/logo.png";

import { useGetMainData } from "../api/hooks";

export const FooterSection = () => {
  const { data } = useGetMainData();
  return (
    <footer className="site-footer" id="site-footer">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 text-center branding-block">
            <a className="footer-brand" href="#">
              <img src={logoImg} alt="Logo" />
            </a>
            <p>
              Follow me on social media for updates on my latest research and
              insights on sustainable energy issues.
            </p>
            <ul className="list-inline footer-social">
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
            </ul>
          </div>
        </div>
        <div className="back-to-top">
          <a href="#site-header">
            <i className="bi bi-box-arrow-up" />
          </a>
        </div>
        <div className="row footer-bottom">
          <div className="col-md-12">
            <p style={{ textAlign: "center" }}>
              All rights reserved © {new Date().getFullYear()}{" "}
              <strong>
                {data?.firstName} {data?.lastName}, {data?.title}
              </strong>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
