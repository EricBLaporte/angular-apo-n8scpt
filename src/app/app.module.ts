import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MapComponent } from './map/map.component';
import { TopBarComponent } from './top-bar/top-bar.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, MapComponent, TopBarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
