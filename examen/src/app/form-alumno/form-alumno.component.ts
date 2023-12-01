import { Component, EventEmitter, Output } from '@angular/core';
import { Alumno } from '../modelo/alumno.model';

@Component({
  selector: 'app-form-alumno',
  templateUrl: './form-alumno.component.html',
  styleUrls: ['./form-alumno.component.css']
})
export class FormAlumnoComponent {

  public alumno:Alumno = new Alumno('','','');
  @Output() agregarAlumnoEvent = new EventEmitter<Alumno>();

  agregar(){
    this.agregarAlumnoEvent.emit(this.alumno);
    this.alumno = new Alumno('', '', '');
  }

}
