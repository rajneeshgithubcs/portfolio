import { useEffect } from "react";

const ResumePage = () => {
  useEffect(() => {
    // This triggers the browser's native PDF viewer
    window.location.replace("../public/newone.pdf");
  }, []);

  return (
    <div className="min-h-screen bg-[#020306] flex flex-col items-center justify-center font-mono">
      {/* HUD Loading Spinner */}
      <div className="relative w-20 h-20 mb-8">
        <div className="absolute inset-0 border-2 border-cyan-500/20 rounded-full"></div>
        <div className="absolute inset-0 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
      </div>

      <div className="text-center space-y-2">
        <p className="text-cyan-500 text-xs tracking-[0.5em] uppercase animate-pulse">
          Establishing_Data_Link
        </p>
        <p className="text-white/30 text-[10px] uppercase">
          Fetching: RAJAK_RESUME_v5.pdf
        </p>
      </div>
    </div>
  );
};

export default ResumePage;
