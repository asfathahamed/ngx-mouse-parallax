import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParallaxComponent } from './feature/parallax/parallax.component';
import { ParallaxItemComponent } from './feature/parallax-item/parallax-item.component';
import { ParallaxService } from './data-service/parallax.service';

@NgModule({
  declarations: [
    AppComponent,
    ParallaxComponent,
    ParallaxItemComponent
  ],

  imports: [
    BrowserModule
  ],
  providers: [ParallaxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
