import { Component, OnInit } from '@angular/core';
import { PlanetService } from './planet/planet.service';
import { Planet } from './planet/planet';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'distanceToSun', 'orbitAroundSun', 'gravity', 'numberOfSatellites'];
  title = 'Planetarium';
  planets: Planet[];

  dataSource;

  constructor(private planetService: PlanetService) { }

  ngOnInit() {
    this.planets = this.planetService.getPlanets();
    console.log(this.planets);

    this.dataSource = new MatTableDataSource<Planet>(this.planets);
  }

  filter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
