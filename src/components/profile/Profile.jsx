import certificate from "../../assets/images/certificate.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import SocialMedia from "../common/socialMedia/SocialMedia";

const Profile = () => {
  return (
    <div
      className={`relative mx-4 xxl:mx-0.5 -bottom-20 lg:-bottom-28 z-10 rounded-2xl bg-white drop-shadow-2xl max-xl:mb-5 shadow-white xl:p-20 lg:p-20 md:p-16 sm:p-10 p-4`}
      id="profile"
    >
      <div className="flex max-md:flex-col justify-between items-center gap-6">
        {/* Profile image */}
        <div className="xxl:max-w-166 w-auto h-auto xxl:max-h-126">
          <a href="https://coursera.org/share/cdc219254ce53c65544d10fc61ee77c1" target="_blank" className="max-w-146 border inline-block h-117 object-fill overflow-hidden rounded-xl">
            <img
              className="bg-soft-white object-cover"
              src={certificate}
              alt=""
            />
          </a>

        </div>

        <div className="max-sm:w-full w-[33rem]">
          <h2
            className={`text-2xl xxs:text-2xl sm:text-4xl lg:text-[38px] text-[min(24px,38px)] max-md:text-center font-semibold mb-8`}
          >
            Meta Certified Front-end Developer
          </h2>
          <div
            className={`text-xs xs:text-[16px] lg:text-lg font-normal max-md:text-center text-gray-600`}
          >
            <p className={``}>
              I design and develop modern, responsive, and high-performance websites and web applications. I specialize in building stylish, user-friendly interfaces using clean and maintainable code.
            </p>
            <p className="mt-3">
              My passion is creating seamless digital experiences by transforming designs into functional, scalable web solutions. I focus on delivering fast, accessible, and visually engaging websites that meet business goals and enhance user satisfaction.
            </p>
          </div>
          <div className="mt-8 flex max-md:justify-center">
            <a
              className="btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 btn-primary text-xs xxs:text-[14px] sm:text-[16px]"
              href="#!"
            >
              My Projects
            </a>
            {/* <a
              className={`btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 hover:border-picto-primary bg-white duration-300 transition-all hover:text-picto-primary  ms-4 text-xs xxs:text-[14px] sm:text-[16px]`}
              href="#!"
            >
              <FontAwesomeIcon icon={faDownload} /> Download CV
            </a> */}

          </div>
        </div>
      </div>
      <div className="xl:mb-5 mt-25 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Skills</p>
        </div>
      </div>
      <div className="flex max-md:flex-col justify-between items-center gap-20">
        <div className="w-full pl-0 pt-10">
          <div>
            <div className="flex items-end justify-between">
              <h4 className="font-body font-semibold uppercase text-black">
                HTML &amp; CSS
              </h4>
              <h3 className="font-body text-2xl font-bold text-primary">90%</h3>
            </div>
            <div className="mt-2 h-2 w-full rounded-full bg-[#EDD8FF80]">
              <div className="h-2 rounded-full bg-primary" style={{ "width": "90%" }}></div>
            </div>
          </div>
          <div className="pt-6">
            <div className="flex items-end justify-between">
              <h4 className="font-body font-semibold uppercase text-black">SCSS</h4>
              <h3 className="font-body text-2xl font-bold text-primary">90%</h3>
            </div>
            <div className="mt-2 h-2 w-full rounded-full bg-[#EDD8FF80]">
              <div className="h-2 rounded-full bg-primary" style={{ "width": "90%" }}></div>
            </div>
          </div>
          <div className="pt-6">
            <div className="flex items-end justify-between">
              <h4 className="font-body font-semibold uppercase text-black">Bootstrap / TailwindCSS</h4>
              <h3 className="font-body text-2xl font-bold text-primary">85%</h3>
            </div>
            <div className="mt-2 h-2 w-full rounded-full bg-[#EDD8FF80]">
              <div className="h-2 rounded-full bg-primary" style={{ "width": "85%" }}></div>
            </div>
          </div>
          <div className="pt-6">
            <div className="flex items-end justify-between">
              <h4 className="font-body font-semibold uppercase text-black">
                Javascript / Jquery.js
              </h4>
              <h3 className="font-body text-2xl font-bold text-primary">80%</h3>
            </div>
            <div className="mt-2 h-2 w-full rounded-full bg-[#EDD8FF80]">
              <div className="h-2 rounded-full bg-primary" style={{ "width": "80%" }}></div>
            </div>
          </div>
          <div className="pt-6">
            <div className="flex items-end justify-between">
              <h4 className="font-body font-semibold uppercase text-black">
                React.js
              </h4>
              <h3 className="font-body text-2xl font-bold text-primary">80%</h3>
            </div>
            <div className="mt-2 h-2 w-full rounded-full bg-[#EDD8FF80]">
              <div className="h-2 rounded-full bg-primary" style={{ "width": "80%" }}></div>
            </div>
          </div>
        </div>

        <div className="w-full pl-0 pt-10">

          <div>
            <div className="flex items-end justify-between">
              <h4 className="font-body font-semibold uppercase text-black">Figma/PSD to Responsive HTML | Tailwind CSS | Bootstrap | JavaScript | React Development</h4>
              <h3 className="font-body text-2xl font-bold text-primary">90%</h3>
            </div>
            <div className="mt-2 h-2 w-full rounded-full bg-[#EDD8FF80]">
              <div className="h-2 rounded-full bg-primary" style={{ "width": "90%" }}></div>
            </div>
          </div>
          <div className="pt-6">
            <div className="flex items-end justify-between">
              <h4 className="font-body font-semibold uppercase text-black">Wordpress | Elementor | Framer</h4>
              <h3 className="font-body text-2xl font-bold text-primary">80%</h3>
            </div>
            <div className="mt-2 h-2 w-full rounded-full bg-[#EDD8FF80]">
              <div className="h-2 rounded-full bg-primary" style={{ "width": "80%" }}></div>
            </div>
          </div>
          <div className="pt-6">
            <div className="flex items-end justify-between">
              <h4 className="font-body font-semibold uppercase text-black">Salesforce | SFCC | SFRA</h4>
              <h3 className="font-body text-2xl font-bold text-primary">80%</h3>
            </div>
            <div className="mt-2 h-2 w-full rounded-full bg-[#EDD8FF80]">
              <div className="h-2 rounded-full bg-primary" style={{ "width": "80%" }}></div>
            </div>
          </div>
          <div className="pt-6">
            <div className="flex items-end justify-between">
              <h4 className="font-body font-semibold uppercase text-black">microsoft dynamics 365 commerce </h4>
              <h3 className="font-body text-2xl font-bold text-primary">80%</h3>
            </div>
            <div className="mt-2 h-2 w-full rounded-full bg-[#EDD8FF80]">
              <div className="h-2 rounded-full bg-primary" style={{ "width": "80%" }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
