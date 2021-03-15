import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  loginForm: FormGroup;
  usuario: {
    nombre: string,
    email: string,
    password: string,
    password2: string,
    telefono: number,
  };

  errormessages = {
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
  };

  constructor(public toastController: ToastController, public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.usuario = {
      nombre: null, email: null, password: null, password2: null, telefono: null
    };
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
    });
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

    return password === confirmPassword ? null : { notSame: true };
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Registrado',
      duration: 2000
    });
    await toast.present();
  }
}
