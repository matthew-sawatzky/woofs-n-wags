import Layout from "../components/Layout";
import Footer from "../components/Footer";
import GroomingImage from "../assets/Woof tub.jpg";

function Grooming() {
  return (
    <>
      <div
        className="bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${GroomingImage})` }}
      >
        <Layout>
          <section className="py-20 px-6">
            <h1 className="text-5xl font-bold text-white drop-shadow-xl mb-8 text-center">
              Woofs 'n Wags Dog Salon
            </h1>

            {/* Introduction */}
            <div className="bg-white bg-opacity-95 rounded-xl p-8 mb-8 shadow-xl">
              <h2
                className="text-3xl font-bold text-gray-800 mb-6 text-center"
                style={{ color: "#385662" }}
              >
                Styling from both Locations
              </h2>
              <div className="space-y-4">
                <p className="text-lg">
                  Our Exclusive Dog Salon combines patience and expertise which
                  promotes an environment that caters to each dogs' unique
                  individual grooming needs.
                </p>
                <p className="text-lg font-semibold">
                  Specializes in everything dog. Just ask us.
                </p>
                <p className="text-lg">
                  We have certified groomers who specialize in DOODLES, DESHEDS,
                  DOUBLE COATS, SMALL DOGS, WIRE COATS... Our stylist have
                  certificates in every coat...just ask.
                </p>
              </div>
            </div>
          </section>
        </Layout>
      </div>

      {/* Our Facilities */}
      <section className="py-12 px-8" style={{ backgroundColor: "#385662" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">
            Our Facilities Boast
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-xl">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Certified Groomers</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Groomers with experience in Canine Behaviour</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>
                    All our groomers attend regular seminars and conventions in
                    Dog Grooming and Dog Behaviour
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-xl">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>
                    All our groomers are long term which means that your K9 kids
                    will be groomed by the same person (as requested). This
                    means trusting and lifelong relationships.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>
                    Our groomers are keen dog handlers with an innate ability
                    and passion to learn. They continue to develop their skill
                    set, refine, and set high standards within our community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grooming Services */}
      <section className="py-12 px-8 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl font-bold text-center mb-8"
            style={{ color: "#385662" }}
          >
            Grooming Salon Services
          </h2>

          <div className="bg-white p-8 rounded-xl shadow-xl mb-6">
            <p className="text-lg mb-6 text-center">
              Our Salon caters to any of your dogs needs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3
                  className="text-xl font-bold mb-4 text-center"
                  style={{ color: "#385662" }}
                >
                  Standard Services
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                    <p>Full groom</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                    <p>Bath and Brush</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                    <p>Blow outs</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3
                  className="text-xl font-bold mb-4 text-center"
                  style={{ color: "#385662" }}
                >
                  Specialty Services
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                    <p>Spawdicure</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                    <p>Face, Paws, and bum clean ups</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3
                  className="text-xl font-bold mb-4 text-center"
                  style={{ color: "#385662" }}
                >
                  Creative Grooming
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></div>
                    <p>Tails</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></div>
                    <p>Stencilling</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></div>
                    <p>
                      Up to your imagination - our pet stylists are award
                      winning in this area!
                    </p>
                  </div>
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
                Extras Always Include
              </h3>
              <p className="text-lg">
                Patience, understanding, massage, and loves!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vaccination Requirements */}
      <section className="py-12 px-8" style={{ backgroundColor: "#385662" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <div className="bg-white p-8 rounded-xl shadow-xl">
              <h2
                className="text-2xl font-bold mb-4"
                style={{ color: "#385662" }}
              >
                Vaccination Requirements
              </h2>
              <p className="text-lg font-semibold">
                **All dogs must be fully vaccinated with up to date Distemper
                and parvo to book an appointment**
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
export default Grooming;
