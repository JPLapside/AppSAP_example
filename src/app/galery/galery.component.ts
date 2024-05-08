import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { GaleryService } from '../services/galery.service';
import { Gallery } from '../services/gallery';
import { merge, of } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.css']
})
export class GaleryComponent {
  
  allImages!:Gallery[];
  dataSource: any[] | undefined;
  dataSize: number = 0;

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  
 
  constructor( private galeryService: GaleryService){     
  }

  ngOnInit() { 
    this.galeryService.getListGallery().subscribe(
      (url) => {
        this.allImages = url.hits;
        this.dataSize = this.allImages.length;
        this.linkListToPaginator();
      }
      );     
  }


  linkListToPaginator() {
    merge(this.paginator.page).pipe(
      startWith({}),
      switchMap(() => {
        return of(this.allImages);
      })
    ).subscribe(res => {      
      const from = this.paginator.pageIndex * 4;
      const to = from + 4;
      this.dataSource = res?.slice(from, to);
    });
  }

}
