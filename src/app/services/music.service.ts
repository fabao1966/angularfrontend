import { HttpClient } from "@angular/common/http";
import {Injectable, inject} from "@angular/core";
import { environment } from "../../environments/environment";
import { Music } from "../models/music.model";
@Injectable({
  providedIn: 'root'
})

export class MusicService{
  private httpCliente = inject(HttpClient);
  private url = `${environment.apiUrl}musics`;

  obterMusicas(){
    return this.httpCliente.get<Music[]>(this.url);
  }

  cadastrarMusica(musica: Music){
    return this.httpCliente.post<Music>(this.url, musica);
  }

}
