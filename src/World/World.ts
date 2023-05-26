import { Color, PerspectiveCamera, Scene, WebGLRenderer } from 'three';
import createCamera from './components/camera';
import createRenderer from './systems/renderer';
import createScene from './components/scene';
import createCube from './components/cube';

export default class World {
  camera: PerspectiveCamera;

  renderer: WebGLRenderer;

  scene: Scene;

  constructor(container: HTMLElement) {
    // Create components
    this.camera = createCamera();
    this.renderer = createRenderer();
    this.scene = createScene();

    // Attach canvas to container
    container.appendChild(this.renderer.domElement);

    // create cube
    const cube = createCube(new Color(0xf8333c)); // color: imperial red
    this.scene.add(cube);
  }
}
