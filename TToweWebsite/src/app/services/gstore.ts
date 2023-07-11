import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class gStore{

    constructor() { 
    }

    public appPages;

    async getAppPages()
    {  
      if(this.appPages){
        return this.appPages
      }
      var indexes = await import('../locale/index.json').then((data) => { 
        return data;   
       }).catch(error =>{console.log(error.message)});  
      this.appPages = indexes;
      return await indexes;
    }   
}