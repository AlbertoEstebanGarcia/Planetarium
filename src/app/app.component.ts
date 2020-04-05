import { Component, OnInit } from '@angular/core';
import { PlanetService } from './planet/planet.service';
import { Planet } from './planet/planet';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  displayedColumns: string[] = ['_id', 'name', 'distance', 'gravity', 'satellites', 'imageUrl', 'action'];
  dataSource: any;

  constructor(private planetService: PlanetService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getPlanets();
  }

  filter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addPlanet(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: new Planet()
    });

    dialogRef.afterClosed().subscribe(planet => {
      if (planet) {
        this.planetService.addPlanet(planet).subscribe(result => {
          console.log(result);
          this.getPlanets();
        });
      }
    });
  }

  editPlanet(originalPlanet: Planet) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: originalPlanet
    });

    dialogRef.afterClosed().subscribe(planet => {
      if (planet) {
        this.planetService.updatePlanet(planet).subscribe(result => {
          console.log(result);
          this.getPlanets();
        });
      }
    });
  }

  removePlanet(planet: Planet) {
    this.planetService.deletePlanet(planet).subscribe(result => {
      console.log(result);
      this.getPlanets();
    });
  }

  private getPlanets() {
    this.planetService.getPlanets().subscribe(planets => {
      this.dataSource = new MatTableDataSource<Planet>(planets);
    });
  }

}
