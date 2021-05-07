import { Component } from '@angular/core';

@Component({
  selector: 'app-app-piano',
  templateUrl: './app-piano.component.html',
  styleUrls: ['./app-piano.component.scss'],
})
export class AppPianoComponent {
  sound(n: number) {
    const audio = new Audio();
    audio.src = `../assets/sounds/note${n}.wav`;
    audio.load();
    audio.play();
  }
}
