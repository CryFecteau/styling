import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Stratego';
  localPlayer: string;

  setLocalPlayer(username: string) {
    this.localPlayer = username;
  }

}
