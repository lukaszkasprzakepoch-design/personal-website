"use client";

import { useEffect } from "react";
import Image from "next/image";

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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-white transition-colors"
          aria-label="Close modal"
        >
          ✕
        </button>

        <div className="relative w-full h-full">
          <Image
            src={image}
            alt={title}
            width={1200}
            height={900}
            className="w-full h-full object-contain"
            quality={95}
          />
        </div>

        <p className="absolute bottom-4 left-4 text-white text-sm font-medium bg-black/60 px-3 py-1 rounded-full">
          {title}
        </p>
      </div>
    </div>
  );
}
