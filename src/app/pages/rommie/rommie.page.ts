import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rommie',
  templateUrl: './rommie.page.html',
  styleUrls: ['./rommie.page.scss'],
})
export class RommiePage implements OnInit {

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
