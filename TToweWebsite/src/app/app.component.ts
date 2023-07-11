import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { gStore } from './services/gstore';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private gStoreService: gStore, private ref: ChangeDetectorRef) {
  }

  public appPages;
  public appPagesFlag: boolean = false;

  async ngOnInit() {
    await this.gStoreService.getAppPages().then(() => {
    this.appPages = this.gStoreService.appPages.default;
    this.appPagesFlag = true;
    console.log(this.appPages);
    console.log(this.appPagesFlag);
    this.ref.detectChanges();
    });
  };
}
