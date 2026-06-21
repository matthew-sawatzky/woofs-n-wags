import Layout from "../components/Layout";
import Footer from "../components/Footer";
import GroomingImage from "../assets/IMG_3618.jpeg";

function Grooming() {
  const salonServiceGroups = [
    {
      title: "Standard Services",
      items: ["Full groom", "Bath and Brush", "Blow outs"],
      accent: "Everyday care",
    },
    {
      title: "Specialty Services",
      items: ["Spawdicure", "Face, Paws, and bum clean ups"],
      accent: "Detail focused",
    },
    {
      title: "Creative Grooming",
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
                Grooming
              </h1>

              <div className="flex gap-4">
                <button
                  className="text-white px-4 py-2 rounded-full flex items-center gap-2 hover:opacity-90 hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
                  style={{ backgroundColor: "#385662" }}
                >
                  Professional Grooming Services
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
                  onClick={() => {
                    const element = document.getElementById("education-centre");
                    element?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                  className="bg-white px-4 py-2 rounded-full flex items-center gap-2 hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
                  style={{ color: "#385662" }}
                >
                  Grooming Education Centre
                </button>
              </div>
            </div>
            <div className="flex-1"></div>
          </section>
        </Layout>
      </div>

      {/* Styling from both Locations */}
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
                individual grooming needs.
              </p>
              <p className="text-lg font-semibold text-center">
                Specializes in everything dog. Just ask us.
              </p>
              <p className="text-lg text-center">
                We have certified groomers who specialize in DOODLES, DESHEDS,
                DOUBLE COATS, SMALL DOGS, WIRE COATS... Our stylist have
                certificates in every coat...just ask.
              </p>
            </div>
          </div>
        </div>
      </section>

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
                  <div
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: "#385662" }}
                  ></div>
                  <p>Certified Groomers</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: "#385662" }}
                  ></div>
                  <p>Groomers with experience in Canine Behaviour</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: "#385662" }}
                  ></div>
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
                  <div
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: "#385662" }}
                  ></div>
                  <p>
                    All our groomers are long term which means that your K9 kids
                    will be groomed by the same person (as requested). This
                    means trusting and lifelong relationships.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: "#385662" }}
                  ></div>
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
      <section className="py-16 px-8 bg-gradient-to-b from-slate-100 via-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <p
              className="text-sm font-semibold uppercase tracking-[0.22em] mb-2"
              style={{ color: "#385662" }}
            >
              Grooming Salon Services
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

      {/* Grooming Education Centre */}
      <section id="education-centre" className="py-16 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p
              className="text-sm font-semibold uppercase tracking-[0.25em] mb-3"
              style={{ color: "#385662" }}
            >
              Grooming Education Centre
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ color: "#385662" }}
            >
              A Cut Above the Rest
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Our program is designed to give newcomers to the grooming industry
              a complete understanding of what a professional grooming career
              involves, both mentally and physically. Led by multi-certified
              professionals and award-winning community leaders, students
              receive personalized, hands-on education in a supportive learning
              environment.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <h3
                className="text-2xl font-bold mb-5 text-center"
                style={{ color: "#385662" }}
              >
                Why Choose Our Program?
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>One on one, student with instructor experience.</p>
                <p>Hands on participation, supervised, and guided learning.</p>
                <p>Up to date industry focused education and mentorship.</p>
                <p>
                  Compassionate, safe, and fear free centred grooming practices.
                </p>
                <p>Over 25 years of combined experience.</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <h3
                className="text-2xl font-bold mb-5 text-center"
                style={{ color: "#385662" }}
              >
                Program Focus
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Students learn the practical and professional side of the
                  grooming industry with direct instruction, mentorship, and
                  real-world support.
                </p>
                <p>
                  The goal is to build confidence, technical skill, and a clear
                  understanding of what it takes to thrive in a grooming career.
                </p>
                <div className="rounded-xl border border-dashed border-gray-200 bg-gray-50 px-4 py-3">
                  <p className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-1">
                    Learning environment
                  </p>
                  <p>
                    Supportive, hands-on, and designed to help newcomers grow at
                    a steady pace.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <h3
                className="text-2xl font-bold mb-5 text-center"
                style={{ color: "#385662" }}
              >
                Meet the Head Instructor
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="font-semibold text-gray-900">Troi Smith</p>
                <p>
                  Troi leads the program with pride, professionalism, and
                  extensive industry experience across multiple areas of pet
                  care and education.
                </p>
                <p>
                  With more than 10 years in the grooming industry, along with
                  years of experience coaching equestrians, Troi brings a unique
                  combination of leadership, patience, and technical expertise
                  to every student she mentors.
                </p>
                <div className="space-y-2 rounded-xl bg-gray-50 p-4">
                  <p>Former President of PPGAM.</p>
                  <p>Currently affiliated with CPPS.</p>
                  <p>A multi-certified pet stylist.</p>
                  <p>Passionate about continued education and mentorship.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-white rounded-2xl p-8 shadow-xl border border-gray-100 text-center">
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Troi is dedicated to raising the standard of compassionate
              grooming while helping students build confidence, professionalism,
              and lasting careers in the industry.
            </p>
            <div className="mt-6">
              <a
                href="mailto:woofsgroomingteam@gmail.com"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{ backgroundColor: "#385662" }}
              >
                Email us at woofsgroomingteam@gmail.com
              </a>
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
