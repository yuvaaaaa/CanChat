// How to make animated gradient border 👇
// https://cruip-tutorials.vercel.app/animated-gradient-border/
function BorderAnimatedContainer({ children }) {
  return (
    <div className="w-full h-full [background:linear-gradient(45deg,rgba(255,251,235,0.95),rgba(255,247,237,0.96)_50%,rgba(240,253,250,0.95))_padding-box,conic-gradient(from_var(--border-angle),rgba(251,146,60,0.5)_0%,rgba(16,185,129,0.45)_35%,rgba(244,114,182,0.4)_60%,rgba(251,146,60,0.5)_100%)_border-box] rounded-3xl border border-transparent animate-border flex overflow-hidden shadow-[0_24px_60px_-30px_rgba(15,23,42,0.55)]">
      {children}
    </div>
  );
}
export default BorderAnimatedContainer;
