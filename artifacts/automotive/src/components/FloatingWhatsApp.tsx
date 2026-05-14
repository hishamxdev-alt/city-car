import React, { useState } from "react";
import { X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white rounded-2xl shadow-[0_16px_48px_rgba(0,0,0,0.16)] border border-black/[0.06] w-72 overflow-hidden"
          >
            {/* Header */}
            <div className="px-4 py-3 flex items-center gap-3" style={{ backgroundColor: "#25D366" }}>
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">AutoPremier</p>
                <p className="text-[11px] text-white/80 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/90 inline-block" />
                  Typically replies instantly
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="ml-auto text-white/70 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Bubble */}
            <div className="p-4 bg-[#F0F0F0]">
              <div className="bg-white rounded-xl rounded-tl-sm px-4 py-3 shadow-sm max-w-[220px]">
                <p className="text-sm text-[#111827] leading-relaxed">
                  👋 Hi there! How can we help you today?
                </p>
                <p className="text-[10px] text-[#9CA3AF] mt-1 text-right">AutoPremier · just now</p>
              </div>
            </div>

            {/* Quick replies */}
            <div className="px-4 pb-3 bg-[#F0F0F0] flex flex-col gap-2">
              {[
                "I'm interested in buying a car",
                "Tell me about financing options",
                "I'd like to rent a car",
              ].map((msg) => (
                <a
                  key={msg}
                  href={`https://wa.me/971501234567?text=${encodeURIComponent(msg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-[#2563EB] bg-white border border-[#E5E7EB] rounded-full px-3 py-2 hover:bg-blue-50 hover:border-blue-200 transition-colors text-center"
                >
                  {msg}
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="p-3 border-t border-[#E5E7EB] bg-white">
              <a
                href="https://wa.me/971501234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-bold text-white transition-colors hover:opacity-90"
                style={{ backgroundColor: "#25D366" }}
              >
                <MessageCircle className="w-4 h-4" />
                Open WhatsApp Chat
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB */}
      <motion.button
        onClick={() => setOpen((o) => !o)}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        className="w-14 h-14 rounded-full shadow-[0_8px_30px_rgba(37,211,102,0.5)] flex items-center justify-center transition-all"
        style={{ backgroundColor: "#25D366" }}
        aria-label="Chat on WhatsApp"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span
              key="x"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6 text-white" />
            </motion.span>
          ) : (
            <motion.span
              key="wa"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-6 h-6 text-white" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
