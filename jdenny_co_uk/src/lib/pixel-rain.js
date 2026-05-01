/**
 * █▀▄ █ ▀▄▀ █▀▀ █   █▀▄ █▀▀ █   █ █▀▀ ▄▀▄ █   
 * █▀  █ █ █ █▀▀ █   █▀▄ █▀▀ ▀▄▀▄▀ █▀▀ █▀█ █   
 * ▀   ▀ ▀ ▀ ▀▀▀ ▀▀▀ ▀   ▀▀▀  ▀ ▀  ▀▀▀ ▀ ▀ ▀▀▀ 
 *
 * PIXEL REVEAL ENGINE v8.5 (ES Module)
 * ---------------------------------------------------------------------------
 * A high-performance, mobile-optimized reveal engine using Canvas-based 
 * CSS masking to create a "digital rain" entrance effect.
 *
 * [ USAGE ]
 * 1. Mark elements with [data-rvl-target] or use lazy-loading images.
 * 2. Import { revealInit } from this module.
 * 3. Call revealInit({ config: { ... } }) on page load.
 *
 * [ SMART FOLD GUARD ]
 * By default, any element visible in the viewport on page load is revealed 
 * instantly to prevent content flickering. The "rain" effect only triggers 
 * on elements scrolled into view later.
 *
 * [ HTML API ]
 * - data-rvl-target          : Standard hook for the effect.
 * - data-rvl-target="force"  : Plays the animation even if above-the-fold.
 * - data-rvl-reset="true"    : Re-runs the effect if scrolled away and back.
 * - data-rvl-disabled="true" : Completely ignores the element.
 *
 * [ CSS STATE CLASSES ]
 * - .revealing               : Active during animation (transitions disabled).
 * - .revealed                : Applied when finished or bypassed.
 * - .lightning-flash         : Initial 120ms brightness jolt.
 */


/**
 * █▀▄ █ ▀▄▀ █▀▀ █   █▀▄ █▀▀ █   █ █▀▀ ▄▀▄ █   
 * █▀  █ █ █ █▀▀ █   █▀▄ █▀▀ ▀▄▀▄▀ █▀▀ █▀█ █   
 * ▀   ▀ ▀ ▀ ▀▀▀ ▀▀▀ ▀   ▀▀▀  ▀ ▀  ▀▀▀ ▀ ▀ ▀▀▀ 
 * * PIXEL REVEAL ENGINE v9.4
 */

const DEFAULT_CONFIG = { gridSize: 32, unzip: 65, variance: 300, fadeDuration: 350, minSize: 100 };

const WORKLET_SRC = `
  registerPaint('pixel-reveal', class {
    static get inputProperties() { return ['--rvl-map', '--rvl-size']; }
    paint(ctx, size, props) {
      const g = parseInt(props.get('--rvl-size')) || 32;
      const map = props.get('--rvl-map').toString();
      if (!map) return;
      const states = map.split(',');
      const cols = Math.ceil(size.width / g);
      ctx.fillStyle = 'black';
      states.forEach((a, i) => {
        if (a === "0") return;
        const x = (i % cols) * g;
        const y = Math.floor(i / cols) * g;
        ctx.globalAlpha = parseFloat(a);
        ctx.fillRect(x, y, g + 0.5, g + 0.5);
      });
    }
  });
`;

export class PixelReveal {
  static _mimeType = null;
  static _houdiniActive = false;

  constructor(el, userConfig = {}) {
    this.el = el;
    this.config = { ...DEFAULT_CONFIG, ...userConfig };
    this.canReset = el.dataset.rvlReset === "true";
    this.isDisabled = el.dataset.rvlDisabled === "true";
    this.isForced = el.dataset.rvlTarget === "force";
    
    this.isAnimating = false;
    this.isComplete = false;
    this.isInView = false;
    this._warnCount = 0;

    const img = el.tagName === 'IMG' ? el : el.querySelector('img');
    this.asset = img;
    this.isReady = !img;

    this._initSystem();

    if (!this.isDisabled) {
      if (this._isAboveFold() && !this.isForced) {
        this.finish(true); 
      } else {
        this._initAssetListener();
      }
    }
  }

  async _initSystem() {
    if (!PixelReveal._mimeType) {
      const cvs = document.createElement('canvas');
      PixelReveal._mimeType = cvs.toDataURL('image/webp').indexOf('data:image/webp') === 0 ? 'image/webp' : 'image/png';
    }

    if ('paintWorklet' in CSS && !PixelReveal._houdiniActive) {
      const blob = new Blob([WORKLET_SRC], { type: 'application/javascript' });
      const url = URL.createObjectURL(blob);
      try {
        await CSS.paintWorklet.addModule(url);
        PixelReveal._houdiniActive = true;
      } catch (e) { PixelReveal._houdiniActive = false; }
    }

    this._renderFrame = PixelReveal._houdiniActive ? this._renderHoudini.bind(this) : this._renderCanvas.bind(this);
  }

  _isAboveFold() {
    const r = this.el.getBoundingClientRect();
    return r.top < (window.innerHeight || document.documentElement.clientHeight) && r.bottom > 0;
  }

  _initAssetListener() {
    if (this.asset) {
      const check = () => {
        if (this.asset.complete && this.asset.naturalWidth > 0) {
          if (this.asset.naturalWidth < this.config.minSize || this.asset.naturalHeight < this.config.minSize) return this.finish(true);
          this.isReady = true;
          if (this.isInView) this.start();
        }
      };
      this.asset.addEventListener('load', check);
      check();
    }
  }

