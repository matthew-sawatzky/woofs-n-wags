import Layout from "../components/Layout";
import K9EduImage from "../assets/k9edu.jpg";

function K9Education() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-screen"
      style={{ backgroundImage: `url(${K9EduImage})` }}
    >
      <Layout>
        <h1 className="text-5xl font-bold text-white drop-shadow-xl p-6">
          K9 Education
        </h1>
      </Layout>
    </div>
  );
}
export default K9Education;
