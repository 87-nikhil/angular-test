import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-post-album',
  templateUrl: './post-album.component.html',
  styleUrls: ['./post-album.component.scss']
})
export class PostAlbumComponent implements OnInit {
  allData: any=[];
  totalcount: any;
  limit: number;
  page: number;
  paginateData: any;
  details: any;
  showDetails: boolean=false;
  title:any;
  detailsOfAlbum: any=[];
  constructor(private dataService : DataService) { }

  ngOnInit() {
    this.getData()
  }


  getData() {
    this.page = 1;
    this.limit = 10;
    this.totalcount = 1;
    this.dataService.getAlbumData().subscribe((res: any) => {
      this.allData = res;
      this.pageChange()
      this.totalcount = res.length
    })
  }

  pageChange(){
    this.paginateData =  this.allData.slice((this.page - 1) * this.limit, (this.page - 1) * this.limit + this.limit);
  }

  changed(e) {
    this.allData.forEach(element => {
            if(e.target.value == element.title) {
               console.log(element.title)
               this.showDetails = true;
               this.detailsOfAlbum = element
            }
    });
  }

  getDetails(data) {
    this.showDetails = true;
    this.detailsOfAlbum = data;
  }

  back(){
    this.showDetails = false;
    this.detailsOfAlbum = [];
  }

}
