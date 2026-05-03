'use client';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import LeadStreamEmbed from "@/components/LeadStreamEmbed";
import {
  Zap,
  Tag,
  Clock,
  CheckCircle,
  Star,
  Phone,
} from "lucide-react";
import Script from "next/script";

const testimonials = [
  {
    initial: "P",
    color: "#1a6fb8",
    name: "Peng Wang",
    time: "3 months ago",
    review:
      "Great team, thanks Peter and Matt did great job. I can't believe the house could be that clean. Highly recommend.",
  },
  {
    initial: "J",
    color: "#0f4f8a",
    name: "Jiebin Zhang",
    time: "a year ago",
    review:
      "Great communication and service. My deck and drive way look nice now thank for the great work guys. Definitely will come back next time and Thanks for the water bottle, love it.",
  },
  {
    initial: "P",
    color: "#2a8fd8",
    name: "Peter English",
    time: "5 months ago",
    review:
      "The house was washed carefully and responsibly, and the effect was as good as a new house. I am very satisfied 👍",
  },
  {
    initial: "G",
    color: "#00b4d8",
    name: "Grace Chen",
    time: "a year ago",
    review:
      "Highly recommend Aqua Brother for deck cleaning! Our deck was covered in mould, but now it looks brand new. The team was efficient and courteous throughout the process. Excellent service!",
  },
];

const guarantees = [
  "A fair price upfront — no surprises",
  "10% off when you book online",
  "If you find a better quote, we'll beat it",
  "Safe, eco-friendly products that actually work",
  "Fully insured, fully covered — so you don't worry",
  "A finish that makes you proud, or we'll put it right",
];

const whyBookOnline = [
  {
    icon: <Zap size={28} className="text-white" />,
    title: "Instant Pricing",
    desc: "Get your quote immediately without waiting for callbacks or emails.",
    bg: "linear-gradient(135deg, #1a6fb8, #0f4f8a)",
  },
  {
    icon: <Tag size={28} className="text-white" />,
    title: "10% Online Discount",
    desc: "Save money with our exclusive online booking discount. Excludes Package Deal Prices (Already discounted)",
    bg: "linear-gradient(135deg, #0f4f8a, #0a2a4a)",
  },
  {
    icon: <Clock size={28} className="text-white" />,
    title: "24/7 Availability",
    desc: "Book your service anytime, day or night, at your convenience.",
    bg: "linear-gradient(135deg, #2a8fd8, #1a6fb8)",
  },
];

