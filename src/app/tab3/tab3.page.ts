import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { formularioionic } from '../interface/modelo';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  formulario=this.formulariotips.group({
    nombre:"",
    correo:"",
    mensaje:"",
  })
  estado:boolean=false;
  mensaje:formularioionic[]=[];
  constructor(private formulariotips:FormBuilder) { }

  guardarinfo(){
    const guardar : formularioionic={
      nombre:this.formulario.get("nombre")?.value,
      correo:this.formulario.get("correo")?.value,
      mensaje:this.formulario.get("mensaje")?.value,   
    }
   this.mensaje.push(guardar);
   this.estado=true;
   this.formulario.reset();
  }

}