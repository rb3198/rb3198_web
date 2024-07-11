import { ContentBoxProps } from "rb3198/components/Timeline";

type ContentBoxPropsWoTypes = Omit<ContentBoxProps, "type">;

const sde2Props: ContentBoxPropsWoTypes = {
  title: "Software Development Engineer II",
  at: "CarTrade Tech, India",
  timeline: "October 2022 - July 2023",
  bullets: [
    "Spearheaded a team of 5 creating the application-agnostic retail module, implemented agile methodologies using Jira, and improved team productivity by 20% through iterative development cycles.",
    "Achieved go-live on a tight time-frame of 1 month. This helped take the project live in time for the festive season.",
    `Optimized Page SEO through keyword targeting and linking, <b>boosting page landings by 400% and conversion rate by 8%</b>.`,
    "Achieved a <b>700% rise in leads & 500% increase in vehicle bookings</b> by implementing potential lead WhatsApp flow using RabbitMQ.",
  ],
};

const sde1Props: ContentBoxPropsWoTypes = {
  title: "Software Development Engineer I",
  at: "CarTrade Tech, India",
  timeline: "October 2021 - September 2022",
  bullets: [
    "<b>Conserved database calls by 40%</b> and prevented DB timeouts through a complete transformation of caching structure.",
    "Developed a WhatsApp module to enable instant and delayed notification sharing with customers.",
    "Built a car comparison tool - https://www.carwale.com/compare-cars, achieving a <b>10% hike in leads generated</b>.",
  ],
};

const sdeProps: ContentBoxPropsWoTypes = {
  title: "Associate Software Developer",
  at: "CarTrade Tech, India",
  timeline: "November 2020 - September 2021",
  bullets: [
    "Designed the finance page and microservice allowing users to check soft and hard loan eligibility, thereby boosting revenue by 25%.",
    "Planned & constructed a new EMI Calculator page for carwale.com, which supplemented finance page landings.",
    "Improved client side and microservice side unit test coverage, from <b>20% to 85%</b> ",
    "Effectively refactored and documented about 20k lines of code into smaller, more manageable React components.",
  ],
};

const ctInternProps: ContentBoxPropsWoTypes = {
  title: "Software Development Intern",
  at: "CarTrade Tech, India",
  timeline: "November 2020 - September 2021",
  bullets: [
    "Developed an analytical tool for inspecting Webpack chunks, helping the company to optimize dependencies of carwale.com.",
  ],
};

const iiflInternProps: ContentBoxPropsWoTypes = {
  title: "Software Development Intern",
  at: "IIFL Securities, India",
  timeline: "December 2018 - January 2019",
  bullets: [
    "Worked on designing & implementing an API to be used for Single Sign-On (SSO) by IIFL applications, using Windows Communication Foundation (WCF) framework based on VB.net.",
    "Design of this System was based on Kerberos architecture.",
  ],
};

export const timelineContent: ContentBoxPropsWoTypes[] = [
  sde2Props,
  sde1Props,
  sdeProps,
  ctInternProps,
  iiflInternProps,
];
