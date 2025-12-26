import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ResumePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      // .replace() removes this loading page from the history stack
      window.location.replace("/new2.pdf");
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#020306] flex flex-col items-center justify-center font-mono">
      <div className="relative w-20 h-20 mb-8">
        <div className="absolute inset-0 border-2 border-cyan-500/20 rounded-full"></div>
        <div className="absolute inset-0 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
      </div>

      <div className="text-center space-y-2">
        <p className="text-cyan-500 text-xs tracking-[0.5em] uppercase animate-pulse">
          Establishing_Data_Link
        </p>
        <p className="text-white/30 text-[10px] uppercase">
          Redirecting to: RAJAK_RESUME_v5.pdf
        </p>

        {/* Manual Go Back Button as extra safety */}
        <button
          onClick={() => navigate("/")}
          className="block mt-4 text-white/20 hover:text-white text-[8px] uppercase tracking-widest transition-colors"
        >
          [ ABORT_AND_RETURN_HOME ]
        </button>
      </div>
    </div>
  );
};

export default ResumePage;
