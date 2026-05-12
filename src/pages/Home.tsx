import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { client } from "../sanityClient";
import Footer from "../components/Footer";
import BackgroundImage from "../assets/dogs_playing.jpeg";
import K9EduLogo from "../assets/woof_edu.png";
import GroomingLogo from "../assets/woof_tub.png";
import DogTwins from "../assets/dog_twins.jpeg";
import WoofsLogo from "../assets/woof_sleepover.png";
import LocationLogo from "../assets/woof_location.png";
import BarksFromTheGuildPdf from "../assets/barks_from_the_guild_-_choosing_the_right_environment.pdf";

declare global {
  interface Window {
    renderApp?: (options: any) => void;
  }
}

function Home() {
  const [textSection, setTextSection] = useState("");
  const navigate = useNavigate();

  const handleServiceClick = (servicePath: string) => {
    navigate(servicePath);
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    client
      .fetch(`*[_type == "page" && slug.current == "home"][0]{textSection}`)
      .then((data) => {
        console.log("Sanity response:", data);
        setTextSection(data?.textSection || "");
      })
      .catch((err) => console.error("Sanity fetch error:", err));

    const preconnectGoogle = document.createElement("link");
    preconnectGoogle.rel = "preconnect";
    preconnectGoogle.href = "https://fonts.googleapis.com";
    document.head.appendChild(preconnectGoogle);

    const preconnectGstatic = document.createElement("link");
    preconnectGstatic.rel = "preconnect";
    preconnectGstatic.href = "https://fonts.gstatic.com";
    preconnectGstatic.crossOrigin = "anonymous";
    document.head.appendChild(preconnectGstatic);

    const fontsLink = document.createElement("link");
    fontsLink.href =
      "https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Comfortaa:wght@300..700&family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Lexend:wght@100..900&family=Lobster&family=Lora:ital,wght@0,400..700;1,400..700&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Oswald:wght@200..700&family=Pacifico&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Roboto+Serif:ital,opsz,wght@0,8..144,100..900;1,8..144,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Spectral:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap";
    fontsLink.rel = "stylesheet";
    document.head.appendChild(fontsLink);
  }, []);

  return (
    <>
      <div
        className="bg-cover bg-center bg-no-repeat pb-50"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        <Layout>
          <section
            id="hero"
            className="flex items-center justify-between gap-8 p-6 mt-100"
          >
            <div className="flex-1">
              <h1
                className="text-5xl font-bold text-white mb-6"
                style={{
                  textShadow:
                    "-1px -1px 0 #385662, 1px -1px 0 #385662, -1px 1px 0 #385662, 1px 1px 0 #385662",
                }}
              >
                We Know What Dogs Like
              </h1>

              <div className="flex gap-4">
                <button
                  onClick={() => {
                    const element = document.getElementById("meet-n-greet");
                    element?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                  className="text-white px-4 py-2 rounded-full flex items-center gap-2 hover:opacity-90 hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
                  style={{ backgroundColor: "#385662" }}
                >
                  It all starts with our Meet 'n Greet
                </button>
                <button
                  className="bg-white px-4 py-2 rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
                  style={{ color: "#385662" }}
                  onClick={scrollToServices}
                >
                  View Our Services
                </button>
              </div>
            </div>
            <div className="flex-1"></div>
          </section>
        </Layout>
      </div>
      <section
        id="services"
        className="py-12 px-8 shadow-lg"
        style={{ backgroundColor: "#385662" }}
      >
        <h3 className="text-3xl font-bold text-center mb-8 text-white">
          Our Services
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 text-center border border-gray-100 hover:scale-105">
            <div className="w-36 h-36 mx-auto mb-6 flex items-center justify-center p-2">
              <img
                src={LocationLogo}
                alt="Dog Daycare"
                className="w-full h-full object-contain"
              />
            </div>
            <h4 className="text-xl font-bold mb-3 text-gray-800">
              Dog Daycare
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Safe and fun environment for your furry friends to play and
              socialize
            </p>
          </div>
          <div
            className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 text-center border border-gray-100 hover:scale-105 cursor-pointer"
            onClick={() => handleServiceClick("/grooming")}
          >
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden flex items-center justify-center">
              <img
                src={GroomingLogo}
                alt="Grooming"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-xl font-bold mb-3 text-gray-800">Grooming</h4>
            <p className="text-gray-600 leading-relaxed">
              Professional grooming services for all breeds with expert care
            </p>
          </div>
          <div
            className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 text-center border border-gray-100 hover:scale-105 cursor-pointer"
            onClick={() => handleServiceClick("/k9-education")}
          >
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden flex items-center justify-center">
              <img
                src={K9EduLogo}
                alt="K9 Education"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-xl font-bold mb-3 text-gray-800">
              K9 Education
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Training and education programs for well-behaved, happy pets
            </p>
          </div>
          <div
            className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 text-center border border-gray-100 hover:scale-105 cursor-pointer"
            onClick={() => handleServiceClick("/sleepover-service")}
          >
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden flex items-center justify-center">
              <img
                src={WoofsLogo}
                alt="Sleep Over Service"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-xl font-bold mb-3 text-gray-800">
              Sleep Over Service
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Overnight care and comfort when you're away from home
            </p>
          </div>
        </div>
      </section>
      <div className="bg-white">
        <section id="reviews" className="p-6"></section>

        <section className="py-16 px-6" style={{ backgroundColor: "#f8f9fa" }}>
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <h2
                    className="text-4xl font-bold mb-6"
                    style={{ color: "#385662" }}
                  >
                    Our Story
                  </h2>
                  <div className="prose prose-lg text-gray-700">
                    <p className="text-lg leading-relaxed">{textSection}</p>
                    <a
                      href={BarksFromTheGuildPdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 font-semibold underline"
                      style={{ color: "#385662" }}
                    >
                      Barks from the Guild (PDF)
                    </a>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
                  <div className="relative">
                    <img
                      src={DogTwins}
                      alt="Happy dogs at Woofs N Wags"
                      className="w-full max-w-md h-auto rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-12 px-6" style={{ backgroundColor: "#385662" }}>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-8 text-white">
              Visit Our Locations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* St. Anne's Location */}
              <div
                className="bg-white bg-opacity-95 rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() => handleServiceClick("/st-annes-location")}
              >
                <h4
                  className="text-xl font-bold text-center mb-4"
                  style={{ color: "#385662" }}
                >
                  St. Anne's Location
                </h4>
                <div className="text-center space-y-2">
                  <a
                    href="https://maps.google.com/?q=491+St.+Anne's+Road,+Winnipeg,+MB"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-gray-800 hover:underline block"
                    style={{ color: "#385662" }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    491 St. Anne's Road
                  </a>
                  <a
                    href="tel:+12042559247"
                    className="text-lg font-semibold text-gray-800 hover:underline block"
                    style={{ color: "#385662" }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    204-255-9247
                  </a>
                  <a
                    href="mailto:info@woofsnwags.ca"
                    className="text-sm text-gray-600 hover:underline block"
                    style={{ color: "#385662" }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    info@woofsnwags.ca
                  </a>
                </div>
              </div>

              {/* Donald Location */}
              <div
                className="bg-white bg-opacity-95 rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() => handleServiceClick("/donald-location")}
              >
                <h4
                  className="text-xl font-bold text-center mb-4"
                  style={{ color: "#385662" }}
                >
                  Donald Location
                </h4>
                <div className="text-center space-y-2">
                  <a
                    href="https://maps.google.com/?q=7+Donald+Street,+Winnipeg,+MB"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-gray-800 hover:underline block"
                    style={{ color: "#385662" }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    7 Donald Street
                  </a>
                  <a
                    href="tel:+12045054041"
                    className="text-lg font-semibold text-gray-800 hover:underline block"
                    style={{ color: "#385662" }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    204-505-4041
                  </a>
                  <a
                    href="mailto:info.donald@woofsnwags.ca"
                    className="text-sm text-gray-600 hover:underline block"
                    style={{ color: "#385662" }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    info.donald@woofsnwags.ca
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Meet 'n Greet Section */}
        <section
          id="meet-n-greet"
          className="py-12 px-6"
          style={{ backgroundColor: "#ffffff" }}
        >
          <div className="max-w-6xl mx-auto">
            <h3
              className="text-3xl font-bold text-center mb-8"
              style={{ color: "#385662" }}
            >
              Meet 'n Greet
            </h3>
            <p className="text-center text-gray-800 text-lg mb-8">
              We have two ways for your K9 kid(s) to join the play!
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Formal Meet 'n Greet */}
              <div
                className="p-8 rounded-xl shadow-xl"
                style={{ backgroundColor: "#385662" }}
              >
                <h4 className="text-2xl font-bold mb-4 text-white">
                  1. Our Formal Meet 'n Greet
                </h4>
                <p className="text-white leading-relaxed mb-4">
                  This invites the family to book an appointment during the day,
                  meet a couple new friends. If the meeting goes well your
                  little one is invited to return and come to play on another
                  day.
                </p>
                <p className="text-white leading-relaxed">
                  This is ideal if you want to have a preliminary introduction
                  to our facility and ensure your little one is comfortable with
                  some new friends before their first day.
                </p>
              </div>

              {/* Fast Track To Play */}
              <div
                className="p-8 rounded-xl shadow-xl"
                style={{ backgroundColor: "#385662" }}
              >
                <h4 className="text-2xl font-bold mb-4 text-white">
                  2. Fast Track To Play
                </h4>
                <p className="text-white leading-relaxed mb-4 font-semibold">
                  No meet 'n greet is required.
                </p>
                <p className="text-white leading-relaxed mb-4">
                  These little ones come right in for a day of play. The Fast
                  Track is ideal for puppies 7 months and younger who are eager
                  to meet and play with other fur friends.
                </p>
                <p className="text-white leading-relaxed mb-4">
                  Your little one is invited to arrive (on your day of choice)
                  at 7 a.m. At this time, we ask that the completed online
                  registration forms and vaccination are brought in.
                </p>
              </div>
            </div>

            <div className="text-center mb-8">
              <p className="text-gray-800 text-lg font-semibold">
                Please call or email us for details.
              </p>
            </div>

            {/* Safety First */}
            <div
              className="p-6 rounded-xl shadow-xl"
              style={{ backgroundColor: "#f5f5f5" }}
            >
              <h4
                className="text-xl font-bold mb-4 text-center"
                style={{ color: "#385662" }}
              >
                SAFETY FIRST
              </h4>
              <p className="text-gray-800 text-sm mb-4 text-center font-semibold">
                Some conditions do apply for all our visitors:
              </p>

              <div className="space-y-4">
                {/* Vaccinations */}
                <div>
                  <h5
                    className="text-base font-bold mb-2"
                    style={{ color: "#385662" }}
                  >
                    VACCINATIONS:
                  </h5>
                  <div className="space-y-1 text-gray-700 text-sm">
                    <p>
                      <strong>*</strong>Both our formal and fast track require
                      up-to-date vaccinations (including bordetella/kennel
                      cough).
                    </p>
                    <p>
                      Puppies only require the first two sets of vaccinations
                      and the first bordetella. Puppies do not require rabies
                      until your veterinarian advises, and this is often when
                      they may be 6-8 months of age.
                    </p>
                    <p>
                      <strong>**</strong>We accept and encourage titer testing.
                      If you question vaccinations or are concerned about
                      over-vaccinating your dogs, consider speaking with your
                      veterinarian about titer testing.
                    </p>
                  </div>
                </div>

                {/* Spaying/Neutering */}
                <div>
                  <h5
                    className="text-base font-bold mb-2"
                    style={{ color: "#385662" }}
                  >
                    SPAYING/NEUTERING
                  </h5>
                  <p className="text-gray-700 text-sm">
                    <strong>*</strong>All our visitors must be spayed or
                    neutered at 7 months of age.
                  </p>
                </div>

                {/* Friendly Days of Play */}
                <div>
                  <h5
                    className="text-base font-bold mb-2"
                    style={{ color: "#385662" }}
                  >
                    FRIENDLY DAYS OF PLAY
                  </h5>
                  <p className="text-gray-700 text-sm">
                    <strong>*</strong>We have a strict NO aggression policy!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Google Reviews Section */}
        <section className="py-12 px-6" style={{ backgroundColor: "#385662" }}>
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-8 text-white">
              What Our Customers Say
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 mr-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">Google Review</span>
                </div>
                <p className="text-gray-700 mb-3">
                  "Amazing service! The staff truly cares about each dog and
                  treats them like family. My pup always comes home happy and
                  tired from a great day."
                </p>
                <p className="text-sm font-semibold text-gray-800">
                  - Sarah M.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 mr-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">Google Review</span>
                </div>
                <p className="text-gray-700 mb-3">
                  "The grooming service is top-notch! My dog looks fantastic and
                  the team is so professional. Highly recommend Woofs n Wags to
                  everyone."
                </p>
                <p className="text-sm font-semibold text-gray-800">- Mike T.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 mr-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">Google Review</span>
                </div>
                <p className="text-gray-700 mb-3">
                  "Outstanding dog training program! The K9 education really
                  helped with my dog's behavior. The trainers are knowledgeable
                  and patient."
                </p>
                <p className="text-sm font-semibold text-gray-800">
                  - Jennifer L.
                </p>
              </div>
            </div>

            <div className="text-center mt-8">
              <a
                href="https://www.google.com/search?q=woofs+n+wags+reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white hover:opacity-90 transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: "#385662" }}
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Read More Google Reviews
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Home;