  _prepGrid() {
    const rect = this.el.getBoundingClientRect();
    if (rect.width < this.config.minSize || rect.height < this.config.minSize) {
      this.finish(true); 
      return false;
    }
    const dpr = window.devicePixelRatio || 1;
    this.canvas = document.createElement('canvas');
    this.canvas.width = rect.width * dpr;
    this.canvas.height = rect.height * dpr;
    this.pixels = [];
    const cols = Math.ceil(rect.width / this.config.gridSize);
    const rows = Math.ceil(rect.height / this.config.gridSize);
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        this.pixels.push({
          x: x * this.config.gridSize,
          y: y * this.config.gridSize,
          delay: (Math.random() * this.config.variance) + (y * this.config.unzip),
          done: false
        });
      }
    }
    return true;
  }

  _renderHoudini(elapsed) {
    const map = this.pixels.map(p => {
      if (p.done) return "1";
      if (elapsed < p.delay) return "0";
      const a = Math.min(1, (elapsed - p.delay) / this.config.fadeDuration);
      if (a === 1) p.done = true;
      return a.toFixed(2);
    }).join(',');

    if (map.length > 8000 && this._warnCount < 2) {
      console.warn(`[PixelReveal] High string overhead (${map.length} chars).`, this.el);
      this._warnCount++;
    }

    this.el.style.setProperty('--rvl-map', map);
    this.el.style.setProperty('--rvl-size', this.config.gridSize);
    this.el.style.webkitMaskImage = 'paint(pixel-reveal)';
    this.el.style.maskImage = 'paint(pixel-reveal)';
  }

  _renderCanvas(elapsed) {
    const dpr = window.devicePixelRatio || 1;
    const ctx = this.canvas.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    ctx.fillStyle = "black";
    this.pixels.forEach(p => {
      if (p.done) {
        ctx.globalAlpha = 1;
        ctx.fillRect(p.x, p.y, this.config.gridSize + 0.5, this.config.gridSize + 0.5);
      } else if (elapsed > p.delay) {
        const a = Math.min(1, (elapsed - p.delay) / this.config.fadeDuration);
        ctx.globalAlpha = a;
        ctx.fillRect(p.x, p.y, this.config.gridSize + 0.5, this.config.gridSize + 0.5);
        if (a === 1) p.done = true;
      }
    });
    const url = `url(${this.canvas.toDataURL(PixelReveal._mimeType, 0.3)})`;
    this.el.style.webkitMaskImage = url;
    this.el.style.maskImage = url;
  }

  start() {
    if (this.isDisabled || this.isAnimating || this.isComplete || !this.isReady) return;
    if (!this._prepGrid()) return;
    this.isAnimating = true;
    this.el.classList.add('revealing', 'lightning-flash');
    setTimeout(() => this.el.classList.remove('lightning-flash'), 120);
    let startT = null;
    const loop = (t) => {
      if (!startT) startT = t;
      this._renderFrame(t - startT);
      if (this.pixels.some(p => !p.done)) requestAnimationFrame(loop);
      else this.finish();
    };
    requestAnimationFrame(loop);
  }

reset() {
    // 1. Exit if we shouldn't reset or are currently mid-animation
    if (!this.canReset || this.isAnimating || !this.isComplete) return;

    // 2. Reset flags
    this.isComplete = false;
    this.isReady = !this.asset; // If no asset, it's ready. If asset, wait for load.

    // 3. Scrub DOM and Styles
    this.el.classList.remove('revealing', 'revealed', 'lightning-flash');
    this.el.style.webkitMaskImage = '';
    this.el.style.maskImage = '';
    this.el.style.setProperty('--rvl-map', ''); // Crucial for Houdini
    
    // 4. Kill the canvas to free memory and force a re-prep on next start
    if (this.canvas) {
      this.canvas.width = 0;
      this.canvas.height = 0;
      this.canvas = null;
    }

    // 5. Re-check the asset (in case it needs to 're-load' or verify size)
    this._initAssetListener();
  }

  finish(instant = false) {
    this.el.classList.add('revealed');
    this.isComplete = true;
    this.isAnimating = false;

    const clean = () => {
      // Don't remove 'revealed' class, but clear the masking tech
      this.el.style.webkitMaskImage = '';
      this.el.style.maskImage = '';
      this.el.classList.remove('revealing');
      this.el.style.transition = '';
      // We keep the canvas until reset() is called to avoid unnecessary thrashing
    };

    if (instant) clean(); else requestAnimationFrame(clean);
  }
}

/**
 * Global Initialization
 */
export function revealInit({ selector = 'img[loading="lazy"], [data-rvl-target]', config = {}, observer = {} } = {}) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      const eng = e.target._reveal;
      if (!eng) return;

      if (e.isIntersecting) {
        eng.isInView = true;
        eng.start();
      } else {
        eng.isInView = false;
        // RELIABILITY TWEAK: 
        // We reset if the element is ABOVE the view (scrolled past) 
        // OR BELOW the view (scrolled away from).
        // If you only want it to reset when scrolling back UP, keep 'top > window.innerHeight'.
        const rect = e.boundingClientRect;
        const isBelow = rect.top > (window.innerHeight || document.documentElement.clientHeight);
        const isAbove = rect.bottom < 0;

        if (isBelow || isAbove) {
          eng.reset();
        }
      }
    });
  }, { 
    threshold: 0.2, 
    ...observer 
  });

  document.querySelectorAll(selector).forEach(el => {
    if (el._reveal || el.dataset.rvlDisabled === "true") return;
    el._reveal = new PixelReveal(el, config);
    io.observe(el);
  });
}