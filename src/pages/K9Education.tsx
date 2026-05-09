import Layout from "../components/Layout";
import Footer from "../components/Footer";
import K9EduImage from "../assets/k9ed_background.jpeg";

function K9Education() {
  return (
    <>
      <div
        className="bg-cover bg-center bg-no-repeat pb-50"
        style={{ backgroundImage: `url(${K9EduImage})` }}
      >
        <Layout>
          <section className="flex items-center justify-between gap-8 p-6 mt-100">
            <div className="flex-1">
              <h1 className="text-5xl font-bold text-white drop-shadow-xl mb-6">
                K9 Education
              </h1>

              <div className="flex gap-4">
                <button
                  className="text-white px-4 py-2 rounded-full flex items-center gap-2 hover:opacity-90 hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
                  style={{ backgroundColor: "#385662" }}
                >
                  Professional Dog Training
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
                  className="bg-white px-4 py-2 rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
                  style={{ color: "#385662" }}
                >
                  View Our Programs
                </button>
              </div>
            </div>
            <div className="flex-1"></div>
          </section>
        </Layout>
      </div>

      {/* Instructors, Classes and Courses Overview */}
      <section className="py-12 px-8 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl font-bold text-center mb-8"
            style={{ color: "#385662" }}
          >
            K9 Education
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Instructors */}
            <div className="bg-white p-8 rounded-xl shadow-xl">
              <h3
                className="text-2xl font-bold mb-6 text-center"
                style={{ color: "#385662" }}
              >
                Our Certified Instructors
              </h3>
              <div className="text-center space-y-3">
                <p className="text-xl font-semibold text-gray-800">
                  Victoria Scott
                </p>
                <p className="text-xl font-semibold text-gray-800">
                  Nikki Sherwin
                </p>
              </div>
            </div>

            {/* Classes */}
            <div className="bg-white p-8 rounded-xl shadow-xl">
              <h3
                className="text-2xl font-bold mb-6 text-center"
                style={{ color: "#385662" }}
              >
                Our Classes
              </h3>
              <div className="text-center space-y-3">
                <p className="text-lg">
                  All small classes: student to instructor ratio
                </p>
              </div>
            </div>

            {/* Courses */}
            <div className="bg-white p-8 rounded-xl shadow-xl">
              <h3
                className="text-2xl font-bold mb-6 text-center"
                style={{ color: "#385662" }}
              >
                Our Courses
              </h3>
              <div className="space-y-4">
                <p className="text-lg">All classes are 5 weeks in duration.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Classes We Offer */}
      <section className="py-12 px-8" style={{ backgroundColor: "#385662" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Classes We Offer
          </h2>

          <div className="space-y-12">
            {/* Leash Reactivity */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-white border-b-2 border-white pb-2">
                Leash Reactivity
              </h3>
              <div className="text-white">
                <p className="text-gray-200 mb-4 italic">
                  Only 3 dog/handler teams • First week is humans only • $200.00
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <p className="mb-4">
                      This is an exclusive class with only 3 dogs and is managed
                      safely for entry, exit and interaction. Partitioned areas
                      are used to give privacy while your dog learns to choose
                      to pay attention to their owners and not the distractions.
                    </p>
                    <p className="mb-4 font-semibold">
                      This course is for the dogs that while on walks barks or
                      pulls towards:
                    </p>
                    <ul className="space-y-1 text-sm text-gray-200 mb-4">
                      <li>• People</li>
                      <li>• Other dogs</li>
                      <li>• Bikes</li>
                      <li>• Cars</li>
                    </ul>
                  </div>
                  <div>
                    <p className="mb-4">
                      These dogs are not aggressive dogs. These dogs may be
                      fearful, high energy dogs and super happy dogs.
                    </p>
                    <p className="text-sm text-gray-200">
                      Energy is energy but this class is to aid in having your
                      high pulling dog calm themselves down and cue to their
                      owner and learn positive alternative choices to barking or
                      pulling.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Agility Foundations */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-white border-b-2 border-white pb-2">
                Agility Foundations
              </h3>
              <div className="text-white">
                <p className="text-gray-200 mb-4 italic">$150.00</p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <p className="mb-4">
                      This class is our general introduction into the sport of
                      dog agility. The primary focus will be on having fun with
                      our dogs while we introduce the skills necessary to safely
                      interact with equipment and obstacles. We'll begin to
                      develop the core competencies needed to continue in the
                      sport as we progress.
                    </p>
                    <p className="text-sm text-gray-300">
                      Aside from safe equipment use, topics may include shaping
                      behaviour, impulse control, body awareness skills and
                      more.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2 text-yellow-200">
                      ** Life Skills class or equivalent is strongly recommended
                      prior to participating in Agility Foundations.
                    </p>
                    <p className="text-sm text-gray-200">
                      Dogs must be able to work comfortably around other dogs in
                      class, be able to sit and down stay with some basic
                      distraction and be comfortable with other dogs moving.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* K9 Aerobics */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-white border-b-2 border-white pb-2">
                K9 Aerobics
              </h3>
              <div className="text-white">
                <p className="text-gray-200 mb-4 italic">$150.00</p>
                <p className="mb-4">
                  This one-of-a-kind class combines music, movement, and
                  motivation while focusing on:
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <ul className="space-y-2 text-sm text-gray-200">
                    <li>
                      • Warm-up routines to prep dogs for active lifestyles and
                      sports
                    </li>
                    <li>
                      • Strengthening and conditioning to keep them fit, strong,
                      and healthy
                    </li>
                    <li>
                      • Relationship building through tricks, games, and plenty
                      of FUN!
                    </li>
                  </ul>
                  <p className="text-sm text-gray-300">
                    Get ready to move, groove, and bond with your pup like never
                    before!
                  </p>
                </div>
              </div>
            </div>

            {/* K9 Life Skills Program */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-white border-b-2 border-white pb-2">
                K9 Life Skills Program
              </h3>
              <div className="text-white">
                <p className="text-gray-200 mb-4 italic">$140.00</p>
                <p className="mb-4">
                  This five-week course is designed to help dogs develop the
                  essential skills needed to confidently navigate everyday life.
                </p>
                <p className="font-semibold mb-3">We focus on:</p>
                <div className="grid md:grid-cols-2 gap-8">
                  <ul className="space-y-2 text-sm text-gray-200">
                    <li>• Polite manners and calm behaviour</li>
                    <li>• Leash skills and real-world control</li>
                    <li>• Patience and impulse regulation</li>
                    <li>
                      • Addressing excessive behaviours such as jumping,
                      mouthing, or biting
                    </li>
                    <li>
                      • Building reliable, practical skills for daily routines
                    </li>
                  </ul>
                  <p className="text-sm text-gray-300">
                    This program supports dogs in learning how to settle, focus,
                    and smoothly integrate into real-life environments—creating
                    a more balanced and enjoyable relationship between dog and
                    handler.
                  </p>
                </div>
              </div>
            </div>

            {/* Rally-O */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-white border-b-2 border-white pb-2">
                Rally-O
              </h3>
              <div className="text-white">
                <p className="text-gray-200 mb-4 italic">$150.00</p>
                <p className="mb-4">
                  Rally Obedience is a fun, engaging training class that
                  strengthens communication and teamwork between you and your
                  dog. Working through a series of signs and exercises, handlers
                  guide their dogs through skills such as heeling, sits, downs,
                  turns, and stays—at a steady pace and with encouragement.
                </p>
                <p className="mb-4">
                  Unlike traditional obedience, Rally allows handlers to talk to
                  and praise their dogs, creating a positive and motivating
                  learning environment. This class is ideal for dogs who enjoy
                  learning, benefit from structure, or want to build confidence,
                  focus, and reliability in distracting environments.
                </p>
                <p className="mb-4">
                  Rally Obedience is suitable for pet dogs and sport-curious
                  teams alike and helps translate foundational obedience into
                  real-world control and responsiveness.
                </p>
                <p className="font-semibold mb-3">
                  What a 5-Week Rally Obedience Course Offers:
                </p>
                <p className="mb-3">Over five weeks, teams will work on:</p>
                <ul className="space-y-2 text-sm text-gray-200">
                  <li>
                    • Heeling & Positioning - Developing consistent leash and
                    off-leash heeling with attention and engagement.
                  </li>
                  <li>
                    • Rally Signs & Skills - Learning common Rally exercises
                    including sits, downs, stands, pivots, turns, halts, and
                    changes of pace.
                  </li>
                  <li>
                    • Focus & Engagement - Building sustained attention around
                    other dogs and environmental distractions.
                  </li>
                  <li>
                    • Handler Communication - Improving timing, cues, and body
                    language for clearer guidance.
                  </li>
                  <li>
                    • Confidence & Teamwork - Encouraging problem-solving and
                    trust between dog and handler.
                  </li>
                  <li>
                    • Mini Courses & Transitions - Practicing short Rally-style
                    courses to connect skills smoothly and confidently.
                  </li>
                </ul>
              </div>
            </div>

            {/* Puppy Manners & Socialization */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-white border-b-2 border-white pb-2">
                Puppy Manners & Socialization
              </h3>
              <div className="text-white">
                <p className="text-gray-200 mb-4 italic">
                  Ages 3-7 months old • $140.00
                </p>
                <p className="mb-4 font-semibold">
                  All pups age 3 - 7 months start here
                </p>
                <p className="mb-4">
                  This class is open and designed for puppies 3 - 7 months of
                  age. Our class is not a prerequisite to continuing onto our
                  Life Skills Class BUT STRONGLY SUGGESTED.
                </p>
                <p className="mb-4">
                  Our Puppy Manners class will guide them in building
                  confidence, navigate their puppy world and set them on a
                  positive path and have fun.
                </p>
                <p className="font-semibold mb-3">
                  What you may expect in this class:
                </p>
                <ul className="space-y-2 text-sm text-gray-200">
                  <li>• To pay attention to you in a busy environment</li>
                  <li>• To feel safe and confident around other dogs</li>
                  <li>• Some fun exercises and games and much more</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location and Fees */}
      <section className="py-12 px-8 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2
              className="text-3xl font-bold mb-4"
              style={{ color: "#385662" }}
            >
              Class Location
            </h2>
            <p className="text-xl font-semibold">
              All K9 Education Classes are located at our St. Anne's Location
            </p>
            <p className="text-lg mt-2">*Call for details: 204-255-9247*</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Course Fees */}
            <div className="bg-white p-6 rounded-xl shadow-xl">
              <h3
                className="text-xl font-bold mb-4 text-center"
                style={{ color: "#385662" }}
              >
                Course Fees
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold mb-3">
                    Life Skills & Puppy Class:
                  </p>
                  <div className="flex justify-between items-center">
                    <span>5 week course:</span>
                    <span className="font-semibold text-lg">$140.00</span>
                  </div>
                </div>
                <div className="border-t pt-4">
                  <p className="font-semibold mb-3">
                    Agility, K9 Aerobics & Rally-O:
                  </p>
                  <div className="flex justify-between items-center">
                    <span>5 week course:</span>
                    <span className="font-semibold text-lg">$150.00</span>
                  </div>
                </div>
                <div className="border-t pt-4">
                  <p className="font-semibold mb-3">Leash Reactivity:</p>
                  <div className="flex justify-between items-center">
                    <span>5 week course (3 teams only):</span>
                    <span className="font-semibold text-lg">$200.00</span>
                  </div>
                  <p className="text-sm mt-2 text-gray-600">
                    *First week is humans only and dogs do not attend.
                  </p>
                </div>
              </div>
            </div>

            {/* Terms */}
            <div className="bg-white p-6 rounded-xl shadow-xl">
              <h3
                className="text-xl font-bold mb-4 text-center"
                style={{ color: "#385662" }}
              >
                Terms & Conditions
              </h3>
              <div className="space-y-2 text-sm">
                <p>** Prices subject to taxes</p>
                <p>
                  ** To participate in any of our programs we require payment at
                  time of reservations.
                </p>
                <p>
                  ** All reservations are non-refundable and non-transferable.
                  For further information please contact us at (204) 255-9247
                </p>
                <p>
                  ** Exceptions may be made but solely at the owner's
                  discretion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vaccination Requirements */}
      <section className="py-12 px-8" style={{ backgroundColor: "#385662" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">
            Vaccination Requirements
          </h2>

          <div className="bg-white p-8 rounded-xl shadow-xl mb-6">
            <p className="text-lg mb-6">
              To keep our facility safe from potentially serious and deadly
              disease we require all our visitors to have up to date
              vaccinations and bordetella.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Puppies */}
              <div>
                <h3
                  className="text-xl font-bold mb-4"
                  style={{ color: "#385662" }}
                >
                  Puppies:
                </h3>
                <div className="space-y-3">
                  <p>
                    Puppies are invited to come to play in our daycare and
                    attend our K9 Classes as young as 12 weeks of age.
                  </p>
                  <p>
                    They require their first 2 sets of vaccinations and the
                    bordetella vaccine (to protect from the most serious strain
                    of kennel cough).
                  </p>
                </div>
              </div>

              {/* Adult Dogs */}
              <div>
                <h3
                  className="text-xl font-bold mb-4"
                  style={{ color: "#385662" }}
                >
                  Dogs over the age of 7 Months:
                </h3>
                <div className="space-y-3">
                  <p>
                    Dogs over the age of 7 months are required to have all up to
                    date vaccinations and bordetella vaccine
                  </p>
                  <p>
                    Our visitors must be spayed or neutered at 7 months of age.
                    Please contact us for more information.
                  </p>
                  <p>
                    Dogs in heat are asked not to attend classes during heat
                    cycle.
                  </p>
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
                OUR FACILITY ACCEPTS TITER TESTS IN LIEU OF VACCINATIONS!
              </h3>
              <p>
                To learn more about our vaccination requirements please contact
                us to read about what each vaccination is protecting your dogs
                from.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
export default K9Education;
