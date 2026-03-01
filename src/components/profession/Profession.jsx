import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "FIGMA/PSD to Responsive HTML | Tailwind CSS | Bootstrap | JavaScript | React Development",
    description:
      "Builds responsive, high-performance user interfaces using modern technologies like HTML, CSS, JavaScript, and React.",
  },
  {
    id: 2,
    title: "Bug Fixing & Optimization",
    description:
      "Identifying, reproducing, and diagnosing root causes, followed by implementing and verifying fixes, and finally optimizing for performance through code refinement, caching, and resource minimization",
  },
  {
    id: 3,
    title: "Web Development",
    description:
      "I build responsive and high-performance web applications using modern technologies, ensuring accessibility, scalability, and maintainability.",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">What I do?</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            I specialize in developing responsive, high-performance user interfaces
            and modern web applications. I transform designs into clean, scalable,
            and maintainable code that delivers seamless functionality across all devices.

          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
            My approach combines strong technical expertise with attention to detail
            to build fast, accessible, and user-friendly web solutions that provide
            real value to businesses and users alike.

          </p>
        </div>
        {/* <a
          href="#!"
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
        >
          Say Hello!
        </a> */}
      </div>
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
