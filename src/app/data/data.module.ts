import { NgModule, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataRoutingModule } from './data.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostComponent } from './post/post.component';
import { PostAlbumComponent } from './post-album/post-album.component';
import { DataComponent } from './data.component';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { HeaderComponent } from '../header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@Injectable()

@NgModule({
    declarations: [DataComponent,PostComponent,PostAlbumComponent,SidenavComponent,HeaderComponent],
    imports: [
      CommonModule,
      DataRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      NgbModule
    //   ToastrModule.forRoot({
    //     timeOut: 5000,
    //     closeButton:true,
    //     preventDuplicates: true,
    //   }),
    ],
    providers: [],
  
  })
  export class DataModule { }
  