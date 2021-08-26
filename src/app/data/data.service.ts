import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  postData(): Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }

  getPostDetailsData(id):Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/posts/'+id)
  }

  getAlbumData(): Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/photos')
  }
}
