import { Navbar } from "./components/Navbar";
import { CTAButton } from "./components/CTAButton";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { Wrench, HardHat, Shield, Scan, CheckCircle, Phone, Mail, Settings, Boxes, PenTool } from "lucide-react";
import servicesHeroBackground from "figma:asset/4f405a27e02a429374335664e874e45a41cbdcb3.png";
import { useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./components/ui/dropdown-menu";

export default function Services() {
  // Smooth scroll to anchor on page load
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#35393C]">
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src={servicesHeroBackground}
            alt="Oilfield services"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/75"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-[#F3F3F3] mb-4 font-['Oswald'] text-5xl tracking-wide" style={{ WebkitTextStroke: '1.5px #B6281A', paintOrder: 'stroke fill', letterSpacing: '0.02em' }}>
            Services
          </h1>
          <p className="text-[#B0B0B0] font-['Inter'] text-xl">
            Mechanical and piping solutions for industrial facilities
          </p>
        </div>
      </section>
      
      {/* Services Detail Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#35393C]/60 to-[#35393C]">
        <div className="max-w-7xl mx-auto space-y-20">
          
          {/* Equipment Maintenance and Turnarounds */}
          <div id="equipment-maintenance-turnarounds" className="bg-[#424850] rounded-lg p-8 md:p-12 border border-[#555B63] scroll-mt-6">
            <div className="flex items-start gap-4 mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg">
                <Wrench className="w-8 h-8 text-[#B6281A] drop-shadow-[0_0_8px_rgba(182,40,26,0.6)]" />
              </div>
              <div>
                <h2 className="text-[#F3F3F3] font-['Montserrat'] text-3xl mb-2">
                  Equipment Maintenance and Turnarounds
                </h2>
                <p className="text-[#B0B0B0] font-['Inter'] text-lg">
                  Expert maintenance solutions to keep your operations running smoothly
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div>
                <h3 className="text-[#F3F3F3] font-['Montserrat'] text-xl mb-4">Maintenance</h3>
                <ul className="space-y-3">
                  {[
                    "Component replacement and upgrades",
                    "Valve replacement and hydrotesting",
                    "Piping installation, removal, and inspection",
                    "Man basket for Hiab 077/078 knuckle pickers",
                    "Hotshot services with flat decks and/or pickers",
                    "Various equipment such as water pumps, weed whackers, chain saws, skid steers, dump trailers, and many more"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#B6281A] flex-shrink-0 mt-0.5" />
                      <span className="text-[#B0B0B0] font-['Inter'] text-[20px]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-[#F3F3F3] font-['Montserrat'] text-xl mb-4">Turnaround Services</h3>
                <ul className="space-y-3">
                  {[
                    "Complete plant shutdown and startup coordination",
                    "System upgrades and modifications",
                    "Emergency repair services",
                    "Minimal downtime project management",
                    "Piping replacement or upgrading",
                    "SPX high pressure pump with Norwolf X4 drive and torque heads from 2\" up to 3-1/8\" as well as 1\" drive head for multiple hydraulic torquing requirements"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#B6281A] flex-shrink-0 mt-0.5" />
                      <span className="text-[#B0B0B0] font-['Inter'] text-[20px]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-[#35393C] rounded-lg">
              <p className="text-[#B0B0B0] font-['Inter']">
                Our maintenance and turnaround services are designed to maximize equipment lifespan, minimize unplanned downtime, and ensure your operations maintain peak efficiency. With 24/7 dispatch availability, we respond quickly to keep your facility running.
              </p>
            </div>
          </div>

          {/* Construction Services */}
          <div id="construction-services" className="bg-[#424850] rounded-lg p-8 md:p-12 border border-[#555B63] scroll-mt-6">
            <div className="flex items-start gap-4 mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg">
                <HardHat className="w-8 h-8 text-[#B6281A] drop-shadow-[0_0_8px_rgba(182,40,26,0.6)]" />
              </div>
              <div>
                <h2 className="text-[#F3F3F3] font-['Montserrat'] text-3xl mb-2">
                  Construction Services
                </h2>
                <p className="text-[#B0B0B0] font-['Inter'] text-lg">
                  Full-scale construction solutions from concept to completion
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div>
                <h3 className="text-[#F3F3F3] font-['Montserrat'] text-xl mb-4">Pipefitting & Installation</h3>
                <ul className="space-y-3">
                  {[
                    "Process piping installation and modifications",
                    "High-pressure piping systems",
                    "Pipe supports and structural steel installation",
                    "Valve installation and testing",
                    "Pipeline tie-ins and hot taps"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#B6281A] flex-shrink-0 mt-0.5" />
                      <span className="text-[#B0B0B0] font-['Inter']">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-[#F3F3F3] font-['Montserrat'] text-xl mb-4">Facility Construction</h3>
                <ul className="space-y-3">
                  {[
                    "New facility construction and expansion",
                    "Modular construction and installation",
                    "Equipment foundations and skid packages",
                    "On lease pipelines and larger pipeline projects",
                    "Total station and 3D scanning for seamless transition from vision to reality"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#B6281A] flex-shrink-0 mt-0.5" />
                      <span className="text-[#B0B0B0] font-['Inter']">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-[#35393C] rounded-lg">
              <p className="text-[#B0B0B0] font-['Inter']">
                Our construction services are executed by certified Journeyman pipefitters, Journeyman welders, and indentured Apprentices who bring precision and expertise to every project. From planning to final commissioning, we deliver quality construction that meets industry standards and exceeds expectations.
              </p>
            </div>
          </div>

          {/* Custom Welding and CNC Plasma Table */}
          <div id="custom-welding-cnc" className="bg-[#424850] rounded-lg p-8 md:p-12 border border-[#555B63] scroll-mt-6">
            <div className="flex items-start gap-4 mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg">
                <Shield className="w-8 h-8 text-[#B6281A] drop-shadow-[0_0_8px_rgba(182,40,26,0.6)]" />
              </div>
              <div>
                <h2 className="text-[#F3F3F3] font-['Montserrat'] text-3xl mb-2">
                  Custom Welding and CNC Plasma Table
                </h2>
                <p className="text-[#B0B0B0] font-['Inter'] text-lg">
                  Precision fabrication and cutting services for complex applications
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div>
                <h3 className="text-[#F3F3F3] font-['Montserrat'] text-xl mb-4">Welding Services</h3>
                <ul className="space-y-3">
                  {[
                    "ABSA B-Pressure and CWB certified welders",
                    "Custom fabrication from design to final product",
                    "Structural steel and heavy equipment"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#B6281A] flex-shrink-0 mt-0.5" />
                      <span className="text-[#B0B0B0] font-['Inter']">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-[#F3F3F3] font-['Montserrat'] text-xl mb-4">CNC Plasma Cutting</h3>
                <ul className="space-y-3">
                  {[
                    "High-precision CNC plasma cutting table",
                    "Custom plate and sheet metal cutting",
                    "Complex shapes and patterns",
                    "Rapid prototyping and production runs",
                    "Material handling up to 1 inch thick steel",
                    "CAD file integration for exact specifications"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#B6281A] flex-shrink-0 mt-0.5" />
                      <span className="text-[#B0B0B0] font-['Inter']">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-[#35393C] rounded-lg">
              <p className="text-[#B0B0B0] font-['Inter']">
                Our custom welding and fabrication services combine traditional craftsmanship with cutting-edge technology. Our CNC plasma table allows us to produce precise, repeatable cuts for custom components, while our certified welders ensure every joint meets or exceeds code requirements.
              </p>
            </div>
          </div>

          {/* 3D Scanning & Modeling */}
          <div id="three-d-scanning-modeling" className="bg-[#424850] rounded-lg p-8 md:p-12 border border-[#555B63] scroll-mt-6">
            <div className="flex items-start gap-4 mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg">
                <Scan className="w-8 h-8 text-[#B6281A] drop-shadow-[0_0_8px_rgba(182,40,26,0.6)]" />
              </div>
              <div>
                <h2 className="text-[#F3F3F3] font-['Montserrat'] text-3xl mb-2">
                  3D Scanning & Modeling
                </h2>
                <p className="text-[#B0B0B0] font-['Inter'] text-lg">
                  Advanced laser scanning technology for accurate documentation and design
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div>
                <h3 className="text-[#F3F3F3] font-['Montserrat'] text-xl mb-4">Scanning Services</h3>
                <ul className="space-y-3">
                  {[
                    "High-accuracy 3D laser scanning",
                    "As-built documentation and verification",
                    "Facility and equipment dimensional surveys",
                    "Clash detection and interference checking",
                    "Reverse engineering of existing components",
                    "Point cloud data capture and processing"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#B6281A] flex-shrink-0 mt-0.5" />
                      <span className="text-[#B0B0B0] font-['Inter']">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-[#F3F3F3] font-['Montserrat'] text-xl mb-4">Modeling & Design</h3>
                <ul className="space-y-3">
                  {[
                    "3D CAD model creation from scan data",
                    "Piping isometric and orthographic drawings",
                    "Fabrication drawings and material takeoffs",
                    "Installation layout and planning",
                    "Design optimization to reduce or eliminate down time during new system tie ins",
                    "Integration with client BIM/CAD systems"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#B6281A] flex-shrink-0 mt-0.5" />
                      <span className="text-[#B0B0B0] font-['Inter']">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-[#35393C] rounded-lg">
              <p className="text-[#B0B0B0] font-['Inter']">
                Our 3D scanning and modeling services eliminate guesswork and reduce costly field changes. By capturing precise as-built conditions, we enable accurate design, fabrication, and installation planning. This technology is particularly valuable for existing facility modifications, retrofit projects, and complex installations where exact measurements are critical.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Call to Action - Quote Request */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#35393C] via-[#424850] to-[#424850]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[#F3F3F3] mb-6 font-['Montserrat'] text-4xl">
            Request a Quote
          </h2>
          <p className="text-[#B0B0B0] mb-8 font-['Inter'] text-lg">
            Ready to discuss your project? Our team is available 24/7 to provide detailed quotes and answer any questions about our services.
          </p>
          <p className="text-[#B0B0B0] mb-8 font-['Inter'] text-base max-w-2xl mx-auto">
            Contact us for dispatch, detailed estimates, 3D scanning/modeling consultations, or any service inquiries
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#B6281A] text-[#F3F3F3] rounded-lg hover:bg-[#E04E2C] transition-colors duration-300 font-['Montserrat']">
                  <Phone className="w-5 h-5" />
                  Phone
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#424850] border-[#555B63] text-[#F3F3F3]">
                <DropdownMenuItem className="focus:bg-[#35393C] focus:text-[#F3F3F3]">
                  <a href="tel:7805367868" className="font-['Inter']">
                    (780) 536-7868
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem className="focus:bg-[#35393C] focus:text-[#F3F3F3]">
                  <a href="tel:7805230534" className="font-['Inter']">
                    (780) 523-0534
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#B6281A] text-[#F3F3F3] rounded-lg hover:bg-[#E04E2C] transition-colors duration-300 font-['Montserrat']">
                  <Mail className="w-5 h-5" />
                  Email
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#424850] border-[#555B63] text-[#F3F3F3]">
                <DropdownMenuItem className="focus:bg-[#35393C] focus:text-[#F3F3F3]">
                  <a href="mailto:info@mccooloilfield.com" className="font-['Inter']">
                    info@mccooloilfield.com
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gradient-to-b from-[#424850] to-[#35393C] border-t border-[#555B63] py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#B0B0B0] font-['Inter']">
            © 2025 McCool Oilfield Services. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}