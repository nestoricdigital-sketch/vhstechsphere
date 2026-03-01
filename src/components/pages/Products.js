import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "./Form";
export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  // const [selectedProduct, setSelectedProduct] = useState("");

  // const products = [
  //   {
  //     title: "Desktops",
  //     description:
  //       "Powerful and customizable desktops designed for performance and reliability to meet all your business needs.",
  //   },
  //   {
  //     title: "Laptops",
  //     description:
  //       "Portable and efficient laptops crafted for professionals who value speed, design, and durability.",
  //   },
  //   {
  //     title: "Servers",
  //     description:
  //       "Enterprise-grade servers offering performance, scalability, and security for your IT infrastructure.",
  //   },
  //   {
  //     title: "Storage",
  //     description:
  //       "Let us help you pick the right storage solutions from our wide product range customized to your requirements.",
  //   },
  // ];

  const products = [
    {
      title: "Laptops",
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
          className="lucide lucide-laptop h-7 w-7 text-primary"
        >
          <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"></path>
        </svg>
      ),

      brands: [
        // {
        //   name: "Dell Laptops",
        //   items: [
        //     "Dell XPS Series - Premium ultrabooks with stunning displays",
        //     "Dell Latitude - Business-grade durability and security",
        //     "Dell Inspiron - Affordable performance for everyday use",
        //     "Dell Precision - Mobile workstations for professionals",
        //   ],
        // },
        // {
        //   name: "HP Laptops",
        //   items: [
        //     "HP Spectre x360 - Premium convertible with style",
        //     "HP EliteBook - Enterprise-class business laptops",
        //     "HP ProBook - Reliable and affordable business solutions",
        //     "HP ZBook - Mobile workstations for creative professionals",
        //   ],
        // },

        // {
        //   name: "Lenovo Laptops",
        //   items: [
        //     "Lenovo ThinkPad - Legendary business laptops with TrackPoint",
        //     "Lenovo IdeaPad - Consumer laptops for home and office",
        //     "Lenovo Yoga - Flexible 2-in-1 convertible devices",
        //     "Lenovo Legion - High-performance gaming laptops",
        //   ],
        // },
        {
          name: "Dell Commercial Laptops",
          items: [
            "Dell Latitude 3000 Series - Essential business laptops for everyday productivity",
            "Dell Latitude 5000 Series - Mainstream business laptops with enhanced features",
            "Dell Latitude 7000 Series - Premium ultralight business laptops",
            "Dell Latitude 9000 Series - Ultra-premium flagship for executives",
            "Dell Latitude Rugged - Military-grade durability for extreme environments",
            "Dell Precision 3000 Series - Entry-level mobile workstations",
            "Dell Precision 5000 Series - Thin & light mobile workstations",
            "Dell Precision 7000 Series - High-performance mobile workstations",
          ],
        },
        {
          name: "HP Commercial Laptops",
          items: [
            "HP EliteBook 600 Series - Essential business laptops with security features",
            "HP EliteBook 800 Series - Premium business laptops for professionals",
            "HP EliteBook 1000 Series - Ultra-premium flagship business laptops",
            "HP EliteBook x360 - Convertible business laptops with pen support",
            "HP ProBook 400 Series - Reliable and affordable business solutions",
            "HP ProBook 600 Series - Performance-driven business laptops",
            "HP ZBook Firefly - Thin & light mobile workstations",
            "HP ZBook Studio - High-performance mobile workstations for creators",
          ],
        },
        {
          name: "Lenovo Commercial Laptops",
          items: [
            "Lenovo ThinkPad L Series - Essential business laptops with reliability",
            "Lenovo ThinkPad T Series - Mainstream business laptops for professionals",
            "Lenovo ThinkPad X Series - Ultra-portable premium business laptops",
            "Lenovo ThinkPad X1 Carbon - Flagship ultralight business laptop",
            "Lenovo ThinkPad X1 Yoga - Premium convertible with pen support",
            "Lenovo ThinkPad P Series - Mobile workstations for demanding tasks",
            "Lenovo ThinkPad E Series - Budget-friendly business laptops",
          ],
        },

        {
          name: "Apple MacBooks",
          items: [
            "MacBook Air M3 - Ultra-thin and light with all-day battery",
            "MacBook Pro 14 M3 Pro - Pro performance for professionals",
            "MacBook Pro 16 M3 Max - Ultimate power for demanding workflows",
            "MacBook Pro M4 - Next-gen performance with Apple Silicon",
          ],
        },
      ],
    },
    {
      title: "Desktops",
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
          className="lucide lucide-monitor h-7 w-7 text-primary"
        >
          <rect width="20" height="14" x="2" y="3" rx="2"></rect>
          <line x1="8" x2="16" y1="21" y2="21"></line>
          <line x1="12" x2="12" y1="17" y2="21"></line>
        </svg>
      ),

      brands: [
        // {
        //   name: "Dell Desktops",
        //   items: [
        //     "Dell OptiPlex - Reliable business desktops for enterprise",
        //     "Dell Precision - Professional workstations for demanding tasks",
        //     "Dell Inspiron Desktop - All-in-one and tower solutions",
        //     "Dell Vostro - Small business focused desktop systems",
        //   ],
        // },
        // {
        //   name: "HP Desktops",
        //   items: [
        //     "HP EliteDesk - Premium business desktop computers",
        //     "HP ProDesk - Efficient and secure business PCs",
        //     "HP Z Workstation - Professional workstations for creators",
        //     "HP All-in-One - Space-saving desktop solutions",
        //   ],
        // },
        // {
        //   name: "Lenovo Desktops",
        //   items: [
        //     "Lenovo ThinkCentre - Business desktops with reliability",
        //     "Lenovo ThinkStation - Powerful workstations for professionals",
        //     "Lenovo IdeaCentre - Consumer desktop towers and AIOs",
        //     "Lenovo Legion Tower - Gaming desktops with high performance",
        //   ],
        // },
        {
          name: "Dell Commercial Desktops",
          items: [
            "Dell OptiPlex Micro - Ultra-compact desktops for space-constrained environments",
            "Dell OptiPlex Small Form Factor - Balanced performance and size",
            "Dell OptiPlex Tower - Full-featured business desktop towers",
            "Dell OptiPlex All-in-One - Sleek all-in-one business desktops",
            "Dell Precision 3000 Series - Entry-level fixed workstations",
            "Dell Precision 5000 Series - Compact tower workstations",
            "Dell Precision 7000 Series - High-performance tower workstations",
          ],
        },
        {
          name: "HP Commercial Desktops",
          items: [
            "HP EliteDesk 600 Series - Essential business desktop PCs",
            "HP EliteDesk 800 Series - Premium business desktops with security",
            "HP EliteOne All-in-One - Stylish all-in-one business PCs",
            "HP ProDesk 400 Series - Affordable and reliable business desktops",
            "HP ProDesk 600 Series - Performance-driven business PCs",
            "HP Z2 Workstation - Entry-level professional workstations",
            "HP Z4/Z6/Z8 Workstation - High-end workstations for demanding workflows",
          ],
        },
        {
          name: "Lenovo Commercial Desktops",
          items: [
            "Lenovo ThinkCentre M Series Tiny - Ultra-small form factor desktops",
            "Lenovo ThinkCentre M Series SFF - Small form factor business PCs",
            "Lenovo ThinkCentre M Series Tower - Full-size business desktop towers",
            "Lenovo ThinkCentre Neo - Next-gen commercial desktops",
            "Lenovo ThinkStation P Series - Professional workstations",
            "Lenovo ThinkCentre All-in-One - Space-saving business AIOs",
          ],
        },
        {
          name: "Apple Mac Desktops",
          items: [
            "iMac M4 - Stunning 24-inch all-in-one with Apple Silicon",
            "Mac Mini M4 - Compact powerhouse for any workspace",
            "Mac Studio M4 Max/Ultra - Studio-grade performance for creators",
            "Mac Pro M2 Ultra - Ultimate workstation for professionals",
          ],
        },
      ],
    },

    {
      title: "Servers",
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
          className="lucide lucide-server h-7 w-7 text-primary"
        >
          <rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect>
          <rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect>
          <line x1="6" x2="6.01" y1="6" y2="6"></line>
          <line x1="6" x2="6.01" y1="18" y2="18"></line>
        </svg>
      ),
      brands: [
        {
          name: "Dell Servers",
          items: [
            "Dell PowerEdge Rack Servers - Scalable data center solutions",
            "Dell PowerEdge Tower Servers - Flexible office server options",
            "Dell PowerEdge Modular - High-density blade infrastructure",
            "Dell EMC Storage - Enterprise storage and backup solutions",
          ],
        },
        {
          name: "HP Servers",
          items: [
            "HPE ProLiant - Industry-leading rack and tower servers",
            "HPE Apollo - High-performance computing solutions",
            "HPE Synergy - Composable infrastructure platform",

            "HPE SimpliVity - Hyperconverged infrastructure systems",
          ],
        },
      ],
    },
    // ⭐ NEW SECTION ADDED
    {
      title: "Storage Solutions",
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
          className="lucide lucide-hard-drive h-7 w-7 text-primary"
        >
          <line x1="22" x2="2" y1="12" y2="12"></line>
          <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
          <line x1="6" x2="6.01" y1="16" y2="16"></line>
          <line x1="10" x2="10.01" y1="16" y2="16"></line>
        </svg>
      ),
      brands: [
        {
          name: "Dell Storage",
          items: [
            "Dell PowerVault - Direct-attached storage arrays",
            "Dell EMC Unity - Block & file unified storage",
            "Dell EMC PowerStore - Next-gen midrange storage",
            "Dell EMC DataDomain - Backup & recovery appliances",
          ],
        },
        {
          name: "HP Storage",
          items: [
            "HPE MSA Storage - SAN storage systems",
            "HPE Nimble Storage - Predictive flash arrays",
            "HPE Primera - Mission-critical storage",
            "HPE StoreOnce - Backup & disaster recovery",
          ],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-blue-400 text-white text-center py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          End User Computing
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto">
          Choose from our wide range of products for your end-user needs.
        </p>
      </section>

      {/* Product Grid */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        {/* Container for all product sections */}
        <div className="space-y-12">
          {products.map((section) => (
            <div key={section.title} className="bg-transparent">
              {/* Section header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-sky-100 text-sky-700 rounded-lg flex items-center justify-center shadow-sm shrink-0">
                  <div aria-hidden>{section.icons ?? section.img}</div>
                </div>

                <h2
                  className="text-xl md:text-[30px] font-bold text-slate-800 cursor-pointer"
                  onClick={() => {
                    // setSelectedProduct(section.title);
                    // setOpenModal(true);
                  }}
                >
                  {section.title}
                </h2>
              </div>

              {/* Responsive Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {section.brands.map((brand) => (
                  <div
                    key={brand.name}
                    className="cursor-pointer"
                    onClick={() => {
                      setSelectedProduct(brand.name);
                      setOpenModal(true);
                    }}
                  >
                    <article
                      className="
              bg-white
              rounded-xl
              shadow-[0_3px_14px_rgba(56,189,248,0.2)]
              hover:shadow-[0_6px_24px_rgba(56,189,248,0.6)]
              border
              border-slate-200
              p-5
              flex
              flex-col
              h-full
              transition-all
              duration-300
            "
                    >
                      <h3 className="text-sky-700 text-[18px] md:text-[20px] font-bold mb-3 text-left">
                        {brand.name}
                      </h3>

                      <ul className="ml-4 list-disc text-slate-600 small-text space-y-2 flex-1">
                        {brand.items.map((it, idx) => (
                          <li key={idx} className="leading-snug text-left">
                            {it}
                          </li>
                        ))}
                      </ul>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* ----------contact form------------- */}
      {openModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl w-full md:max-w-lg relative shadow-lg">
            <Form
              p_Title={selectedProduct}
              onClose={() => setOpenModal(false)}
              showClose={true}
            />
          </div>
        </div>
      )}

      {/* demo request */}
      {/* CTA - kept responsive */}
      <div className="mt-12">
        <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 md:p-10 shadow-lg border border-slate-200">
          <h3 className="text-lg md:text-2xl font-bold text-center text-slate-800">
            Interested in Our Products?
          </h3>
          <p className="text-center text-slate-600 small-text mt-3 max-w-2xl mx-auto">
            Get in touch with our team to learn more about how our products can
            address your specific business needs and drive measurable results.
          </p>

          <div className="flex justify-center mt-6">
            <Link to="/contact">
              <button className="bg-sky-400 hover:bg-sky-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg shadow-md">
                Request a Demo
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Storage Highlight Section */}
      {/* <section className="bg-white py-16 px-6 text-center shadow-inner">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">Storage</h2>
        <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Let us help you pick the right storage solutions from our wide product
          range customized to your requirements.
        </p>
      </section> */}

      {/* Footer Brand Section */}
      <section className="bg-gray-100 py-12 text-center">
        <p className="text-gray-700 font-semibold tracking-wide">
          VH'S TECHSPHERE PRIVATE LIMITED
        </p>
      </section>
    </div>
  );
}
// {
/* {products.map((product, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <div className="bg-blue-100 text-blue-600 w-12 h-12 flex items-center justify-center rounded-full mb-4 mx-auto text-lg font-bold">
                {product.title.charAt(0)}
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">
                {product.title}
              </h3>
              <p className="text-gray-600 text-center">
                {product.description}
              </p>
            </div>
          ))} */
// }
