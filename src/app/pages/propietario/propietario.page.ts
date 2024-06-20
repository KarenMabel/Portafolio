import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-propietario',
  templateUrl: './propietario.page.html',
  styleUrls: ['./propietario.page.scss'],
})
export class PropietarioPage implements OnInit {

  vivienda: string ="";
  habitacion: string ="";
  mascotas: string ="";
  ejercicios: string ="";
  alimento: string ="";
  fumar: string ="";
  lgbt: string ="";
  alcohol: string ="";
  

  constructor(private router:Router) { }

  ngOnInit() {
  }

  async registrar(){
    this.router.navigateByUrl('menu');
  }




  async back(){
    await this.router.navigateByUrl("tipo-registro");
  }

}
