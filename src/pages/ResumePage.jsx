export default function ResumePage() {
  return (
    <div className="min-h-screen bg-[#010204] pt-24 flex justify-center">
      {/* Accessing directly from the public folder using "/" */}
      <iframe
        src="./newone.pdf"
        className="w-full max-w-5xl h-[85vh] border border-cyan-500/20 shadow-[0_0_30px_rgba(6,182,212,0.1)]"
        title="Resume Interface"
      />
    </div>
  );
}
