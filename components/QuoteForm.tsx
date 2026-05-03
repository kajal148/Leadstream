"use client";

import { useState } from "react";
import { CheckCircle, Loader2 } from "lucide-react";

const SERVICES = [
  "House Washing",
  "Window Cleaning",
  "Gutter Cleaning",
  "Roof Treatment",
  "Driveway Cleaning",
  "Deck & Fence Cleaning",
  "Roof Wash",
  "Building Washing",
];

const PROPERTY_TYPES = [
  "Single Storey House",
  "Double Storey House",
  "Apartment / Unit",
  "Commercial Building",
  "Other",
];

const HOW_SOON = [
  "As soon as possible",
  "Within 2 weeks",
  "Within a month",
  "Just getting a quote",
];

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  suburb: string;
  propertyType: string;
  services: string[];
  howSoon: string;
  notes: string;
};

const defaultForm: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  suburb: "",
  propertyType: "",
  services: [],
  howSoon: "",
  notes: "",
};

export default function QuoteForm() {
  const [form, setForm] = useState<FormState>(defaultForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  const toggleService = (service: string) => {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormState, string>> = {};
    if (!form.firstName.trim()) newErrors.firstName = "First name is required";
    if (!form.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Valid email is required";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    if (!form.address.trim()) newErrors.address = "Address is required";
    if (!form.suburb.trim()) newErrors.suburb = "Suburb is required";
    if (!form.propertyType) newErrors.propertyType = "Please select a property type";
    if (form.services.length === 0) newErrors.services = "Please select at least one service";
    if (!form.howSoon) newErrors.howSoon = "Please select a timeframe";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    // Simulate API call — replace with your actual endpoint
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="quote-form-section p-10 flex flex-col items-center text-center gap-6">
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center"
          style={{ background: "linear-gradient(135deg, #1a6fb8, #0f4f8a)" }}
        >
          <CheckCircle size={40} color="white" />
        </div>
        <div>
          <h3
            className="text-2xl font-bold text-gray-900 mb-2"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Quote Request Received!
          </h3>
          <p className="text-gray-600 max-w-md">
            Thanks {form.firstName}! We&apos;ll review your details and get back to you
            with a tailored quote shortly. Check your inbox at{" "}
            <strong>{form.email}</strong>.
          </p>
        </div>
        <div
          className="px-5 py-3 rounded-full text-white font-bold text-sm cursor-pointer"
          style={{
            background: "linear-gradient(135deg, #1a6fb8, #0f4f8a)",
            fontFamily: "Montserrat, sans-serif",
          }}
          onClick={() => { setSubmitted(false); setForm(defaultForm); }}
        >
          Submit Another Quote
        </div>
      </div>
    );
  }

  return (
    <div className="quote-form-section p-6 md:p-10">
      <div className="mb-8">
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-white text-sm font-semibold mb-4"
          style={{
            background: "linear-gradient(135deg, #1a6fb8, #0f4f8a)",
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          10% Online Discount Applied
        </div>
        <h2
          className="text-2xl font-bold text-gray-900"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Get Your Instant Quote
        </h2>
        <p className="text-gray-500 mt-1 text-sm">
          Fill in your details below and we&apos;ll send you a tailored quote — no
          waiting, no callbacks.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
        {/* Name row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="form-field">
            <label htmlFor="firstName">First Name *</label>
            <input
              id="firstName"
              type="text"
              placeholder="John"
              value={form.firstName}
              onChange={(e) => setForm({ ...form, firstName: e.target.value })}
              className={errors.firstName ? "border-red-400" : ""}
            />
            {errors.firstName && (
              <span className="text-red-500 text-xs">{errors.firstName}</span>
            )}
          </div>
          <div className="form-field">
            <label htmlFor="lastName">Last Name *</label>
            <input
              id="lastName"
              type="text"
              placeholder="Smith"
              value={form.lastName}
              onChange={(e) => setForm({ ...form, lastName: e.target.value })}
              className={errors.lastName ? "border-red-400" : ""}
            />
            {errors.lastName && (
              <span className="text-red-500 text-xs">{errors.lastName}</span>
            )}
          </div>
        </div>

        {/* Contact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="form-field">
            <label htmlFor="email">Email Address *</label>
            <input
              id="email"
              type="email"
              placeholder="john@example.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={errors.email ? "border-red-400" : ""}
            />
            {errors.email && (
              <span className="text-red-500 text-xs">{errors.email}</span>
            )}
          </div>
          <div className="form-field">
            <label htmlFor="phone">Phone Number *</label>
            <input
              id="phone"
              type="tel"
              placeholder="022 123 4567"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className={errors.phone ? "border-red-400" : ""}
            />
            {errors.phone && (
              <span className="text-red-500 text-xs">{errors.phone}</span>
            )}
          </div>
        </div>

        {/* Address */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="form-field">
            <label htmlFor="address">Street Address *</label>
            <input
              id="address"
              type="text"
              placeholder="123 Example Street"
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
              className={errors.address ? "border-red-400" : ""}
            />
            {errors.address && (
              <span className="text-red-500 text-xs">{errors.address}</span>
            )}
          </div>
          <div className="form-field">
            <label htmlFor="suburb">Suburb *</label>
            <input
              id="suburb"
              type="text"
              placeholder="Ponsonby"
              value={form.suburb}
              onChange={(e) => setForm({ ...form, suburb: e.target.value })}
              className={errors.suburb ? "border-red-400" : ""}
            />
            {errors.suburb && (
              <span className="text-red-500 text-xs">{errors.suburb}</span>
            )}
          </div>
        </div>

        {/* Property Type */}
        <div className="form-field">
          <label htmlFor="propertyType">Property Type *</label>
          <select
            id="propertyType"
            value={form.propertyType}
            onChange={(e) => setForm({ ...form, propertyType: e.target.value })}
            className={errors.propertyType ? "border-red-400" : ""}
          >
            <option value="">Select property type...</option>
            {PROPERTY_TYPES.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
          {errors.propertyType && (
            <span className="text-red-500 text-xs">{errors.propertyType}</span>
          )}
        </div>

        {/* Services */}
        <div className="form-field">
          <label>Services Required *</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1">
            {SERVICES.map((service) => {
              const checked = form.services.includes(service);
              return (
                <label
                  key={service}
                  className={`service-checkbox ${checked ? "checked" : ""}`}
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggleService(service)}
                  />
                  <span className="text-sm font-medium text-gray-700">
                    {service}
                  </span>
                </label>
              );
            })}
          </div>
          {errors.services && (
            <span className="text-red-500 text-xs">{errors.services}</span>
          )}
        </div>

        {/* How Soon */}
        <div className="form-field">
          <label htmlFor="howSoon">How soon do you need this done? *</label>
          <select
            id="howSoon"
            value={form.howSoon}
            onChange={(e) => setForm({ ...form, howSoon: e.target.value })}
            className={errors.howSoon ? "border-red-400" : ""}
          >
            <option value="">Select timeframe...</option>
            {HOW_SOON.map((h) => (
              <option key={h} value={h}>
                {h}
              </option>
            ))}
          </select>
          {errors.howSoon && (
            <span className="text-red-500 text-xs">{errors.howSoon}</span>
          )}
        </div>

        {/* Notes */}
        <div className="form-field">
          <label htmlFor="notes">Additional Notes (optional)</label>
          <textarea
            id="notes"
            rows={4}
            placeholder="Any extra details about your property or specific requirements..."
            value={form.notes}
            onChange={(e) => setForm({ ...form, notes: e.target.value })}
          />
        </div>

        {/* Discount badge + submit */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button
            type="submit"
            disabled={loading}
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-white text-base shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all disabled:opacity-70 disabled:cursor-not-allowed w-full sm:w-auto"
            style={{
              background: "linear-gradient(135deg, #1a6fb8, #0f4f8a)",
              fontFamily: "Montserrat, sans-serif",
              minWidth: "220px",
            }}
          >
            {loading ? (
              <>
                <Loader2 size={18} className="animate-spin" /> Submitting...
              </>
            ) : (
              "Get My Free Quote →"
            )}
          </button>
          <p className="text-xs text-gray-500 text-center sm:text-left">
            No spam. No callbacks. Your 10% online discount will be applied
            automatically.
          </p>
        </div>
      </form>
    </div>
  );
}
