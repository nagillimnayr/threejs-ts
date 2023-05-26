import { PerspectiveCamera } from 'three';

const createCamera = () => {
  const camera = new PerspectiveCamera(
    35, // FOV
    2, // Aspect Ratio
    0.1, // Near
    10000 // Far
  );
  camera.position.set(0, 0, 10);
  return camera;
};
export default createCamera;
