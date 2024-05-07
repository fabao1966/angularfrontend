import { HttpClient } from "@angular/common/http";
import {Injectable, inject} from "@angular/core";
import { environment } from "../../environments/environment";
import { Music } from "../models/music.model";
@Injectable({
  providedIn: 'root'
})

export class MusicService{
  private httpCliente = inject(HttpClient);
  private url = environment.api;

  obterMusicas(){
    return this.httpCliente.get<Music[]>(this.url + 'musics');
  }
}
