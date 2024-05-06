import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  usuario: string = "";
  contrasena: string = "";

  constructor(private router: Router) { }

  ngOnInit() {
  }

  async Login(){

    if(this.usuario == ""){
      
    }

    if(this.contrasena == ""){
    
    }
    
    await this.router.navigateByUrl('menu');
  }

  async registrateAqui(){
    await this.router.navigateByUrl('registro');

  }

  async restContrasena(){
    await this.router.navigateByUrl('restablecer');

  }



}
