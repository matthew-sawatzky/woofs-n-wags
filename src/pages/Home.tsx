import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { client } from "../sanityClient";
import Footer from "../components/Footer";
import BackgroundImage from "../assets/dogs_playing.jpeg";
import K9EduLogo from "../assets/Woof edu.jpg";
import GroomingLogo from "../assets/Woof tub.jpg";
import DogTwins from "../assets/dog_twins.jpeg";
import Logo from "../assets/logo.png";
import WoofsLogo from "../assets/Woofs logo-1.jpeg";

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

    const instagramScript = document.createElement("script");
    instagramScript.async = true;
    instagramScript.src = "https://app.instaplug.app/platform/instaplug.js";
    instagramScript.onload = () => {
      if (window.renderApp) {
        window.renderApp({
          containerId: "d5bec290-fbff-4f2a-88ee-c72b71383051",
          domain: "https://app.instaplug.app/",
          widgetClass: "",
          fontFamily: "",
          color: "",
          colorLink: "",
          colorLinkActive: "",
          colorLinkHover: "",
        });
      }
    };
    document.head.appendChild(instagramScript);
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
              <h1 className="text-5xl font-bold text-white drop-shadow-xl">
                We Know What Dogs Like
              </h1>
              <h2 className="text-white mb-4 drop-shadow-xl">
                Dogs do speak, but only to those who know how to listen.
              </h2>
              <div className="flex gap-4">
                <button
                  className="text-white px-4 py-2 rounded-full flex items-center gap-2 hover:opacity-90 hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
                  style={{ backgroundColor: "#385662" }}
                >
                  It all starts with our Meet n Greet
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
            <div className="w-16 h-16 mx-auto mb-6 rounded-full overflow-hidden flex items-center justify-center">
              <img
                src={Logo}
                alt="Dog Daycare"
                className="w-full h-full object-cover"
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
            <div className="w-16 h-16 mx-auto mb-6 rounded-full overflow-hidden flex items-center justify-center">
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
            <div className="w-16 h-16 mx-auto mb-6 rounded-full overflow-hidden flex items-center justify-center">
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
            <div className="w-16 h-16 mx-auto mb-6 rounded-full overflow-hidden flex items-center justify-center">
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
        <section
          id="cta"
          className="bg-white bg-opacity-90 p-6 rounded-lg mt-4 mx-6 flex gap-8 items-center"
        >
          <div className="flex-2">
            <p>{textSection}</p>
          </div>
          <div className="flex-1">
            <img
              src={DogTwins}
              alt="Dog Twins"
              className="w-4/5 h-auto rounded-lg shadow-lg mx-auto"
            />
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
              <div className="bg-white bg-opacity-95 rounded-xl p-8 shadow-xl">
                <h4
                  className="text-xl font-bold text-center mb-4"
                  style={{ color: "#385662" }}
                >
                  St. Anne's Location
                </h4>
                <div className="text-center space-y-2">
                  <p className="text-lg font-semibold text-gray-800">
                    491 St. Anne's Road
                  </p>
                  <p className="text-sm text-gray-600">
                    (Just north of Bishop Grandin)
                  </p>
                  <p className="text-lg font-semibold text-gray-800">
                    204-255-9247
                  </p>
                  <p className="text-sm text-gray-600">info@woofsnwags.ca</p>
                </div>
              </div>

              {/* Donald Location */}
              <div className="bg-white bg-opacity-95 rounded-xl p-8 shadow-xl">
                <h4
                  className="text-xl font-bold text-center mb-4"
                  style={{ color: "#385662" }}
                >
                  Donald Location
                </h4>
                <div className="text-center space-y-2">
                  <p className="text-lg font-semibold text-gray-800">
                    7 Donald Street
                  </p>
                  <p className="text-lg font-semibold text-gray-800">
                    204-505-4041
                  </p>
                  <p className="text-sm text-gray-600">
                    info.donald@woofsnwags.ca
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Google Reviews Section */}
        <section className="py-12 px-6" style={{ backgroundColor: "#f8f9fa" }}>
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-8">
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

        <div className="max-w-6xl mx-auto px-6 py-8">
          <div id="d5bec290-fbff-4f2a-88ee-c72b71383051"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
