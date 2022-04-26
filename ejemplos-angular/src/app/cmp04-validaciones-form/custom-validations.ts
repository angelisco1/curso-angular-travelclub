import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

const usuarioEnLista = (control: AbstractControl): ValidationErrors | null => {
  const nombresValidos = ['angel', 'oliver', 'jose', 'cristina', 'alfonso']

  if (nombresValidos.includes(control.value.toLowerCase())) {
    return null
  }

  return {
    usuarioEnLista: {
      usuarioActual: control.value,
      usuariosValidos: nombresValidos
    }
  }
}

const usuarioEnListaConParams = (nombresValidos: Array<string>): ValidatorFn => {
  return (control: AbstractControl) => {
    if (nombresValidos.includes(control.value.toLowerCase())) {
      return null
    }

    return {
      usuarioEnLista: {
        usuarioActual: control.value,
        usuariosValidos: nombresValidos
      }
    }
  }
}

const repetirPassword = (control: AbstractControl): ValidationErrors | null => {
  const passwordControl = control.parent?.get('password')
  if (passwordControl?.value === control.value) {
    return null
  }

  return {
    repetirPassword: true
  }
}


const repetirPasswordConParams = (name: string): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    const otherControl = control.parent?.get(name)
    if (otherControl?.value === control.value) {
      return null
    }

    return {
      repetirPassword: true
    }
  }
}



export const CustomValidators = {
  usuarioEnLista,
  usuarioEnListaConParams,
  repetirPassword,
  repetirPasswordConParams
}