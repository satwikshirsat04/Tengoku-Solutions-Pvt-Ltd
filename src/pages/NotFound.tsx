import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  // Generate 50 biochar particles with random properties
  const particles = Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    size: Math.random() * 8 + 2,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 10,
    opacity: Math.random() * 0.7 + 0.3,
  }));

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a08] relative overflow-hidden">
      {/* Soil texture background */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-soil.png')] opacity-70" />
      
      {/* Rising biochar particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-[#1a120b]"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: `${p.left}%`,
            bottom: `-${p.size}px`,
            opacity: p.opacity,
            animation: `rise ${p.duration}s ease-in ${p.delay}s infinite`,
            boxShadow: '0 0 2px 1px rgba(74, 85, 44, 0.5)',
          }}
        />
      ))}

      <div className="text-center relative z-10 p-8 rounded-xl bg-[#0a0a08] bg-opacity-90 border border-[#2a3a1e] shadow-lg">
        <div className="mb-6">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-20 w-20 mx-auto text-[#4a552c]"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
          </svg>
        </div>
        
        <h1 className="text-6xl font-bold mb-4 text-[#d4a373]">404</h1>
        <p className="text-2xl text-[#e6ccb2] mb-6">
          Nutrient Not Found
        </p>
        <p className="text-[#b7b7a4] mb-8 max-w-lg">
          Like carbon missing from depleted soil, this page cannot be cultivated.
          Return to where the organic matter thrives.
        </p>
        
        <a 
          href="/" 
          className="inline-block px-6 py-3 bg-[#2a3a1e] hover:bg-[#3a4a2e] text-[#e6ccb2] font-semibold rounded-lg transition-all duration-300 border border-[#4a552c] hover:border-[#5a653c] flex items-center justify-center gap-2"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
          Return to Home
        </a>
        
        <div className="mt-8 text-[#7f8c6d] text-sm">
          <p>Error: Tried to access {location.pathname}</p>
        </div>
      </div>

      {/* Animation keyframes */}
      <style>{`
        @keyframes rise {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: ${particles[0]?.opacity};
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default NotFound;
