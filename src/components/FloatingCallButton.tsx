
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const FloatingCallButton = () => {
  const phoneNumber = "+1 (555) 123-4567";
  
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber.replace(/[^\d+]/g, "")}`;
  };

  return (
    <motion.div 
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Button 
        onClick={handleCall}
        size="lg"
        className="rounded-full w-16 h-16 bg-energy-gradient shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <Phone className="h-6 w-6 text-white" />
        <span className="sr-only">Call Us</span>
      </Button>
    </motion.div>
  );
};

export default FloatingCallButton;
