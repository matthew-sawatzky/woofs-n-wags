import { useState } from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import StAnnesImage from "../assets/stannes.jpeg";

import StAnnes1 from "../assets/st annes images/bathing-rooms1_orig.jpg";
import StAnnes2 from "../assets/st annes images/resized-r_orig.jpg";
import StAnnes3 from "../assets/st annes images/st-annes-bathing-room-2_orig.jpg";
import StAnnes4 from "../assets/st annes images/st-annes-ila_orig.jpg";
import StAnnes5 from "../assets/st annes images/st-annes-nap-time_orig.jpg";
import StAnnes6 from "../assets/st annes images/st-annes-reception-1_orig.jpg";
import StAnnes7 from "../assets/st annes images/st-annes-wag-yard_orig.jpg";
import StAnnes8 from "../assets/st annes images/st-annes-waggler-room_orig.jpg";
import StAnnes9 from "../assets/st annes images/st-annes-waggler-rroomm_orig.jpg";
import StAnnes10 from "../assets/st annes images/st-annes-wagglers_orig.jpg";
import StAnnes11 from "../assets/st annes images/st-annes-wagglerss_orig.jpg";
import StAnnes12 from "../assets/st annes images/st-annes-woof-yard_orig.jpg";
import StAnnes13 from "../assets/st annes images/st-annes-woofer-room_orig.jpg";

const galleryImages = [
  StAnnes1,
  StAnnes2,
  StAnnes3,
  StAnnes4,
  StAnnes5,
  StAnnes6,
  StAnnes7,
  StAnnes8,
  StAnnes9,
  StAnnes10,
  StAnnes11,
  StAnnes12,
  StAnnes13,
];

