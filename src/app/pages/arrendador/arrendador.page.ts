import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-arrendador',
  templateUrl: './arrendador.page.html',
  styleUrls: ['./arrendador.page.scss'],
})
export class ArrendadorPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  async back(){
    await this.router.navigateByUrl("tipo-registro");
  }

}
