import { WorkCardProps } from "rb3198/components/WorkCard";
import {
  GalleryImage,
  TabularProjectData,
  WorkContent,
} from "rb3198/types/TabularProjectData";
//#region Compare Cars Imports
import compareCarsLanding from "../../assets/work/compare_cars/compare_landing.png";
import compareCarsFinance from "../../assets/work/compare_cars/compare_details_default.png";
import compareCarsSpecsFeatures from "../../assets/work/compare_cars/compare_details_specs_features.png";
import compareCarsColors from "../../assets/work/compare_cars/compare_details_colors.png";
import compareCarsReviews from "../../assets/work/compare_cars/compare_details_user_reviews.png";
import compareCarsImages360Img from "../../assets/work/compare_cars/compare_details_images_360.png";
import compareCarsEmi from "../../assets/work/compare_cars/compare_details_emi.png";
import compareCarsFlow from "../../assets/work/compare_cars/flow.svg";
//#endregion
//#region Retail imports
import retailListing from "../../assets/work/retail/retail_listing.png";
import retailForm from "../../assets/work/retail/retail_form.png";
import retailMyBookings from "../../assets/work/retail/retail_my_bookings.png";
import retailFlow from "../../assets/work/retail/retail_flow.svg";
//#endregion

//#region Compare Cars

const compareCarsSummary = `<p><b>Compare Cars</b> is <a href="https://www.carwale.com/compare-cars" target="_blank">carwale.com's car comparison tool</a>, enabling buyers to make informed decisions when purchasing a car. It is an intuitive tool allowing users to compare up to 4 cars at once, saving their time. The tool simplifies the process of researching and comparing cars by presenting information in a structured and easy-to-navigate format. <br> Users can explore and contrast factors including specifications, like engine power, fuel efficiency, etc., features, and more, enabling a nuanced understanding of each vehicle's strengths and weaknesses. The page is SEO optimized, and is always the top result in any Indian car comparison search.</p>`;

const compareCarsImages: GalleryImage[] = [
  {
    label: "Landing Page",
    alt: "Landing Page - Selecting Cars",
    src: compareCarsLanding,
  },
  {
    label: "Finance Options",
    alt: "Comparison Page - Finance Options",
    src: compareCarsFinance,
  },
  {
    label: "EMI Calculator",
    alt: "Comparison Page - EMI Calculator",
    src: compareCarsEmi,
  },
  {
    label: "Specs & Features",
    alt: "Comparison Page - Specs & Features",
    src: compareCarsSpecsFeatures,
  },
  {
    label: "Colors",
    alt: "Comparison Page - Colors",
    src: compareCarsColors,
  },
  {
    label: "Reviews",
    alt: "Comparison Page - Reviews",
    src: compareCarsReviews,
  },
  {
    label: "Images & 360° Views",
    alt: "Comparison Page - Images & 360° Views (Mobile Only)",
    src: compareCarsImages360Img,
  },
];

