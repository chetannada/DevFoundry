import { useState } from "react";
import ModalViewer from "./ModalViewer";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";

const ImageViewer = ({ image, onNext, onPrev }) => {
  const [loaded, setLoaded] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="relative w-full aspect-[5/3] bg-skeleton-light dark:bg-skeleton-dark rounded-lg overflow-hidden">
        {!loaded && (
          <div className="absolute inset-0 animate-pulse bg-skeleton-light dark:bg-skeleton-dark" />
        )}

        <img
          src={image}
          alt="Gallery"
          onLoad={() => setLoaded(true)}
          onClick={() => setShowModal(true)}
          className={`w-full h-full object-cover transition-opacity duration-300 cursor-zoom-in ${
            loaded ? "opacity-100" : "opacity-0"
          } hover:scale-[1.02] border border-border-light dark:border-border-dark rounded-lg shadow-[#1a202c] dark:shadow-[#f7fafc] shadow-md`}
        />

        {/* Left Arrow */}
        <div className="absolute top-1/2 left-2 transform -translate-y-1/2">
          {loaded ? (
            <button
              onClick={onPrev}
              className="bg-secondary-light dark:bg-secondary-dark p-1 rounded-full shadow hover:bg-secondary-dark dark:hover:bg-secondary-light text-white"
            >
              <IoIosArrowDropleftCircle size={25} />
            </button>
          ) : (
            <div className="w-8 h-8 rounded-full bg-skeleton-light dark:bg-skeleton-dark animate-pulse" />
          )}
        </div>

        {/* Right Arrow */}
        <div className="absolute top-1/2 right-2 transform -translate-y-1/2">
          {loaded ? (
            <button
              onClick={onNext}
              className="bg-secondary-light dark:bg-secondary-dark p-1 rounded-full shadow hover:bg-secondary-dark dark:hover:bg-secondary-light text-white"
            >
              <IoIosArrowDroprightCircle size={25} />
            </button>
          ) : (
            <div className="w-8 h-8 rounded-full bg-skeleton-light dark:bg-skeleton-dark animate-pulse" />
          )}
        </div>
      </div>

      {showModal && <ModalViewer image={image} onClose={() => setShowModal(false)} />}
    </>
  );
};

export default ImageViewer;
