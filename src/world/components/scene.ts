import { Color, Scene } from 'three';

export default function createScene() {
  const scene = new Scene();
  scene.background = new Color(0x2d3047); // 'Space Cadet'

  return scene;
}
