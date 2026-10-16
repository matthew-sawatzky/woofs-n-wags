import Layout from "../components/Layout";
import Footer from "../components/Footer";
import GroomingImage from "../assets/IMG_3618.jpeg";
import { Link } from "react-router-dom";

function Grooming() {
  const salonServiceGroups = [
    {
      title: "Standard Services",
      items: ["Full groom", "Bath and Brush", "Blow outs", "Hand Scissoring"],
      accent: "Everyday care",
    },
    {
      title: "Specialty Services",
      items: ["Spawdicure", "Face, Paws, and bum clean ups"],
      accent: "Detail focused",
    },
    {
      title: "Creative Dog Spaw",
      items: [
        "Tails",
        "Stencilling",
        "Up to your imagination - our pet stylists are award winning in this area!",
      ],
      accent: "Style forward",
    },
  ];

  return (
    <>
      <div
        className="bg-cover bg-center bg-no-repeat pb-50"
        style={{ backgroundImage: `url(${GroomingImage})` }}
      >
        <Layout>
          <section className="flex items-center justify-between gap-8 p-6 mt-100">
            <div className="flex-1">
              <h1
                className="text-5xl font-bold text-white mb-6"
                style={{
                  textShadow:
                    "-1px -1px 0 #385662, 1px -1px 0 #385662, -1px 1px 0 #385662, 1px 1px 0 #385662",
                }}
              >
                Dog Spaw
              </h1>

              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
                <button
                  className="flex w-full items-center justify-center gap-2 rounded-full px-4 py-3 text-center leading-snug text-white transition-all duration-300 hover:scale-105 hover:opacity-90 hover:shadow-2xl cursor-pointer sm:w-auto sm:whitespace-nowrap"
                  style={{ backgroundColor: "#385662" }}
                >
                  Professional Dog Spaw Services
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
                <Link
                  to="/grooming-education"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-center leading-snug transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer sm:w-auto sm:whitespace-nowrap"
                  style={{ color: "#385662" }}
                >
                  Are you interested in a career in Grooming?
                </Link>
              </div>
            </div>
            <div className="flex-1"></div>
          </section>
        </Layout>
      </div>

      <section className="py-12 px-8 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-xl">
            <h2
              className="text-3xl font-bold text-center mb-6"
              style={{ color: "#385662" }}
            >
              Styling from both Locations
            </h2>
            <div className="space-y-4">
              <p className="text-lg text-center">
                Our Exclusive Dog Salon combines patience and expertise which
                promotes an environment that caters to each dogs' unique
                individual Dog Spaw needs.
              </p>
              <p className="text-lg font-semibold text-center">
                Specializes in everything dog. Just ask us.
              </p>
              <p className="text-lg text-center">
                We have certified Dog Spaw staff who specialize in DOODLES, DESHEDS,
                DOUBLE COATS, SMALL DOGS, WIRE COATS... Our stylist have
                certificates in every coat...just ask.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-8" style={{ backgroundColor: "#385662" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">
            Our Facilities Boast
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-xl">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: "#385662" }}
                  ></div>
                  <p>Our long term Certified Professional Pet Stylists.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: "#385662" }}
                  ></div>
                  <p>Dog Spaw staff with experience in Canine Behaviour.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: "#385662" }}
                  ></div>
                  <p>
                    All our Dog Spaw staff attend regular seminars and conventions in
                    Dog Spaw and Dog Behaviour.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-xl">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: "#385662" }}
                  ></div>
                  <p>
                    All our Dog Spaw staff are long term which means that your K9 kids
                    will be cared for by the same person (as requested). This
                    means trusting and lifelong relationships.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: "#385662" }}
                  ></div>
                  <p>
                    Our Dog Spaw staff are keen dog handlers with an innate ability
                    and passion to learn. They continue to develop their skill
                    set, refine, and set high standards within our community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-8 bg-gradient-to-b from-slate-100 via-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <p
              className="text-sm font-semibold uppercase tracking-[0.22em] mb-2"
              style={{ color: "#385662" }}
            >
              Dog Spaw Salon Services
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ color: "#385662" }}
            >
              Tailored Care for Every Coat Type
            </h2>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
              From essential maintenance to creative styling, our salon team
              delivers gentle, high-quality care based on your dog&apos;s
              comfort, coat, and personality.
            </p>
          </div>

          <div className="bg-white/95 border border-slate-200 p-8 rounded-3xl shadow-2xl shadow-slate-200/70 mb-8 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {salonServiceGroups.map((group) => (
                <article
                  key={group.title}
                  className="relative overflow-hidden rounded-2xl border border-slate-100 bg-gradient-to-b from-white to-slate-50 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <p
                    className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider mb-4"
                    style={{ backgroundColor: "#e6eef1", color: "#385662" }}
                  >
                    {group.accent}
                  </p>
                  <h3
                    className="text-2xl font-bold mb-5"
                    style={{ color: "#385662" }}
                  >
                    {group.title}
                  </h3>
                  <div className="space-y-3">
                    {group.items.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <span
                          className="mt-1.5 inline-flex h-5 w-5 items-center justify-center rounded-full text-white text-xs font-bold flex-shrink-0"
                          style={{ backgroundColor: "#385662" }}
                        >
                          ✓
                        </span>
                        <p className="text-slate-700 leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <div
              className="rounded-2xl p-7 shadow-xl text-white"
              style={{ backgroundColor: "#385662" }}
            >
              <h3 className="text-2xl font-bold mb-3">Extras Always Include</h3>
              <p className="text-lg text-slate-100 leading-relaxed">
                Patience, understanding, massage, and loves.
              </p>
            </div>
          </div>
        </div>
      </section>

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
                **All dogs must be fully vaccinated with up to date core
                vaccinations including Rabies, Distemper and Parvo to book an
                appointment**
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
