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

  displayedColumns: string[] = ['id', 'name', 'distance', 'gravity', 'satellites', 'imageUrl'];
  dataSource: any;

  constructor(private planetService: PlanetService) { }

  ngOnInit() {
    this.planetService.getPlanets().subscribe(planets => {
      this.dataSource = new MatTableDataSource<Planet>(planets);
    });
  }

  filter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
