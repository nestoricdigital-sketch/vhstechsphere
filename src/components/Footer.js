// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-4 md:py-6 ">
      <div
        className="max-w-7xl mx-auto text-[10px] md:text-[12px] 
     flex flex-col md:flex-row 
     items-start md:items-center 
     justify-between 
     gap-2 md:gap-0 
     px-2 md:px-4"
      >
        <p>
          &copy; {new Date().getFullYear()} Vh'sTechSphere. All rights reserved.
        </p>

        <p>
          Design & Developed by{" "}
          <a
            href="https://www.nestoricdigital.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:text-blue-400"
          >
            Nestoric Digital
          </a>
        </p>
      </div>
    </footer>
  );
}
