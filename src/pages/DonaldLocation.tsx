import { useState } from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import DonaldImage from "../assets/donald_img.png";

import Donald1 from "../assets/donald st images/bathing-room-1_orig.jpeg";
import Donald2 from "../assets/donald st images/bathing-room-2_orig.jpeg";
import Donald3 from "../assets/donald st images/drying-room-1_orig.jpeg";
import Donald4 from "../assets/donald st images/drying-room-2_orig.jpeg";
import Donald5 from "../assets/donald st images/finishing-room-1_orig.jpeg";
import Donald6 from "../assets/donald st images/finishing-room-2_orig.jpeg";
import Donald7 from "../assets/donald st images/image00001_orig.jpeg";
import Donald8 from "../assets/donald st images/image00002_orig.jpeg";
import Donald9 from "../assets/donald st images/image00003_orig.jpeg";
import Donald10 from "../assets/donald st images/image00004_orig.jpeg";
import Donald11 from "../assets/donald st images/image00005_orig.jpeg";
import Donald12 from "../assets/donald st images/image00009_orig.jpeg";
import Donald13 from "../assets/donald st images/waggler-1_orig.jpeg";
import Donald14 from "../assets/donald st images/waggler-2_orig.jpeg";
import Donald15 from "../assets/donald st images/waggler-4_orig.jpeg";
import Donald16 from "../assets/donald st images/waggler-5_orig.jpeg";
import Donald17 from "../assets/donald st images/waggler-8_orig.jpeg";
import Donald18 from "../assets/donald st images/wiggler-1_orig.jpeg";
import Donald19 from "../assets/donald st images/wiggler-3_orig.jpeg";
import Donald20 from "../assets/donald st images/wiggler-4_orig.jpeg";
import Donald21 from "../assets/donald st images/wiggler-5_orig.jpeg";
import Donald22 from "../assets/donald st images/woofs-2_orig.jpeg";
import Donald23 from "../assets/donald st images/woofs-2a_orig.jpeg";
import Donald24 from "../assets/donald st images/woofs-3-b_orig.jpeg";

import DonaldGalleryImg1 from "../assets/DonaldGallery/IMG_0112.JPG";
import DonaldGalleryImg2 from "../assets/DonaldGallery/IMG_0126.JPG";
import DonaldGalleryImg3 from "../assets/DonaldGallery/IMG_0178.JPG";
import DonaldGalleryImg4 from "../assets/DonaldGallery/IMG_0210.JPG";
import DonaldGalleryImg5 from "../assets/DonaldGallery/IMG_0246.JPG";
import DonaldGalleryImg6 from "../assets/DonaldGallery/IMG_0280.JPG";
import DonaldGalleryImg7 from "../assets/DonaldGallery/IMG_0412.JPG";
import DonaldGalleryImg9 from "../assets/DonaldGallery/IMG_9818.JPG";
import DonaldGalleryImg10 from "../assets/DonaldGallery/IMG_9896.JPG";
import DonaldGalleryImg11 from "../assets/DonaldGallery/IMG_9957.JPG";
import DonaldGalleryImg12 from "../assets/DonaldGallery/IMG_9961.JPG";
import DonaldGalleryImg13 from "../assets/DonaldGallery/Unknown copy 2.jpeg";
import DonaldGalleryImg14 from "../assets/DonaldGallery/Unknown copy.jpeg";
import DonaldGalleryImg15 from "../assets/DonaldGallery/Unknown-1.jpeg";
import DonaldGalleryImg16 from "../assets/DonaldGallery/Unknown.jpeg";

const galleryImages = [
  Donald1,
  Donald2,
  Donald3,
  Donald4,
  Donald5,
  Donald6,
  Donald7,
  Donald8,
  Donald9,
  Donald10,
  Donald11,
  Donald12,
  Donald13,
  Donald14,
  Donald15,
  Donald16,
  Donald17,
  Donald18,
  Donald19,
  Donald20,
  Donald21,
  Donald22,
  Donald23,
  Donald24,
];

