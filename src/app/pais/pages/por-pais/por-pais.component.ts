import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false;
  tipo: string = 'Buscar por pais';
  paises: Country[] = []

  constructor(private paisService: PaisService) { }

  buscar_pais(termino: string){
    this.termino = termino
    this.hayError = false;
    console.log(this.termino);

    this.paisService.buscarPais(this.termino)
        .subscribe(paises => {
          //console.log(paises);
          this.paises = paises;
        }, err => {
          this.hayError = true;
        });
  }

  sugerencias(termino: string){
    this.hayError = false;

  }
}
