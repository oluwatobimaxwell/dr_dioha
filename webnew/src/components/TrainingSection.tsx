import { Fragment } from "react";
import { useGetMainData } from "../api/hooks";

export const TrainingSection = () => {
  const { data } = useGetMainData();
  return (
    <section className="partner-section" id="academics-section">
      <div className="container">
        <div className="section-title light">
          <h2>Scholarly Training</h2>
        </div>
        <div className="partnerCarousel">
          <div className="swiper-wrapper">
            {(data?.schoolIcons || []).map((school) => (
              <Fragment key={school.name}>
                <div className="swiper-slide">
                  <div className="image-wrapper">
                    <img src={school.url} alt={school.name} />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="image-wrapper"></div>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
