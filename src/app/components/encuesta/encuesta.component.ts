import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IResponseApi } from 'src/app/interfaces/encuesta';
import { EncuestaService } from 'src/app/services/encuesta.service';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent {
  formEncuesta: FormGroup = this.fb.group({
    estilo: ['', [
      Validators.required
    ]],
    email: ['', [
      Validators.required, Validators.email
    ]]
  })

  error: string = '';
  exito: string = '';

  constructor(
    private fb: FormBuilder,
    private sEncuesta: EncuestaService,
    private router: Router
  ) { }

  mensajeErrorDinamico(campo: string) {
    let error = this.formEncuesta.get(campo)?.errors;
    if (error!['required']) { return 'El campo es requerido'; }
    if (error!['email']) { return 'El campo debe tener formato mail'; }
    return '';
  }

  validarCampo(campo: string) {
    return this.formEncuesta.get(campo)?.invalid
      && this.formEncuesta.get(campo)?.touched;
  }

  saveEncuesta() {
    this.sEncuesta.guardarEncuesta(this.formEncuesta.value)
      .subscribe(
        (async (res) => {
          if(res.estado){
            this.error = '';
            this.exito = res.mensaje
            // await this.sleep(3000);
            // this.router.navigate(['/resultado'])
          }else{
            this.exito = '';
            this.error = res.mensaje
          }
        })
      );
  }

  sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


}