const compareCarsTabbedContent: { [key: string]: TabularProjectData } = {
  overview: {
    title: "Product Overview",
    imgConfig: compareCarsImages,
    content: [
      {
        summary: compareCarsSummary,
        liveLink: "https://www.carwale.com/compare-cars",
      },
      {
        title: "Features",
        summary: `<p>The tool offers a comprehensive set of features to help the user make an informed choice when purchasing a car.</p>
        <ol style="list-style-position: inside; text-align: justify">
          <li style="margin-top: 12px;">
            <b style="font-family: Inter">An Intuitive Interface</b>
              <ul style="padding-left: 40px; margin-top: 12px; list-style-position: outside;">
              <li>A <b>Scrollable Table on mobile</b> enables comparison of <b>upto 4 cars at once</b>.</li>
              <li>A user-friendly <b>Car Selection Popup</b> allows efficient searching of cars.</li>
              <li><b>Difference Highlighter</b> facilitates rapid recognition of spec differences between cars. </li>
              <li><b>Spec & Feature Search</b>, aids in finding the desired spec quickly.</li>
            </ul>
          </li>
          <li style="margin-top: 12px;">
            <b style="font-family: Inter">Comprehensive Comparisons</b>
            <ul style="padding-left: 40px; margin-top: 12px; list-style-position: outside;">
              <li>Over <b>100 parameters</b> displayed to compare cars with across <b>15 categories</b>, complete with parameter descriptions to enable complete understanding.</li>
              <li><b>Image comparisons of various parts</b> complete with <b>360° Views</b> for many cars.</li>
              <li><b>YouTube reviews</b> for ample number of cars.</li>
              <li>Features quick links to <b>Car Brochures</b>.</li>
              <li>All the available colors listed for each car being compared.</li>
            </ul>
          </li>
          <li style="margin-top: 12px;">
            <b style="font-family: Inter">Integrated Recommendation System</b>
            <ul style="padding-left: 40px; margin-top: 12px; list-style-position: outside;">
              <li>Product uses Carwale's recommendation engine to offer <b>similar car comparisons</b> based on the price range and car type.</li>
              <li>Linked with Carwale's Used Car business to offer available used substitutes of the models being compared.</li>
            </ul>
          </li>
          <li style="margin-top: 12px;">
            <b style="font-family: Inter">Price Comparisons & Financing Options</b>
            <ul style="padding-left: 40px; margin-top: 12px; list-style-position: outside;">
              <li><b>Transparent pricing information</b> for each car model.</li>
              <li><b>EMI Calculator</b> featured for each car being compared.</li>
              <li>Carwale's quick, <b>Three-Step Finance Form</b> linked for quick access to loans.</li>
            </ul>
          </li>
          <li style="margin-top: 12px;">
            <b style="font-family: Inter">User Reviews & Ratings</b>
            <ul style="padding-left: 40px; margin-top: 12px; list-style-position: outside;">
              <li>Real user reviews featured to get insights from actual car owners.</li>
              <li>Rate and contribute your own experiences to the community.</li>
            </ul>
          </li>
        </ol>`,
      },
    ],
  },
  implementation: {
    title: "Technical Details",
    imgConfig: [
      {
        src: compareCarsFlow,
        label: "Application Flow",
        alt: "Compare Cars Application Flow",
      },
    ],
    content: [
      {
        title: "Technical Features",
        summary: `<p>The tool has the following technical features:</p>
        <ol style="list-style-position: inside; text-align: justify">
          <li style="margin-top: 12px;">
            <b style="font-family: Inter">SEO Optimized</b>
            <ul style="padding-left: 40px; margin-top: 12px; list-style-position: outside;">
              <li>Always in <b>top two results</b> on Google on any Indian car comparison search.</li>
              <li><b>Programmatic SEO</b> helped generate about <b>14,000 comparison pages</b>, bringing in a traffic of about <b>500,000</b>.</li>
            </ul>
          </li>
          <li style="margin-top: 12px;">
            <b style="font-family: Inter">React-Rendered Front-end</b>
            <ul style="padding-left: 40px; margin-top: 12px; list-style-position: outside;">
              <li>Webpage is <b>partially rendered server-side</b>, enabling <b>quick First Contentful Paint</b> a big page.</li>
              <li>Supports <b>Dynamic chunk loading</b> on user scroll to decrease first load time.</li>
              <li>No Cumulative Layout Shift.</li>
            </ul>
          </li>
          <li style="margin-top: 12px;">
            <b style="font-family: Inter">Microservices-based Architecture</b>
            <ul style="padding-left: 40px; margin-top: 12px; list-style-position: outside;">
              <li>Web Server uses many microservices maintained by different teams to render the data.</li>
              <li>Four calls containing 20 parallel calls to API Gateway enable fast retrieval of required data.</li>
            </ul>
          </li>
          <li style="margin-top: 12px;">
            <b style="font-family: Inter">Responsive site Layout</b>
            <ul style="padding-left: 40px; margin-top: 12px; list-style-position: outside;">
              <li>Scrollable Table enables comparison of 4 cars at once on mobile and desktop.</li>
            </ul>
          </li>
        </ol>`,
      },
      {
        title: "Implementation",
        summary: `
        <p>The comparison tool was built using a <b>microservices-powered .NET C# based web server</b> and a <b>React-based Progressive Web App</b>.</p>
        <ol style="list-style-position: inside; text-align: justify">
          <li style="margin-top: 12px;">
            <b style="font-family: Inter">Microservices Architecture</b>
            <ul style="padding-left: 40px; margin-top: 12px; list-style-position: outside;">
              <li>The tech team had various teams managing multiple microservices and their databases.</li>
              <li>The microservices were powered by C# .NET, using <b>gRPC</b> for communication between them.</li>
              <li>An <b>API Gateway</b> sat in the middle, responsible for routing requests to appropriate destinations.</li>
              <li>The Web Server utilized this architecture to serve comparison pages, <b>making adapter calls</b> which <b>grouped calls to varied microservices</b>, significantly decreasing response time.</li>
            </ul>
          </li>
          <li style="margin-top: 12px;">
            <b style="font-family: Inter">React-Powered Front-end</b>
            <ul style="padding-left: 40px; margin-top: 12px; list-style-position: outside;">
              <li>Webpage is <b>partially rendered server-side</b>, enabling <b>quick First Contentful Paint</b> and enabling easy access to SEO crawlers.</li>
              <li>Implemented as a <b>Progressive Web App as part of a larger monorepo</b>.</li>
              <li>Rest of the page is rendered client side using webpack chunks.</li>
              <li>No Cumulative Layout Shift.</li>
              <li>User interactions potentially change query string, assisting partial server rendering on page reload. They may also call several REST APIs to fetch data.</li>
            </ul>
          </li>
        </ol>`,
      },
    ],
  },
};

const compareCarsTabularData: TabularProjectData[] = Object.values(
  compareCarsTabbedContent
);

