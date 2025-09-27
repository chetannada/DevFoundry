import { useEffect, useState } from "react";
import ModalViewer from "./ModalViewer";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import useWindowSize from "../../hooks/useWindowSize";

const ImageViewer = ({ image, onNext, onPrev }) => {
  const [loaded, setLoaded] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const windowSize = useWindowSize();

  const toggleModal = () => setShowModal(prev => !prev);

  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "auto";

    return () => (document.body.style.overflow = "auto");
  }, [showModal]);

  useEffect(() => {
    const handleKey = e => {
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, [onPrev, onNext]);

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
          onClick={toggleModal}
          className={`w-full h-full object-cover transition-opacity duration-300 cursor-zoom-in ${
            loaded ? "opacity-100" : "opacity-0"
          } hover:scale-[1.02] border border-border-light dark:border-border-dark rounded-lg shadow-[#1a202c] dark:shadow-[#f7fafc] shadow-md`}
        />

        {/* Left Arrow */}
        <div className="absolute top-1/2 left-2 transform -translate-y-1/2">
          {loaded ? (
            <button
              onClick={onPrev}
              className="bg-secondary-light dark:bg-secondary-dark rounded-full shadow hover:bg-secondary-dark dark:hover:bg-secondary-light text-primary-light dark:text-primary-dark"
            >
              <IoIosArrowDropleftCircle size={windowSize.width > 900 ? 50 : 40} />
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
              className="bg-secondary-light dark:bg-secondary-dark rounded-full shadow hover:bg-secondary-dark dark:hover:bg-secondary-light text-primary-light dark:text-primary-dark"
            >
              <IoIosArrowDroprightCircle size={windowSize.width > 900 ? 50 : 40} />
            </button>
          ) : (
            <div className="w-8 h-8 rounded-full bg-skeleton-light dark:bg-skeleton-dark animate-pulse" />
          )}
        </div>
      </div>

      {showModal && <ModalViewer image={image} onClose={toggleModal} />}
    </>
  );
};

export default ImageViewer;
