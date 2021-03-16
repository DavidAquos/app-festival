import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  /*errormessages = {
    fname: [{
      type: 'required',
      message: 'Es necesario rellenar el nombre'
    }, ],

    email: [{
      type: 'required',
      message: 'Es necesario rellenar el e-mail'
    },
      {
        type: 'minlength',
        message: 'Demasiado corto el e-mail.'
      },
      {
        type: 'maxlength',
        message: 'Demasiado largo el e-mail'
      },
      {
        type: 'required',
        message: 'Dirección de e-mail invalida'
      }
    ],

    password: [{
      type: 'required',
      message: 'Es necesario rellenar la contraseña'
    },
      {
        type: 'minlength',
        message: 'La contraseña es muy corta.'
      },
    ],
    confirmpassword: [{
      type: 'required',
      message: 'Las contraseñas no coinciden'
    },
    ],
  };*/

  constructor(public toastController: ToastController, fb: FormBuilder) {
    /*
    this.form = fb.group({
      password: ['', Validators.required],
      password2: ['', Validators.required]
    }, {validator: RegisterPage.passwordsMatch});
    this.form = fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6),
      Validators.maxLength(12), Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,12}$')])],
      confirmPassword: ['', Validators.required],
    }, {validator: this.matchingPasswords('password', 'password2')});*/
  }

  form: FormGroup;
  usuario: {
    nombre: string,
    email: string,
    password: string,
    password2: string,
    telefono: number,
  };

  ngOnInit() {
    this.usuario = {
      nombre: null, email: null, password: null, password2: null, telefono: null
    };
/*
    const { value: password } = this.form.get('password');
    const { value: confirmPassword } = this.form.get('password2');
    return password === confirmPassword ? null : { passwordNotMatch: true };*/
    /*
    this.loginForm = this.formBuilder.group({
      fname: new FormControl('', Validators.compose([
        Validators.required
      ])),
      lname: new FormControl('', Validators.compose([
        Validators.required
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ])),
      confirmpassword: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ])),
    });*/
  }

  matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
    return (group: FormGroup): {[key: string]: any} => {
      const password = group.controls[passwordKey];
      const confirmPassword = group.controls[confirmPasswordKey];

      if (password.value !== confirmPassword.value) {
        return {
          mismatchedPasswords: true
        };
      }
    };
  }

  enviarFormularioRegistro(formulario: NgForm) {
    console.log('Formulario: ', formulario, this.usuario);
  }

  registro() {
    // this.comprobarPws();
    this.presentToast();
  }


  comprobarPws(group: FormGroup) {
    const password = group.get('password').value;
    const confirmPassword = group.get('confirmPassword').value;

    return password === confirmPassword; // Devuelve si son iguales o distintas
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Registrado',
      duration: 2000
    });
    await toast.present();
  }
}
