interface CTAButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
}

export function CTAButton({ children, onClick, href }: CTAButtonProps) {
  const className = "inline-block bg-[#B6281A] hover:bg-[#E04E2C] text-[#F3F3F3] px-8 py-3 rounded-md transition-colors shadow-[0_2px_6px_rgba(0,0,0,0.4)] font-['Montserrat']";
  
  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }
  
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}
