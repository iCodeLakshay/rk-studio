import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Default animation settings for consistency
export const animationDefaults = {
  duration: 1,
  ease: "power2.out",
  stagger: 0.1,
};

// Scroll trigger defaults
export const scrollTriggerDefaults = {
  start: "top 80%",
  end: "bottom 20%",
  toggleActions: "play none none reverse"
};

// Common animation presets
export const animations = {
  // Fade in from bottom with slight movement
  fadeInUp: {
    from: { y: 60, opacity: 0 },
    to: { y: 0, opacity: 1, ...animationDefaults }
  },
  
  // Fade in from left
  fadeInLeft: {
    from: { x: -60, opacity: 0 },
    to: { x: 0, opacity: 1, ...animationDefaults }
  },
  
  // Fade in from right  
  fadeInRight: {
    from: { x: 60, opacity: 0 },
    to: { x: 0, opacity: 1, ...animationDefaults }
  },
  
  // Scale in with fade
  scaleIn: {
    from: { scale: 0.8, opacity: 0 },
    to: { scale: 1, opacity: 1, ...animationDefaults }
  },
  
  // Stagger animation for multiple elements
  staggerFadeInUp: {
    from: { y: 40, opacity: 0 },
    to: { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
  }
};

// Utility function to create scroll-triggered animations
export const createScrollAnimation = (element, animation, options = {}) => {
  if (!element) return;
  
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: element,
      ...scrollTriggerDefaults,
      ...options.scrollTrigger
    }
  });
  
  gsap.set(element, animation.from);
  tl.to(element, {
    ...animation.to,
    delay: options.scrollTrigger?.delay || 0
  });
  
  return tl;
};

// Utility function for stagger animations
export const createStaggerAnimation = (elements, animation, options = {}) => {
  if (!elements || elements.length === 0) return;
  
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: elements[0],
      ...scrollTriggerDefaults,
      ...options.scrollTrigger
    }
  });
  
  gsap.set(elements, animation.from);
  tl.to(elements, {
    ...animation.to,
    stagger: options.stagger || animationDefaults.stagger
  });
  
  return tl;
};

export default gsap;
