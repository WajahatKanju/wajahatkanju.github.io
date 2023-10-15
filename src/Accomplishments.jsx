import "./styles/Accomplishments.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import appliedAIPng from "./assets/accomplishments/appliedAI.png";
import creative from "./assets/accomplishments/creative.png";

import responsiveWebDesign from "./assets/accomplishments/responsiveWebDesign.png";
import JavascriptAlgorithms from "./assets/accomplishments/JavascriptAlgorithms.png";
import frontendLibraries from "./assets/accomplishments/frontendLibraries.png";

import Slider from "react-slick";

const Achievements = () => {
  const accomplishments = [
    {
      id: 1,
      imageUrl: appliedAIPng,
      link: "https://coursera.org/verify/professional-cert/EPLF4J42RA4K",
    },
    {
      id: 2,
      imageUrl: creative,
      link: "https://coursera.org/verify/specialization/R585VUKV5ZZ5",
    },
    {
      id: 3,
      imageUrl: responsiveWebDesign,
      link: "https://www.freecodecamp.org/certification/wajahat/responsive-web-design",
    },
    {
      id: 4,
      imageUrl: JavascriptAlgorithms,
      link: "https://www.freecodecamp.org/certification/wajahat/javascript-algorithms-and-data-structures",
    },
    {
      id: 5,
      imageUrl: frontendLibraries,
      link: "https://www.freecodecamp.org/certification/wajahat/front-end-development-libraries",
    },
  ];

  const settings = {
    dots: true,
    autoplay: true,

    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <section className="accomplishments">
      <h2 id="accomplishments" className="accomplishments__title">
        Accomplishments
      </h2>
      <div className="achievements__container">
        <Slider {...settings}>
          {accomplishments.map((accomplishment) => (
            <div
              key={accomplishment.id}
              className="accomplishments__accomplishment"
            >
              <a
                href={accomplishment.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={accomplishment.imageUrl} alt="" />
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Achievements;
