import Layout from "../components/Layout";
import Footer from "../components/Footer";
import SleepoverImage from "../assets/sleepover_bg.jpg";

function SleepOverService() {
  return (
    <>
      <div
        className="bg-cover bg-center bg-no-repeat pb-50"
        style={{ backgroundImage: `url(${SleepoverImage})` }}
      >
        <Layout>
          <section className="flex items-center justify-between gap-8 p-6 mt-100">
            <div className="flex-1 max-w-2xl">
              <p
                className="text-sm font-semibold uppercase tracking-[0.2em] mb-4 text-white"
                style={{
                  textShadow:
                    "-1px -1px 0 #385662, 1px -1px 0 #385662, -1px 1px 0 #385662, 1px 1px 0 #385662",
                }}
              >
                Sleepy Howls
              </p>
              <h1
                className="text-5xl font-bold text-white mb-4"
                style={{
                  textShadow:
                    "-1px -1px 0 #385662, 1px -1px 0 #385662, -1px 1px 0 #385662, 1px 1px 0 #385662",
                }}
              >
                Sleep Over Service
              </h1>
              <p className="text-lg text-white/95 mb-6 leading-relaxed">
                Comfort, care, and overnight attention for your dog in a calm,
                home-style setting.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  className="text-white px-4 py-2 rounded-full flex items-center gap-2 hover:opacity-90 hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
                  style={{ backgroundColor: "#385662" }}
                  onClick={() =>
                    document
                      .getElementById("sleepover-details")
                      ?.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                >
                  Learn More
                </button>
                <button
                  className="bg-white px-4 py-2 rounded-full flex items-center gap-2 hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
                  style={{ color: "#385662" }}
                  onClick={() => window.open("tel:2045054041")}
                >
                  204-505-4041
                </button>
              </div>
            </div>
            <div className="flex-1"></div>
          </section>
        </Layout>
      </div>

      <section id="sleepover-details" className="py-12 px-8 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <p
              className="text-center text-sm font-semibold uppercase tracking-[0.2em] mb-4"
              style={{ color: "#385662" }}
            >
              Sleepy Howls
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
              Two Exceptional Services Under One "Woof"
            </h2>
            <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-8 leading-relaxed">
              Welcome to Sleepy Howls: A Third-Party Business Apart from Woofs
              'n Wags Dog Daycare Services.
            </p>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Sleepy Howls is an exclusive dog sleepover service owned and
                managed by Clara Bestard. Sleepy Howls' mission is to provide a
                loving and caring environment for your best friend while you are
                away.
              </p>
              <p>
                This exclusive service is designed to give your dog a safe,
                comfortable, and attention-filled overnight stay with plenty of
                play, rest, and socialization.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ color: "#385662" }}
                >
                  Key Features of Our Exclusive Service
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Maximum capacity of 10 sleepover guests.</li>
                  <li>Auntie Clara sleeps in the room with her guests.</li>
                  <li>Private feeding times.</li>
                  <li>Lots of love, attention, smooches, and cuddles.</li>
                  <li>
                    Use of our state of the art facility for ample space, play,
                    rest, and socialization.
                  </li>
                </ul>
              </div>

              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ color: "#385662" }}
                >
                  Pricing
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The cost for this service is <strong>$70 per night</strong> up
                  until 10 am. This cost includes the services of Woofs 'n Wags,
                  as our guests play during the daycare hours.
                </p>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  For further information, please contact the reception at Woofs
                  'n Wags at <strong>204-505-4041</strong>.
                </p>
              </div>
            </div>

            <div
              className="mt-10 rounded-xl p-6"
              style={{ backgroundColor: "#385662" }}
            >
              <h3 className="text-2xl font-bold mb-3 text-white">
                Important Note
              </h3>
              <p className="text-white/95 leading-relaxed">
                Woofs 'n Wags is responsible for supervising daily play during
                their operating hours. After Woofs 'n Wags' hours, Sleepy Howls
                assumes sole responsibility for the care and well-being of the
                canine guests.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default SleepOverService;
