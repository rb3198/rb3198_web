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
import retailCreationBackend from "../../assets/work/retail/retail_creation_backend_flow.svg";
import retailUpdateBackend from "../../assets/work/retail/retail_update_backend_flow.svg";
import retailTestDriveFlow from "../../assets/work/retail/retail_test_drive_flow.svg";
import retailPotentialLeadsFlow from "../../assets/work/retail/retail_potential_leads.svg";
import retailPaymentsFlow from "../../assets/work/retail/retail_payment_flow.svg";
//#endregion
//#region Finance imports
import financeLanding from "../../assets/work/finance/finance_landing.png";
import financeForm from "../../assets/work/finance/finance_form.png";
import financeResults from "../../assets/work/finance/finance_results.png";
//#endregion

//#region Compare Cars

const compareCarsSummary = `<b>Compare Cars</b> is <a href="https://www.carwale.com/compare-cars" target="_blank">carwale.com's car comparison tool</a>, enabling buyers to make informed decisions when purchasing a car. It is an intuitive tool allowing users to compare up to 4 cars at once, saving their time. The tool simplifies the process of researching and comparing cars by presenting information in a structured and easy-to-navigate format. <br> Users can explore and contrast factors including specifications, like engine power, fuel efficiency, etc., features, and more, enabling a nuanced understanding of each vehicle's strengths and weaknesses. The page is SEO optimized, and is always the top result in any Indian car comparison search.`;

const compareCarsImages: GalleryImage[] = [
  {
    label: "Landing Page",
    alt: "Landing Page - Selecting Cars",
    src: compareCarsLanding,
  },
  {
    label: "Financing",
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
  liveLink: "https://www.carwale.com/compare-cars",
  images: compareCarsImages,
  tabularProjectData: compareCarsTabularData,
};

//#endregion

//#region Retail
const retailSummary = `
<b>Bikewale Retail</b> is <a href="https://www.bikewale.com/" target="_blank">bikewale.com</a>'s e-commerce arm, selling new motorcycles directly to the consumers. Prior to this, Bikewale's primary focus was selling customer leads to motorcycle dealers. This project is an effort to pivot the primary revenue model to derive revenue from selling motorcycles directly to the consumers. <br><br>
It simplifies the motorcycle shopping process, bringing the ease of online consumable shopping to two-wheelers and makes the experience complete with <b>test drives</b>. Customers can acquire their chosen motorcycles with a modest upfront payment, and are provided real-time updates regarding their motorcycle shipment, from documentation to delivery, making the experience hassle-free.`;

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
    label: "My Bookings",
    alt: "Page to see all of your bookings",
  },
];

