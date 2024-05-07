import { HttpClient } from "@angular/common/http";
import {Injectable, inject} from "@angular/core";
@Injectable({
  providedIn: 'root'
})

export class MusicService{
  private httpCliente = inject(HttpClient);

  obterMusicas(){

  }
}
