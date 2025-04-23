import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    text: "Thank you!! Legit and Amazing :)",
    author: "User123",
    rating: 5
  },
  {
    id: 2,
    text: "Really friendly Staff and Decent Script",
    author: "GamerPro",
    rating: 4
  },
  {
    id: 3,
    text: "Everything works perfectly!",
    author: "ScriptUser",
    rating: 5
  }
];

const ReviewCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <div className="absolute -top-10 -left-10 opacity-10 text-primary">
        <Quote size={120} />
      </div>
      
      <div className="overflow-hidden rounded-xl bg-secondary/40 backdrop-blur-lg p-8 md:p-12 border border-primary/20 relative">
        <div className="flex items-center justify-between">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full bg-background/40 hover:bg-primary/20 transition-colors"
            aria-label="Previous review"
          >
            <ChevronLeft className="text-gray-300" />
          </button>
          
          <div className="text-center mx-8 transition-all duration-300 transform">
            <div className="flex justify-center mb-6">
              {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-primary fill-primary" />
              ))}
              {[...Array(5 - reviews[currentIndex].rating)].map((_, i) => (
                <Star key={i + reviews[currentIndex].rating} className="w-6 h-6 text-gray-600" />
              ))}
            </div>
            
            <p className="text-xl md:text-2xl text-gray-100 mb-6 italic">&quot;{reviews[currentIndex].text}&quot;</p>
            <p className="text-primary font-bold text-lg">- {reviews[currentIndex].author}</p>
            
            <div className="flex justify-center mt-6 gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentIndex === index ? 'bg-primary w-6' : 'bg-gray-600'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          <button
            onClick={nextSlide}
            className="p-3 rounded-full bg-background/40 hover:bg-primary/20 transition-colors"
            aria-label="Next review"
          >
            <ChevronRight className="text-gray-300" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewCarousel;