// TODO: Add Test Drive Flow, My Booking Flow
const retailTechGallery: GalleryImage[] = [
  {
    label: "Frontend Flow",
    src: retailFlow,
    alt: "Frontend Flow",
  },
  {
    label: "Creation Flow",
    src: retailCreationBackend,
    alt: "Backend Creation Flow",
  },
  {
    label: "Update Flow",
    src: retailUpdateBackend,
    alt: "Backend Update Flow",
  },
  {
    label: "Payment Flow",
    src: retailPaymentsFlow,
    alt: "Payment Flow",
  },
  {
    label: "Potential Leads Flow",
    src: retailPotentialLeadsFlow,
    alt: "Potential Leads Flow",
  },
  {
    label: "Test Drive Flow",
    src: retailTestDriveFlow,
    alt: "Test Drive Flow",
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
    content: [
      {
        title: "Robust Core and Payment Flows",
        summary: `With the help of jobs, we created a robust flow for booking creation and updates. The creation of a booking involved
        the multiple discrete interactions with the database and other microservices, resulting in multiple points of failure.<br>
        In case of failures, the service rolled back the changes and created jobs configured with exponential backoff strategy to 
        attempt the creation again. This ensured that the booking was created and updated consistently. A bot was configured to inform the tech team 
        about jobs which hadn't run successfully even after 24 hours of attempts.`,
      },
      {
        title: "Handling Updates",
        summary: `Every booking had a particular status attached to it. This status helped the user and the back-office track the booking, from creation, to payment, to delivery.
        Since each update to this status was unique and involved side-effects we wanted to implement, we made use of the <i>Factory Pattern</i>, creating
        <i>Status Update Handlers</i> to handle these side effects on every status update.<br>
        Again, the updates ran behind a job, which was rolled back and requeued in case of failures, maintaining consistency in the data and ensuring successful updates.`,
      },
      {
        title: "The Payment Flow",
        summary: `
        We had created a microservice to abstract the interactions with a third-party Payment Gateway.<br>
        Transactions made through the Payment Gateway could result in "Success", "Failure", and "Pending" states of the payment. The "Pending" State meant that the bank needed more
        time to process the payment, resulting in a "Pending" Screen Shown to our customers.<br>
        A minor problem arose due to these, since the third-party gateway did not offer a callback API we could provide to update the transaction data on our end when this "Pending" state was resolved.<br>
        Again, we made use of jobs to tackle this:
        <br> - We created a job that ran every 4 hours. 
        <br> - It queried all the bookings in our database with "Pending" as their transaction states, and get their transaction IDs.
        <br> - It then sent a batched API request to the gateway, to query the updated state of given transactions.
        <br> - Finally, it updated the status on our side  through our microservice, if resolved. The <i>status update handler</i> for appropriate final states then ran the side effects.
        `,
      },
      {
        title: "The Potential Leads Flow",
        summary: `
        <p>Predominantly, Bikewale was a <b>Leads business</b> - Users of the site filled an interest form, and Bikewale forwarded these details to the most relevant automobile dealer to the user.
        <br>
        With this project, Bikewale shifted its focus to shipping motorcycles directly to the customer.<br>
        - However, since this was a new endeavor, we only had a select few motorcycles in our inventory to sell directly.
        Therefore, the Product team decided to keep both the flows simultaneously, to maintain revenue from both the operations.<br>
        This led to an interesting problem - some users only filled the interest form <i>even when the motorcycle was available for purchase directly</i>.<br>
        So, we came up with the <b>Potential Leads Flow</b>.<br>
        - Every lead generated got processed in the LXMS Microservice. Once this processing was complete, the service emitted an event to which our Booking service subscribed to.
        <br>- Our service then checked if a <u>Booking Campaign</u> existed on the same city, area as the original lead. It also checked if the user had already used our service using his mobile number.
        <br>- If a booking campaign did exist, and the user was not aware of this service, we sent a WhatsApp message to the user, informing them of the automobile being available for sale directly.
        <br><br>This flow led to a whopping increase in the number of bookings made through our platform, <b>increasing them by ~5x</b> within a month of go-live.
        </p>
        `,
      },
      {
        title: "Test Drives",
        // TODO
        summary: `
        The <i>Test Drive Service</i> was created to enable customers to test-ride the vehicle pre-purchase. It was integrated with the Booking Service with the help of a simple flag in booking campaigns.
        If the flag was true, a test drive was available in that area for the vehicle. A new microservice was spawned along with its own database to handle these test drives.
        `,
      },
    ],
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
  liveLink:
    "https://www.bikewale.com/yamaha-bikes/fascino/book-online/?v=12627&c=28845&d=12865&m=1350&ci=1&ai=63",
  images: retailProductGallery,
  tabularProjectData: retailTabularData,
};

//#endregion

//#region Finance
const financeSummary = `
<b>CarTrade Finance</b> is a common module for selling Automobile loans to users of <a href="www.carwale.com/car-loan/">carwale.com</a> and <a href="www.bikewale.com/bike-loan/">bikewale.com</a> that 
aims to make the cumbersome process of vehicle loan applications easy. Loan applications can be completed at your fingertips.<br>
Customers only need to fill a two-page form to apply for a loan to finance their vehicle. Banks can be onboarded for any one or both of the applications.<br>
Customers can offer to exchange vehicles owned by them when applying for a loan for a new one. Using OTP based sign-in, users can track their loan application(s), or hop back in to complete incomplete applications.<br>`;

const financeProductGallery: GalleryImage[] = [
  {
    label: "Landing Page",
    alt: "Landing Page",
    src: financeLanding,
  },
  {
    label: "Loan Form",
    alt: "Loan Form",
    src: financeForm,
  },
  {
    label: "Loan Offers",
    alt: "Loan Offers",
    src: financeResults,
  },
];

const financeTechGallery: GalleryImage[] = [];

const financeTabbedContent: { [key: string]: TabularProjectData } = {
  overview: {
    title: "Product Overview",
    imgConfig: financeProductGallery,
    content: [
      {
        summary: financeSummary,
        liveLink: `https://www.carwale.com/car-loan/`,
      },
      {
        title: "Features",
        summary: `
        <p>CarTrade Finance makes Vehicle Loan applications easier.</p>
        <ol style="list-style-position: inside; text-align: justify">
          <li style="margin-top: 12px;">
            <b style="font-family: Inter">A Simple Application Process</b>
            <ul style="padding-left: 40px; margin-top: 12px; list-style-position: outside;">
              <li>The customer selects a vehicle they wish to purchase.</li>
              <li>They then fill a two page form using their mobile number, personal details, and employment details to get the loan, at their convenience.
              Partially filled form details are saved for the next visit.</li>
              <li>A list of loan offers are presented right at their fingertips, instantly upon filling the form.</li>
              <li>Customers can offer their used cars in exchange while filling the application. The loan offers are adjusted accordingly.</li>
              <li>Loan offers are also emailed to the customers for their convenience.</li>
            </ul>
          </li>
          <li style="margin-top: 12px;">
            <b style="font-family: Inter">A Single Codebase for Three Applications</b>
            <ul style="padding-left: 40px; margin-top: 12px; list-style-position: outside;">
              <li>A single codebase is shared across three applications - <a href="https://www.carwale.com/car-loan">Carwale</a>, 
              <a href="https://www.bikewale.com/bike-loan">Bikewale</a>, and <a href="https://www.cartrade.com/car-loan">CarTrade</a>.</li>
              <li>Helps minimize code and maintain design consistency across applications.</li>
            </ul>
          </li>
          <li style="margin-top: 12px;">
            <b style="font-family: Inter">Easy Boarding - Deboarding of Banks</b>
            <ul style="padding-left: 40px; margin-top: 12px; list-style-position: outside;">
              <li><b>Over 20 banks are onboarded</b> across the three applications.</li>
              <li><b>A single panel</b> can be used by Product Owners to board or deboard a bank.</li>
              <li>Each bank may have their unique API to submit an application, all of which is taken care by the single panel and our application.</li>
            </ul>
          </li>
          <li style="margin-top: 12px;">
            <b style="font-family: Inter">Integrated across Pages</b>
            <ul style="padding-left: 40px; margin-top: 12px; list-style-position: outside;">
              <li>Many pages, including retail pages, listing pages, used car pages, etc. use this module to integrate vehicle financing without needing the user to navigate to the loan landing page.</li>
              <li>Mini-forms are maintained for ease of use.</li>
              <li><b>EMI Calculator</b> is built to let the customer instantly calculate their EMIs based on bank offers.</li>
            </ul>
          </li>
        </ol>
        `,
      },
    ],
  },
};

const financeTabularData: TabularProjectData[] =
  Object.values(financeTabbedContent);

export const financeCardProps: WorkCardProps = {
  title: "CarTrade Finance",
  subtitle: "Finance Arm of CarTrade",
  description: financeSummary,
  timeline: "November 2020 - September 2021",
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
  liveLink: "https://www.carwale.com/car-loan",
  images: financeProductGallery,
  tabularProjectData: financeTabularData,
};

//#endregion
