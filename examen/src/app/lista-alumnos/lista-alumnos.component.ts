import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Alumno } from '../modelo/alumno.model';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {
  @Input() alumnos: Alumno[] = [];
  @Output() editarAlumnoEvent = new EventEmitter<{ index: number; edicion: Alumno }>();
  @Output() eliminarAlumnoEvent = new EventEmitter<number>();

  ngOnInit(){

  }

  editarAlumno(index: number, edicion: Alumno): void {
    this.editarAlumnoEvent.emit({ index, edicion });
  }

  eliminarAlumno(index: number): void {
    this.eliminarAlumnoEvent.emit(index);
  }


}
