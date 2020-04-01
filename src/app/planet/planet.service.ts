import { Injectable } from '@angular/core';
import { Planet } from './planet';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  constructor() { }

  getPlanets(): Planet[] {
    const p1 = new Planet();
    p1.id = 1;
    p1.name = 'Earth';
    p1.numberOfSatellites = 1;
    p1.gravity = 9.78;
    p1.distanceToSun = 1000;
    p1.orbitAroundSun = true;

    const p2 = new Planet();
    p2.id = 2;
    p2.name = 'Mars';
    p2.numberOfSatellites = 2;
    p2.gravity = 3;
    p2.distanceToSun = 700;
    p2.orbitAroundSun = true;

    return Array.of(p1, p2);
  }
}