const donaldFacilityDescriptions = [
  "Spaw Bathing Area. Our spaw offers 3 areas specific to the path of our grooms from bath to blow to finish. Custom built and designed for optimal quiet, privacy and flow from bath to finish.",
  "Spaw Bathing Area. Our first room in their dream Spaw.",
  "Spaw Drying Room. Room 2. A private room that is private and spacious. Custom designed to flow from bath to finish.",
  "Spaw Drying Room.",
  "Spaw Finishing Room. This large and spacious area is where the magic of the custom styles happen. This area is 2 rooms in one to enhance the spaw's quiet and private area's for our guests.",
  "Spaw Finishing Room. Designed as our guests last room before home time. Multi work stations to enhance the privacy for our visitors.",
  "Welcome. Our reception area is directly in the middle of 2 buildings. To the left is our Waggler, Wiggler, and Spaw area. to the right is the entrance to our Woofer area.",
  "Reception view to our Wigglers, Wagglers, and our Spaw.",
  "Reception to our large Woofer play space.",
  "Welcome To Our Woofers Play Area 1. Our Woofers area is designed for 55 pounds, and over, offers over 2000 square feet of Play Area. This large area has custom built play pieces. Your little one may jump over, rest or nibble on their friend from multi pieces and vantage points.",
  "Woofers Play Area 1. Another angle of this large play space. The door in the rear open to another play space. This versatile area may be fully opened or we may offer 3 separate play spaces.",
  "Woofer Play Area 1.",
  "Waggler Play Area. This is the zoom zoom door. This little pass through may be closed or open. Closed give the ability to divide this play space into 2 area's. Open it up and the kids love to run circles in the entirety of this large play space.",
  "Waggler Play Area. This play area is for our friends that are 20 pounds to 50 pounds. This area is over 1500 square feet and offers a nook area, zoom zoom door, custom built bench and more.",
  "Waggler Play Area. This custom made bench is a favourite area for our visitors to get a vantage point to friends, or simply perch on and cuddle with other fur friends.",
  "Waggler Play Area. This picture shows the little nook that the K9 kids like to go for a quiet moment or to play hide and seek:)",
  "Waggler Play Area.",
  "Wiggler Play Area. Unique throughout our play spaces each one has the ability to open up to one large play area or multi. This door closed creates 2 large play area's.",
  "Wiggler Play Area.",
  "Welcome to our Wiggler Play Area. This area is special for our little ones under 20 pounds. It offers over 1000 Square feet for them to play in.",
  "Wiggler Play Area.",
  "Woofer Play Area 2.",
  "Welcome to Woofers Play Area 2. This area offers additional customized play pieces that your K9 kids love! The pieces are multi level.",
  "Woofer Play Area 3. This picture shows one of the entry doors to this area. We may close this area up or completely open up so all 3 area's become one big play area.",
];

const donaldGalleryImages = [
  DonaldGalleryImg1,
  DonaldGalleryImg2,
  DonaldGalleryImg3,
  DonaldGalleryImg4,
  DonaldGalleryImg5,
  DonaldGalleryImg6,
  DonaldGalleryImg7,
  DonaldGalleryImg9,
  DonaldGalleryImg10,
  DonaldGalleryImg11,
  DonaldGalleryImg12,
  DonaldGalleryImg13,
  DonaldGalleryImg14,
  DonaldGalleryImg15,
  DonaldGalleryImg16,
];

const weekSchedule = [
  {
    day: "Monday",
    location: "Donald Location",
    playTime: "6:30am - 8:00pm",
    dropOff: "6:30am - 10:30am",
    napTime: "12:15pm - 2:15pm",
    notes: [],
  },
  {
    day: "Tuesday",
    location: "Donald Location",
    playTime: "6:30am - 8:00pm",
    dropOff: "6:30am - 10:30am",
    napTime: "12:15pm - 2:15pm",
    notes: [],
  },
  {
    day: "Wednesday",
    location: "Donald Location",
    playTime: "6:30am - 8:00pm",
    dropOff: "6:30am - 10:30am",
    napTime: "12:15pm - 2:15pm",
    notes: [],
  },
  {
    day: "Thursday",
    location: "Donald Location",
    playTime: "6:30am - 8:00pm",
    dropOff: "6:30am - 10:30am",
    napTime: "12:15pm - 2:15pm",
    notes: [],
  },
  {
    day: "Friday",
    location: "Donald Location",
    playTime: "6:30am - 8:00pm",
    dropOff: "6:30am - 10:30am",
    napTime: "12:15pm - 2:15pm",
    notes: [],
  },
  {
    day: "Saturday",
    location: "Donald Location",
    playTime: "7:00am - 6:00pm",
    dropOff: "7:00am - 10:30am",
    napTime: "12:15pm - 2:15pm",
    notes: ["Please call 204-505-4041 to join Saturday play day"],
  },
  {
    day: "Sunday",
    location: "Donald Location",
    playTime: "Call for details",
    dropOff: "Call to join",
    napTime: "N/A",
    notes: ["Please call 204-505-4041"],
  },
];

