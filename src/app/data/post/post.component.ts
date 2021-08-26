import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  allData: any=[];
  totalcount: any;
  limit: number;
  page: number;
  paginateData: any;
  details: any;
  showDetails: boolean=false;

  constructor(private dataService : DataService) { }

  ngOnInit() {
    this.getData()
  }

    getData() {
      this.page = 1;
      this.limit = 10;
      this.totalcount = 1;
      this.dataService.postData().subscribe((res: any) => {
        this.allData = res;
        this.pageChange()
        this.totalcount = res.length
      })
    }

    pageChange(){
      this.paginateData =  this.allData.slice((this.page - 1) * this.limit, (this.page - 1) * this.limit + this.limit);
    }

    getDetails(id){
    this.dataService.getPostDetailsData(id).subscribe((res: any) => {
      this.details = res;
      this.showDetails = true;
    })
    }  
    
    back(){
      this.showDetails = false;
      this.details = [];
    }
}
