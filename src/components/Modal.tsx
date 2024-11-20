"use client";

import { motion, AnimatePresence } from "framer-motion";


export const Modal = ({
    isOpen,
    children,
    setIsOpen
} : {
    isOpen: boolean;
    children: React.ReactNode;
    setIsOpen: (isOpen: boolean) => void;
}) => {

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-zinc-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-zinc-800 text-zinc-50 p-6 rounded-lg w-full h-[75vh] max-w-3xl shadow-xl cursor-default relative overflow-y-scroll"
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