function StAnnesLocation() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + galleryImages.length) % galleryImages.length
    );
  };
  return (
    <>
      <div
        className="bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${StAnnesImage})` }}
      >
        <Layout>
          <section className="py-20 px-6">
            <h1 className="text-5xl font-bold text-white drop-shadow-xl mb-8 text-center">
              St. Anne's Location
            </h1>

            {/* Contact Information */}
            <div className="bg-white bg-opacity-95 rounded-xl p-8 mb-8 shadow-xl">
              <h2
                className="text-3xl font-bold text-gray-800 mb-6 text-center"
                style={{ color: "#385662" }}
              >
                Contact Information
              </h2>
              <div className="text-center space-y-3">
                <p className="text-xl font-semibold text-gray-800">
                  491 St. Anne's Road
                </p>
                <p className="text-lg text-gray-600">
                  (Just north of Bishop Grandin)
                </p>
                <p className="text-xl font-semibold text-gray-800">
                  204-255-9247
                </p>
                <p className="text-lg text-gray-600">info@woofsnwags.ca</p>
                <p className="text-lg text-gray-600">PetExec Registration</p>
              </div>
            </div>
          </section>
        </Layout>
      </div>

      {/* Pricing Section */}
      <section className="py-12 px-8" style={{ backgroundColor: "#385662" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">
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
                  <span className="font-semibold">$24.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Half day 10 day</span>
                  <span className="font-semibold">$210.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Half day monthly</span>
                  <span className="font-semibold">$380.00</span>
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
                  <span className="font-semibold">$35.00</span>
                </div>
                <div className="flex justify-between">
                  <span>5 Day</span>
                  <span className="font-semibold">$159.10</span>
                </div>
                <div className="flex justify-between">
                  <span>10 Day</span>
                  <span className="font-semibold">$318.20</span>
                </div>
                <div className="flex justify-between">
                  <span>20 Day</span>
                  <span className="font-semibold">$605.80</span>
                </div>
                <div className="flex justify-between">
                  <span>Monthly</span>
                  <span className="font-semibold">$450.00</span>
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
                  <span className="font-semibold">$55.00</span>
                </div>
                <div className="flex justify-between">
                  <span>5 Day</span>
                  <span className="font-semibold">$240.00</span>
                </div>
                <div className="flex justify-between">
                  <span>10 Day</span>
                  <span className="font-semibold">$454.60</span>
                </div>
                <div className="flex justify-between">
                  <span>20 Day</span>
                  <span className="font-semibold">$809.60</span>
                </div>
                <div className="flex justify-between">
                  <span>Monthly</span>
                  <span className="font-semibold">$750.00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Triple Dog */}
          <div className="mt-6 max-w-md mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-xl">
              <h3
                className="text-xl font-bold mb-4 text-center"
                style={{ color: "#385662" }}
              >
                All Day of Play - Triple Dog
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Full Day</span>
                  <span className="font-semibold">$75.00</span>
                </div>
                <div className="flex justify-between">
                  <span>10 Day</span>
                  <span className="font-semibold">$591.00</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8 text-white">
            <p className="text-lg font-semibold mb-2">
              **All packages are non-refundable and have expiration dates**
            </p>
            <p className="text-lg">*All prices are subject to GST</p>
          </div>
        </div>
      </section>

      {/* Hours of Operation */}
      <section className="py-12 px-8 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-3xl font-bold text-center mb-8"
            style={{ color: "#385662" }}
          >
            Hours of Operation
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Weekday Hours */}
            <div className="bg-white p-6 rounded-xl shadow-xl">
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: "#385662" }}
              >
                OUR PLAY TIME
              </h3>
              <div className="space-y-2">
                <p>
                  <strong>Monday - Friday:</strong> 6:30am - 7:00pm
                </p>
                <p>
                  <strong>Drop off time:</strong> 6:30 - 10:00am
                </p>
              </div>
            </div>

            {/* Nap Time */}
            <div className="bg-white p-6 rounded-xl shadow-xl">
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: "#385662" }}
              >
                DAILY NAP TIME
              </h3>
              <div className="space-y-2">
                <p>
                  <strong>Nap Time:</strong> 12:30 - 2:00pm
                </p>
                <p className="text-sm">Our doors do not open until 2:15pm</p>
                <p className="text-sm italic">
                  *During this time we do not answer our door. Please call our
                  office with any questions.
                </p>
              </div>
            </div>

            {/* Saturday */}
            <div className="bg-white p-6 rounded-xl shadow-xl">
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: "#385662" }}
              >
                SATURDAYS
              </h3>
              <div className="space-y-2">
                <p>Play time is located at our Donald Location</p>
                <p>
                  <strong>Hours:</strong> 7:00am - 6:00pm
                </p>
                <p>
                  Please call to join: <strong>204-505-4041</strong>
                </p>
              </div>
            </div>

            {/* Sunday */}
            <div className="bg-white p-6 rounded-xl shadow-xl">
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: "#385662" }}
              >
                SUNDAY FUNTIME
              </h3>
              <div className="space-y-2">
                <p>Sunday Playtime is at our Donald Location</p>
                <p>
                  Call for details: <strong>204-505-4041</strong>
                </p>
              </div>
            </div>
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

      {/* Play Areas */}
      <section className="py-12 px-8" style={{ backgroundColor: "#385662" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">
            Our 2 Play Areas - 5000 Square Feet Total
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Woofer Area */}
            <div className="bg-white p-8 rounded-xl shadow-xl">
              <h3
                className="text-2xl font-bold mb-6 text-center"
                style={{ color: "#385662" }}
              >
                Woofer Area
              </h3>
              <p className="text-lg font-semibold mb-4 text-center">
                For larger dogs (30+ pounds)
              </p>
              <p className="text-lg font-semibold mb-4 text-center">
                2000 Square Feet
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>
                    3/8 inch rubber flooring that is sealed - the safest floor
                    for all dogs, adding cushion for bones and joints and
                    traction during play
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>
                    Larger play equipment specifically designed for dogs to play
                    hide and seek and run over, under and through
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>
                    HRV system and air conditioning for the perfect temperature
                    for play
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>
                    Central vac system to minimize odor and contagions in our
                    facility
                  </p>
                </div>
              </div>
            </div>

            {/* Waggler Area */}
            <div className="bg-white p-8 rounded-xl shadow-xl">
              <h3
                className="text-2xl font-bold mb-6 text-center"
                style={{ color: "#385662" }}
              >
                Waggler Area
              </h3>
              <p className="text-lg font-semibold mb-4 text-center">
                Winnipeg's largest small dog play space
              </p>
              <p className="text-lg font-semibold mb-4 text-center">
                For dogs under 30 pounds - 2000 Square Feet
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>
                    3/8 inch rubber flooring that is sealed - adds cushion for
                    bones and joints, and traction during play. Little dogs need
                    traction just as much as big dogs...they play hard! :)
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>
                    Play equipment specifically designed for small dogs to play
                    hide and seek, and run over, under, and through!
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>
                    Independent furnace and air conditioner for the Waggler
                    level as their needs are much different than our Woofer dogs
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>
                    Central vac system to minimize odor and contagions in our
                    facility
                  </p>
                </div>
              </div>
            </div>
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
            Photo Gallery
          </h2>

          <div className="relative">
            {/* Main Image Display */}
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img
                src={galleryImages[currentImageIndex]}
                alt={`St. Anne's Location ${currentImageIndex + 1}`}
                className="w-full h-96 object-cover"
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

      <Footer />
    </>
  );
}
export default StAnnesLocation;
