import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-arrendatario',
  templateUrl: './arrendatario.page.html',
  styleUrls: ['./arrendatario.page.scss'],
})
export class ArrendatarioPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  async back(){
    await this.router.navigateByUrl("tipo-registro");
  }

}
