import React, { useState } from "react";
import Form from "./Form";
export default function Services() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const services = [
    {
      icons: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-wrench h-6 w-6 text-primary"
        >
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
        </svg>
      ),
      title: "Laptop & Desktop installation & Support & H/W ",
      description:
        "Expert assistance in diagnosing and resolving hardware and software issues efficiently to minimize downtime.",
    },
    {
      icons: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-cpu h-6 w-6 text-accent"
        >
          <rect width="16" height="16" x="4" y="4" rx="2"></rect>
          <rect width="6" height="6" x="9" y="9" rx="1"></rect>
          <path d="M15 2v2"></path>
          <path d="M15 20v2"></path>
          <path d="M2 15h2"></path>
          <path d="M2 9h2"></path>
          <path d="M20 15h2"></path>
          <path d="M20 9h2"></path>
          <path d="M9 2v2"></path>
          <path d="M9 20v2"></path>
        </svg>
      ),
      title: "S/W Troubleshooting & Software Installation",
      description:
        "Professional installation and configuration of standard and custom software for optimized performance.",
    },
    {
      icons: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-user-check h-6 w-6 text-primary"
        >
          <path d="M16 21v-2a4 4 0 0 0-8 0v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
          <polyline points="16 11 18 13 22 9"></polyline>
        </svg>
      ),
      title: "Manpower Resources",
      description:
        "Skilled IT professionals available for staffing, project-based deployment, and long-term contracts. From system administrators and network engineers to help desk technicians and field support staff.",
    },
    {
      icons: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-server h-6 w-6 text-primary"
        >
          <rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect>
          <rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect>
          <line x1="6" x2="6.01" y1="6" y2="6"></line>
          <line x1="6" x2="6.01" y1="18" y2="18"></line>
        </svg>
      ),
      title: "Server Setups",
      description:
        "Comprehensive server setup and management tailored to your organization's infrastructure needs.",
    },
    // {
    //   title: "Network & Printer Setup",
    //   description:
    //     "End-to-end setup and maintenance of network and local printers ensuring seamless office operations.",
    // },
    // {
    //   title: "H/W & S/W Purchasing",
    //   description:
    //     "Consultancy and recommendations for hardware and software purchases suited to your business requirements.",
    // },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-blue-400 text-white text-center py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Desktop and End User Support
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto">
          We provide support, consultancy, and setup for all your business
          needs.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-black text-center mb-10">
          Our Services
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl   shadow-[0_3px_14px_rgba(56,189,248,0.2)]

    hover:shadow-[0_6px_24px_rgba(56,189,248,0.6)] transition "
              onClick={() => {
                setSelectedProduct(service);
                setOpenModal(true);
              }}
            >
              <div className="bg-blue-100 text-blue-600 w-12 h-12 flex items-center justify-center rounded-full mb-4 mx-auto text-lg font-bold">
                {service.icons}
              </div>
              <h3 className="text-[24px] font-bold text-center mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center small-text">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* ----------contact form------------- */}
      {openModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl w-full md:max-w-lg relative shadow-lg">
            <Form
              productTitle={selectedProduct}
              onClose={() => setOpenModal(false)}
              showClose={true}
            />
          </div>
        </div>
      )}

      {/* Infrastructure Management */}
      <section className="bg-white py-16 px-6 text-center shadow-inner">
        <h2 className="text-3xl font-bold text-black mb-4">
          Infrastructure Management
        </h2>
        <p className="text-gray-700 small-text max-w-2xl mx-auto leading-relaxed">
          Empowering data-driven decisions and growth with advanced data
          intelligence and management solutions. Our team ensures seamless
          infrastructure performance with proactive monitoring and optimization.
        </p>
      </section>

      {/* Brand Footer Section */}
      {/* <section className="bg-gray-100 py-12 text-center">
        <p className="text-gray-700 font-semibold tracking-wide">
          VH'S TECHSPHERE PRIVATE LIMITED
        </p>
      </section> */}
    </div>
  );
}
