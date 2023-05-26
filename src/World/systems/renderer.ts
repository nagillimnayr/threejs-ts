import { WebGLRenderer } from 'three';

export default function createRenderer() {
  const renderer = new WebGLRenderer({
    antialias: true,
  });
  renderer.domElement.id = 'canvas';

  return renderer;
}
