import { WebGLRenderer } from 'three';
import './style.css';

/** Todo:
 * Create Debug UI
 * make debug UI optional via query parameters
 */

const main = () => {
  // get reference to #app div element
  const app = document.querySelector<HTMLDivElement>('#app');
  const canvas = document.createElement('canvas');
  canvas.id = 'canvas';
  const renderer = new WebGLRenderer({
    canvas,
    antialias: true,
  });
  app?.appendChild(renderer.domElement);
  // const controls = new OrbitControls();
};

window.addEventListener('load', main);
