import { Navbar } from "./components/Navbar";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import galleryImage1 from "figma:asset/b871062eed4784fde0f7465235e91f29057f962e.png";
import galleryImage3 from "figma:asset/09e425e27297fcb08bd43f341d713f6262fb1629.png";
import galleryImage4 from "figma:asset/ff7fb1f4926a949e34933709878588dd45fe5ada.png";
import galleryImage5 from "figma:asset/5802b3a7e679729e8b5b168032e28ae6c6900559.png";
import galleryImage6 from "figma:asset/3aeea4b5aed048b6b03a82d85e987ee74e517a27.png";
import galleryImage7 from "figma:asset/d944a8150097cdfbb486390f467fe9c532851e0d.png";
import galleryImage8 from "figma:asset/d88aba55a979605bae99d9809df656ff37e5cfed.png";
import galleryImage10 from "figma:asset/91514f8b5f748e31913bb13a30cd3fd725ad787c.png";
import galleryImage11 from "figma:asset/b2c8455bd28b769c440938cc7c1d69eb93dae13e.png";
import galleryImage12 from "figma:asset/d6a6c84c3f365e5a1f01d9999c7b1ee93c48ea58.png";
import galleryImage13 from "figma:asset/5a7f5aed8c5f0afbfbecf117da606be369f7dc47.png";
import galleryImage14 from "figma:asset/746a9eb19d0f74b26f2310a954e37644d33e1666.png";
import galleryImage15 from "figma:asset/3150026402e6bbabfb2e6c0ad6d1d78d2c7d7257.png";
import galleryImage16 from "figma:asset/b6a59abed8b1cbaf38d77d13ebd477ab1621267e.png";
import galleryImage17 from "figma:asset/55ef4b016b5328f10e8242ae96afd996b07fb105.png";
import galleryImage18 from "figma:asset/a0629462be3ad17c6350513b03b54fdc576ed9d2.png";
import galleryImage19 from "figma:asset/539554d8a1e71e471e644c576325337fe0574d72.png";
import galleryImage20 from "figma:asset/e166f185521421485b0ed20e875b0f375c2e6f22.png";
import galleryImage22 from "figma:asset/4582fe2ee7f863fb86530c262d495951f58f9728.png";
import galleryImage23 from "figma:asset/4a102d32ea05e6e688401ed17dff041b16de2cf7.png";
import galleryImage24 from "figma:asset/e867dc57f1c84d5bcd549c67de401cee7c4e0ccd.png";
import galleryImage25 from "figma:asset/41b9d5f9765e0e41a4e4cb76e81dfc2cdacd43e7.png";
import galleryImage26 from "figma:asset/9bbe4b622b7bc8acfb10fb1f484388333396ab74.png";
import galleryImage27 from "figma:asset/d5ad480d741ade686f292f419e000e2611c61181.png";
import galleryImage28 from "figma:asset/9652a3ad36e0322c34b3ee615b47b51eb494d49e.png";
import galleryImage29 from "figma:asset/d2d6e2a9de0a5f8fa6984f7cfe01cf96b83317f1.png";
import galleryImage30 from "figma:asset/44cf652ad0d2723f6e4ff0e13c9cadb0d363bd91.png";
import galleryImage31 from "figma:asset/f0e973fd82d7a0c9b9b3e1680a79e0e85449138d.png";
import galleryImage32 from "figma:asset/d12e6a286d706c79b9cd942c3fa990f5fea71aca.png";
import galleryImage33 from "figma:asset/baf260187941f4f383b09fb4a3a74e6b0a099a4e.png";
import galleryImage34 from "figma:asset/3c45a82f65ac1278469732cfaa52345e64cd0a8f.png";
import galleryImage35 from "figma:asset/3814bc5379ad4cc228fc0a77050b79ed3f42fd9c.png";
import galleryImage36 from "figma:asset/40cc1789b87f47be7181d0a72ca2217d7a3e2f9a.png";
import galleryImage37 from "figma:asset/4c15571e288f131a96a5db8ac64fe8bbdfb56eb1.png";
import galleryImage38 from "figma:asset/dec7c667e6c6e9aaeccd58ddff5e4d7bec2811fa.png";
import galleryImage39 from "figma:asset/5b05f2847ea6f6f87087964afc617edf5530a608.png";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images: GalleryImage[] = [
    { id: 1, src: galleryImage1, alt: "Industrial facility work" },
    { id: 3, src: galleryImage3, alt: "Piping installation project" },
    { id: 4, src: galleryImage4, alt: "Mechanical construction" },
    { id: 5, src: galleryImage5, alt: "Oilfield equipment installation" },
    { id: 6, src: galleryImage6, alt: "Process piping work" },
    { id: 7, src: galleryImage7, alt: "Fabrication project" },
    { id: 8, src: galleryImage8, alt: "Facility maintenance work" },
    { id: 10, src: galleryImage10, alt: "Structural steel installation" },
    { id: 11, src: galleryImage11, alt: "Welding fabrication" },
    { id: 12, src: galleryImage12, alt: "Industrial piping project" },
    { id: 13, src: galleryImage13, alt: "Equipment installation" },
    { id: 14, src: galleryImage14, alt: "Facility construction" },
    { id: 15, src: galleryImage15, alt: "Piping system installation" },
    { id: 16, src: galleryImage16, alt: "Mechanical equipment work" },
    { id: 17, src: galleryImage17, alt: "Industrial construction project" },
    { id: 18, src: galleryImage18, alt: "Process equipment installation" },
    { id: 19, src: galleryImage19, alt: "Piping fabrication" },
    { id: 20, src: galleryImage20, alt: "Facility upgrade project" },
    { id: 22, src: galleryImage22, alt: "Structural installation work" },
    { id: 23, src: galleryImage23, alt: "Industrial piping system" },
    { id: 24, src: galleryImage24, alt: "Equipment maintenance project" },
    { id: 25, src: galleryImage25, alt: "Fabrication and installation" },
    { id: 26, src: galleryImage26, alt: "Facility construction work" },
    { id: 27, src: galleryImage27, alt: "Piping installation" },
    { id: 28, src: galleryImage28, alt: "Industrial equipment work" },
    { id: 29, src: galleryImage29, alt: "Mechanical construction project" },
    { id: 30, src: galleryImage30, alt: "Process piping installation" },
    { id: 31, src: galleryImage31, alt: "Structural fabrication" },
    { id: 32, src: galleryImage32, alt: "Industrial facility project" },
    { id: 33, src: galleryImage33, alt: "Equipment installation work" },
    { id: 34, src: galleryImage34, alt: "Piping construction" },
    { id: 35, src: galleryImage35, alt: "Facility maintenance" },
    { id: 36, src: galleryImage36, alt: "Industrial piping work" },
    { id: 37, src: galleryImage37, alt: "Mechanical installation project" },
    { id: 38, src: galleryImage38, alt: "Process equipment work" },
    { id: 39, src: galleryImage39, alt: "Facility construction project" }
  ];

  const handlePrevious = () => {
    if (selectedImage !== null) {
      const currentIndex = images.findIndex(img => img.id === selectedImage);
      const prevIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
      setSelectedImage(images[prevIndex].id);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      const currentIndex = images.findIndex(img => img.id === selectedImage);
      const nextIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
      setSelectedImage(images[nextIndex].id);
    }
  };

  const currentImage = images.find(img => img.id === selectedImage);

  return (
    <div className="min-h-screen bg-[#35393C]">
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center justify-center bg-gradient-to-b from-[#424850] to-[#35393C]">
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-[#F3F3F3] mb-4 font-['Oswald'] text-5xl tracking-wide" style={{ WebkitTextStroke: '1.5px #B6281A', paintOrder: 'stroke fill', letterSpacing: '0.02em' }}>
            Project Gallery
          </h1>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image) => (
              <div
                key={image.id}
                onClick={() => setSelectedImage(image.id)}
                className="group relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer bg-[#424850] border-2 border-[#555B63] hover:border-[#B6281A] transition-all duration-300 hover:shadow-[0_0_25px_rgba(182,40,26,0.4)]"
              >
                <ImageWithFallback
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && currentImage && (
        <div className="fixed inset-0 z-50 bg-[#35393C]/95 flex items-center justify-center p-4">
          <div className="relative max-w-7xl w-full h-full flex items-center justify-center">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-3 bg-[#424850] text-[#F3F3F3] rounded-lg hover:bg-[#B6281A] transition-colors duration-300 border border-[#555B63]"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous Button */}
            <button
              onClick={handlePrevious}
              className="absolute left-4 z-10 p-3 bg-[#424850] text-[#F3F3F3] rounded-lg hover:bg-[#B6281A] transition-colors duration-300 border border-[#555B63]"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-4 z-10 p-3 bg-[#424850] text-[#F3F3F3] rounded-lg hover:bg-[#B6281A] transition-colors duration-300 border border-[#555B63]"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image Container */}
            <div className="max-w-5xl w-full">
              <div className="relative rounded-lg overflow-hidden bg-[#424850] border-2 border-[#B6281A] shadow-[0_0_40px_rgba(182,40,26,0.6)]">
                <img
                  src={currentImage.src}
                  alt={currentImage.alt}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      )}

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