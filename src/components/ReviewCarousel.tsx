
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  {
    id: 1,
    text: "Best Roblox script I've ever used! Super stable and efficient.",
    author: "GameMaster2024",
    rating: 5
  },
  {
    id: 2,
    text: "Amazing features and regular updates. Worth every penny!",
    author: "ProGamer",
    rating: 5
  },
  {
    id: 3,
    text: "Great support team and very reliable script.",
    author: "RobloxPro",
    rating: 4
  }
];

const ReviewCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4 py-8">
      <div className="overflow-hidden rounded-lg bg-secondary/50 backdrop-blur-sm p-6 border border-primary/20">
        <div className="flex items-center justify-between">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full hover:bg-primary/20 transition-colors"
          >
            <ChevronLeft className="text-gray-400" />
          </button>
          
          <div className="text-center mx-8">
            <p className="text-lg text-gray-200 mb-4">&quot;{reviews[currentIndex].text}&quot;</p>
            <p className="text-primary font-medium">- {reviews[currentIndex].author}</p>
          </div>
          
          <button
            onClick={nextSlide}
            className="p-2 rounded-full hover:bg-primary/20 transition-colors"
          >
            <ChevronRight className="text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewCarousel;
