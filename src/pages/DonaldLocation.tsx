import { useState } from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import DonaldImage from "../assets/donald.JPG";

// Import Donald Street gallery images
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
import Donald24 from "../assets/donald st images/woofs-3_orig.jpeg";
import Donald25 from "../assets/donald st images/woofs-3-b_orig.jpeg";
import Donald26 from "../assets/donald st images/woofs-3a_orig.jpeg";

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
  Donald25,
  Donald26,
];

function DonaldLocation() {
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
        style={{ backgroundImage: `url(${DonaldImage})` }}
      >
        <Layout>
          <section className="py-20 px-6">
            <h1 className="text-5xl font-bold text-white drop-shadow-xl mb-8 text-center">
              Donald Location
            </h1>

            {/* Contact Information */}
            <div className="bg-white bg-opacity-95 rounded-xl p-8 mb-8 shadow-xl">
              <h2
                className="text-3xl font-bold text-gray-800 mb-6 text-center"
                style={{ color: "#385662" }}
              >
                Contact Information - NEW LOCATION
              </h2>
              <div className="text-center space-y-3">
                <p className="text-xl font-semibold text-gray-800">
                  7 Donald Street
                </p>
                <p className="text-xl font-semibold text-gray-800">
                  204-505-4041
                </p>
                <p className="text-lg text-gray-600">
                  info.donald@woofsnwags.ca
                </p>
                <p className="text-lg text-gray-600">PetExec Registration</p>
              </div>
            </div>
          </section>
        </Layout>
      </div>

      {/* Play Areas */}
      <section className="py-12 px-8" style={{ backgroundColor: "#385662" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">
            Play Areas - Over 6000 Square Feet
          </h2>

          <div className="text-center mb-8 text-white">
            <p className="text-lg mb-4">
              Over 6000 square feet of customized dog play space, customized Spa
              area and a Sleep area.
            </p>
            <p className="text-lg mb-4">
              Three areas of play designed for size, play style, age, and
              behaviour.
            </p>
            <p className="text-xl font-semibold">
              We have a play area for every personality! Which one does your
              little one fit into?
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Woofer Play Space */}
            <div className="bg-white p-8 rounded-xl shadow-xl">
              <h3
                className="text-2xl font-bold mb-6 text-center"
                style={{ color: "#385662" }}
              >
                Woofer Play Space
              </h3>
              <p className="text-lg font-semibold mb-4 text-center">
                For dogs over 55 pounds
              </p>
              <p className="text-lg font-semibold mb-4 text-center">
                Over 2000 Square Feet
              </p>

              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>
                    This area hosts 3 play spaces that may be used as one large
                    play area or 3 separate areas
                  </p>
                </div>
              </div>
            </div>

            {/* Waggler Play Space */}
            <div className="bg-white p-8 rounded-xl shadow-xl">
              <h3
                className="text-2xl font-bold mb-6 text-center"
                style={{ color: "#385662" }}
              >
                Waggler Play Space
              </h3>
              <p className="text-lg font-semibold mb-4 text-center">
                For dogs 20-55 pounds
              </p>
              <p className="text-lg font-semibold mb-4 text-center">
                Over 1500 Square Feet
              </p>

              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Offers an open play area with zoom areas</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Can be configured to offer 2 feature play areas</p>
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
                For dogs under 20 pounds
              </p>
              <p className="text-lg font-semibold mb-4 text-center">
                Over 1000 Square Feet
              </p>

              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>
                    Perfect for toy poodles, chihuahuas, pomeranians, papillons,
                    and many more! :)
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>
                    Can open to one larger play space or 2 separated areas for
                    our little ones to play
                  </p>
                </div>
              </div>
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
      <section className="py-12 px-8" style={{ backgroundColor: "#385662" }}>
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
                  <strong>Monday - Friday:</strong> 6:30am - 8:00pm
                </p>
                <p>
                  <strong>Drop off time:</strong> 6:30am - 10:30am
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
                  <strong>Nap Time:</strong> 12:15pm - 2:15pm
                </p>
                <p className="text-sm">Our doors do not open until 2:15pm</p>
                <p className="text-sm italic">
                  *During this time we do not answer our door. Please call our
                  office with any questions.
                </p>
              </div>
            </div>

            {/* Saturday */}
            <div className="bg-white p-6 rounded-xl shadow-xl md:col-span-2">
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: "#385662" }}
              >
                SATURDAYS
              </h3>
              <div className="space-y-2">
                <p>
                  <strong>Hours:</strong> 7:00am - 6:00pm
                </p>
                <p>
                  <strong>Drop off time:</strong> 7:00am - 10:30am
                </p>
                <p>
                  <strong>Nap Time:</strong> 12:15pm - 2:15pm (doors do not open
                  until 2:15pm)
                </p>
                <p>Please call to join a Saturday play day:</p>
                <p>
                  <strong>204-255-9247</strong> or <strong>204-505-4041</strong>
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
export default DonaldLocation;
