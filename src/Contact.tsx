import { Navbar } from "./components/Navbar";
import { Phone, Mail, Clock, MapPin, Wrench } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    serviceType: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("https://formspree.io/f/xkogdwkv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          serviceType: "",
          message: ""
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-[#35393C]">
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center justify-center bg-gradient-to-b from-[#424850] to-[#35393C]">
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-[#F3F3F3] mb-4 font-['Oswald'] text-5xl tracking-wide" style={{ WebkitTextStroke: '1.5px #B6281A', paintOrder: 'stroke fill', letterSpacing: '0.02em' }}>
            Contact Us
          </h1>
          <p className="text-[#B0B0B0] font-['Inter'] text-xl">
            Get in touch for dispatch, estimates, service inquiries, or employment opportunities
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div>
              <h2 className="text-[#F3F3F3] mb-6 font-['Montserrat'] text-3xl">
                Send Us a Message
              </h2>
              <p className="text-[#B0B0B0] mb-8 font-['Inter']">
                Fill out the form below and our team will respond promptly to your inquiry.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-[#F3F3F3] mb-2 font-['Inter']">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#424850] border border-[#555B63] text-[#F3F3F3] rounded-lg focus:outline-none focus:border-[#B6281A] font-['Inter']"
                    placeholder="Your full name"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-[#F3F3F3] mb-2 font-['Inter']">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#424850] border border-[#555B63] text-[#F3F3F3] rounded-lg focus:outline-none focus:border-[#B6281A] font-['Inter']"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-[#F3F3F3] mb-2 font-['Inter']">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#424850] border border-[#555B63] text-[#F3F3F3] rounded-lg focus:outline-none focus:border-[#B6281A] font-['Inter']"
                      placeholder="(780) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-[#F3F3F3] mb-2 font-['Inter']">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#424850] border border-[#555B63] text-[#F3F3F3] rounded-lg focus:outline-none focus:border-[#B6281A] font-['Inter']"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="serviceType" className="block text-[#F3F3F3] mb-2 font-['Inter']">
                    Service Type
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#424850] border border-[#555B63] text-[#F3F3F3] rounded-lg focus:outline-none focus:border-[#B6281A] font-['Inter']"
                  >
                    <option value="">Select a service</option>
                    <option value="pipefitting">Pipefitting & Fabrication</option>
                    <option value="welding">Welding Services</option>
                    <option value="3d-scanning">3D Scanning & Modeling</option>
                    <option value="maintenance">Maintenance & Turnarounds</option>
                    <option value="emergency">Emergency Dispatch</option>
                    <option value="employment">Employment Opportunities</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-[#F3F3F3] mb-2 font-['Inter']">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-[#424850] border border-[#555B63] text-[#F3F3F3] rounded-lg focus:outline-none focus:border-[#B6281A] font-['Inter'] resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                {/* Success Message */}
                {submitStatus === "success" && (
                  <div className="bg-green-900/30 border border-green-700 text-green-300 px-4 py-3 rounded-lg font-['Inter']">
                    Thank you for your inquiry. We'll get back to you shortly.
                  </div>
                )}

                {/* Error Message */}
                {submitStatus === "error" && (
                  <div className="bg-red-900/30 border border-red-700 text-red-300 px-4 py-3 rounded-lg font-['Inter']">
                    Something went wrong. Please try again or contact us directly at (780) 536-7868.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-[#B6281A] text-[#F3F3F3] rounded-lg hover:bg-[#E04E2C] transition-colors duration-300 font-['Montserrat'] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-[#F3F3F3] mb-6 font-['Montserrat'] text-3xl">
                  Contact Information
                </h2>
                
                {/* Phone Numbers */}
                <div className="bg-[#424850] rounded-lg p-6 border border-[#555B63] mb-6">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg flex-shrink-0">
                      <Phone className="w-6 h-6 text-[#B6281A] drop-shadow-[0_0_8px_rgba(182,40,26,0.6)]" />
                    </div>
                    <div>
                      <h3 className="text-[#F3F3F3] mb-3 font-['Montserrat'] text-xl">
                        Phone
                      </h3>
                      <div className="space-y-2">
                        <a href="tel:7805367868" className="block text-[#B0B0B0] hover:text-[#E04E2C] transition-colors font-['Inter']">
                          (780) 536-7868
                        </a>
                        <a href="tel:7805230534" className="block text-[#B0B0B0] hover:text-[#E04E2C] transition-colors font-['Inter']">
                          (780) 523-0534
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Email Addresses */}
                <div className="bg-[#424850] rounded-lg p-6 border border-[#555B63] mb-6">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg flex-shrink-0">
                      <Mail className="w-6 h-6 text-[#B6281A] drop-shadow-[0_0_8px_rgba(182,40,26,0.6)]" />
                    </div>
                    <div>
                      <h3 className="text-[#F3F3F3] mb-3 font-['Montserrat'] text-xl">
                        Email
                      </h3>
                      <a href="mailto:info@mccooloilfield.com" className="block text-[#B0B0B0] hover:text-[#E04E2C] transition-colors font-['Inter'] break-all">
                        info@mccooloilfield.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="bg-[#424850] rounded-lg p-6 border border-[#555B63] mb-6">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg flex-shrink-0">
                      <Clock className="w-6 h-6 text-[#B6281A] drop-shadow-[0_0_8px_rgba(182,40,26,0.6)]" />
                    </div>
                    <div>
                      <h3 className="text-[#F3F3F3] mb-3 font-['Montserrat'] text-xl">
                        Availability
                      </h3>
                      <div className="space-y-2 text-[#B0B0B0] font-['Inter']">
                        <p className="text-[#B6281A]">24/7 Emergency Dispatch</p>
                        <p>Office Hours: Monday - Friday</p>
                        <p>7:00 AM - 5:00 PM MST</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="bg-[#424850] rounded-lg p-6 border border-[#555B63]">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg flex-shrink-0">
                      <MapPin className="w-6 h-6 text-[#B6281A] drop-shadow-[0_0_8px_rgba(182,40,26,0.6)]" />
                    </div>
                    <div>
                      <h3 className="text-[#F3F3F3] mb-3 font-['Montserrat'] text-xl">
                        Locations
                      </h3>
                      <div className="space-y-4 text-[#B0B0B0] font-['Inter']">
                        <div>
                          <p className="text-[#F3F3F3]">Grande Prairie, AB</p>
                          <p>9420 141 Ave</p>
                          <p>T8V 8E2</p>
                        </div>
                        <div>
                          <p className="text-[#F3F3F3]">Valleyview, AB</p>
                          <p>3606 46 St</p>
                          <p>T0H 3N0</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Request Details */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#35393C] to-[#424850]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[#F3F3F3] mb-4 font-['Montserrat'] text-3xl">
              How We Can Help
            </h2>
            <p className="text-[#B0B0B0] font-['Inter'] text-lg max-w-3xl mx-auto">
              Whether you need immediate dispatch or want to discuss an upcoming project, we're ready to assist
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#424850] rounded-lg p-8 border border-[#555B63]">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg mb-6">
                <Phone className="w-8 h-8 text-[#B6281A] drop-shadow-[0_0_8px_rgba(182,40,26,0.6)]" />
              </div>
              <h3 className="text-[#F3F3F3] mb-4 font-['Montserrat'] text-xl">
                Emergency Dispatch
              </h3>
              <p className="text-[#B0B0B0] font-['Inter'] mb-4">
                Need immediate service? Our 24/7 dispatch team is standing by to mobilize crews for urgent situations.
              </p>
              <p className="text-[#B6281A] font-['Inter']">
                Call anytime, day or night
              </p>
            </div>

            <div className="bg-[#424850] rounded-lg p-8 border border-[#555B63]">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg mb-6">
                <Wrench className="w-8 h-8 text-[#B6281A] drop-shadow-[0_0_8px_rgba(182,40,26,0.6)]" />
              </div>
              <h3 className="text-[#F3F3F3] mb-4 font-['Montserrat'] text-xl">
                Project Estimates
              </h3>
              <p className="text-[#B0B0B0] font-['Inter'] mb-4">
                Planning a turnaround, construction project, or facility upgrade? Contact us for detailed estimates and project planning.
              </p>
              <p className="text-[#B6281A] font-['Inter']">
                Detailed scope review included
              </p>
            </div>

            <div className="bg-[#424850] rounded-lg p-8 border border-[#555B63]">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg mb-6">
                <Mail className="w-8 h-8 text-[#B6281A] drop-shadow-[0_0_8px_rgba(182,40,26,0.6)]" />
              </div>
              <h3 className="text-[#F3F3F3] mb-4 font-['Montserrat'] text-xl">
                General Inquiries
              </h3>
              <p className="text-[#B0B0B0] font-['Inter'] mb-4">
                Questions about our capabilities, certifications, or how we can support your operations? Reach out via email or phone.
              </p>
              <p className="text-[#B6281A] font-['Inter']">
                Same-day response during business hours
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-[#35393C] border-t border-[#555B63] py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#B0B0B0] font-['Inter']">
            © 2025 McCool Oilfield Services. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}