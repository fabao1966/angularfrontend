import { inject } from '@angular/core';
import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { MusicService } from './services/music.service';
import { Music } from './models/music.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';
  musicas: Music[] = [];
  private musicService = inject(MusicService);

  constructor(){
    this.obterMusicasCadastradas();
  }

  obterMusicasCadastradas(){
    this.musicService.obterMusicas()
    .subscribe(musicas => this.musicas = musicas)
  }
}
