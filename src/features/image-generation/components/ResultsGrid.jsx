const ResultsGrid = ({ images }) => {
  return (
    <div className="mx-4 my-8 grid grid-cols-1 gap-4">
      {images.map((imgUrl, index) => (
        <div key={index} className="relative group">
          <img
            src={imgUrl}
            alt={`Generated ${index + 1}`}
            className="w-full object-cover hover:scale-[1.01] transition-transform duration-300 border border-secondary-light dark:border-secondary-dark rounded-2xl shadow-[#1a202c] dark:shadow-[#f7fafc] shadow-md"
          />
          <div className="absolute top-0 left-0 p-4 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
            Image {index + 1}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResultsGrid;
