import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
}

export function ServiceCard({ icon: Icon, title, description, href }: ServiceCardProps) {
  const content = (
    <>
      <div className="mb-4 inline-flex items-center justify-center w-12 h-12">
        <Icon className="w-8 h-8 text-[#B6281A] group-hover:scale-110 transition-all duration-300 drop-shadow-[0_0_8px_rgba(182,40,26,0.6)] group-hover:drop-shadow-[0_0_16px_rgba(224,78,44,0.8)]" />
      </div>
      <h3 className="text-[#F3F3F3] mb-3 font-['Montserrat'] group-hover:text-[#E04E2C] transition-colors duration-300">{title}</h3>
      <p className="text-[#B0B0B0] font-['Inter']">{description}</p>
    </>
  );

  if (href) {
    return (
      <Link 
        to={href}
        className="bg-[#424850] rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer hover:bg-[#4A505A] hover:-translate-y-1 flex flex-col h-full focus:outline-none focus:ring-2 focus:ring-[#B6281A] focus:ring-offset-2 focus:ring-offset-[#35393C] border-2 border-[#B6281A] shadow-[0_0_15px_rgba(182,40,26,0.4)] hover:shadow-[0_0_25px_rgba(224,78,44,0.6)]"
      >
        {content}
      </Link>
    );
  }

  return (
    <div className="bg-[#424850] rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 group h-full border-2 border-[#B6281A] shadow-[0_0_15px_rgba(182,40,26,0.4)] hover:shadow-[0_0_25px_rgba(224,78,44,0.6)]">
      {content}
    </div>
  );
}