import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class gStore {
    constructor() { }

    appPages = [
        { title: 'About Me', url: '/home', icon: 'home' },
        { title: 'Consultation', url: '/consultation', icon: 'call' },
        { title: 'DUI Law', url: '/info', icon: 'archive' }
      ];  

    getAppPages(){ 
        return this.appPages;  
    }

}