import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { client } from "../sanityClient";
import Footer from "../components/Footer";
import Dogs_playing_Image from "../assets/dogs_playing.jpeg";
import BackgroundImage from "../assets/image3.jpeg";

function Home() {
  const [textSection, setTextSection] = useState("");

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
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <Layout>
        <section id="hero" className="flex items-center justify-between gap-8 p-6">
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-white">
              We Know What Dogs Like
            </h1>
            <h2 className="text-white mb-4">Sentence subheadline blah blah blah</h2>
            <div className="flex gap-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
                Book Now
              </button>
              <button className="bg-white text-blue-500 px-4 py-2 rounded-full">
                View Our Services
              </button>
            </div>
          </div>
          <div className="flex-1">
            <img
              src={Dogs_playing_Image}
              alt="Dogs playing"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </section>
        <section
          id="about"
          className="bg-white bg-opacity-90 p-6 rounded-lg mt-4"
        >
          <p>Short paragraph about the daycare maybe from a client or nik</p>
        </section>
        <section
          id="services"
          className="bg-white bg-opacity-90 p-6 rounded-lg mt-4"
        >
          <h3 className="text-2xl font-semibold">Our Services</h3>
          <ul className="list-disc pl-6 mt-2">
            <li>Dog Daycare</li>
            <li>Grooming</li>
            <li>K9 Education</li>
            <li>Sleep Over Service</li>
          </ul>
        </section>
        <section id="reviews"></section>
        <section
          id="cta"
          className="bg-white bg-opacity-90 p-6 rounded-lg mt-4"
        >
          <p>{textSection}</p>
        </section>
        <footer></footer>
      </Layout>
      <Footer />
    </div>
  );
}

export default Home;
