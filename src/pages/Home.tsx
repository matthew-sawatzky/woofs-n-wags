import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { client } from "../sanityClient";
import Footer from "../components/Footer";

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
    <><Layout>
          <h1 className="text-4xl font-bold">We Know What Dogs Like</h1>

          <p>{textSection}</p>
      </Layout><Footer /></>
  );
}

export default Home;
