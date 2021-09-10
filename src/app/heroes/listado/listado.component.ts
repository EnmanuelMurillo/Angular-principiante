import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['TheCH', 'Yo', 'El', 'tu', 'todos'];

  // borrarHeroe(){
  //   // this.heroes = [ '', 'Yo', 'El', 'tu', 'todos']
  //   this.heroes.shift();
  // }

  heroeBorrado: string = '';

  borrarHeroe(){
    // const heroeBorrado = this.heroes.shift();
     this.heroeBorrado = this.heroes.shift() || '';
  }

}
