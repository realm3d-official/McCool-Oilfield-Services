import { Navbar } from "./components/Navbar";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { Phone, Mail, Award, Users, Clock, Shield, CheckCircle, TrendingUp } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./components/ui/dropdown-menu";
import aboutHeroImage from "figma:asset/06b5183d3ee849686cbad435fef0ac3bd1aa2fd8.png";

export default function About() {
  return (
    <div className="min-h-screen bg-[#35393C]">
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src={aboutHeroImage}
            alt="Industrial operations"
            className="w-full h-full object-cover object-[center_70%]"
          />
          <div className="absolute inset-0 bg-black/75"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-[#F3F3F3] mb-4 font-['Oswald'] text-5xl tracking-wide" style={{ WebkitTextStroke: '1.5px #B6281A', paintOrder: 'stroke fill', letterSpacing: '0.02em' }}>
            About McCool Oilfield Services
          </h1>
          <p className="text-[#B0B0B0] font-['Inter'] text-xl">
            Alberta-based mechanical and piping contractor since 2007
          </p>
        </div>
      </section>
      
      {/* Company Story Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#35393C]/60 to-[#35393C]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#B0B0B0] mb-6 font-['Inter'] text-lg leading-relaxed">
                Founded in 2007, McCool Oilfield Services Ltd. is an experienced mechanical and piping contractor supporting industrial and energy facilities.
              </p>
              <p className="text-[#B0B0B0] mb-6 font-['Inter'] text-lg leading-relaxed">
                What began as a focused pipefitting operation has grown into a well-rounded organization providing construction, maintenance, custom fabrication, and advanced 3D scanning and modeling capabilities.
              </p>
              <p className="text-[#B0B0B0] font-['Inter'] text-lg leading-relaxed">
                Our work is built around safe execution, practical solutions, and close coordination with operations. From routine maintenance to complex turnarounds and facility upgrades, McCool delivers consistent results through experienced crews, proven processes, and a strong safety culture. McCool Oilfield Services is committed to long-term client relationships built on reliability, safety, and quality workmanship.
              </p>
            </div>
            
            <div className="bg-[#424850] rounded-lg p-8 border border-[#555B63]">
              <h3 className="text-[#F3F3F3] mb-8 font-['Montserrat'] text-2xl text-center">
                By The Numbers
              </h3>
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-[#B6281A] mb-2 font-['Oswald'] text-5xl">15+</div>
                  <div className="text-[#B0B0B0] font-['Inter']">Years of Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-[#B6281A] mb-2 font-['Oswald'] text-5xl">100+</div>
                  <div className="text-[#B0B0B0] font-['Inter']">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-[#B6281A] mb-2 font-['Oswald'] text-5xl">24/7</div>
                  <div className="text-[#B0B0B0] font-['Inter']">Dispatch Available</div>
                </div>
                <div className="text-center">
                  <div className="text-[#B6281A] mb-2 font-['Oswald'] text-5xl">100%</div>
                  <div className="text-[#B0B0B0] font-['Inter']">Safety Focused</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#35393C] via-[#424850] to-[#424850]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[#F3F3F3] mb-4 font-['Montserrat'] text-4xl">
              Our Team
            </h2>
            <p className="text-[#B0B0B0] font-['Inter'] text-lg max-w-3xl mx-auto">
              Our strength lies in our people. Every member of the McCool team brings expertise, dedication, and a commitment to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#424850] rounded-lg p-8 border border-[#555B63]">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg mb-6">
                <Users className="w-8 h-8 text-[#B6281A] drop-shadow-[0_0_8px_rgba(182,40,26,0.6)]" />
              </div>
              <h3 className="text-[#F3F3F3] mb-4 font-['Montserrat'] text-2xl">
                Certified Professionals
              </h3>
              <p className="text-[#B0B0B0] font-['Inter']">
                Our team includes certified Journeyman pipefitters, Journeyman welders with ABSA B-Pressure and CWB certifications, and dedicated indentured Apprentices learning from the best in the business.
              </p>
            </div>

            <div className="bg-[#424850] rounded-lg p-8 border border-[#555B63]">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg mb-6">
                <TrendingUp className="w-8 h-8 text-[#B6281A] drop-shadow-[0_0_8px_rgba(182,40,26,0.6)]" />
              </div>
              <h3 className="text-[#F3F3F3] mb-4 font-['Montserrat'] text-2xl">
                Continuous Improvement
              </h3>
              <p className="text-[#B0B0B0] font-['Inter']">
                We invest in ongoing training and development to ensure our team stays current with industry best practices, new technologies, and evolving safety standards.
              </p>
            </div>

            <div className="bg-[#424850] rounded-lg p-8 border border-[#555B63]">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg mb-6">
                <Clock className="w-8 h-8 text-[#B6281A] drop-shadow-[0_0_8px_rgba(182,40,26,0.6)]" />
              </div>
              <h3 className="text-[#F3F3F3] mb-4 font-['Montserrat'] text-2xl">
                24/7 Availability
              </h3>
              <p className="text-[#B0B0B0] font-['Inter']">
                Our dispatch team is available around the clock to respond to emergencies, schedule services, and support your operations whenever you need us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Commitment Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#424850] via-[#35393C] to-[#35393C]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[#F3F3F3] mb-4 font-['Montserrat'] text-4xl">
              Our Values & Commitment
            </h2>
            <p className="text-[#B0B0B0] font-['Inter'] text-lg max-w-3xl mx-auto">
              These core principles guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#424850] rounded-lg p-8 border border-[#555B63]">
              <div className="flex items-start gap-4 mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg flex-shrink-0">
                  <Shield className="w-6 h-6 text-[#B6281A] drop-shadow-[0_0_8px_rgba(182,40,26,0.6)]" />
                </div>
                <div>
                  <h3 className="text-[#F3F3F3] mb-2 font-['Montserrat'] text-xl">
                    Safety First
                  </h3>
                  <p className="text-[#B0B0B0] font-['Inter']">
                    Safety is non-negotiable. We maintain comprehensive safety programs, regular training, and strict compliance with all regulations to ensure every team member returns home safely.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#424850] rounded-lg p-8 border border-[#555B63]">
              <div className="flex items-start gap-4 mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg flex-shrink-0">
                  <Award className="w-6 h-6 text-[#B6281A] drop-shadow-[0_0_8px_rgba(182,40,26,0.6)]" />
                </div>
                <div>
                  <h3 className="text-[#F3F3F3] mb-2 font-['Montserrat'] text-xl">
                    Quality Excellence
                  </h3>
                  <p className="text-[#B0B0B0] font-['Inter']">
                    We take pride in delivering work that meets and exceeds industry standards. From initial planning to final inspection, quality is built into every step of our process.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#424850] rounded-lg p-8 border border-[#555B63]">
              <div className="flex items-start gap-4 mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-[#B6281A] drop-shadow-[0_0_8px_rgba(182,40,26,0.6)]" />
                </div>
                <div>
                  <h3 className="text-[#F3F3F3] mb-2 font-['Montserrat'] text-xl">
                    Client Focus
                  </h3>
                  <p className="text-[#B0B0B0] font-['Inter']">
                    Your success is our success. We work closely with clients to understand their unique needs and deliver solutions that help them achieve their operational goals.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#424850] rounded-lg p-8 border border-[#555B63]">
              <div className="flex items-start gap-4 mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-[#B6281A] drop-shadow-[0_0_8px_rgba(182,40,26,0.6)]" />
                </div>
                <div>
                  <h3 className="text-[#F3F3F3] mb-2 font-['Montserrat'] text-xl">
                    Innovation & Technology
                  </h3>
                  <p className="text-[#B0B0B0] font-['Inter']">
                    We embrace new technologies like 3D laser scanning and CNC plasma cutting to provide more accurate, efficient, and cost-effective solutions for our clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Capabilities */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#35393C] via-[#424850] to-[#424850]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[#F3F3F3] mb-4 font-['Montserrat'] text-4xl">
              Certifications & Capabilities
            </h2>
            <p className="text-[#B0B0B0] font-['Inter'] text-lg max-w-3xl mx-auto">
              We maintain the highest industry certifications and continuously expand our capabilities
            </p>
          </div>

          <div className="bg-[#424850] rounded-lg p-8 md:p-12 border border-[#555B63]">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-[#F3F3F3] mb-6 font-['Montserrat'] text-2xl">
                  Certifications
                </h3>
                <ul className="space-y-4">
                  {[
                    "Certified Journeyman Pipefitters",
                    "Journeyman Welders (ABSA B-Pressure certified)",
                    "CWB Certified Welders",
                    "Indentured Apprentice Program",
                    "Comprehensive Safety Certifications",
                    "Industry Compliance Standards"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#B6281A] flex-shrink-0 mt-0.5" />
                      <span className="text-[#B0B0B0] font-['Inter']">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-[#F3F3F3] mb-6 font-['Montserrat'] text-2xl">
                  Equipment & Technology
                </h3>
                <ul className="space-y-4">
                  {[
                    "3D Laser Scanning Systems",
                    "Total Station Surveying Equipment",
                    "CNC Plasma Cutting Table",
                    "SPX High Pressure Pumps with Norwolf X4 Drive",
                    "Hiab 077/078 Knuckle Pickers with Man Baskets",
                    "Comprehensive Fleet of Service Vehicles and Equipment"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#B6281A] flex-shrink-0 mt-0.5" />
                      <span className="text-[#B0B0B0] font-['Inter']">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#424850] via-[#35393C] to-[#35393C]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[#F3F3F3] mb-6 font-['Montserrat'] text-4xl">
            Ready to Work Together?
          </h2>
          <p className="text-[#B0B0B0] mb-8 font-['Inter'] text-lg">
            Contact us today to discuss how McCool Oilfield Services can support your next project
          </p>
          <p className="text-[#B0B0B0] mb-8 font-['Inter'] text-base max-w-2xl mx-auto">
            Reach out for dispatch, estimates, 3D scanning/modeling consultations, or any service inquiries
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