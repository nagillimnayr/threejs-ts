import { PerspectiveCamera } from 'three';

export default function createCamera() {
  const camera = new PerspectiveCamera(
    75, // FOV
    2, // Aspect Ratio
    0.1, // Near
    10000 // Far
  );

  return camera;
}
