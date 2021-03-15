import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormGroup, NgForm} from '@angular/forms';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  usuario: {
    nombre: string,
    email: string,
    password: string,
    password2: string,
    telefono: number,
  };

  constructor(public toastController: ToastController) { }

  ngOnInit() {
    this.usuario = {nombre: null, email: null, password: null, password2: null, telefono: null};
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
