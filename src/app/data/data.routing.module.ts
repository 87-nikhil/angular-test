import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DataComponent } from "./data.component";
import { PostAlbumComponent } from "./post-album/post-album.component";
import { PostComponent } from "./post/post.component";

const routes: Routes = [
    {
      path: '',
      component: DataComponent,
      children: [
        { path: '', component: PostComponent },
        { path: 'post-album', component: PostAlbumComponent },
      ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class DataRoutingModule {}
  