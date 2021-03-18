import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent implements OnInit {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania']
  regionActiva: string = '';
  paises: Country[] = [];
  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  activarRegion(region: string){
    if(this.regionActiva == region){
      return; //Condicion para no volver a cargar lo mismo
    }
    this.regionActiva = region;
    console.log(this.regionActiva);
    this.paisService.buscarRegion(region)
        .subscribe( paises => {
          this.paises = paises;
          console.log(paises)
        })
  }

}
