import { ContentBoxProps } from "rb3198/components/Timeline";

const sde2Props: ContentBoxProps = {
  type: "left",
  title: "Software Development Engineer II",
  at: "CarTrade Tech, India",
  timeline: "October 2022 - July 2023",
  bullets: [
    "Spearheaded a team composed of new and experienced engineers to develop and deploy a vehicle booking system, aiding the new engineers’ skill development and smooth integration.",
    "Achieved go-live on a tight time-frame of 1 month. This helped take the project live in time for the festive season.",
    `Within 3 Quarters of go-live, by implementing potential lead WhatsApp flow contributing to 40% of all the
bookings, and improving SEO, achieved:<br>
&nbsp;&nbsp;&nbsp;&nbsp;∗ Increased page landings by <b>4x</b>, leads generated by <b>8x</b>.<br>
&nbsp;&nbsp;&nbsp;&nbsp;∗ Improved conversion rate from <b>9% to 17%</b>, total bookings by <b>5x</b>.`,
    "Being responsible for managing the team’s backlog, sprints and functioning, ensured project completion 3 days early on an average, and smooth sprint velocities.",
  ],
};

const sde1Props: ContentBoxProps = {
  type: "left",
  title: "Software Development Engineer I",
  at: "CarTrade Tech, India",
  timeline: "October 2021 - September 2022",
  bullets: [
    "<b>Conserved database calls by 40%</b> and prevented DB timeouts through a complete transformation of caching structure.",
    "Developed a WhatsApp module to enable instant and delayed notification sharing with customers.",
    "Built a car comparison tool - https://www.carwale.com/compare-cars, helping rake in about <b>10k leads monthly</b>.",
  ],
};

const sdeProps: ContentBoxProps = {
  type: "left",
  title: "Associate Software Development Engineer",
  at: "CarTrade Tech, India",
  timeline: "November 2020 - September 2021",
  bullets: [
    "Integrated CarTrade’s bank-interfacing APIs with carwale.com to enable users to check soft & hard loan eligibility for interested customers, creating a new faucet for generating leads - Approx 40k per month.",
    "Planned & constructed a new EMI Calculator page for carwale.com, which added <b>20k leads per month.</b> ",
    "Improved client side and microservice side unit test coverage, from <b>20% to 85%</b> ",
    "Effectively refactored and documented about 20k lines of code into smaller, more manageable React components.",
  ],
};

const ctInternProps: ContentBoxProps = {
  type: "left",
  title: "Associate Software Development Engineer",
  at: "CarTrade Tech, India",
  timeline: "November 2020 - September 2021",
  bullets: [
    "Developed an analytical tool for inspecting Webpack chunks, helping the company to optimize dependencies of carwale.com.",
  ],
};

const iiflInternProps: ContentBoxProps = {
  type: "left",
  title: "Software Development Intern",
  at: "IIFL Securities, India",
  timeline: "December 2018 - January 2019",
  bullets: [
    "Worked on designing & implementing an API to be used for Single Sign-On (SSO) by IIFL applications, using Windows Communication Foundation (WCF) framework based on VB.net.",
    "Design of this System was based on Kerberos architecture.",
  ],
};

export const timelineContent: ContentBoxProps[] = [
  sde2Props,
  sde1Props,
  sdeProps,
  ctInternProps,
  iiflInternProps,
];
