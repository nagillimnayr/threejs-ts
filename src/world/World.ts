import { PerspectiveCamera, Scene, WebGLRenderer } from 'three';
import createCamera from './components/camera';

export default class World {
  camera: PerspectiveCamera;
  scene: Scene;
  renderer: WebGLRenderer;

  constructor(container: HTMLDivElement) {
    this.camera = createCamera();
  }

  render() {}
}
