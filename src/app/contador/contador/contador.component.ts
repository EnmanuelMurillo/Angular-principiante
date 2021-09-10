import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
                <h1> {{ titulo }} </h1>
            <h3>La base es: <strong> {{base}} </strong></h3>
            
            
            <!-- <button (click)="sumar()"> +1 </button> -->
            <button (click)="acumular(base)">+{{base}}</button>
            
            <span>{{ numero }}</span>
            
            <button (click)="acumular(-base)">-{{base}}</button>

            <!-- <button (click)="restar()"> -1 </button> -->
    `
})
export class ContadorComponent {

    titulo:string = 'Contador App';
    numero:number = 10;
   
    // sumar(){
    //   this.numero += 1;
    // }
  
    // restar(){
    //   this.numero -= 1;
    // }
  
    base:number = 5;
  
    acumular( valor:number ){
      this.numero += valor;
    }
  
  
}