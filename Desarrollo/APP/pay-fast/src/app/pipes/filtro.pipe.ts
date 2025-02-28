import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform( arreglo: any[], texto: string): any[] {
    if( texto == ""){
      return arreglo
    }
    
    return arreglo.filter( items => {
        texto = texto.toLowerCase()
        return items.smo_n.toLowerCase().includes(texto)   
      })
  }
}
