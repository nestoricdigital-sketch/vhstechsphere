import React, { useState } from "react";
import { supabase } from "../../superbase/supabaseClient";
const Form = ({ productTitle, p_Title, onClose, showClose }) => {
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});
  console.log("message er:", errors);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    let { name, value } = e.target;

    // Phone Number Validation: Allow only Numbers
    if (name === "phone") {
      value = value.replace(/\D/g, ""); // remove non-digits
      if (value.length > 10) return; // restrict to 10 digits
    }
    // Message Validation (Live)
    if (name === "message") {
      const trimmed = value.trim();

      // Split words (letters only)
      const words = trimmed.match(/\b[a-zA-Z]{3,}\b/g);

      // Rule 1: Minimum 5 words
      if (!words || words.length < 5) {
        setErrors((prev) => ({
          ...prev,
          message: "Please enter at least 5 meaningful words.",
        }));
        setForm((prev) => ({ ...prev, [name]: value }));
        return;
      }

      // Rule 2: Each word must contain at least one vowel
      const meaningfulWords = words.filter((word) => /[aeiouAEIOU]/.test(word));

      if (meaningfulWords.length < 5) {
        setErrors((prev) => ({
          ...prev,
          message: "Please enter meaningful words (not random characters).",
        }));
      } else {
        setErrors((prev) => ({
          ...prev,
          message: "",
        }));
      }
    }

    setForm({ ...form, [name]: value });
  };

  // Disable button conditions
  const isDisabled =
    !form.name ||
    !form.email ||
    !form.phone ||
    form.phone.length !== 10 ||
    !form.subject ||
    !form.message ||
    errors.message;
  // must be exactly 10 digits

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");

    const { name, email, phone, subject, message } = form;

    // console.log("name", name, email, phone, subject, message);

    // console.log("serivce:", productTitle);
    // console.log("product:", p_Title);

    const { error } = await supabase.from("vhs_form").insert({
      name,
      email,
      phone,
      subject,
      message,
      // service: p_Title ?? productTitle,
      service: p_Title ?? productTitle ?? "",
    });
    // service: p_Title ? p_Title : productTitle,
    // const { error } = "";

    if (error) {
      console.log(error);
      setStatus("error");
    } else {
      setStatus("success");
      // setForm("");
      setForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }
  };

  return (
    <div className="flex justify-center items-center ">
      <div className="w-full max-w-3xl border border-gray-300 rounded-2xl p-8 shadow-sm bg-white">
        {showClose && (
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-600 hover:text-black"
          >
            ✖
          </button>
        )}
        <form onSubmit={handleSubmit} className="grid gap-4 md:gap-6 ">
          {/* Name & Email */}
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-start text-gray-700">
                Name *
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                maxLength={30}
                required
                type="text"
                placeholder="Enter your name"
                className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-semibold text-start text-gray-700">
                Email *
              </label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                type="email"
                placeholder="Enter your email"
                className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Phone & Subject */}
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-start text-gray-700">
                Phone *
              </label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                type="tel"
                maxLength={10}
                inputMode="numeric"
                placeholder="Enter phone number"
                className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              {form.phone && form.phone.length < 10 && (
                <p className="text-red-500 text-sm">Phone must be 10 digits</p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-semibold text-start text-gray-700">
                Subject *
              </label>
              <input
                name="subject"
                value={form.subject}
                onChange={handleChange}
                type="text"
                placeholder="Subject"
                className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-start text-gray-700">
              Message *
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="5"
              maxLength={200}
              placeholder="Write your message..."
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isDisabled}
            className={`py-3 rounded-lg font-semibold transition
            ${
              isDisabled
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }
          `}
          >
            Send Message
          </button>

          {/* Status Messages */}
          {status === "success" && (
            <p className="text-green-600 font-semibold text-center">
              ✅ Message Sent Successfully!
            </p>
          )}
          {status === "error" && (
            <p className="text-red-600 font-semibold text-center">
              ❌ Something went wrong. Try again!
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Form;
