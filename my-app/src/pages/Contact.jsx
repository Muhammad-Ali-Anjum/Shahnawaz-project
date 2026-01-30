import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import PageHero from "../components/PageHero.jsx";

function Contact() {
  return (
    <>
      {/* Hero */}
      <div className="mt-20">
        <PageHero
          title="Contact Us"
          subtitle="We would love to hear from you. Our team is ready to help you."
          breadcrumb={["Home", "Contact"]}
        />
      </div>

      {/* Main Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left - Info & Text */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 mb-3">
                Get in touch with our team
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Whether you have questions about our courses, admissions or
                training programs, our team is here to guide you in starting
                your professional learning journey.
              </p>
            </div>

            {/* Info cards */}
            <div className="space-y-5">

              <div className="flex items-start gap-4 p-5 rounded-xl border bg-white shadow-sm">
                <div className="p-3 rounded-lg bg-blue-50 text-blue-600">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Email</p>
                  <p className="text-gray-600 text-sm">
                    info@nextplanneracademy.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-xl border bg-white shadow-sm">
                <div className="p-3 rounded-lg bg-blue-50 text-blue-600">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Phone</p>
                  <p className="text-gray-600 text-sm">
                    +92 3XX XXXXXXX
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-xl border bg-white shadow-sm">
                <div className="p-3 rounded-lg bg-blue-50 text-blue-600">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Location</p>
                  <p className="text-gray-600 text-sm">
                    Next Planner Academy, Skardu – Gilgit-Baltistan
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right - Form */}
          <div className="relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 opacity-20 blur"></div>

            <div className="relative bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Send us a message
              </h3>

              <form className="space-y-5">
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Full name
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="mt-1 w-full rounded-lg border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="mt-1 w-full rounded-lg border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Write your message here..."
                    className="mt-1 w-full rounded-lg border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center w-full rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700 transition"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* Map */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 pb-20">
          <div className="overflow-hidden rounded-2xl border shadow">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3256.669918091883!2d75.6334293!3d35.2893322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e4630003a33449%3A0xc29adbe0ce3a4a51!2sNext%20planner%20Academy!5e0!3m2!1sen!2s!4v1769764425975!5m2!1sen!2s"
              className="w-full h-[420px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Next Planner Academy Location"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
