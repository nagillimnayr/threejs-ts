import { Vector3 } from 'three';
import { DIST_MULT, GRAV_CONST, SOLAR_MASS } from './constants';

interface PhysicsBody {
  mass: number;
  position: Vector3;
}

export default function calculateGravitation(
  obj1: PhysicsBody,
  obj2: PhysicsBody
): Vector3 {
  const diffPos = new Vector3().subVectors(obj2.position, obj1.position);

  const distSquared = diffPos.clone().multiplyScalar(DIST_MULT).lengthSq();

  const direction = diffPos.clone().normalize();

  const gravForce = (GRAV_CONST * obj2.mass * SOLAR_MASS) / distSquared;

  const acceleration = direction.clone().multiplyScalar(gravForce);
  return acceleration.multiplyScalar(1 / DIST_MULT);
}
