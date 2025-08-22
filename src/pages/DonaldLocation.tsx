import Layout from "../components/Layout";
import DonaldImage from "../assets/donald.JPG";

function DonaldLocation() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-screen"
      style={{ backgroundImage: `url(${DonaldImage})` }}
    >
      <Layout>
        <h1 className="text-5xl font-bold text-white drop-shadow-xl p-6">
          Donald Location
        </h1>
      </Layout>
    </div>
  );
}
export default DonaldLocation;
