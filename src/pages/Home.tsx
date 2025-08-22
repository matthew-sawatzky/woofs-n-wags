import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { client } from "../sanityClient";
import Footer from "../components/Footer";
import InstagramSection from "../components/InstagramSection";
import { useInstagram } from "../hooks/useInstagram";
import BackgroundImage from "../assets/dogs_playing.jpeg";
import K9EduLogo from "../assets/Woof edu.jpg";
import GroomingLogo from "../assets/Woof tub.jpg";

function Home() {
  const [textSection, setTextSection] = useState("");
  const navigate = useNavigate();


  const { posts, loading, error } = useInstagram();

  const handleServiceClick = (servicePath: string) => {
    navigate(servicePath);
  };

  useEffect(() => {
    client
      .fetch(`*[_type == "page" && slug.current == "home"][0]{textSection}`)
      .then((data) => {
        console.log("Sanity response:", data);
        setTextSection(data?.textSection || "");
      })
      .catch((err) => console.error("Sanity fetch error:", err));
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
                  className="text-white px-4 py-2 rounded-full flex items-center gap-2 hover:opacity-90 transition-colors"
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
                  className="bg-white px-4 py-2 rounded-full"
                  style={{ color: "#385662" }}
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
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              DC
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
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              SO
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
          className="bg-white bg-opacity-90 p-6 rounded-lg mt-4 mx-6"
        >
          <p>{textSection}</p>
        </section>
        <InstagramSection posts={posts} loading={loading} error={error} />
      </div>
      <Footer />
    </>
  );
}

export default Home;
