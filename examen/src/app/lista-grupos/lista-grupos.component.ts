import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Alumno } from '../modelo/alumno.model';

@Component({
  selector: 'app-lista-grupos',
  templateUrl: './lista-grupos.component.html',
  styleUrls: ['./lista-grupos.component.css']
})
export class ListaGruposComponent implements OnInit {
  @Input() alumnos: Alumno[] = [];
  grupos: { numero: string; cantidad: number }[] = [];
  ngOnInit(){
    console.log(this.alumnos)
    for(var alumno of this.alumnos){
      let variable:Boolean = true;
      for(var grupo of this.grupos){
        console.log(grupo)
        if(grupo.numero == alumno.grupo){
          variable = false;
          grupo.cantidad = grupo.cantidad + 1;
          break;
        }
      }
      if (variable){
        this.grupos.push({numero: alumno.grupo, cantidad: 1})
      }
    }
  }

}
