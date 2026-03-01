import about from "../images/aboutUs.jpg";

const values = [
  "Customer-Centric Approach",
  "Technical Excellence",
  "Reliability and Responsiveness",
  "Innovative & Expert Team",
  "Customized Solutions",
  "Proven Expertise",
  "Fast Delivery",
  "Scalable Products",
  "Secure Systems",
  "Continuous Innovation",
];

export default function AboutUs() {
  return (
    <>
      {/* <Navbar /> */}

      {/* Hero Section */}
      <section className="bg-blue-400 py-20 px-4 text-center text-white">
        {/* <h1 className="text-4xl md:text-6xl font-extrabold mb-4">About Us</h1> */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white ">
          Get to know <span className="text-blue-100">our story and us</span>
        </h2>
        <p className="text-lg md:text-xl mt-2">
          VH'S TECHSPHERE Private Limited
        </p>
      </section>

      {/* Company Overview */}
      <section className="py-16 px-4 max-w-7xl mx-auto md:flex md:items-center md:gap-12">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
          <p className="text-gray-700 mb-4 small-text text-justify">
            We have a team of specialized people in IT solutions and sales,
            offering a comprehensive range of products and services from
            industry leading OEMs right from structure cabling to cloud. Our
            team is dedicated in providing cutting-edge technology solutions to
            meet up client’s unique business needs.
          </p>
          <p className="text-gray-700 small-text text-justify">
            Our core competency lies in crafting and designing customized
            business solutions tailored to the unique requirements of our
            clients setting up IT infrastructure. The primary objective of our
            business is to streamline IT operations by reducing duplication,
            maximizing ROI, ensuring adherence to standards, and promoting
            adaptability and interoperability.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src={about}
            alt="Our Team"
            className="rounded-lg shadow-lg w-full object-cover opacity-70"
          />
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto md:flex md:gap-8">
          <div
            className="bg-white p-6 rounded-lg 
            shadow-[0_3px_14px_rgba(56,189,248,0.2)]

    hover:shadow-[0_6px_24px_rgba(56,189,248,0.6)] mb-6 md:mb-0 flex-1  transition"
          >
            <h3 className="text-3xl font-bold mb-2 text-black">Vision</h3>
            <p className="text-gray-700 small-text text-justify">
              To be a trusted partner for businesses in offering innovative
              solutions and unparalleled support for their IT Infrastructure
              Management. We strive to become a recognized leader in the
              industry, known for our commitment to excellence, customer
              satisfaction, and continuous technological advancement.
            </p>
          </div>
          <div
            className="bg-white p-6 rounded-lg   shadow-[0_3px_14px_rgba(56,189,248,0.2)]

    hover:shadow-[0_6px_24px_rgba(56,189,248,0.6)] flex-1  transition"
          >
            <h3 className="text-3xl font-bold mb-2 text-balck">Mission</h3>
            <p className="text-gray-700 small-text text-justify">
              To provide optimized, customized solutions with latest technology
              to meet clients’ business needs, achieve operational excellence,
              and minimize downtime which enables clients to focus on their core
              objectives and drive business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
        <div className="grid gap-6 md:grid-cols-3 sm:grid-cols-2">
          {values.map((value, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg   shadow-[0_3px_14px_rgba(56,189,248,0.2)]

    hover:shadow-[0_6px_24px_rgba(56,189,248,0.6)] transition text-center"
            >
              <h3 className="font-bold small-text text-blue-400 mb-2">
                {value}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <section className="bg-gray-100 py-8 text-center text-gray-700">
        VH'S TECH SPHERE PRIVATE LIMITED
      </section>
    </>
  );
}
