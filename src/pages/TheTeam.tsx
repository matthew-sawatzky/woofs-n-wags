import Layout from "../components/Layout";
import Footer from "../components/Footer";
import GroupWithDogs from "../assets/Group with Dogs.jpg";
import NikkiPhoto from "../assets/Nikki.jpg";
import VictoriaPhoto from "../assets/Vic 2.jpg";
import ShayePhoto from "../assets/Shaye (1).jpg";
import TroiPhoto from "../assets/Troi 1.jpeg";
import AllexPhoto from "../assets/Allex.jpg";

function TheTeam() {
  return (
    <Layout>
      <section className="py-12 px-6" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4 text-gray-900">
            Meet The Team
          </h1>
          <p className="text-center text-lg text-gray-700 mb-10 max-w-3xl mx-auto">
            The Woofs 'n Wags team is built on education, compassion, and
            behaviour-first care.
          </p>

          <div className="mb-10">
            <img
              src={GroupWithDogs}
              alt="Woofs 'n Wags team group with dogs"
              className="w-full max-h-[500px] object-cover rounded-2xl shadow-xl"
            />
          </div>

          <div className="space-y-8">
            <article className="bg-white rounded-2xl shadow-xl p-8">
              <img
                src={NikkiPhoto}
                alt="Nikki"
                className="w-full max-w-xs h-72 object-cover rounded-xl shadow-md mb-6"
              />
              <h2
                className="text-3xl font-bold mb-4"
                style={{ color: "#385662" }}
              >
                Nikki
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Nikki's career in animal behaviour began in 1990. She holds a
                  degree in psychology and a College certificate as a Child and
                  Youth Worker. She has always had a deep interest in behaviour.
                </p>
                <p>
                  Professionally employed since 1994, she delivered behavioural
                  programs for children, including anger management,
                  self-esteem, friendship groups, and one-on-one counselling.
                  Her child psychology background transitioned into dog
                  behaviour, where she has focused her career since 1996.
                </p>
                <p className="font-semibold">
                  Since 1996, Nikki's accomplishments include:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Former member of the SuperDogs team</li>
                  <li>Achievement of agility titles</li>
                  <li>Head instructor of an obedience centre for six years</li>
                  <li>Development of a bite prevention class</li>
                  <li>
                    Introduced and volunteered the first R.E.A.D. (Reading
                    Education Assistance Dog) program in elementary schools
                  </li>
                  <li>
                    Participation in the St. John ambulance dog therapy program
                  </li>
                  <li>Management of an animal hospital</li>
                  <li>
                    Pioneered Canine Community Connects, hosting biannual
                    seminars for professionals in dog behaviour
                  </li>
                  <li>Developed Winnipeg's first and only scent room</li>
                  <li>
                    Applied dog research to a new positive approach to daycare
                    behaviour support
                  </li>
                  <li>Canine Class Educator since 2000</li>
                  <li>
                    Seminar presenter on canine compulsive disorder, spatial
                    aggression, thunderstorm phobia, hyperactive dogs, canine
                    communication, collars and unintended harm, and the
                    principles of P.I.E.C.E.S.
                  </li>
                  <li>
                    Published article on P.I.E.C.E.S. (a method for assessing
                    and identifying potential issues in dog daycares)
                  </li>
                </ul>
                <p className="font-semibold">Professional Memberships</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    Pet Professional Guild: results-based, science-based,
                    force-free training and pet care grounded in No Pain, No
                    Force, No Fear.
                  </li>
                </ul>
                <p>
                  Nikki shares her home with four rescue dogs, many with special
                  needs. She credits every dog she has had with teaching her the
                  values she carries into her work.
                </p>
                <p>
                  Nikki also feels fortunate to share this work with her
                  daughter, Shaye, who manages the St. Anne's location and
                  upholds the values Woofs 'n Wags was founded on.
                </p>
                <p>
                  In 2007, Nikki's dream came to life with the opening of Woofs
                  'n Wags: a collar-free, aversive-free daycare rooted in trust,
                  safety, and respect.
                </p>
                <p>
                  For a comprehensive list of valuable resources and Nikki's
                  personal library, please ask in person. She is happy to lend
                  books or DVDs to those interested in canine behaviour.
                </p>
              </div>
            </article>

            <article className="bg-white rounded-2xl shadow-xl p-8">
              <img
                src={ShayePhoto}
                alt="Shaye"
                className="w-full max-w-xs h-72 object-cover rounded-xl shadow-md mb-6"
              />
              <h2
                className="text-3xl font-bold mb-4"
                style={{ color: "#385662" }}
              >
                Shaye
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Shaye officially joined Woofs 'n Wags in 2019, just before
                  turning 14, but she has been part of the daycare since age
                  two.
                </p>
                <p>
                  By age 10, she had already taken on social media coordination
                  and soon became Social Media Manager.
                </p>
                <p>
                  Before COVID-19, Shaye's path was primarily academic. During
                  the pandemic, she chose to work full-time in daycare to help
                  support and save the business, and committed to Woofs 'n Wags
                  as her career.
                </p>
                <p>
                  Her understanding of behaviour and strong organization moved
                  her from the daycare floor into office operations, bathing and
                  de-shedding, puppy classes, and program implementation.
                </p>
                <p>
                  In 2024, Shaye became Daycare Manager at the St. Anne's
                  location. She also supports the Donald location and helps keep
                  both facilities running smoothly.
                </p>
                <p>
                  Shaye is also an avid equestrian who rides English jumping
                  with her horse, Kyro, and especially enjoys trail riding.
                </p>
                <p>
                  Her communication with animals reflects years of lived
                  experience, plus a deep foundation of listening, consistency,
                  patience, and care.
                </p>
              </div>
            </article>

            <article className="bg-white rounded-2xl shadow-xl p-8">
              <img
                src={VictoriaPhoto}
                alt="Victoria"
                className="w-full max-w-xs h-72 object-cover rounded-xl shadow-md mb-6"
              />
              <h2
                className="text-3xl font-bold mb-4"
                style={{ color: "#385662" }}
              >
                Victoria
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Victoria joined Woofs 'n Wags in 2008 and brings over 15 years
                  of experience blending education, behaviour, and grooming.
                </p>
                <p>
                  She is Manager of our Donald location, founded our grooming
                  department, and also led our K9 Education Department where she
                  mentored staff and helped shape our behaviour-based training
                  philosophy.
                </p>
                <p className="font-semibold">
                  Professional Pet Stylist - training areas include:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Creative Grooming</li>
                  <li>Sporting Breeds</li>
                  <li>Non-Sporting Breeds</li>
                  <li>Long-Legged Terriers</li>
                  <li>Short-Legged Terriers</li>
                  <li>Drop Coats</li>
                  <li>Bichons</li>
                  <li>Shih Tzus</li>
                  <li>Portuguese Water Dogs</li>
                  <li>Doodles</li>
                  <li>Client Communication</li>
                  <li>Proper Bathing Techniques</li>
                  <li>Skin and Coat Preparation</li>
                  <li>Paw Care</li>
                </ul>
                <p>
                  Victoria specializes in helping reactive and sensitive dogs
                  feel safe in grooming, using a calm, respectful, force-free
                  approach.
                </p>
                <p>
                  She has coached new stylists and led our certified stylist
                  team since 2011.
                </p>
                <p className="font-semibold">Educational Background</p>
                <p>
                  Victoria studied four years toward a Kinesiology degree at the
                  University of Winnipeg while working part-time at Woofs 'n
                  Wags. Her passion for movement, anatomy, and motor skills
                  naturally transitioned to canine work and rescue support.
                </p>
                <p className="font-semibold">Professional Memberships</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>PPGAM</li>
                  <li>CPPS</li>
                </ul>
                <p>
                  Victoria has completed many additional certifications in
                  behaviour, handling, pressure points, and fear-free,
                  force-free grooming methods.
                </p>
                <p>
                  Outside of work, she trains and competes in dog sports,
                  explores nature, and works as a professional wildlife
                  photographer.
                </p>
              </div>
            </article>

            <article className="bg-white rounded-2xl shadow-xl p-8">
              <img
                src={AllexPhoto}
                alt="Allex"
                className="w-full max-w-xs h-72 object-cover rounded-xl shadow-md mb-6"
              />
              <h2
                className="text-3xl font-bold mb-4"
                style={{ color: "#385662" }}
              >
                Allex
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Allex joined Woofs 'n Wags in 2007 and embodies what it means
                  to be a Woofs 'n Wags Auntie.
                </p>
                <p>
                  She brings a lifetime of rescue experience, including
                  fostering and raising many litters, often bottle-feeding
                  puppies. This developed her strong intuition and deep
                  understanding of canine behaviour.
                </p>
                <p>
                  Early in her role, it became clear her strengths extended far
                  beyond the daycare floor. She also supported building
                  maintenance and computer systems, and helped bring Woofs 'n
                  Wags online by launching its first Facebook page.
                </p>
                <p>
                  By 2010, she moved into reception and consistently prioritized
                  dog safety and wellbeing, covering shifts whenever needed.
                </p>
                <p>
                  In 2018, Allex became Office Manager and in-house IT
                  specialist. She now oversees office operations and client
                  accounts, helping both buildings run smoothly behind the
                  scenes.
                </p>
                <p>
                  Her care is trusted by K9 kids and pawrents alike. She is
                  especially loved for her calm guidance with puppies and her
                  famous head and ear massages.
                </p>
              </div>
            </article>

            <article className="bg-white rounded-2xl shadow-xl p-8">
              <img
                src={TroiPhoto}
                alt="Troi"
                className="w-full max-w-xs h-72 object-cover rounded-xl shadow-md mb-6"
              />
              <h2
                className="text-3xl font-bold mb-4"
                style={{ color: "#385662" }}
              >
                Troi
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Troi has been with Woofs since 2017, grooming since 2019, and
                  working in pet care since 2015.
                </p>
                <p className="font-semibold">
                  Canadian Professional Pet Stylists Certifications
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Bathers Certification</li>
                  <li>CCGA1</li>
                  <li>CCIPS1 (Intermediate Pet Stylist)</li>
                  <li>CCBPS2 - Short-Legged Terrier</li>
                </ul>
                <p>
                  She is currently preparing for CCBPS2 Sporting and CCBPS2
                  Non-Sporting certifications.
                </p>
                <p>
                  Troi also served as President of the Professional Pet Groomers
                  Association of Manitoba, where she promoted continuing
                  education and hosted seminars, including behavioural topics
                  for grooming professionals.
                </p>
                <p>
                  She specializes in double coat repair, puppy grooming starts,
                  and senior dog care. Under Victoria's mentorship, she has also
                  developed a strong focus on supporting dogs with grooming fear
                  and anxiety.
                </p>
                <p>
                  Raised in the equestrian world, Troi became a sought-after
                  coach across the province, shaping her supportive and
                  practical teaching style.
                </p>
                <p>
                  At home, she spends time with her family and her four dogs -
                  Milo, Hunter, Arthur, and Sapphire. Together they enjoy
                  agility, ratting, dock diving, sprinters, conformation, hikes,
                  and outdoor adventures.
                </p>
                <p>
                  As Grooming Education Instructor at Woofs 'n Wags, Troi's goal
                  is to mentor students with the skills and confidence needed to
                  begin successful grooming careers.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
      <Footer />
    </Layout>
  );
}
export default TheTeam;
