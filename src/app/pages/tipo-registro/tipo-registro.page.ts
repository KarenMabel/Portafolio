import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { StorageService } from 'src/app/services/storage.service';


@Component({
  selector: 'app-tipo-registro',
  templateUrl: './tipo-registro.page.html',
  styleUrls: ['./tipo-registro.page.scss'],
})
export class TipoRegistroPage implements OnInit {

  seleHabitacion: []=[];
  seleRommie:[]=[];

  constructor(private router: Router,
              private auth: AngularFireAuth, 
              private storage: StorageService
  ) { }

  ngOnInit() {
  }
  
  async habitacion(){

    await this.auth.currentUser;
    await this.storage.keepUser(this.seleHabitacion)
    await this.router.navigateByUrl("rommie");
  }

  async rommie(){
    await this.auth.currentUser;
    await this.storage.keepUser(this.seleRommie)
    await this.router.navigateByUrl("propietario");
  }

  async back(){
    await this.router.navigateByUrl("registro");
  }

}
