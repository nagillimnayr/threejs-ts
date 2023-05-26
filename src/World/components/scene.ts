import { Color, Scene } from 'three';

export default function createScene() {
  const scene = new Scene();
  scene.background = new Color(0x2d3047); // color: 'Space Cadet'

  return scene;
}
