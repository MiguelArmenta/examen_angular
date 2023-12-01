import { Component } from '@angular/core';
import { Alumno } from './modelo/alumno.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  alumnos: Alumno[] = [];
  actualizar = false;

  agregarAlumno(alumno: Alumno) {
    this.alumnos.push(alumno);
    this.actualizar = !this.actualizar;
  }

  editarAlumno(event: { index: number; edicion: Alumno }) {
    const { index, edicion } = event;
    this.alumnos[index] = edicion
    this.actualizar = !this.actualizar;

  }

  eliminarAlumno(index: number) {
    this.alumnos.splice(index, 1);
    this.actualizar = !this.actualizar;
  }


}
