import { inject } from '@angular/core';
import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { MusicService } from './services/music.service';
import { Music } from './models/music.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';
  musicas$ = new Observable<Music[]>();

  private musicService = inject(MusicService);

  //inputs
    id = '' ;

    autor =  '';

    musica =  '';

  constructor(){
    this.obterMusicasCadastradas();
  }

  obterMusicasCadastradas(){
    this.musicas$ = this.musicService.obterMusicas();
  }

  cadastrarMusica(){
    if (!this.musica || !this.autor) {
      return;
    }
    this.musicService.cadastrarMusica(
      {author: this.autor, text: this.musica})
      .subscribe(() => this.obterMusicasCadastradas());
  }

}
