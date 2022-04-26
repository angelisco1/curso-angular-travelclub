import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { CustomValidators } from './custom-validations';


@Component({
  selector: 'app-cmp04-validaciones-form',
  templateUrl: './cmp04-validaciones-form.component.html',
  styleUrls: ['./cmp04-validaciones-form.component.css']
})
export class Cmp04ValidacionesFormComponent implements OnInit {
  formularioLogin: FormGroup;

  constructor() {
    this.formularioLogin = new FormGroup({
      // username: new FormControl('', CustomValidators.usuarioEnLista),
      username: new FormControl('', CustomValidators.usuarioEnListaConParams(['angel', 'oliver', 'jose', 'cristina', 'alfonso'])),
      password: new FormControl('', Validators.minLength(4)),
      // repetirPassword: new FormControl('', CustomValidators.repetirPassword),
      repetirPassword: new FormControl('', CustomValidators.repetirPasswordConParams('password')),
    })
  }

  ngOnInit(): void {
  }

  registrar() {
    console.log(this.formularioLogin)
  }

  getErroresInput(name: string): ValidationErrors | null {
    return this.formularioLogin.controls[name].errors
  }

}
