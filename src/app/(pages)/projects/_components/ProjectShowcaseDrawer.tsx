"use client";

import {
  motion,
  useAnimate,
  useMotionValue,
  useDragControls,
} from "framer-motion";
import useMeasure from "react-use-measure";

interface ProjectShowcaseDrawerProps {
  isOpen: boolean;
  children: React.ReactNode;
  setIsOpen: (isOpen: boolean) => void;
}

export const ProjectShowcaseDrawer = ({ 
  isOpen, 
  setIsOpen, 
  children 
} : ProjectShowcaseDrawerProps) => {
  const [scope, animate] = useAnimate();
  const [drawerRef, { height }] = useMeasure();
  const y = useMotionValue(0);
  const controls = useDragControls();

  const handleClose = async () => {
    animate(scope.current, {
      opacity: [1, 0],
    });

    const yStart = typeof y.get() === "number" ? y.get() : 0;

    await animate("#drawer", {
      y: [yStart, height],
    });

    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <motion.div
          ref={scope}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="fixed inset-0 z-50 bg-zinc-950/70"
        >
          <motion.div
            id="drawer"
            ref={drawerRef}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{
              ease: "easeInOut",
            }}
            onClick={(e) => e.stopPropagation()}
            className="absolute bottom-0 h-[90vh] w-full overflow-hidden rounded-t-3xl bg-zinc-900"
            style={{ y }}
            drag="y"
            dragControls={controls}
            onDragEnd={() => {
              if (y.get() >= 100) handleClose();
            }}
            dragListener={false}
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0, bottom: 0.5 }}
          >
            <div className="absolute left-0 right-0 top-0 z-10 flex justify-center bg-zinc-900 p-4">
              <button
                onPointerDown={(e) => {
                  controls.start(e);
                }}
                className="h-2 w-14 cursor-grab touch-none rounded-full bg-zinc-700 active:cursor-grabbing"
              />
            </div>
            <div className="relative z-0 h-full overflow-y-scroll p-4 pt-12">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};
