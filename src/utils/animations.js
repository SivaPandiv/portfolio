// ── Shared Framer Motion Variants ──────────────────────────────────────────
// Smooth cubic-bezier used throughout for premium feel
const ease = [0.22, 1, 0.36, 1];

/** Fade up for individual items */
export const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

/** Fade in from left */
export const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  show:   { opacity: 1, x: 0,  transition: { duration: 0.7, ease } },
};

/** Fade in from right */
export const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  show:   { opacity: 1, x: 0,  transition: { duration: 0.7, ease } },
};

/** Scale + fade for cards/modals */
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  show:   { opacity: 1, scale: 1,   transition: { duration: 0.6, ease } },
};

/** Slide up — for sections entering viewport */
export const slideUp = {
  hidden: { opacity: 0, y: 60 },
  show:   { opacity: 1, y: 0,  transition: { duration: 0.75, ease } },
};

/**
 * Stagger container — wraps lists of items.
 * @param {number} stagger       - seconds between each child  (default 0.12)
 * @param {number} delayChildren - initial delay before first child (default 0.05)
 */
export const staggerContainer = (stagger = 0.12, delayChildren = 0.05) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
});

/** Viewport settings — fire once, trigger 80px before element enters */
export const viewport = { once: true, margin: '-80px' };
