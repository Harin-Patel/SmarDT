import React from "react";

type GlassArrowButtonProps = {
  direction: "prev" | "next";
  onClick: () => void;
};

const GlassArrowButton: React.FC<GlassArrowButtonProps> = ({
  direction,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      aria-label={direction === "prev" ? "Previous slide" : "Next slide"}
      className={`
        absolute top-1/2 -translate-y-1/2 z-20
        ${direction === "prev" ? "left-6" : "right-6"}
        w-14 h-14 rounded-full
        backdrop-blur-md bg-white/15
        border border-white/30
        shadow-[0_8px_30px_rgba(0,0,0,0.35)]
        flex items-center justify-center
        transition-all duration-300
        hover:scale-110 hover:bg-white/25
        active:scale-95
      `}
    >
      <span
        className={`
          block w-3 h-3 border-t-2 border-r-2 border-white
          ${direction === "prev" ? "-rotate-135" : "rotate-45"}
        `}
      />
    </button>
  );
};

export default GlassArrowButton;
