import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mdf';
  resultado = 0;
  texto = "";
  cadena = "";
  composicion = "";
  contactForm = new FormGroup({
    nombre: new FormControl(),
    peso: new FormControl(),
    altura: new FormControl(),
    sistema: new FormControl()
  })
  onSubmit() {
    let pesoValor = Number(this.contactForm.value.peso);
    let alturaValor = Number(this.contactForm.value.altura);
    this.resultado = pesoValor / ((alturaValor * alturaValor) / 10000);
    if (this.resultado < 18.5) {
      this.composicion = "Peso inferior al normal";
    } if (this.resultado < 24.9) {
      this.composicion = "Normal";
    } if (this.resultado < 29.9) {
      this.composicion = "Peso superior al normal";
    } else this.composicion = "Obesidad";

    return `Hola ${this.contactForm.value.nombre}, su sistema de medida es ${this.contactForm.value.sistema},
     tiene un peso: ${this.contactForm.value.peso} y de altura ${this.contactForm.value.altura}, un IMC de ${this.resultado}
    y por tanto, usted tiene un IMC ${this.composicion}`;
  }
  dameResultado() {
    let pesoValor = Number(this.contactForm.value.peso);
    let alturaValor = Number(this.contactForm.value.altura);
    this.resultado = pesoValor / ((alturaValor * alturaValor) / 10000);
    let cadena: string = "";
    if (this.resultado < 18.5) {
      this.composicion = "Peso inferior al normal";
    } if (this.resultado < 24.9) {
      this.composicion = "Normal";
    } if (this.resultado < 29.9) {
      this.composicion = "Peso superior al normal";
    } else this.composicion = "Obesidad";

    return `Hola ${this.contactForm.value.nombre}, su sistema de medida es ${this.contactForm.value.sistema},
     tiene un peso: ${this.contactForm.value.peso} y de altura ${this.contactForm.value.altura}, un IMC de ${this.resultado}
     y por tanto, usted tiene un IMC ${this.composicion}`;
  }
}


