import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const serviceLinks = [
  { name: "House Washing", href: "/house-washing" },
  { name: "Window Cleaning", href: "/window-cleaning" },
  { name: "Gutter Cleaning", href: "/gutter-cleaning" },
  { name: "Roof Treatment", href: "/roof-treatment" },
  { name: "Driveway Cleaning", href: "/driveway-cleaning" },
  { name: "Deck & Fence Cleaning", href: "/deck-fence-cleaning" },
  { name: "Roof Wash", href: "/roof-wash" },
  { name: "Building Washing", href: "/building-washing" },
];

const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Get a Quote", href: "/instant-quote" },
];

export default function Footer() {
  return (
    <footer className="footer-bg text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/">
              <img
                src="https://aquabrother.co.nz/images/logos/logo_white.png"
                alt="Aqua Brother Logo"
                className="h-16 w-auto object-contain mb-5"
              />
            </Link>
            <p className="text-blue-200 text-sm leading-relaxed" style={{ fontFamily: "Open Sans, sans-serif" }}>
              Professional exterior cleaning services across Auckland. Making your
              property look its best with safe, eco-friendly solutions.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-white font-bold text-sm tracking-widest uppercase mb-5"
              style={{ fontFamily: "Montserrat, sans-serif", letterSpacing: "0.12em" }}
            >
              Services
            </h4>
            <ul className="flex flex-col gap-2.5">
              {serviceLinks.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-blue-200 text-sm hover:text-white transition-colors"
                    style={{ fontFamily: "Open Sans, sans-serif" }}
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4
              className="text-white font-bold text-sm tracking-widest uppercase mb-5"
              style={{ fontFamily: "Montserrat, sans-serif", letterSpacing: "0.12em" }}
            >
              Company
            </h4>
            <ul className="flex flex-col gap-2.5">
              {companyLinks.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="text-blue-200 text-sm hover:text-white transition-colors"
                    style={{ fontFamily: "Open Sans, sans-serif" }}
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-white font-bold text-sm tracking-widest uppercase mb-5"
              style={{ fontFamily: "Montserrat, sans-serif", letterSpacing: "0.12em" }}
            >
              Contact Us
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="tel:0221266069"
                  className="flex items-center gap-2.5 text-blue-200 text-sm hover:text-white transition-colors"
                  style={{ fontFamily: "Open Sans, sans-serif" }}
                >
                  <Phone size={15} className="flex-shrink-0" />
                  0221266069
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@aquabrother.co.nz"
                  className="flex items-center gap-2.5 text-blue-200 text-sm hover:text-white transition-colors"
                  style={{ fontFamily: "Open Sans, sans-serif" }}
                >
                  <Mail size={15} className="flex-shrink-0" />
                  hello@aquabrother.co.nz
                </a>
              </li>
              <li>
                <div
                  className="flex items-center gap-2.5 text-blue-200 text-sm"
                  style={{ fontFamily: "Open Sans, sans-serif" }}
                >
                  <MapPin size={15} className="flex-shrink-0" />
                  Auckland, New Zealand
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-blue-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="text-blue-300 text-xs"
            style={{ fontFamily: "Open Sans, sans-serif" }}
          >
            © 2025-2026 Aqua Brother Waterblasting Limited.
          </p>
          <p
            className="text-blue-300 text-xs"
            style={{ fontFamily: "Open Sans, sans-serif" }}
          >
            Website by{" "}
            <a
              href="https://pinpoint.digital/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors underline"
            >
              Pinpoint Digital
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
