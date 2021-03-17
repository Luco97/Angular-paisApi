import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from "rxjs/operators";

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {

  @Output('pais') onEnter: EventEmitter<string> = new EventEmitter();
  @Input('EstoEsUnInput') placeholder: string = '';

  //DebounceTime
  @Output('posibles') onDebounce: EventEmitter<string> = new EventEmitter();
  debouncer: Subject<string> = new Subject();

  ngOnInit(): void {
    this.debouncer.pipe(
      debounceTime(300)
    )
    .subscribe( valor =>{
      this.onDebounce.emit(valor);
    })
  }
  teclaPresionada(event: any){
    this.debouncer.next( this.termino );
  }

  termino: string = '';
  constructor() { }



  buscar(){
    this.onEnter.emit(this.termino);
  }

}
