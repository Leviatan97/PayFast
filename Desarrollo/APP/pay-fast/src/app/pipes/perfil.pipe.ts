import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment';

const URL = environment.url
@Pipe({
  name: 'perfil'
})
export class PerfilPipe implements PipeTransform {

  transform(img: string, userId: string): any {
    return `${URL}/${userId}/${img}`;
  }

}
