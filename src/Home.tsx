import { Wrench, HardHat, Shield, Scan, Boxes, PenTool, CheckCircle, AlertTriangle, Users, Clock, X, Truck, Factory, Flame } from "lucide-react";
import { Navbar } from "./components/Navbar";
import { ServiceCard } from "./components/ServiceCard";
import { FeaturedCarousel } from "./components/FeaturedCarousel";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import capabilitiesImage from "figma:asset/cbe10d31c1e223a19941a5e8255a84fe6fae447a.png";
import capabilitiesImage2 from "figma:asset/080f2b9e06088a72c30e5234bc42dd85eb8997d7.png";
import capabilitiesImage3 from "figma:asset/53920d9e7483aceaca7884be8f52336d2cca5eea.png";
import capabilitiesImage4 from "figma:asset/eee7475764158f022344e96cc0a513dd06c41288.png";
import mascotLogo from "figma:asset/3cabc9f8dc36443ef9101d527e4c20c70b20c989.png";
import excavatorBucket from "figma:asset/665dd2ad398d21dca085cc2f1aa7d6bc1c923a92.png";
import isnLogo from "figma:asset/9435f71d1a08b8313f112daf27bcf7c6d7c2d743.png";
import corLogo from "figma:asset/346cb105315445c44c70e076a4d79847ac8d7058.png";
import avettaLogo from "figma:asset/d47658a21ed95b9bdfc3282d642131d36b77f4d1.png";
import cwbLogo from "figma:asset/88e9489db464a1bd1f4aa4909bdf22bce4229df9.png";
import complyworksLogo from "figma:asset/df8cb7e37487dd4c32587d273a568406b7895ff1.png";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const [quoteFormData, setQuoteFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    projectDetails: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleQuoteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("https://formspree.io/f/xkogdwkv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(quoteFormData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setQuoteFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          projectDetails: ""
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

  const handleQuoteChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setQuoteFormData({
      ...quoteFormData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-[#35393C]">
      {/* Navbar */}
      <Navbar />
      
      {/* Featured Carousel */}
      <FeaturedCarousel />
      
      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-gradient-to-b from-[#35393C]/60 via-[#424850] to-[#424850]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[#F3F3F3] text-center mb-4 font-['Montserrat'] text-4xl">
            Services
          </h2>
          <p className="text-[#B0B0B0] text-center mb-16 font-['Inter'] max-w-2xl mx-auto">
            Field-proven capabilities backed by experienced professionals
          </p>
          
          {/* Desktop Layout: Cards framing the logo */}
          <div className="hidden lg:grid lg:grid-cols-7 gap-12 items-stretch">
            {/* Left Column - 2 cards stacked */}
            <div className="col-span-2 flex flex-col gap-8">
              <div className="flex-1">
                <ServiceCard
                  icon={Wrench}
                  title="Equipment Maintenance & Turnarounds"
                  description="Planned and unplanned maintenance support for operating facilities, including equipment repairs, piping modifications, and turnaround execution coordinated with operations."
                  href="/services#equipment-maintenance-turnarounds"
                />
              </div>
              <div className="flex-1">
                <ServiceCard
                  icon={PenTool}
                  title="Custom Welding & CNC Plasma Table"
                  description="Carbon steel fabrication, welding, and precision plasma cutting for pipe supports, structural components, brackets, and fabricated assemblies."
                  href="/services#custom-welding-cnc"
                />
              </div>
            </div>
            
            {/* Center Column - McCool Logo */}
            <div className="col-span-3 flex items-center justify-center py-12">
              <div className="w-80 h-80">
                <ImageWithFallback
                  src={mascotLogo}
                  alt="McCool Oilfield Services Ltd"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            
            {/* Right Column - 2 cards stacked */}
            <div className="col-span-2 flex flex-col gap-8">
              <div className="flex-1">
                <ServiceCard
                  icon={HardHat}
                  title="Construction Services"
                  description="Mechanical and piping construction services including process piping installation, facility upgrades, tie-ins, and structural support work at existing facilities."
                  href="/services#construction-services"
                />
              </div>
              <div className="flex-1">
                <ServiceCard
                  icon={Scan}
                  title="3D Scanning & Modeling"
                  description="High-accuracy 3D laser scanning and modeling to support fabrication and installation, as-built verification, layout planning, and constructible fabrication packages."
                  href="/services#three-d-scanning-modeling"
                />
              </div>
            </div>
          </div>
          
          {/* Mobile Layout: Logo at top, cards stacked below */}
          <div className="lg:hidden space-y-8">
            <div className="flex items-center justify-center py-8">
              <div className="w-72 h-72">
                <ImageWithFallback
                  src={mascotLogo}
                  alt="McCool Oilfield Services Ltd"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            
            <div className="space-y-8">
              <ServiceCard
                icon={Wrench}
                title="Equipment Maintenance & Turnarounds"
                description="Planned and unplanned maintenance support for operating facilities, including equipment repairs, piping modifications, and turnaround execution coordinated with operations."
                href="/services#equipment-maintenance-turnarounds"
              />
              <ServiceCard
                icon={HardHat}
                title="Construction Services"
                description="Mechanical and piping construction services including process piping installation, facility upgrades, tie-ins, and structural support work at existing facilities."
                href="/services#construction-services"
              />
              <ServiceCard
                icon={PenTool}
                title="Custom Welding & CNC Plasma Table"
                description="Carbon steel fabrication, welding, and precision plasma cutting for pipe supports, structural components, brackets, and fabricated assemblies."
                href="/services#custom-welding-cnc"
              />
              <ServiceCard
                icon={Scan}
                title="3D Scanning & Modeling"
                description="High-accuracy 3D laser scanning and modeling to support fabrication and installation, as-built verification, layout planning, and constructible fabrication packages."
                href="/services#three-d-scanning-modeling"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Capabilities Section */}
      <section id="capabilities" className="py-20 px-6 bg-gradient-to-b from-[#424850] via-[#35393C] to-[#35393C]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[#F3F3F3] text-center mb-8 font-['Montserrat'] text-4xl">
            Capabilities
          </h2>
          
          <div className="max-w-5xl mx-auto mb-12">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-6 justify-items-center">
              {/* Facility Construction */}
              <div className="flex flex-col items-center gap-3">
                <div className="w-20 h-20 rounded-lg bg-[#B6281A] flex items-center justify-center hover:bg-[#E04E2C] transition-colors duration-300">
                  <Factory className="w-10 h-10 text-[#F3F3F3]" />
                </div>
                <p className="text-[#B0B0B0] font-['Inter'] text-sm text-center">Facility Construction</p>
              </div>
              
              {/* Pipelines */}
              <div className="flex flex-col items-center gap-3">
                <div className="w-20 h-20 rounded-lg bg-[#B6281A] flex items-center justify-center hover:bg-[#E04E2C] transition-colors duration-300 p-2">
                  <img 
                    src={excavatorBucket} 
                    alt="Excavator bucket" 
                    className="w-full h-full object-contain invert"
                    style={{ mixBlendMode: 'screen' }}
                  />
                </div>
                <p className="text-[#B0B0B0] font-['Inter'] text-sm text-center">Pipelines</p>
              </div>
              
              {/* Piping and Structural Welding */}
              <div className="flex flex-col items-center gap-3">
                <div className="w-20 h-20 rounded-lg bg-[#B6281A] flex items-center justify-center hover:bg-[#E04E2C] transition-colors duration-300">
                  <Flame className="w-10 h-10 text-[#F3F3F3]" />
                </div>
                <p className="text-[#B0B0B0] font-['Inter'] text-sm text-center">Piping & Structural Welding</p>
              </div>
              
              {/* Skid Packages/Mods */}
              <div className="flex flex-col items-center gap-3">
                <div className="w-20 h-20 rounded-lg bg-[#B6281A] flex items-center justify-center hover:bg-[#E04E2C] transition-colors duration-300">
                  <Boxes className="w-10 h-10 text-[#F3F3F3]" />
                </div>
                <p className="text-[#B0B0B0] font-['Inter'] text-sm text-center">Skid Packages/Mods</p>
              </div>
              
              {/* Shutdowns and Maintenance */}
              <div className="flex flex-col items-center gap-3">
                <div className="w-20 h-20 rounded-lg bg-[#B6281A] flex items-center justify-center hover:bg-[#E04E2C] transition-colors duration-300">
                  <Wrench className="w-10 h-10 text-[#F3F3F3]" />
                </div>
                <p className="text-[#B0B0B0] font-['Inter'] text-sm text-center">Shutdowns & Maintenance</p>
              </div>
              
              {/* Hotshot */}
              <div className="flex flex-col items-center gap-3">
                <div className="w-20 h-20 rounded-lg bg-[#B6281A] flex items-center justify-center hover:bg-[#E04E2C] transition-colors duration-300">
                  <Truck className="w-10 h-10 text-[#F3F3F3]" />
                </div>
                <p className="text-[#B0B0B0] font-['Inter'] text-sm text-center">Hotshot</p>
              </div>
              
              {/* 3D Scanning */}
              <div className="flex flex-col items-center gap-3">
                <div className="w-20 h-20 rounded-lg bg-[#B6281A] flex items-center justify-center hover:bg-[#E04E2C] transition-colors duration-300">
                  <Scan className="w-10 h-10 text-[#F3F3F3]" />
                </div>
                <p className="text-[#B0B0B0] font-['Inter'] text-sm text-center">3D Scanning</p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="h-[300px] rounded-lg overflow-hidden cursor-pointer group">
              <ImageWithFallback
                src={capabilitiesImage}
                alt="Oilfield equipment facility"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                style={{ imageRendering: '-webkit-optimize-contrast', objectPosition: 'center center' }}
                onClick={() => setSelectedImage(capabilitiesImage)}
              />
            </div>
            
            <div className="h-[300px] rounded-lg overflow-hidden cursor-pointer group">
              <ImageWithFallback
                src={capabilitiesImage2}
                alt="Structural fabrication and installation"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                style={{ imageRendering: '-webkit-optimize-contrast', objectPosition: 'center center' }}
                onClick={() => setSelectedImage(capabilitiesImage2)}
              />
            </div>
            
            <div className="h-[300px] rounded-lg overflow-hidden cursor-pointer group">
              <ImageWithFallback
                src={capabilitiesImage3}
                alt="Process piping work"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                style={{ imageRendering: '-webkit-optimize-contrast', objectPosition: 'center 35%' }}
                onClick={() => setSelectedImage(capabilitiesImage3)}
              />
            </div>
            
            <div className="h-[300px] rounded-lg overflow-hidden cursor-pointer group">
              <ImageWithFallback
                src={capabilitiesImage4}
                alt="3D scanning and modeling"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                style={{ imageRendering: '-webkit-optimize-contrast', objectPosition: 'center center' }}
                onClick={() => setSelectedImage(capabilitiesImage4)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section id="safety" className="py-20 px-6 bg-gradient-to-b from-[#35393C] via-[#424850] to-[#424850]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[#F3F3F3] text-center mb-4 font-['Montserrat'] text-4xl">
            Safety
          </h2>
          <p className="text-[#B0B0B0] text-center mb-16 font-['Inter'] max-w-2xl mx-auto">
            Safe execution at operating facilities through proven processes and experienced crews
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#35393C] rounded-lg p-8 border border-[#555B63]">
              <div className="flex items-center justify-center w-16 h-16 bg-[#B6281A] rounded-lg mb-6 mx-auto">
                <AlertTriangle className="w-8 h-8 text-[#F3F3F3]" />
              </div>
              <h3 className="text-[#F3F3F3] text-center mb-4 font-['Montserrat'] text-xl">
                Hazard Assessments
              </h3>
              <p className="text-[#B0B0B0] text-center font-['Inter']">
                Site-specific hazard assessments and safety plans for every project
              </p>
            </div>
            
            <div className="bg-[#35393C] rounded-lg p-8 border border-[#555B63]">
              <div className="flex items-center justify-center w-16 h-16 bg-[#B6281A] rounded-lg mb-6 mx-auto">
                <CheckCircle className="w-8 h-8 text-[#F3F3F3]" />
              </div>
              <h3 className="text-[#F3F3F3] text-center mb-4 font-['Montserrat'] text-xl">
                Compliance
              </h3>
              <p className="text-[#B0B0B0] text-center font-['Inter']">
                Full compliance with provincial and client safety requirements
              </p>
            </div>
            
            <div className="bg-[#35393C] rounded-lg p-8 border border-[#555B63]">
              <div className="flex items-center justify-center w-16 h-16 bg-[#B6281A] rounded-lg mb-6 mx-auto">
                <Users className="w-8 h-8 text-[#F3F3F3]" />
              </div>
              <h3 className="text-[#F3F3F3] text-center mb-4 font-['Montserrat'] text-xl">
                Experienced Crews
              </h3>
              <p className="text-[#B0B0B0] text-center font-['Inter']">
                Journeyman-led crews with extensive live-plant and facility experience
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Certifications & Compliance Banner */}
      <section className="py-12 px-6 bg-[#2E3236] border-y border-[#555B63]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#B0B0B0] text-center mb-8 font-['Montserrat'] text-sm tracking-widest uppercase">
            Certified • Authorized • Compliant
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
            {/* CWB Logo */}
            <div className="flex items-center justify-center h-20 bg-transparent">
              <img 
                src={cwbLogo} 
                alt="CWB Logo" 
                className="h-16 w-auto object-contain"
              />
            </div>
            
            {/* Avetta Logo */}
            <div className="flex items-center justify-center h-20 bg-transparent">
              <img 
                src={avettaLogo} 
                alt="Avetta - Verified Supplier Compliance" 
                className="h-16 w-auto object-contain"
              />
            </div>
            
            {/* COR Logo */}
            <div className="flex items-center justify-center h-20 bg-transparent">
              <img 
                src={corLogo} 
                alt="COR - Certificate of Recognition" 
                className="h-16 w-auto object-contain"
              />
            </div>
            
            {/* ComplyWorks Logo */}
            <div className="flex items-center justify-center h-20 bg-transparent">
              <img 
                src={complyworksLogo} 
                alt="ComplyWorks Logo" 
                className="h-16 w-auto object-contain"
              />
            </div>
            
            {/* ISNetworld Logo */}
            <div className="flex items-center justify-center h-20 bg-transparent">
              <img 
                src={isnLogo} 
                alt="ISNetworld - Safety Compliance Network" 
                className="h-16 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Why McCool Section */}
      <section id="about" className="py-20 px-6 bg-gradient-to-b from-[#424850] via-[#35393C] to-[#35393C]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[#F3F3F3] text-center mb-12 font-['Montserrat'] text-4xl">
            Why McCool
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-[#B6281A] rounded-lg mb-4 mx-auto">
                <Shield className="w-8 h-8 text-[#F3F3F3]" />
              </div>
              <h3 className="text-[#F3F3F3] mb-3 font-['Montserrat'] text-xl">
                Alberta-Based
              </h3>
              <p className="text-[#B0B0B0] font-['Inter']">
                Local crews with deep knowledge of Alberta facilities and regulations
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-[#B6281A] rounded-lg mb-4 mx-auto">
                <Users className="w-8 h-8 text-[#F3F3F3]" />
              </div>
              <h3 className="text-[#F3F3F3] mb-3 font-['Montserrat'] text-xl">
                Experienced Crews
              </h3>
              <p className="text-[#B0B0B0] font-['Inter']">
                Journeyman pipefitters and welders with proven track records
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-[#B6281A] rounded-lg mb-4 mx-auto">
                <PenTool className="w-8 h-8 text-[#F3F3F3]" />
              </div>
              <h3 className="text-[#F3F3F3] mb-3 font-['Montserrat'] text-xl">
                Practical Solutions
              </h3>
              <p className="text-[#B0B0B0] font-['Inter']">
                Constructible designs and field-tested approaches that work
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-[#B6281A] rounded-lg mb-4 mx-auto">
                <Clock className="w-8 h-8 text-[#F3F3F3]" />
              </div>
              <h3 className="text-[#F3F3F3] mb-3 font-['Montserrat'] text-xl">
                24/7 Dispatch
              </h3>
              <p className="text-[#B0B0B0] font-['Inter']">
                Responsive scheduling and round-the-clock availability
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-b from-[#35393C] via-[#424850] to-[#424850]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[#F3F3F3] text-center mb-6 font-['Montserrat'] text-4xl">
            Request a Quote
          </h2>
          <p className="text-[#B0B0B0] text-center mb-12 font-['Inter'] text-base max-w-2xl mx-auto">
            Get in touch for dispatch, estimates, 3D scanning/modeling, or project inquiries
          </p>
          
          <div className="bg-[#424850] rounded-lg p-8 border border-[#555B63] mb-8">
            <form className="space-y-6" onSubmit={handleQuoteSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#F3F3F3] mb-2 font-['Montserrat']">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-[#35393C] border border-[#555B63] rounded-lg text-[#F3F3F3] focus:outline-none focus:border-[#B6281A] font-['Inter']"
                    placeholder="Your name"
                    name="name"
                    value={quoteFormData.name}
                    onChange={handleQuoteChange}
                  />
                </div>
                <div>
                  <label className="block text-[#F3F3F3] mb-2 font-['Montserrat']">Company</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-[#35393C] border border-[#555B63] rounded-lg text-[#F3F3F3] focus:outline-none focus:border-[#B6281A] font-['Inter']"
                    placeholder="Company name"
                    name="company"
                    value={quoteFormData.company}
                    onChange={handleQuoteChange}
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#F3F3F3] mb-2 font-['Montserrat']">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-[#35393C] border border-[#555B63] rounded-lg text-[#F3F3F3] focus:outline-none focus:border-[#B6281A] font-['Inter']"
                    placeholder="your.email@company.com"
                    name="email"
                    value={quoteFormData.email}
                    onChange={handleQuoteChange}
                  />
                </div>
                <div>
                  <label className="block text-[#F3F3F3] mb-2 font-['Montserrat']">Phone</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 bg-[#35393C] border border-[#555B63] rounded-lg text-[#F3F3F3] focus:outline-none focus:border-[#B6281A] font-['Inter']"
                    placeholder="(780) 555-1234"
                    name="phone"
                    value={quoteFormData.phone}
                    onChange={handleQuoteChange}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-[#F3F3F3] mb-2 font-['Montserrat']">Project Details</label>
                <textarea 
                  rows={5}
                  className="w-full px-4 py-3 bg-[#35393C] border border-[#555B63] rounded-lg text-[#F3F3F3] focus:outline-none focus:border-[#B6281A] font-['Inter']"
                  placeholder="Describe your project requirements, location, and timeline"
                  name="projectDetails"
                  value={quoteFormData.projectDetails}
                  onChange={handleQuoteChange}
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full px-10 py-4 bg-[#B6281A] text-[#F3F3F3] rounded-lg hover:bg-[#E04E2C] transition-colors duration-300 font-['Montserrat']"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Request"}
              </button>
              
              {submitStatus === "success" && (
                <p className="text-[#B6281A] font-['Inter'] text-sm mt-2">
                  Your request has been submitted successfully!
                </p>
              )}
              
              {submitStatus === "error" && (
                <p className="text-[#E04E2C] font-['Inter'] text-sm mt-2">
                  There was an error submitting your request. Please try again.
                </p>
              )}
            </form>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#424850] rounded-lg p-6 border border-[#555B63]">
              <h3 className="text-[#F3F3F3] mb-4 font-['Montserrat'] text-xl">Phone</h3>
              <div className="space-y-2">
                <a href="tel:7805367868" className="block text-[#B0B0B0] hover:text-[#B6281A] transition-colors font-['Inter']">
                  (780) 536-7868
                </a>
                <a href="tel:7805230534" className="block text-[#B0B0B0] hover:text-[#B6281A] transition-colors font-['Inter']">
                  (780) 523-0534
                </a>
              </div>
            </div>
            
            <div className="bg-[#424850] rounded-lg p-6 border border-[#555B63]">
              <h3 className="text-[#F3F3F3] mb-4 font-['Montserrat'] text-xl">Email</h3>
              <a href="mailto:info@mccooloilfield.com" className="block text-[#B0B0B0] hover:text-[#B6281A] transition-colors font-['Inter']">
                info@mccooloilfield.com
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gradient-to-b from-[#424850] to-[#35393C] border-t border-[#555B63] py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-[#F3F3F3] mb-4 font-['Montserrat'] text-xl">McCool Oilfield Services Ltd.</h3>
              <p className="text-[#B0B0B0] font-['Inter']">
                Mechanical & piping construction across Alberta
              </p>
            </div>
            
            <div>
              <h3 className="text-[#F3F3F3] mb-4 font-['Montserrat'] text-xl">Quick Links</h3>
              <div className="space-y-2">
                <Link to="/services" className="block text-[#B0B0B0] hover:text-[#B6281A] transition-colors font-['Inter']">Services</Link>
                <Link to="/about" className="block text-[#B0B0B0] hover:text-[#B6281A] transition-colors font-['Inter']">About</Link>
                <Link to="/gallery" className="block text-[#B0B0B0] hover:text-[#B6281A] transition-colors font-['Inter']">Gallery</Link>
                <Link to="/contact" className="block text-[#B0B0B0] hover:text-[#B6281A] transition-colors font-['Inter']">Contact</Link>
              </div>
            </div>
            
            <div>
              <h3 className="text-[#F3F3F3] mb-4 font-['Montserrat'] text-xl">Service Area</h3>
              <p className="text-[#B0B0B0] font-['Inter']">
                Divisions in Valleyview, AB and Grande Prairie, AB
              </p>
              <p className="text-[#B0B0B0] font-['Inter'] mt-2">
                Serving all of Western Canada
              </p>
            </div>
          </div>
          
          <div className="border-t border-[#555B63] pt-8 text-center">
            <p className="text-[#B0B0B0] font-['Inter']">
              © 2025 McCool Oilfield Services Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <ImageWithFallback
              src={selectedImage}
              alt="Oilfield equipment facility"
              className="w-full h-full object-contain rounded-lg"
              style={{ imageRendering: '-webkit-optimize-contrast' }}
            />
            <button
              className="absolute top-4 right-4 bg-[#B6281A] text-[#F3F3F3] rounded-full p-2 hover:bg-[#E04E2C] transition-colors duration-300 shadow-lg"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}