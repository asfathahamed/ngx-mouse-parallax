import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private imgSrc = 'assets/images/';
  imgBackground = this.imgSrc + 'background.jpg';
  imgHero = this.imgSrc + 'hero.png';
  imgTitle = this.imgSrc + 'title.png';
}
