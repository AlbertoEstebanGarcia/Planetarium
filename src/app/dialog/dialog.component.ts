import { MAT_DIALOG_DATA, MatDialogRef, MatDialogConfig, MatDialog} from '@angular/material';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Planet } from '../planet/planet';

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
})
export class DialogComponent implements OnInit {

    form: FormGroup;
    planet: Planet;

    constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<DialogComponent>,
        @Inject(MAT_DIALOG_DATA) data) {
        this.planet = data;
    }

    ngOnInit() {
        this.form = this.fb.group({
            name: [this.planet.name, [Validators.required]],
            distance: [this.planet.distance, [Validators.required]],
            gravity: [this.planet.gravity, [Validators.required]],
            satellites: [this.planet.satellites, [Validators.required]],
            radius: [this.planet.radius, [Validators.required]],
            imageUrl: [this.planet.imageUrl, [Validators.required]],
        });
    }


    save() {
        this.planet.name = this.form.value.name;
        this.planet.distance = this.form.value.distance;
        this.planet.gravity = this.form.value.gravity;
        this.planet.satellites = this.form.value.satellites;
        this.planet.radius = this.form.value.radius;
        this.planet.imageUrl = this.form.value.imageUrl;
        this.dialogRef.close(this.planet);
    }

    close() {
        this.dialogRef.close();
    }
}
