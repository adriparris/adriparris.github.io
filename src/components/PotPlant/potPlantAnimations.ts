import { gsap } from "gsap";

export const swayLeaf = (leaf: SVGGElement | null, swayAmount: number): void => {
  if (!leaf) return;

  gsap.to(leaf, {
    rotate: swayAmount, // ✅ Only rotate, don't affect translate
    duration: 0.4,
    ease: "power1.out",
    yoyo: true,
    repeat: 1,
    transformOrigin: "bottom center", // ✅ Ensures natural movement
  });
};
