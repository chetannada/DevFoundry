import { useState } from "react";
import { images } from "./images";
import ImageViewer from "./ImageViewer";
import ThumbnailBar from "./ThumbnailBar";

const ImageGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = () => setCurrentIndex((currentIndex + 1) % images.length);
  const goPrev = () => setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  const selectImage = index => setCurrentIndex(index);

  return (
    <>
      <div className="mx-auto">
        <h1 className="text-4xl font-medium text-center mb-4">Image Gallery</h1>
      </div>
      <div className="max-w-4xl mx-auto p-4">
        <ImageViewer image={images[currentIndex].original} onNext={goNext} onPrev={goPrev} />
        <ThumbnailBar images={images} currentIndex={currentIndex} onSelect={selectImage} />
      </div>
    </>
  );
};

export default ImageGallery;