function DonaldLocation() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + galleryImages.length) % galleryImages.length,
    );
  };

  const nextGalleryImage = () => {
    setCurrentGalleryIndex(
      (prevIndex) => (prevIndex + 1) % donaldGalleryImages.length,
    );
  };

  const prevGalleryImage = () => {
    setCurrentGalleryIndex(
      (prevIndex) =>
        (prevIndex - 1 + donaldGalleryImages.length) %
        donaldGalleryImages.length,
    );
  };

  return (
    <>
      <div
        className="bg-cover bg-top bg-no-repeat pb-50"
        style={{ backgroundImage: `url(${DonaldImage})` }}
      >
        <Layout>
          <section className="flex items-center justify-between gap-8 p-6 mt-100">
            <div className="flex-1">
              <h1 className="text-5xl font-bold text-white drop-shadow-xl mb-4">
                Donald Location
              </h1>
              <div className="flex gap-4">
                <button
                  className="text-white px-4 py-2 rounded-full flex items-center gap-2 hover:opacity-90 hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
                  style={{ backgroundColor: "#385662" }}
                  onClick={() =>
                    window.open(
                      "https://www.google.com/maps/place/7+Donald+St,+Winnipeg,+MB,+Canada",
                      "_blank",
                    )
                  }
                >
                  7 Donald Street
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </button>
                <button
                  className="bg-white px-4 py-2 rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
                  style={{ color: "#385662" }}
                  onClick={() => window.open("tel:204-505-4041", "_self")}
                >
                  204-505-4041
                </button>
              </div>
            </div>
            <div className="flex-1"></div>
          </section>
        </Layout>
      </div>

      {/* Play Areas */}
      <section className="py-12 px-8" style={{ backgroundColor: "#385662" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">
            5000 square feet of customized dog play space.
          </h2>

          <div className="text-center mb-8 text-white">
            <p className="text-lg mb-4">
              Three area's of play designed for size, play style, age, and
              behaviour.
            </p>
            <p className="text-xl font-semibold">
              We have a play area for every personality!
              <br />
              Which one does your little one fit into?
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Waggler Play Space */}
            <div className="bg-white p-8 rounded-xl shadow-xl">
              <h3
                className="text-2xl font-bold mb-6 text-center"
                style={{ color: "#385662" }}
              >
                Waggler Play Space
              </h3>
              <p className="text-lg font-semibold mb-4 text-center">
                Over 1,500 square feet
              </p>
              <p className="text-lg font-semibold mb-4 text-center">
                For dogs weighing between 20 pounds to about 55 pounds
              </p>

              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: "#385662" }}
                  ></div>
                  <p>
                    Offers an open play area with zoom areas, or can be designed
                    to provide two feature play areas
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: "#385662" }}
                  ></div>
                  <p>3/8 inch rubber matting</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: "#385662" }}
                  ></div>
                  <p>
                    Share an air-conditioning and furnace system with our
                    Wiggler play group. These units separate from the Woofer
                    play area (our large in store area)
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: "#385662" }}
                  ></div>
                  <p>
                    Play pieces are built into the design of this area and also
                    extra play pieces
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: "#385662" }}
                  ></div>
                  <p>
                    A couple quiet nook area's for those wanting to have some
                    calm down or cuddles with a friend or two
                  </p>
                </div>
              </div>
            </div>

            {/* Wiggler Play Space */}
            <div className="bg-white p-8 rounded-xl shadow-xl">
              <h3
                className="text-2xl font-bold mb-6 text-center"
                style={{ color: "#385662" }}
              >
                Wiggler Play Space
              </h3>
              <p className="text-lg font-semibold mb-4 text-center">
                Over 1000 square feet
              </p>
              <p className="text-lg font-semibold mb-4 text-center">
                For dogs under 20 pounds
              </p>

              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: "#385662" }}
                  ></div>
                  <p>
                    The only Daycare in Winnipeg to offer a private play space
                    exclusive for the little ones such as chihuahua's,
                    pomeranians, papillons, yorkies and many more!
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: "#385662" }}
                  ></div>
                  <p>
                    Designed to open to one larger play space or 2 separated
                    area's for our little's to play
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: "#385662" }}
                  ></div>
                  <p>
                    Heat and air conditioning regulated with the Waggler level
                    to ensure the perfect temperature for these play spaces in
                    our building
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: "#385662" }}
                  ></div>
                  <p>3/8 inch rubber matting</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: "#385662" }}
                  ></div>
                  <p>
                    Special play pieces for them to play on, under and around
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: "#385662" }}
                  ></div>
                  <p>Toys and love each and every day :)</p>
                </div>
              </div>
            </div>

            {/* Woofer Play Space */}
            <div className="bg-white p-8 rounded-xl shadow-xl">
              <h3
                className="text-2xl font-bold mb-6 text-center"
                style={{ color: "#385662" }}
              >
                Woofer Play Space
              </h3>
              <p className="text-lg font-semibold mb-4 text-center">
                Over 2000 square feet
              </p>
              <p className="text-lg font-semibold mb-4 text-center">
                For dogs over 55 pounds
              </p>

              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: "#385662" }}
                  ></div>
                  <p>
                    Hosts 3 play spaces that may be used as one large play area
                    or 3 separate area's
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: "#385662" }}
                  ></div>
                  <p>3/8 inch rubber matting</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: "#385662" }}
                  ></div>
                  <p>
                    Dedicated furnace and ac unit for the Woofer area to ensure
                    comfortable temperature throughout seasons
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: "#385662" }}
                  ></div>
                  <p>
                    Built in play pieces for all our friends to play on and
                    round
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donald Gallery */}
      <section className="py-12 px-8">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-3xl font-bold text-center mb-8"
            style={{ color: "#385662" }}
          >
            Come Join the Fun!
          </h2>

          <div className="relative">
            {/* Main Image Display */}
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img
                src={donaldGalleryImages[currentGalleryIndex]}
                alt={`Donald Gallery ${currentGalleryIndex + 1}`}
                className="w-full h-[500px] object-cover"
              />

              {/* Previous button */}
              <button
                onClick={prevGalleryImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-75 transition-all duration-300 hover:scale-105"
              >
                ‹
              </button>

              {/* Next button */}
              <button
                onClick={nextGalleryImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-75 transition-all duration-300 hover:scale-105"
              >
                ›
              </button>

              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-lg">
                {currentGalleryIndex + 1} / {donaldGalleryImages.length}
              </div>
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex justify-center mt-6 space-x-2 overflow-x-auto">
              {donaldGalleryImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentGalleryIndex(index)}
                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    index === currentGalleryIndex
                      ? "border-blue-500 scale-110"
                      : "border-gray-300 hover:border-blue-300"
                  }`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 px-8 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl font-bold text-center mb-8"
            style={{ color: "#385662" }}
          >
            Pricing
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Single Dog Half Days */}
            <div className="bg-white p-6 rounded-xl shadow-xl">
              <h3
                className="text-xl font-bold mb-4 text-center"
                style={{ color: "#385662" }}
              >
                Single Dog Half Days (up to 5 hours)
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Half day</span>
                  <span className="font-semibold">$27.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Half day 10 day</span>
                  <span className="font-semibold">$225.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Half day monthly</span>
                  <span className="font-semibold">$410.00</span>
                </div>
              </div>
            </div>

            {/* Single Dog Full Day */}
            <div className="bg-white p-6 rounded-xl shadow-xl">
              <h3
                className="text-xl font-bold mb-4 text-center"
                style={{ color: "#385662" }}
              >
                All Day of Play - Single Dog
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Full Day</span>
                  <span className="font-semibold">$36.50</span>
                </div>
                <div className="flex justify-between">
                  <span>5 Day</span>
                  <span className="font-semibold">$175.00</span>
                </div>
                <div className="flex justify-between">
                  <span>10 Day</span>
                  <span className="font-semibold">$335.00</span>
                </div>
                <div className="flex justify-between">
                  <span>20 Day</span>
                  <span className="font-semibold">$625.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Monthly 5 day (21 days)</span>
                  <span className="font-semibold">$470.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Monthly 6 day (25 days)</span>
                  <span className="font-semibold">$500.00</span>
                </div>
              </div>
            </div>

            {/* Double Dog */}
            <div className="bg-white p-6 rounded-xl shadow-xl">
              <h3
                className="text-xl font-bold mb-4 text-center"
                style={{ color: "#385662" }}
              >
                All Day of Play - Double Dog
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Full Day</span>
                  <span className="font-semibold">$60.00</span>
                </div>
                <div className="flex justify-between">
                  <span>5 Day</span>
                  <span className="font-semibold">$270.00</span>
                </div>
                <div className="flex justify-between">
                  <span>10 Day</span>
                  <span className="font-semibold">$480.00</span>
                </div>
                <div className="flex justify-between">
                  <span>20 Day</span>
                  <span className="font-semibold">$900.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Monthly 5 day (21 days)</span>
                  <span className="font-semibold">$825.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Monthly 6 day (25 days)</span>
                  <span className="font-semibold">$960.00</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8 text-gray-800">
            <p className="text-lg font-semibold mb-2">
              **All packages are non-refundable and have expiration dates**
            </p>
            <div className="text-sm mb-4 max-w-4xl mx-auto">
              <p className="mb-2">
                <strong>Expiry Dates:</strong>
              </p>
              <p>• 5 day packages expire 7 weeks after purchase date</p>
              <p>• 10 day packages expire 14 weeks after purchase date</p>
              <p>• 20 day packages expire 25 weeks after purchase date</p>
              <p className="mt-2">
                <strong>Note:</strong> Monthly 5 day is based on 21 days in a
                month average. Monthly 6 day is based on 25 days including the
                Saturdays in a month average.
              </p>
              <p className="mt-2">
                **If not used within expiration date the days used will be
                calculated to single day use and any credit remaining will be
                placed on account for daycare use only.
              </p>
            </div>
            <p className="text-lg">*All prices are subject to GST</p>
          </div>
        </div>
      </section>

      {/* Hours of Operation */}
      <section className="py-12 px-8" style={{ backgroundColor: "#385662" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">
            Hours of Operation
          </h2>

          <div className="bg-white rounded-xl shadow-xl p-4 md:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">
              {weekSchedule.map((entry) => (
                <div
                  key={entry.day}
                  className="rounded-lg border border-slate-200 p-4 bg-slate-50"
                >
                  <h3
                    className="text-lg font-bold mb-2"
                    style={{ color: "#385662" }}
                  >
                    {entry.day}
                  </h3>
                  <p className="text-sm font-semibold text-gray-800 mb-2">
                    {entry.location}
                  </p>
                  <div className="space-y-1 text-sm text-gray-700">
                    <p>
                      <strong>Play:</strong> {entry.playTime}
                    </p>
                    <p>
                      <strong>Drop-off:</strong> {entry.dropOff}
                    </p>
                    <p>
                      <strong>Nap:</strong> {entry.napTime}
                    </p>
                    {entry.notes.map((note) => (
                      <p key={note} className="text-xs italic text-gray-600">
                        {note}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-sm italic text-gray-600 mt-4 text-center">
              Doors reopen at 2:15pm after nap time. During nap time we do not
              answer the door. Please call our office with any questions.
            </p>
          </div>

          <div className="text-center mt-8">
            <p
              className="text-lg font-semibold mb-2"
              style={{ color: "#385662" }}
            >
              * We are closed for all statutory holidays *
            </p>
            <p className="text-sm italic">
              *Please note that if we do not see a play friend within 6 months
              of last play date, a reassessment is required to come and play*
            </p>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-12 px-8 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-3xl font-bold text-center mb-8"
            style={{ color: "#385662" }}
          >
            View Our Location
          </h2>

          <div className="relative">
            {/* Main Image Display */}
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img
                src={galleryImages[currentImageIndex]}
                alt={`Donald Location ${currentImageIndex + 1}`}
                className="w-full h-[500px] object-cover"
              />

              {/* Previous button */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-75 transition-all duration-300 hover:scale-105"
              >
                ‹
              </button>

              {/* Next button */}
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-75 transition-all duration-300 hover:scale-105"
              >
                ›
              </button>

              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-lg">
                {currentImageIndex + 1} / {galleryImages.length}
              </div>
            </div>

            {/* Image Description */}
            <div className="mt-6 text-center bg-gray-50 p-4 rounded-lg">
              <p className="text-xl font-medium text-gray-800">
                {donaldFacilityDescriptions[currentImageIndex]}
              </p>
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex justify-center mt-6 space-x-2 overflow-x-auto">
              {galleryImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    index === currentImageIndex
                      ? "border-blue-500 scale-110"
                      : "border-gray-300 hover:border-blue-300"
                  }`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 px-8" style={{ backgroundColor: "#385662" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">
            Contact Information
          </h2>
          <div className="bg-white bg-opacity-95 rounded-xl p-8 shadow-xl mb-8">
            <div className="text-center space-y-3">
              <button
                className="text-xl font-semibold text-gray-800 cursor-pointer hover:underline"
                onClick={() =>
                  window.open(
                    "https://www.google.com/maps/place/7+Donald+St,+Winnipeg,+MB,+Canada",
                    "_blank",
                  )
                }
              >
                7 Donald Street
              </button>
              <br />
              <button
                className="text-xl font-semibold text-gray-800 cursor-pointer hover:underline"
                onClick={() => window.open("tel:204-505-4041", "_self")}
              >
                204-505-4041
              </button>
              <a
                href="mailto:info.donald@woofsnwags.ca"
                className="block text-lg text-gray-600 hover:underline"
              >
                info.donald@woofsnwags.ca
              </a>
              <p className="text-lg text-gray-600">PetExec Registration</p>
            </div>
          </div>

          {/* Google Map */}
          <div className="bg-white bg-opacity-95 rounded-xl p-8 shadow-xl">
            <h3
              className="text-xl font-bold text-center mb-4"
              style={{ color: "#385662" }}
            >
              Find Us Here
            </h3>
            <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2613.4567890123456!2d-97.1234567!3d49.7890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52ea715ecf123456%3A0x1234567890abcdef!2s7%20Donald%20St%2C%20Winnipeg%2C%20MB%2C%20Canada!5e0!3m2!1sen!2sca!4v1234567890123!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Woofs n Wags Donald Location"
              ></iframe>
            </div>
            <div className="text-center mt-4">
              <a
                href="https://www.google.com/maps/place/7+Donald+St,+Winnipeg,+MB,+Canada"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white hover:opacity-90 transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: "#385662" }}
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Vaccination Requirements */}
      <section className="py-12 px-8" style={{ backgroundColor: "#385662" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">
            Vaccination Requirements
          </h2>

          <div className="bg-white p-8 rounded-xl shadow-xl mb-6">
            <p className="text-lg mb-6">
              To keep our facility safe from potentially serious and deadly
              disease we require all our visitors to have up to date
              vaccinations and bordetella.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Puppies */}
              <div>
                <h3
                  className="text-xl font-bold mb-4"
                  style={{ color: "#385662" }}
                >
                  Puppies:
                </h3>
                <div className="space-y-3">
                  <p>
                    Puppies are invited to come to play in our daycare and
                    attend our K9 Classes as young as 12 weeks of age.
                  </p>
                  <p>
                    They require their first 2 sets of vaccinations and the
                    bordetella vaccine (to protect from the most serious strain
                    of kennel cough).
                  </p>
                </div>
              </div>

              {/* Adult Dogs */}
              <div>
                <h3
                  className="text-xl font-bold mb-4"
                  style={{ color: "#385662" }}
                >
                  Dogs over the age of 7 Months:
                </h3>
                <div className="space-y-3">
                  <p>
                    Dogs over the age of 7 months are required to have all up to
                    date vaccinations and bordetella vaccine
                  </p>
                  <p>
                    Our visitors must be spayed or neutered at 7 months of age.
                    Please contact us for more information.
                  </p>
                  <p>
                    Dogs in heat are asked not to attend classes during heat
                    cycle.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-white p-6 rounded-xl shadow-xl">
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: "#385662" }}
              >
                OUR FACILITY ACCEPTS TITER TESTS IN LIEU OF VACCINATIONS!
              </h3>
              <p>
                To learn more about our vaccination requirements please contact
                us to read about what each vaccination is protecting your dogs
                from.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
export default DonaldLocation;
