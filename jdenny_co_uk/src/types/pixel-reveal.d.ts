/**
 * Pixel Reveal Engine v9.4 - Type Definitions
 */

export interface RevealConfig {
  /** Size of the reveal pixels in px. Default: 32 */
  gridSize?: number;
  /** Vertical delay multiplier for the "rain" effect. Default: 65 */
  unzip?: number;
  /** Random delay spread per pixel in ms. Default: 300 */
  variance?: number;
  /** Individual pixel fade-in duration in ms. Default: 350 */
  fadeDuration?: number;
  /** Minimum px width/height required to run the effect. Default: 100 */
  minSize?: number;
}

export interface RevealInitOptions {
  /** CSS Selector for target elements. Default: 'img[loading="lazy"], [data-rvl-target]' */
  selector?: string;
  /** Global configuration overrides for all instances. */
  config?: RevealConfig;
  /** Standard IntersectionObserver options. */
  observer?: IntersectionObserverInit;
}

export declare class PixelReveal {
  constructor(el: HTMLElement, config?: RevealConfig);
  /** Manually trigger the start of the animation. */
  start(): void;
  /** Resets the element to its hidden state (if data-rvl-reset is true). */
  reset(): void;
  /** Force-finishes the animation. */
  finish(instant?: boolean): void;
}

/**
 * Initializes the Reveal Engine on the current page.
 */
export declare function revealInit(options?: RevealInitOptions): void;

export default PixelReveal;