import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  template: `
    <nav class="navbar">
      <div class="navbar-brand">
        <a class="navbar-item">
          <img src="Assets/img/Carte_france_Region.jpg">
        </a>
      </div>
    </nav>
  `,
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}