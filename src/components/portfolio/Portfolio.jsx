import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/p-1.png";
import card2 from "../../assets/images/portfolio-images/p-2.png";
import card3 from "../../assets/images/portfolio-images/p-3.png";
import card4 from "../../assets/images/portfolio-images/p-4.png";
import card5 from "../../assets/images/portfolio-images/p-5.png";
import card6 from "../../assets/images/portfolio-images/p-6.png";
import card7 from "../../assets/images/portfolio-images/p-7.png";

const projectData = [
  {
    id: 1,
    image: card1,
    category: "UI + React.js",
    title: "Dobbies E-commerce Website",
    description:
      "I worked as a frontend/UI developer on the Dobbies E-commerce Website project. My main responsibility was converting Figma designs into fully functional web pages using React.js. This involved creating responsive, user-friendly interfaces that maintain the visual style and user experience envisioned by the design team.",
    // link: "#!",
  },
  {
    id: 2,
    image: card2,
    category: "SFRA UI developer",
    title: "Ralph Lauren E-commerce Website",
    description:
      "I worked as a SFRA Frontend Developer on Ralph Lauren’s cart and checkout modules. My main responsibility was to build new user interfaces based on provided designs using HTML, SASS, Bootstrap, and jQuery within the SFRA framework. I followed a mobile-first approach, ensuring the UI was scalable and responsive across devices by leveraging Bootstrap and SASS. Additionally, I analyzed existing styles, designed, and implemented common SASS variables and mixins to maintain consistency and improve development efficiency across the project.",
    link: "#!",
  },
  {
    id: 3,
    image: card3,
    category: "SFRA UI developer",
    title: "Movado E-commerce Website",
    description:
      "As the sole UI developer for Movado, I developed key modules including the Header, Footer, Homepage, Product Listing Page (PLP), Category Listing Page (CLP), Product Detail Page (PDP), Cart, and parts of the checkout. I developed using HTML, SCSS, Bootstrap, and jQuery, focusing on responsive designs for smooth use across devices. I integrated a third-party carousel on the PDP and improved site speed through file minification, code cleanup, image optimization, and lazy loading. I also ran A/B tests on the PLP and PDP to enhance user experience. Additionally, I created content assets and slots, ensured accessibility compliance through testing, and built modules using Page Designer.",
    link: "#!",
  },
  {
    id: 4,
    image: card4,
    category: "SFRA UI developer",
    title: "MVMT Watches E-commerce Website",
    description:
      "MVMT Watches was migrated from Shopify to SFRA while preserving its UI and functionality and improving site performance. I worked with HTML, Sass, and jQuery to build a responsive UI, set up the Sass structure and compilation framework, and optimize speed through reusable partials, reduced third-party scripts, image optimization, and lazy loading. I also used Google Lighthouse and PageSpeed Insights to enhance performance and created homepage content assets and slots.",
    link: "#!",
  },
  {
    id: 5,
    image: card5,
    category: "SFRA UI developer",
    title: "Decor steals E-commerce Website",
    description:
      "I implemented new UI based on provided designs, primarily using HTML, SCSS, Bootstrap, and jQuery. I built responsive interfaces, optimized site speed, integrated third-party carousels and JavaScript components, and set up Sass partials. I also created content assets and slots, and ensured accessibility compliance through testing.",
    link: "#!",
  },
  {
    id: 6,
    image: card6,
    category: "SFRA UI developer",
    title: "Swarovski E-commerce Website",
    description:
      "I developed the UI for Swarovski’s cart and checkout modules using HTML, SCSS, Bootstrap, and jQuery within the SFRA framework. I focused on creating responsive designs for smooth use across devices, optimized site speed through file minification, code cleanup, image optimization, and lazy loading. I also ran A/B tests on the PLP and PDP to enhance user experience, created content assets and slots, ensured accessibility compliance through testing, and built modules using Page Designer.",
    link: "#!",
  },
  {
    id: 7,
    image: card7,
    category: "SFRA UI developer",
    title: "Canda goose E-commerce Website",
    description:
      "I developed UI for Canada Goose using HTML, SCSS, Bootstrap, and jQuery within the SFRA framework. I built responsive designs, improved site speed through minification, code optimization, image compression, and lazy loading, and ran A/B tests on PLP and PDP pages to enhance user experience. I also created content assets and slots, ensured accessibility compliance, and built modules using Page Designer.",
    link: "#!",
  },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Portfolio</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Here's a selection of my recent work, showcasing my skills in
            creating user-centric and visually appealing interfaces.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
      {/* <div className="text-center">
        <a
          href="#!"
          className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
        >
          More Project
        </a>
      </div> */}
    </div>
  );
};

export default Portfolio;
