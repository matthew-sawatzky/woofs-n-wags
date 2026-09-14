import Layout from "../components/Layout";
import Footer from "../components/Footer";
import GroomingImage from "../assets/IMG_3618.jpeg";
import TroiPhoto from "../assets/Troi 1.jpeg";

function GroomingEducation() {
  return (
    <>
      <div
        className="bg-cover bg-center bg-no-repeat pb-50"
        style={{ backgroundImage: `url(${GroomingImage})` }}
      >
        <Layout>
          <section className="flex items-center justify-between gap-8 p-6 mt-100">
            <div className="flex-1 max-w-3xl">
              <h1
                className="text-5xl font-bold text-white mb-6"
                style={{
                  textShadow:
                    "-1px -1px 0 #385662, 1px -1px 0 #385662, -1px 1px 0 #385662, 1px 1px 0 #385662",
                }}
              >
                Grooming Education
              </h1>
              <p className="text-xl text-white max-w-2xl drop-shadow-lg">
                Are you interested in a career in grooming? Explore our
                hands-on Dog Spaw education program and meet your instructor.
              </p>
            </div>
            <div className="flex-1"></div>
          </section>
        </Layout>
      </div>

      <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p
              className="text-sm font-semibold uppercase tracking-[0.25em] mb-3"
              style={{ color: "#385662" }}
            >
              Dog Spaw Education Centre
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ color: "#385662" }}
            >
              A Cut Above the Rest
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Our program is designed to give newcomers to the Dog Spaw industry
              a complete understanding of what a professional Dog Spaw career
              involves, both mentally and physically. Led by multi-certified
              professionals and award-winning community leaders, students
              receive personalized, hands-on education in a supportive learning
              environment.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl bg-white shadow-2xl border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div className="lg:col-span-2 min-h-[360px]">
                <img
                  src={TroiPhoto}
                  alt="Troi Smith, Dog Spaw Education instructor"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="lg:col-span-3 p-8 md:p-12">
                <p
                  className="text-sm font-semibold uppercase tracking-[0.2em] mb-3"
                  style={{ color: "#385662" }}
                >
                  Meet your instructor
                </p>
                <h3
                  className="text-3xl font-bold mb-5"
                  style={{ color: "#385662" }}
                >
                  Troi Smith
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Troi leads the program with pride, professionalism, and
                    extensive industry experience across multiple areas of pet
                    care and education.
                  </p>
                  <p>
                    With more than 10 years in the Dog Spaw industry, along with
                    years of experience coaching equestrians, Troi brings a unique
                    combination of leadership, patience, and technical expertise
                    to every student she mentors.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 rounded-2xl bg-gray-50 p-5 text-sm">
                    <p>Former President of PPGAM.</p>
                    <p>Currently affiliated with CPPS.</p>
                    <p>A multi-certified pet stylist.</p>
                    <p>Passionate about continued education and mentorship.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <h3
                className="text-2xl font-bold mb-5 text-center"
                style={{ color: "#385662" }}
              >
                Program Focus
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Students learn the practical and professional side of the Dog
                  Spaw industry with direct instruction, mentorship, and
                  real-world support.
                </p>
                <p>
                  The goal is to build confidence, technical skill, and a clear
                  understanding of what it takes to thrive in a Dog Spaw career.
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
                Program Focus
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Students learn the practical and professional side of the Dog
                  Spaw industry with direct instruction, mentorship, and
                  real-world support.
                </p>
                <p>
                  The goal is to build confidence, technical skill, and a clear
                  understanding of what it takes to thrive in a Dog Spaw career.
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
          </div>

          <div className="mt-8 bg-white rounded-2xl p-8 shadow-xl border border-gray-100 text-center">
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Troi is dedicated to raising the standard of compassionate Dog
              Spaw while helping students build confidence, professionalism, and
              lasting careers in the industry.
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

      <Footer />
    </>
  );
}

export default GroomingEducation;
