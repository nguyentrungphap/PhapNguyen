"use client";

import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

export const Tracks = ({
  numTracks,
  setSelected,
  selected,
}: {
  numTracks: number;
  setSelected: Dispatch<SetStateAction<number>>;
  selected: number;
}) => {
  return (
    <aside className="flex gap-1 mt-8">
      {Array.from(Array(numTracks).keys()).map((n) => {
        return (
          <button
            key={n}
            onClick={() => setSelected(n)}
            className="h-1.5 w-full bg-zinc-300 relative"
          >
            {selected === n ? (
              <motion.span
                className="absolute top-0 left-0 bottom-0 bg-zinc-950"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 5, ease: "linear" }}
                onAnimationComplete={() => setSelected(selected === numTracks - 1 ? 0 : selected + 1)}
              />
            ) : (
              <span
                className="absolute top-0 left-0 bottom-0 bg-zinc-950"
                style={{
                  width: selected > n ? "100%" : "0%",
                }}
              />
            )}
          </button>
        )
      })}
    </aside>
  )
}