export const compareCarsCardProps: WorkCardProps = {
  title: "Compare Cars",
  subtitle: "Car Comparison Tool for Carwale",
  description: compareCarsSummary,
  timeline: "Jan 2022 - Sep 2022",
  gitLinkConfig: {
    label: "Not Available, Private",
    link: undefined,
  },
  techStack: {
    frontend: ["React.js", "Sass"],
    backend: [".NET Framework", "gRPC Protocol"],
    dbs: ["MySQL"],
    tools: ["Git", "Jenkins", "VS Code"],
  },
  images: compareCarsImages,
  tabularProjectData: compareCarsTabularData,
};

//#endregion

//#region Retail
const retailSummary = `
<p>
<b>Bikewale Retail</b> is <a href="https://www.bikewale.com/" target="_blank">bikewale.com</a>'s e-commerce arm, selling new motorcycles directly to the consumers. Prior to this, Bikewale's primary focus was selling customer leads to motorcycle dealers. This project is an effort to pivot the primary revenue model to derive revenue from selling motorcycles directly to the consumers.<br><br>
It simplifies the motorcycle shopping process, bringing the ease of online consumable shopping to two-wheelers and makes the experience complete with <b>test drives</b>. Customers can acquire their chosen motorcycles with a modest upfront payment, and the remaining amount can be covered through deferred payments. Customers are provided real-time updates regarding their motorcycle shipment, from documentation to delivery, making the experience hassle-free.
</p>`;

// TODO: Add Test Drive Screens
const retailProductGallery: GalleryImage[] = [
  {
    src: retailListing,
    label: "Listing Page",
    alt: "Listing Page for Yamaha Fascino 125",
  },
  {
    src: retailForm,
    label: "Booking Form",
    alt: "Booking form for Yamaha Fascino 125",
  },
  {
    src: retailMyBookings,
    label: "My Bookings Page",
    alt: "Page to see all of your bookings",
  },
];

// TODO: Add Test Drive Flow, My Booking Flow
const retailTechGallery: GalleryImage[] = [
  {
    label: "Booking Flow",
    src: retailFlow,
  },
];

const retailTabbedContent: { [key: string]: TabularProjectData } = {
  overview: {
    title: "Product Overview",
    imgConfig: retailProductGallery,
    content: [
      {
        summary: retailSummary,
        liveLink: `https://www.bikewale.com/yamaha-bikes/fascino/book-online/?v=12627&c=28845&d=12865&m=1350&ci=1&ai=63`,
      },
      {
        title: "Features",
        summary: `
        <p>Bikewale Retail makes buying a motorcycle online easier.</p>
        <ol style="list-style-position: inside; text-align: justify">
          <li style="margin-top: 12px;">
            <b style="font-family: Inter">A Simple Buying Process</b>
            <ul style="padding-left: 40px; margin-top: 12px; list-style-position: outside;">
              <li>The customer only needs to enter their name and mobile number to complete a purchase.</li>
              <li>A <b>Single Screen</b> to choose color and variant, view offers, waiting period, price breakup and book the ride.</li>
              <li><b>Financing Options</b> integrated into the buying process.</li>
              <li>Real-time assistance integrated with the help of a third-party chat service.</li>
            </ul>
          </li>
          <li style="margin-top: 12px;">
            <b style="font-family: Inter">An Experience complete with Test Drives</b>
            <ul style="padding-left: 40px; margin-top: 12px; list-style-position: outside;">
              <li>Customers can test-drive selected models for free based on availability before making a decision.</li>
              <li>Test Drives can be scheduled online with the help of a simple form.</li>
            </ul>
          </li>
          <li style="margin-top: 12px;">
            <b style="font-family: Inter">Easy Management of Bookings</b>
            <ul style="padding-left: 40px; margin-top: 12px; list-style-position: outside;">
              <li>A <b>My Bookings page</b> acts as a single hub to manage all bookings</li>
              <li>The consumer can track their vehicle shipment, and cancel their reservation with a single click.</li>
              <li>Contains quick links to financing options for a reserved motorcycle.</li>
            </ul>
          </li>
        </ol>
        `,
      },
    ],
  },
  implementation: {
    title: "Technical Details",
    imgConfig: retailTechGallery,
    content: [],
  },
};

const retailTabularData: TabularProjectData[] =
  Object.values(retailTabbedContent);

export const retailCardProps: WorkCardProps = {
  title: "Bikewale Retail",
  subtitle: "Retail Arm of Bikewale",
  description: retailSummary,
  timeline: "October 2022 - July 2023",
  gitLinkConfig: {
    label: "Not Available, Private",
    link: undefined,
  },
  techStack: {
    frontend: ["React.js", "Sass"],
    backend: [".NET Framework", "gRPC Protocol"],
    dbs: ["MySQL"],
    tools: ["Git", "Jenkins", "VS Code"],
  },
  images: retailProductGallery,
  tabularProjectData: retailTabularData,
};

//#endregion
