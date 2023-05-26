import {
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  Object3D,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import resizeCanvas from './modules/utils/canvas';
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
  renderer.setClearColor(0x2d3047); // color: 'Space Cadet'
  renderer.setPixelRatio(window.devicePixelRatio);

  const scene = new Scene();
  const camera = new PerspectiveCamera(75, 2, 0.1, 10000);

  const controls = new OrbitControls(camera, renderer.domElement);
  // controls.update() must be called after any manual changes to the camera's transform
  camera.position.set(0, 0, 10);
  controls.update();

  // materials
  const matImperialRed = new MeshBasicMaterial({ color: 0xf8333c });
  const matJadeGreen = new MeshBasicMaterial({ color: 0x44af69 });
  const matMoonstoneBlue = new MeshBasicMaterial({ color: 0x2b9eb3 });
  const matOrange = new MeshBasicMaterial({ color: 0xfcab10 });

  const cubes = new Object3D();
  const boxGeometry = new BoxGeometry(1, 1, 1);
  const cubeRed = new Mesh(boxGeometry, matImperialRed);
  cubes.add(cubeRed);
  cubeRed.position.set(0, 1.5, 0);
  const cubeGreen = new Mesh(boxGeometry, matJadeGreen);
  cubes.add(cubeGreen);
  cubeGreen.position.set(1.5, 0, 0);
  const cubeBlue = new Mesh(boxGeometry, matMoonstoneBlue);
  cubes.add(cubeBlue);
  cubeBlue.position.set(0, -1.5, 0);
  const cubeOrange = new Mesh(boxGeometry, matOrange);
  cubeOrange.position.set(-1.5, 0, 0);
  cubes.add(cubeOrange);
  scene.add(cubes);

  // Adjust canvas size to be in line with it's display size
  resizeCanvas(renderer);

  // render loop
  const render = (time: number) => {
    const deltaTime = time * 0.001;

    // update camera controls
    controls.update();

    // render scene
    renderer.render(scene, camera);

    // loop
    requestAnimationFrame(render);
  };

  requestAnimationFrame(render);
};

window.addEventListener('load', main);
