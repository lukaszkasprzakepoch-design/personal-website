"use client";

import { useEffect } from "react";

interface DiplomaModalProps {
  isOpen: boolean;
  image: string;
  title: string;
  onClose: () => void;
}

export default function DiplomaModal({ isOpen, image, title, onClose }: DiplomaModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm p-8 flex items-center justify-center"
      onClick={onClose}
    >
      <div className="relative" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-white transition-colors"
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={title}
          style={{
            display: "block",
            maxWidth: "calc(100vw - 4rem)",
            maxHeight: "calc(100vh - 4rem)",
            width: "auto",
            height: "auto",
            borderRadius: "1rem",
          }}
        />

        <p className="absolute bottom-3 left-3 text-white text-sm font-medium bg-black/60 px-3 py-1 rounded-full">
          {title}
        </p>
      </div>
    </div>
  );
}
