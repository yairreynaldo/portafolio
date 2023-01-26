import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SendMailService } from '../../services/send-mail.service';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
  datos: FormGroup;
  enviando: string = "Enviar";

  constructor(private sendService: SendMailService) { 
    this.datos = new FormGroup({
      nombre: new FormControl('', Validators.required),
      correo: new FormControl('', [Validators.required, Validators.email]),
      mensaje: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
  }

  envioCorreo() {
    this.enviando = "Enviando...";
    let params = {
      nombre: this.datos.value.nombre,
      email: this.datos.value.correo,
      mensaje: this.datos.value.mensaje
    }

    /* console.log(params); */
    this.sendService.envioMail(params).subscribe(resp =>{
      console.log(resp);
      if(resp){
        this.enviando = "Enviar";
      }
    })
  }

}
