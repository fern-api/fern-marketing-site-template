import { clsx, type ClassValue } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

// Register the custom typography tokens defined in globals.css under the
// `font-size` group so they don't get merged into the `text-color` group.
// Without this, cn("text-p-small", "text-[#fff]") drops `text-p-small`.
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        "text-display",
        "text-h1",
        "text-h2",
        "text-h3",
        "text-p-large",
        "text-p",
        "text-p-small",
        "text-p-x-small",
      ],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
