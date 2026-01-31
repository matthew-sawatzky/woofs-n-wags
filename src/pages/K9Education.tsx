import Layout from "../components/Layout";
import Footer from "../components/Footer";
import K9EduImage from "../assets/k9edu.jpg";

function K9Education() {
  return (
    <>
      <div
        className="bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${K9EduImage})` }}
      >
        <Layout>
          <section className="py-90 px-6">
            <h1 className="text-5xl font-bold text-white drop-shadow-xl mb-8 text-center">
              K9 Education
            </h1>
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
            K9 Education Overview
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
                  Small class sizes of 6 dog/handler teams in a class
                </p>
                <p className="text-lg font-semibold">
                  **Polite Puppy is open to 7 teams**
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
                <p className="text-lg">
                  Our class enrollment is 5 weeks in duration.
                </p>
                <p className="text-lg">
                  Introduction Week is a one-time class attended only at time of
                  first course attended. This introduction evening sets the
                  stage for all future classes and levels offered by Woofs 'n
                  Wags.
                </p>
                <p className="text-lg font-semibold">
                  Introduction night is a human only class.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Classes We Offer */}
      <section className="py-12 px-8" style={{ backgroundColor: "#385662" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">
            Classes We Offer
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Family Foundation */}
            <div className="bg-white p-6 rounded-xl shadow-xl">
              <h3
                className="text-xl font-bold mb-4 text-center"
                style={{ color: "#385662" }}
              >
                FAMILY FOUNDATION
              </h3>
              <div className="space-y-3">
                <p>Our classes are dedicated to relationship-based training.</p>
                <p>
                  We teach obedience foundation work including body handling,
                  connecting exercises, learning self-control, downs, stays and
                  more.
                </p>
                <p>
                  Take our classes and learn the difference between making your
                  dog listen and having your dog actively learn while both of
                  you are having fun, being challenged, communicating,
                  connecting and being engaged!
                </p>
                <p>
                  Family Foundation starts with the simple sit and builds
                  through the weeks and levels to a dog who will pay attention,
                  listen and accomplish many foundation exercises from sit,
                  down, stay and much more.
                </p>
              </div>
            </div>

            {/* Walk With Me */}
            <div className="bg-white p-6 rounded-xl shadow-xl">
              <h3
                className="text-xl font-bold mb-4 text-center"
                style={{ color: "#385662" }}
              >
                WALK WITH ME
              </h3>
              <div className="space-y-3">
                <p>
                  This course offers an in-depth variety of approaches and
                  techniques to connect with your dog and give you the tools to
                  teach your dog that a loose leash is a good leash!
                </p>
                <p>Our class is positive, active and educational.</p>
                <p className="font-semibold">In this class you will learn:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Why dogs pull</li>
                  <li>
                    Understand the leash as a tool and a means to communicate
                  </li>
                  <li>About different types of collars</li>
                  <li>Connect with your dog</li>
                  <li>How to get your dog's focus on you</li>
                </ul>
              </div>
            </div>

            {/* Come To Me */}
            <div className="bg-white p-6 rounded-xl shadow-xl">
              <h3
                className="text-xl font-bold mb-4 text-center"
                style={{ color: "#385662" }}
              >
                COME TO ME
              </h3>
              <div className="space-y-3">
                <p>
                  Teach your dog that coming to you is more fun and interesting
                  than anything they are distracted with!
                </p>
                <p>
                  Teaching your dog to come to you is all about your
                  relationship.
                </p>
                <p className="font-semibold">
                  A recall may save your dog's life in an emergency!
                </p>
                <p>
                  This course will teach you how to build up a reliable recall
                  successfully, using effective and positive training techniques
                  and train your dog to respond to the cue "come".
                </p>
                <p>
                  Achieving a fantastic recall response is a process. Join our
                  class and begin the process to positively train, connect, have
                  fun and make steps to creating peace of mind with your dog's
                  safety in mind.
                </p>
              </div>
            </div>

            {/* Polite Puppies */}
            <div className="bg-white p-6 rounded-xl shadow-xl">
              <h3
                className="text-xl font-bold mb-4 text-center"
                style={{ color: "#385662" }}
              >
                POLITE PUPPIES
              </h3>
              <div className="space-y-3">
                <p>
                  This class is open and designed for puppies 3 - 6 months of
                  age.
                </p>
                <p>
                  Our class is a prerequisite to continuing onto our Family
                  Foundation Class.
                </p>
                <p>
                  Our Puppy Manners class will guide them in building
                  confidence, navigate their puppy world and set them on a
                  positive path...and have fun.
                </p>
                <p className="font-semibold">
                  What may you expect in this class:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>To pay attention to you in a busy environment</li>
                  <li>To feel safe and confident around other dogs</li>
                  <li>Some fun exercises and games and much more...</li>
                </ul>
              </div>
            </div>

            {/* Leash Reactivity */}
            <div className="bg-white p-6 rounded-xl shadow-xl">
              <h3
                className="text-xl font-bold mb-4 text-center"
                style={{ color: "#385662" }}
              >
                LEASH REACTIVITY
              </h3>
              <div className="space-y-3">
                <p>
                  This class is a specialty class. Does your dog react on leash
                  to:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>People</li>
                  <li>Dogs</li>
                  <li>Bicycles</li>
                  <li>Cars</li>
                </ul>
                <p>
                  Our certified instructor has specialized in helping K9 kids
                  navigate their environment safely on leash for many years.
                </p>
                <p>
                  This is an exclusive class with only 3 dogs and is managed
                  safely for entry, exit and interaction.
                </p>
                <p>
                  This class will build up and give tools to steer your dog in a
                  more positive path and find some calm and more positive
                  choices.
                </p>
              </div>
            </div>

            {/* Tricklinks */}
            <div className="bg-white p-6 rounded-xl shadow-xl">
              <h3
                className="text-xl font-bold mb-4 text-center"
                style={{ color: "#385662" }}
              >
                TRICKLINKS
              </h3>
              <div className="space-y-3">
                <p>
                  This class is all about the tricks. The focus is on having fun
                  with your dog while teaching practical and fun behaviours that
                  you can show off to your friends and family. We'll work
                  through a wide range of Novice and Intermediate level tricks.
                </p>
                <p>
                  This class will give your dog the opportunity to earn a title
                  through "Do More With Your Dog".
                </p>
                <p>
                  Our family dog level 1 class or equivalent is a recommended
                  prerequisite.
                </p>
              </div>
            </div>

            {/* Agility */}
            <div className="bg-white p-6 rounded-xl shadow-xl">
              <h3
                className="text-xl font-bold mb-4 text-center"
                style={{ color: "#385662" }}
              >
                AGILITY
              </h3>
              <div className="space-y-3">
                <p>
                  This class is our general introduction into the sport of dog
                  agility.
                </p>
                <p>
                  The primary focus will be on having fun with our dogs while we
                  introduce the skills necessary to safely interact with
                  equipment and obstacles. We'll begin to develop the core
                  competencies needed to continue in the sport as we progress.
                  Aside from safe equipment use, topics may include shaping
                  behaviour, impulse control, body awareness skills and more.
                </p>
                <p>
                  Our family dog level 1 class or equivalent is strongly
                  recommended for this class. Dogs must be able to work
                  comfortably around other dogs in class, be able to sit and
                  down stay with some basic distraction and be comfortable with
                  other dogs moving.
                </p>
              </div>
            </div>

            {/* Ahead by a Nose */}
            <div className="bg-white p-6 rounded-xl shadow-xl">
              <h3
                className="text-xl font-bold mb-4 text-center"
                style={{ color: "#385662" }}
              >
                AHEAD BY A NOSE
              </h3>
              <div className="space-y-3">
                <p>
                  This class is our general introduction into scent detection
                  for enrichment and sport. The primary focus will be on having
                  fun with our dogs and building the necessary skills needed in
                  scent detection for sport and for enrichment in the home.
                  Topics may include building value for odour, teaching an
                  indication behaviour, reading your dog's body language,
                  building search patterns and more.
                </p>
                <p>
                  Our family dog level 1 class or equivalent is strongly
                  recommended as a prerequisite for this class. Dogs should be
                  comfortable working around other dogs in a classroom setting.
                </p>
              </div>
            </div>

            {/* Rally O */}
            <div className="bg-white p-6 rounded-xl shadow-xl">
              <h3
                className="text-xl font-bold mb-4 text-center"
                style={{ color: "#385662" }}
              >
                RALLY O
              </h3>
              <div className="space-y-3">
                <p>
                  This class is our general introduction into the sport of Rally
                  Obedience. The primary focus will be on learning the
                  individual exercises and signs in the Canadian Association of
                  Rally Obedience (CARO) Novice class.
                </p>
                <p>
                  Our family dog Level 1 class or equivalent is a strongly
                  recommended prerequisite.
                </p>
                <p>
                  Dogs must be able to work comfortably around other dogs in
                  class, be able to sit and down stay with some basic
                  distraction and be comfortable with other dogs moving.
                </p>
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
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Our 5 week course:</span>
                  <span className="font-semibold text-lg">$140.00</span>
                </div>
                <div className="border-t pt-3">
                  <p className="text-sm italic mb-2">
                    *Exception is our specialized 5 week Leash Reactivity
                    class.*
                  </p>
                  <div className="flex justify-between items-center">
                    <span>Leash Reactivity:</span>
                    <span className="font-semibold text-lg">$200.00</span>
                  </div>
                  <p className="text-sm mt-2">
                    This class is not included in our bundled package deal.
                  </p>
                  <p className="text-sm">
                    This class is a limited entrance with only 3 dogs per class
                    and is longer in length to ensure a safe entry and exit.
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
                    Dogs are not required to be spayed or neutered to attend
                    classes
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
