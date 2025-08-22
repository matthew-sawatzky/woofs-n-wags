import Layout from "../components/Layout";
import StAnnesImage from "../assets/stannes.jpeg";

function StAnnesLocation() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-screen"
      style={{ backgroundImage: `url(${StAnnesImage})` }}
    >
      <Layout>
        <h1 className="text-5xl font-bold text-white drop-shadow-xl p-6">
          St. Anne's Location
        </h1>
      </Layout>
    </div>
  );
}
export default StAnnesLocation;
