import { Component, OnInit } from '@angular/core';
import { gStore } from './services/gstore';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private gStoreService: gStore) {
  }
  appPages;
  ngOnInit() {
    this.appPages = this.gStoreService.getAppPages();
  }

}
