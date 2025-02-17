import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const ProjectDialog = ({ project, onClose }) => {
  const dialogRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    project.image,
    project.image2,
    project.image3,
    project.image4,
    project.image5,
  ].filter(Boolean);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="fixed inset-0 flex items-center justify-end bg-black bg-opacity-50 z-50">
      <div
        ref={dialogRef}
        className="w-full max-w-md bg-white h-full overflow-auto shadow-lg p-6 relative z-60 pt-20"
      >
        {/* Close Button */}
        <button
          className="absolute top-14 right-4 bg-primary text-white hover:bg-gray-600 rounded-full px-3 py-1 z-70"
          onClick={onClose}
        >
          X
        </button>

        {/* View Demo Button */}
        {project.url && (
          <div className="mb-6 flex justify-start">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-orange-600 text-white px-6 py-2 rounded"
            >
              View Project
            </a>
          </div>
        )}

        {/* Image Section */}
        <div className="flex justify-center mb-4 relative">
          <div className="relative w-full max-w-xs">
            <Image
              src={images[currentImageIndex]}
              alt={project.name}
              width={500}
              height={300}
              quality={100}
              className="rounded-lg"
            />
          </div>

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={handlePrevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray text-white rounded px-2 shadow-lg hover:bg-gray-600"
              >
                &lt;
              </button>
              <button
                onClick={handleNextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray text-white rounded px-2 shadow-lg hover:bg-gray-600"
              >
                &gt;
              </button>
            </>
          )}
        </div>

        {/* Image Indicators (Pagination Dots) */}
        <div className="flex justify-center space-x-2 mb-4">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? "bg-gray px-2 scale-150" // Enlarged active dot
                  : "bg-gray"
              }`}
            />
          ))}
        </div>

        {/* Project Details */}
        <div className="px-4">
          <h2 className="text-xl font-bold mb-2">{project.name}</h2>
          {project.description && (
            <p className="text-base text-gray mb-4">{project.description}</p>
          )}
          {project.stack && (
            <p className="text-md text-gray mb-2">
              <strong>Stack:</strong> {project.stack}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDialog;
