// src/components/Hero.jsx
export default function Section1() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Upgrade Your Tech
        </h1>
        <p className="text-lg md:text-2xl mb-8 text-gray-700">
          Desktops, Laptops, and Servers for Every Need
        </p>
        <a
          href="/products"
          className="bg-blue-400 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Shop Now
        </a>
      </div>
    </section>
  );
}
