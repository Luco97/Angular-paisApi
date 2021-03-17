import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino: string = '';
  hayError: boolean = false;
  tipo: string = 'Buscar por capital';
  capitales: Country[] = [];

  constructor(private paisService: PaisService) { }

  buscar_capital(termino: string){
    this.termino = termino;
    this.hayError = false;

    this.paisService.buscarCapital(this.termino)
        .subscribe( capitales => {
          this.capitales = capitales;
        }, err =>{
          this.hayError = true;
        })
  }

}
