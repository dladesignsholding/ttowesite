import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { gStore } from '../services/gstore';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public appPages;
  public pageData = {
    title: 'Loading',
    header: '',
    body: ''
  };
  constructor(private activatedRoute: ActivatedRoute, private gStoreService: gStore) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.appPages = this.gStoreService.getAppPages();
    import('../locale/' + this.folder + ".json").then((data) => {      
      this.loadPageData(data);
     }).catch(error =>{console.log(error.message)});
  }

  loadPageData(data){
    this.pageData = data;
  }

}
