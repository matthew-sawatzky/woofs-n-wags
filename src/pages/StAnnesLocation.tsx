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
        (prevIndex - 1 + galleryImages.length) % galleryImages.length,
    );
  };
  return (
    <>
      <div
        className="bg-cover bg-center bg-no-repeat pb-50"
        style={{ backgroundImage: `url(${StAnnesImage})` }}
      >
        <Layout>
          <section className="flex items-center justify-between gap-8 p-6 mt-100">
            <div className="flex-1">
              <h1 className="text-5xl font-bold text-white drop-shadow-xl mb-4">
                St. Anne's Location
              </h1>
              <div className="flex gap-4">
                <button
                  className="text-white px-4 py-2 rounded-full flex items-center gap-2 hover:opacity-90 hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
                  style={{ backgroundColor: "#385662" }}
                  onClick={() =>
                    window.open(
                      "https://www.google.com/maps/place/491+St+Anne's+Rd,+Winnipeg,+MB,+Canada",
                      "_blank",
                    )
                  }
                >
                  491 St. Anne's Road
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
                  onClick={() => window.open("tel:204-255-9247", "_self")}
                >
                  204-255-9247
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
                  <div
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: "#385662" }}
                  ></div>
                  <p>
                    3/8 inch rubber flooring that is sealed - the safest floor
                    for all dogs, adding cushion for bones and joints and
                    traction during play
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: "#385662" }}
                  ></div>
                  <p>
                    Larger play equipment specifically designed for dogs to play
                    hide and seek and run over, under and through
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: "#385662" }}
                  ></div>
                  <p>
                    HRV system and air conditioning for the perfect temperature
                    for play
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: "#385662" }}
                  ></div>
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
                  <div
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: "#385662" }}
                  ></div>
                  <p>
                    3/8 inch rubber flooring that is sealed - adds cushion for
                    bones and joints, and traction during play. Little dogs need
                    traction just as much as big dogs...they play hard! :)
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: "#385662" }}
                  ></div>
                  <p>
                    Play equipment specifically designed for small dogs to play
                    hide and seek, and run over, under, and through!
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: "#385662" }}
                  ></div>
                  <p>
                    Independent furnace and air conditioner for the Waggler
                    level as their needs are much different than our Woofer dogs
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: "#385662" }}
                  ></div>
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
                alt={`St. Anne's Location ${currentImageIndex + 1}`}
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2613.4567890123456!2d-97.1234567!3d49.7890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52ea715ecf123456%3A0x1234567890abcdef!2s491%20St%20Anne's%20Rd%2C%20Winnipeg%2C%20MB%2C%20Canada!5e0!3m2!1sen!2sca!4v1234567890123!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Woofs n Wags St. Anne's Location"
              ></iframe>
            </div>
            <div className="text-center mt-4">
              <a
                href="https://www.google.com/maps/place/491+St+Anne's+Rd,+Winnipeg,+MB,+Canada"
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
export default StAnnesLocation;
