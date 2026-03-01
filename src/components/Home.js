// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
import StickyBox from "./StickyBox";
import banner from "./images/banner.png";
import computer from "./images/computers.jpg";
import server from "./images/servers.jpg";
import lap from "./images/laptops.jpg";
import ecomp from "./images/computeTech.jpg";
import {
  Link,
  //  useLocation,
  useNavigate,
} from "react-router-dom";
import { useState } from "react";

const featuredProducts = [
  {
    name: "High-Performance Desktop",
    description: "Powerful desktops for gaming and enterprise.",
    img: computer,
  },
  {
    name: "Modern Laptops",
    description: "Portable laptops with high productivity.",
    img: lap,
  },
  {
    name: "Enterprise Servers",
    description: "Reliable servers for business operations.",
    img: server,
  },
];

const services = [
  {
    title: "Desktop and End-User Support",
    description:
      "Expert support for desktops and end-users, resolving issues promptly for efficient productivity.",
  },
  {
    title: "End-to-End User Support",
    description:
      "Addressing technical issues across hardware, software, and network for a hassle-free experience.",
  },
];

const philosophy = [
  {
    title: "Tech Savvy",
    description:
      "We stay updated with the latest technology, delivering solutions with simplicity and excellence.",
  },
  {
    title: "Innovation",
    description:
      "Innovation fuels progress. Fresh ideas, collaboration, and creativity drive us forward.",
  },
  {
    title: "Strive for Excellence",
    description:
      "Excellence is progress, refining skills, and celebrating small victories to transform ordinary into extraordinary.",
  },
];

//
export default function Home() {
  const navigate = useNavigate();
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;

    const moveX = (e.clientX - innerWidth / 2) / 30;
    const moveY = (e.clientY - innerHeight / 2) / 30;

    setPosition({ x: moveX, y: moveY });
  };

  const goToForm = () => {
    navigate("/contact");

    // small delay to wait for Contact page to render
    setTimeout(() => {
      window.location.hash = "form";
    }, 300);
  };

  return (
    <>
      {/* <Navbar /> */}

      {/* Hero Section */}
      {/* Hero Section */}
      <section
        onMouseMove={handleMouseMove}
        className="relative py-24 px-4 text-center overflow-hidden"
      >
        {/* Moving Background */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-200 ease-out"
          style={{
            backgroundImage: `url(${banner})`,
            transform: `translate(${position.x}px, ${position.y}px) scale(1.1)`,
          }}
        ></div>
        <div className="absolute inset-0 bg-white bg-opacity-20 backdrop-blur-sm"></div>

        <div className="relative z-10 w-full md:max-w-5xl text-center mx-auto text-white px-4">
          {/* Line 1 */}
          <h1 className="text-4xl md:text-9xl font-extrabold leading-tight animate-slide-left">
            Dive into our
          </h1>

          {/* Line 2 */}
          <h1 className="text-4xl md:text-9xl font-extrabold leading-tight animate-slide-right [animation-delay:0.3s]">
            Revolutionary
          </h1>

          {/* Line 3 */}
          <h1 className="text-4xl  md:text-9xl font-extrabold leading-tight mb-6 animate-slide-left [animation-delay:0.6s]">
            Technologies
          </h1>

          <p className="text-base sm:text-lg md:text-2xl mb-6 leading-relaxed">
            VH'S TECHSPHERE PRIVATE LIMITED empowers businesses with
            cutting-edge technology solutions
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/services"
              className="bg-blue-400 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold w-full sm:w-auto"
            >
              Explore Service
            </Link>

            <button
              onClick={goToForm}
              className="border border-white text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold w-full sm:w-auto"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Products
        </h2>
        <p className="text-center small-text text-gray-600 mb-8">
          Here is a select few featured products. Visit our products page for
          detailed information.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          {featuredProducts.map((product, idx) => (
            <div
              key={idx}
              className="border rounded-lg overflow-hidden   shadow-[0_3px_14px_rgba(56,189,248,0.2)]

    hover:shadow-[0_6px_24px_rgba(56,189,248,0.6)] transition"
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-52 object-cover opacity-80"
              />
              <div className="p-4">
                <h3 className="text-[24px] font-semibold mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 small-text">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Enterprise Computing */}
      <section className="bg-blue-50 py-16 px-4">
        <div className="max-w-7xl mx-auto md:flex md:items-center md:gap-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">Enterprise Computing</h2>
            <p className="text-gray-700 small-text">
              Our enterprise computing solutions provide hardware and software
              solutions tailored to meet the demanding requirements of modern
              businesses.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={ecomp}
              alt="Enterprise Computing"
              className="rounded-lg shadow-lg opacity-80"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Services
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg    shadow-[0_3px_14px_rgba(56,189,248,0.2)]

    hover:shadow-[0_6px_24px_rgba(56,189,248,0.6)] transition"
            >
              <h3 className="text-[24px] font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 small-text">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-gray-50 py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Philosophy</h2>
        <div className="grid gap-8 md:grid-cols-3 max-w-7xl mx-auto">
          {philosophy.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg   shadow-[0_3px_14px_rgba(56,189,248,0.2)]

    hover:shadow-[0_6px_24px_rgba(56,189,248,0.6)] transition text-center"
            >
              <h3 className="text-[24px] font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 small-text">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-100 to-blue-200 text-black py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready for Help?</h2>
        <p className="mb-8 small-text">
          Need a service? Get a quote or get in touch with us today!
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          {/* <button
            onClick={goToForm}
            className="bg-blue-400 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            Get a Quote
          </button> */}
          <button
            onClick={goToForm}
            className="small-text border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white transition"
          >
            Get In Touch
          </button>
        </div>
      </section>

      <StickyBox />
    </>
  );
}
