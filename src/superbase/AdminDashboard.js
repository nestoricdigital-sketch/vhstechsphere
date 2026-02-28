import { useEffect, useState } from "react";
import { supabase } from "../superbase/supabaseClient";

export default function AdminDashboard() {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState(null);
  //const adminEmail = localStorage.getItem("admin_email"); // saved at login

  const fetchForms = async () => {
    const { data, error } = await supabase
      .from("vhs_form")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error) setData(data);
  };

  useEffect(() => {
    fetchForms();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("admin");
    localStorage.removeItem("admin_email");
    window.location.href = "/admin-login";
  };

  return (
    <div className="flex min-h-screen w-full flex-col md:flex-row">
      {/* LEFT SIDEBAR */}
      <div className="w-full md:w-[20%] bg-slate-300 flex flex-col justify-between p-4 shadow-lg">
        <div className="md:py-2">
          <h1 className="text-xl md:text-3xl text-blue-400 font-bold">
            VH's TechSphere
          </h1>

          <button className="mt-6 w-full text-left font-semibold px-3 py-2 rounded bg-gray-100">
            Overview
          </button>
        </div>

        <button
          onClick={() => {
            handleLogout();
          }}
          className="text-red-600 text-right md:text-center font-semibold px-3 py-2 rounded hover:bg-red-100"
        >
          Logout
        </button>
      </div>

      {/* RIGHT CONTENT */}
      <div className="w-full md:w-[80%]">
        {/* TOP BAR */}
        <div className="flex justify-between items-center bg-slate-300 px-4 py-4 md:px-6 md:py-6">
          <h2 className="text-xl md:text-2xl font-bold">Admin Dashboard</h2>

          <div className="text-right">
            <h1 className="text-xs text-[14px] md:text-[16px] text-gray-500">
              Admin
            </h1>
            <h4 className="font-semibold text-[12px] md:text-[14px]">
              info@vhtechsphere.com
            </h4>
          </div>
        </div>

        {/* LIST SECTION */}
        <div className="w-full px-4 md:px-6 mt-4 mb-6 space-y-3">
          {/* LABEL ROW – hidden on mobile */}
          <div className="flex md:flex justify-between md:mx-4 mb-2 text-gray-400">
            <p>message</p>
            <p>date</p>
          </div>

          {data.map((f) => (
            <div
              key={f.id}
              onClick={() => setSelected(f)}
              className="bg-white p-2 md:p-4 rounded-lg border cursor-pointer hover:shadow-md hover:scale-[1.01] transition-all"
            >
              {/* MESSAGE + TIME */}
              <div className="flex justify-between items-start gap-4">
                <p className="text-gray-900 font-medium items-start break-words">
                  {f.message.length > 70
                    ? f.message.slice(0, 70) + "..."
                    : f.message}
                </p>

                <span className="text-xs text-gray-500 whitespace-nowrap">
                  {new Date(f.created_at).toLocaleString()}
                </span>
              </div>

              {/* NAME + EMAIL */}
              {/* <div className="text-sm text-gray-600 mt-2 break-words">
                <span className="font-semibold">{f.name}</span> • {f.email}
              </div> */}
            </div>
          ))}
        </div>

        {/* DETAILS MODAL */}
        {selected && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-lg w-full relative">
              {/* Close Button */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
              >
                ✖
              </button>

              {/* Modal Content */}
              <div className="space-y-3 text-left">
                <div>
                  <span className="font-semibold">Name:</span>
                  <span className="ml-2">{selected.name}</span>
                </div>

                <div>
                  <span className="font-semibold">Email:</span>
                  <span className="ml-2">{selected.email}</span>
                </div>

                <div>
                  <span className="font-semibold">Phone:</span>
                  <span className="ml-2">{selected.phone || "-"}</span>
                </div>

                <div>
                  <span className="font-semibold">Subject:</span>
                  <span className="ml-2">
                    {selected.subject ? selected.subject : ""}
                  </span>
                </div>

                <div>
                  <span className="font-semibold">Message:</span>
                  <span className="ml-2">{selected.message}</span>
                </div>

                <div className="pt-2 text-sm text-gray-500">
                  <span className="font-semibold">Submitted:</span>
                  <span className="ml-2">
                    {new Date(selected.created_at).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
