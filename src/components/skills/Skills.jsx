import React from "react";
// Information summary data
const skillsData = [
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

const Skills = () => {
    return (
        <div class="h-screen flex justify-center items-center dark:bg-gray-800">
            <div class="w-full pl-0 pt-10 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0">
                <div>
                    <div class="flex items-end justify-between">
                        <h4 class="font-body font-semibold uppercase text-black">
                            HTML &amp; CSS
                        </h4>
                        <h3 class="font-body text-3xl font-bold text-primary">85%</h3>
                    </div>
                    <div class="mt-2 h-3 w-full rounded-full bg-lila">
                        <div class="h-3 rounded-full bg-primary" style={{ "width": "85%" }}></div>
                    </div>
                </div>
                <div class="pt-6">
                    <div class="flex items-end justify-between">
                        <h4 class="font-body font-semibold uppercase text-black">Python</h4>
                        <h3 class="font-body text-3xl font-bold text-primary">70%</h3>
                    </div>
                    <div class="mt-2 h-3 w-full rounded-full bg-lila">
                        <div class="h-3 rounded-full bg-primary" style={{ "width": "70%" }}></div>
                    </div>
                </div>
                <div class="pt-6">
                    <div class="flex items-end justify-between">
                        <h4 class="font-body font-semibold uppercase text-black">
                            Javascript
                        </h4>
                        <h3 class="font-body text-3xl font-bold text-primary">98%</h3>
                    </div>
                    <div class="mt-2 h-3 w-full rounded-full bg-lila">
                        <div class="h-3 rounded-full bg-primary" style={{ "width": "98%" }}></div>
                    </div>
                </div>
                <div class="pt-6">
                    <div class="flex items-end justify-between">
                        <h4 class="font-body font-semibold uppercase text-black">Figma</h4>
                        <h3 class="font-body text-3xl font-bold text-primary">91%</h3>
                    </div>
                    <div class="mt-2 h-3 w-full rounded-full bg-lila">
                        <div class="h-3 rounded-full bg-primary" style={{ "width": "91%" }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
