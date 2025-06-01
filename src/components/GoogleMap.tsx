
import { useEffect, useRef } from "react";

interface GoogleMapProps {
  address: string;
  height?: string;
}

const GoogleMap = ({ address, height = "400px" }: GoogleMapProps) => {
  const mapRef = useRef<HTMLIFrameElement>(null);
  const encodedAddress = encodeURIComponent(address);
  
  const getDirections = () => {
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`, '_blank');
  };

  return (
    <div className="relative rounded-lg overflow-hidden border border-gray-200">
      <iframe 
        ref={mapRef}
        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBZumVJ0dZQoFatvFHbWKHNG3yFyexbYbQ&q=${encodedAddress}&zoom=15`}
        width="100%" 
        height={height}
        style={{ border: 0, borderRadius: "8px" }}
        allowFullScreen
        loading="lazy"
        title="Google Map"
      ></iframe>
      <button 
        onClick={getDirections}
        className="absolute bottom-4 right-4 bg-energy-gradient text-white px-4 py-2 rounded-lg shadow-lg hover:opacity-90 transition-opacity"
      >
        Get Directions
      </button>
    </div>
  );
};

export default GoogleMap;