export default function InstantQuotePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* ── Hero ──────────────────────────────────────────── */}
        <section
          className="relative py-20 overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #0a2a4a 0%, #0f4f8a 50%, #1a6fb8 100%)",
          }}
        >
          {/* Decorative circles */}
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
            style={{
              background: "radial-gradient(circle, #00b4d8, transparent)",
              transform: "translate(30%, -30%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10"
            style={{
              background: "radial-gradient(circle, #2a8fd8, transparent)",
              transform: "translate(-30%, 30%)",
            }}
          />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h1
              className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Get Y TESTIING SCRIPT
            </h1>
            <p
              className="text-blue-200 text-lg"
              style={{ fontFamily: "Open Sans, sans-serif" }}
            >
              Taking pride in property, Auckland wide.
            </p>
          </div>
        </section>

            {/* <div>
                <LeadStreamEmbed />
              </div> */}

              <div>
        <Script
          src="https://app.getleadstream.com/embed/S0NZS2Fpczg="
          strategy="afterInteractive"
          // onLoad={() => {
          //   const container = document.getElementById("leadstream_container");
          //   if (!container) return;
          //   container.innerHTML = "";
          //   const iframe = document.createElement("iframe");
          //   iframe.src = "https://www.app.getleadstream.com/KCYKais8/flows";
          //   iframe.style.width = "100%";
          //   iframe.style.height = "600px";
          //   iframe.style.border = "none";
          //   iframe.style.borderRadius = "8px";
          //   iframe.title = "LeadStream Quote Form";
          //   iframe.loading = "lazy";
          //   container.appendChild(iframe);
          //   window.addEventListener("message", (e) => {
          //     if (!e.origin.match("app.getleadstream.com")) return;
          //     const data = e.data;
          //     if (data?.height && typeof data.height === "number") {
          //       iframe.style.height = `${data.height}px`;
          //     }
          //     if (data?.event || data?.type) {
          //       (window as any).dataLayer = (window as any).dataLayer || [];
          //       (window as any).dataLayer.push({
          //         event: "leadstream.quote_generated",
          //         leadstream_event: data.type || data.event,
          //         leadstream_data: data,
          //       });
          //     }
          //   });
          // }}
        />
      </div>


        {/* ── Why Book Online ───────────────────────────────── */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p
                className="text-sm font-bold tracking-widest uppercase mb-3"
                style={{ color: "#1a6fb8", fontFamily: "Montserrat, sans-serif" }}
              >
                Why Book Online?
              </p>
              <h2
                className="text-3xl sm:text-4xl font-black text-gray-900"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Get instant pricing and exclusive online discounts
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {whyBookOnline.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                  style={{ background: "#fff", border: "1px solid #e5e7eb" }}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: item.bg }}
                  >
                    {item.icon}
                  </div>
                  <h3
                    className="text-lg font-bold text-gray-900 mb-2"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-gray-500 text-sm leading-relaxed"
                    style={{ fontFamily: "Open Sans, sans-serif" }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Before / After + Quote Form ───────────────────── */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 items-start">
              {/* Before/After Slider */}
              <div>
                <BeforeAfterSlider
                  afterSrc="https://aquabrother.co.nz/images/gallery/before-after/house-washing/after/hwafter1.jpg"
                  beforeSrc="https://aquabrother.co.nz/images/gallery/before-after/house-washing/before/hwbefore1.jpg"
                  beforeAlt="House before washing"
                  afterAlt="House after washing"
                />
                <p
                  className="text-center text-xs text-gray-400 mt-3"
                  style={{ fontFamily: "Open Sans, sans-serif" }}
                >
                  Drag the handle to compare before &amp; after
                  Testing ABHISHEK
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Our Guarantee ─────────────────────────────────── */}
        <section
          className="py-16"
          style={{
            background:
              "linear-gradient(135deg, #0a2a4a 0%, #0f4f8a 60%, #1a6fb8 100%)",
          }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <p
                className="text-sm font-bold tracking-widest uppercase text-blue-300 mb-3"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                OUR GUARANTEE
              </p>
              <h2
                className="text-3xl sm:text-4xl font-black text-white"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Why Choose Aqua Brother?
              </h2>
              <p
                className="text-blue-200 mt-3"
                style={{ fontFamily: "Open Sans, sans-serif" }}
              >
                We don&apos;t mess you around. You&apos;ll get:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {guarantees.map((item) => (
                <div key={item} className="guarantee-item">
                  <CheckCircle
                    size={22}
                    className="flex-shrink-0 mt-0.5"
                    style={{ color: "#00b4d8" }}
                  />
                  <span
                    className="text-white text-sm"
                    style={{ fontFamily: "Open Sans, sans-serif" }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <p
              className="text-center text-blue-300 font-semibold mb-8"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Simple as that.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/instant-quote"
                className="px-8 py-4 rounded-full font-bold text-white text-sm text-center shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all"
                style={{
                  background: "linear-gradient(135deg, #00b4d8, #1a6fb8)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                Instant Quote
              </a>
              <a
                href="tel:0221266069"
                className="px-8 py-4 rounded-full font-bold text-white text-sm text-center border-2 border-white/40 hover:border-white transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                <Phone size={16} />
                022 126 6069
              </a>
            </div>
          </div>
        </section>

        {/* ── Testimonials ──────────────────────────────────── */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2
                className="text-3xl sm:text-4xl font-black text-gray-900"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                What Our Customers Say
              </h2>
              <p
                className="text-gray-500 mt-3"
                style={{ fontFamily: "Open Sans, sans-serif" }}
              >
                See why locals choose Aqua Brother again and again.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {testimonials.map((t) => (
                <div key={t.name} className="testimonial-card">
                  {/* Stars */}
                  <div className="stars text-lg mb-3">★★★★★</div>

                  {/* Review */}
                  <p
                    className="text-gray-600 text-sm leading-relaxed mb-5"
                    style={{ fontFamily: "Open Sans, sans-serif" }}
                  >
                    &ldquo;{t.review}&rdquo;
                  </p>

                  {/* Reviewer */}
                  <div className="flex items-center gap-3 mt-auto">
                    <div
                      className="reviewer-avatar"
                      style={{ background: t.color }}
                    >
                      {t.initial}
                    </div>
                    <div>
                      <p
                        className="font-bold text-gray-900 text-sm"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        {t.name}
                      </p>
                      <p
                        className="text-gray-400 text-xs"
                        style={{ fontFamily: "Open Sans, sans-serif" }}
                      >
                        {t.time}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA Banner ────────────────────────────────────── */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2
              className="text-3xl sm:text-4xl font-black text-gray-900 mb-3"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Book Your Wash.
            </h2>
            <p
              className="text-gray-500 mb-8"
              style={{ fontFamily: "Open Sans, sans-serif" }}
            >
              Fast quote. Fair price. A finish you&apos;ll be proud of.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0221266069"
                className="px-8 py-4 rounded-full font-bold text-sm text-white text-center shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
                style={{
                  background: "linear-gradient(135deg, #0a2a4a, #0f4f8a)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                <Phone size={16} />
                Call Us
              </a>
              <a
                href="/instant-quote"
                className="px-8 py-4 rounded-full font-bold text-sm text-center border-2 border-brand-blue hover:-translate-y-0.5 transition-all"
                style={{
                  color: "#1a6fb8",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                Get a quote
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
