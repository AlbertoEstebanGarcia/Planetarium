import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Planet } from './planet';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  constructor(private http: HttpClient) { }

  getPlanets(): Observable<Planet[]> {
    const url = environment.apiUrl + 'planets';
    return this.http.get<Planet[]>(url);
  }

  getPlanetsById(id: number) {
    const url = environment.apiUrl + 'planets/' + id;
    return this.http.get<Planet[]>(url);
  }

  getPlanetsByName(name: string) {
    const url = environment.apiUrl + 'planets/' + name;
    return this.http.get<Planet[]>(url);
  }

  addPlanet(planet: Planet) {
    const url = environment.apiUrl + 'planets';
    return this.http.post<Planet[]>(url, planet);
  }

  updatePlanet(planet: Planet) {
    const url = environment.apiUrl + 'planets';
    return this.http.put<Planet[]>(url, planet);
  }

  deletePlanet(id: number) {
    const url = environment.apiUrl + 'planets/' + id;
    return this.http.delete<Planet[]>(url);

  }
}
