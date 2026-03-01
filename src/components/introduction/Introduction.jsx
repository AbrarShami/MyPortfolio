import person from "../../assets/images/person.png";
import "./introduction.css";
import InformationSummary from "./InformationSummary";
import SocialMedia from "../common/socialMedia/SocialMedia";
// Information summary data
const informationSummaryData = [
  {
    id: 1,
    title: "Experience",
    description: "10 Y.",
  },
  {
    id: 2,
    title: "Projects Completed",
    description: "25+",
  },
  {
    id: 3,
    title: "Happy Clients",
    description: "25",
  },
];

const Introduction = () => {
  return (
    <div
      className="flex max-lg:flex-col-reverse sm:justify-between pt-10 lg:pt-31.5 lg:mb-27.5 max-xl:gap-2 p-2 max-xxl:px-4"
      id="introduction"
    >
      <div className="w-full flex flex-col justify-between max-lg:text-center">
        <div className="pt-13 me-31.5 w-full lg:w-auto transition-all duration-500">
          <p className="text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl font-semibold w-full">
            Hello, I’m
            <span className="text-nowrap shrink-0 inline-block w-full">
              Muhammad Abrar
            </span>
          </p>
          <p className="text-xs xxs:text-lg lg:text-[18px] my-6">
            I'm a Freelance. <span className="bg-highlight">Meta Certified Front-end Developer</span>{" "}
            I specialize in building responsive, high-performance web applications using clean, maintainable code and modern technologies. I focus on creating seamless user experiences by transforming designs into fast, accessible, and scalable interfaces.
          </p>
          <p className="text-center lg:text-start">
            <a
              className="btn-primary btn btn-xs xxs:btn-lg text-white"
              href="mailto:abrar.shami@hotamil.com"
            >
              Say Hello!
            </a>
          </p>
        </div>
        <div className="mx-auto lg:mx-0 relative">
          <div className="grid max-xxs:grid-flow-col grid-cols-3 w-fit mt-10 gap-1">
            {informationSummaryData.map((item) => (
              <InformationSummary key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
      <div
        className={`max-w-134 w-full h-full max-lg:mx-auto aspect-[336/336] relative`}
      >
        <img
          className={`shadow-2xl left-1/2 transform -translate-x-1/2 shadow-gray-200 w-100 h-100 absolute bottom-0 object-cover bg-white rounded-3xl`} src={person}
          alt="person"
        />
        {/* Social media section */}
        <div className="absolute  -bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="flex justify-center">
            <div className="px-6 max-w-66 py-3 z-50 text-center bg-white rounded-[4px] center shadow-2xl drop-shadow-2xl shadow-white">
              <SocialMedia />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
