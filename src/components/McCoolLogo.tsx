import { ImageWithFallback } from "./figma/ImageWithFallback";
import logoImage from "figma:asset/fb497a59d8dee7a225a262b2086a3628038bdfc7.png";

export function McCoolLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <ImageWithFallback
        src={logoImage}
        alt="McCool Oilfield Services Ltd"
        className="h-full w-auto"
      />
    </div>
  );
}