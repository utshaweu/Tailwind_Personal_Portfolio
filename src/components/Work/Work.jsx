import React from "react";
import image1 from "../../Assets/img/job-recruting-and-posting-website.png";
import image2 from "../../Assets/img/patricia-website.png";
import image3 from "../../Assets/img/personal-portfolio-two.png";
import image4 from "../../Assets/img/personal-portfolio.png";
import image5 from "../../Assets/img/printing-press-website.png";
import image6 from "../../Assets/img/scientific-journal.png";
import image7 from "../../Assets/img/serpwizz-website.png";
import image8 from "../../Assets/img/woman-empowerment-website.png";
import image9 from "../../Assets/img/admin-dashboard.png";
import image10 from "../../Assets/img/business-website-two.png";
import image11 from "../../Assets/img/business-website.png";
import image12 from "../../Assets/img/corona-website.png";
import image13 from "../../Assets/img/domain-hosting-website.png";
import image14 from "../../Assets/img/export-import-website.png";
import image15 from "../../Assets/img/gym-website.png";

const demoData = [
  {
    img: image1,
    link: "https://utshaweu.github.io/Job_Recruiting_And_Posting_Site/index.html",
  },
  {
    img: image2,
    link: "https://utshaweu.github.io/Patricia_Webber_Website/",
  },
  {
    img: image3,
    link: "https://utshaweu.github.io/On-Call-Medico-Assessment-Task/",
  },
  {
    img: image4,
    link: "https://utshaweu.github.io/Overfolio/",
  },
  {
    img: image5,
    link: "https://nkprintingandpress.netlify.app/",
  },
  {
    img: image6,
    link: "https://wjbb.netlify.app/",
  },
  {
    img: image7,
    link: "https://serpwizz.netlify.app/",
  },
  {
    img: image8,
    link: "https://utshaweu.github.io/Women_Empowerment_Site/#",
  },
  {
    img: image9,
    link: "https://utshaweu.github.io/Admin_Dashboard/",
  },
  {
    img: image10,
    link: "https://utshaweu.github.io/Tessomo_Technologies_Website/",
  },
  {
    img: image11,
    link: "https://utshaweu.github.io/Diiso_African_Website/",
  },
  {
    img: image12,
    link: "https://utshaweu.github.io/Corona_Html_Web_Template/",
  },
  {
    img: image13,
    link: "https://utshaweu.github.io/task/",
  },
  {
    img: image14,
    link: "https://shebaenterprisesllc.netlify.app/",
  },
  {
    img: image15,
    link: "https://utshaweu.github.io/Refuel_Fitness_and_Gym_Theme/",
  },
];

const Work = () => {
  return (
    <>
      <div className="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
        <section className="w-full">
          <h2 id="work" className="secondary-title">
            My work
          </h2>
          <p className="section-paragraph">I’ve had the pleasure of working with multiple Fortune many companies, designing and implementing frontend.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-6">
            {demoData?.length > 0 &&
              demoData?.map((item, index) => (
                <a href={item?.link} target="_blank" rel="noreferrer" className="relative z-10">
                  <img key={index} src={item?.img} alt="" className="w-full bg-nav h-36 lg:h-96 object-cover transform hover:skew-y-6 transition duration-700 ease-in-out" />
                </a>
              ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Work;
