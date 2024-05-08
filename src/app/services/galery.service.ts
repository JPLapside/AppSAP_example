import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIreponse, Gallery } from './gallery';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GaleryService {

  url = 'https://pixabay.com/api/?key=43017198-8084a8b34cfc83a0a35b1c8c6&q=red+flowers&image_type=photo&pretty=true';

  constructor(private http: HttpClient) {}
  
  
  getImageUrl(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  getListGallery(){
    return this.http.get<APIreponse>(this.url);
  }
  
}
