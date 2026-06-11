import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// import your images
import img1 from "../assets/1.jpeg";
import img2 from "../assets/2.jpeg";
import img3 from "../assets/3.jpeg";
import img4 from "../assets/4.jpeg";
import img5 from "../assets/5.jpeg";
import img6 from "../assets/6.jpeg";
import img7 from "../assets/7.jpeg";
import img8 from "../assets/8.jpeg";
import img9 from "../assets/9.jpeg";
import img10 from "../assets/10.jpeg";
import img11 from "../assets/11.jpeg";

const images = [img1, img2, img3, img4,img5, img6, img7,img8, img9, img10, img11];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const selectImage = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10">

      {/* ================= MAIN CARD ================= */}
      <div className="w-full max-w-4xl rounded-2xl shadow-2xl p-6 md:p-10 bg-gradient-to-br from-[#556B2F] to-white">

        {/* TITLE */}
        <h1 className="text-center text-2xl md:text-4xl font-bold text-white md:text-[#556B2F] mb-6 italic">
          Couples Gallery
        </h1>

        {/* IMAGE VIEWER */}
        <div className="relative flex items-center justify-center">

          {/* LEFT ARROW */}
          <button
            onClick={prevImage}
            className="absolute left-0 md:-left-10 bg-white p-3 rounded-full shadow-md hover:scale-110 transition"
          >
            <FaChevronLeft />
          </button>

          {/* MAIN IMAGE */}
          <div className="w-full h-[300px] md:h-[450px] rounded-xl overflow-hidden shadow-lg">
            <img
              src={images[currentIndex]}
              alt="Gallery"
              className="w-full h-full object-contain"
            />
          </div>

          {/* RIGHT ARROW */}
          <button
            onClick={nextImage}
            className="absolute right-0 md:-right-10 bg-white p-3 rounded-full shadow-md hover:scale-110 transition"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* ================= THUMBNAILS ================= */}
        <div className="flex justify-center gap-3 mt-6 flex-wrap">

          {images.map((img, index) => (
            <div
              key={index}
              onClick={() => selectImage(index)}
              className={`w-16 h-16 md:w-20 md:h-20 cursor-pointer rounded-md overflow-hidden border-2 transition ${
                currentIndex === index
                  ? "border-[#556B2F] scale-110"
                  : "border-transparent opacity-70"
              }`}
            >
              <img
                src={img}
                alt={`thumb-${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default Gallery;