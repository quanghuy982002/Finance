import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadComponent } from './share/upload/upload.component';
import { DragDropComponent } from './share/drag-drop/drag-drop.component';

const routes: Routes = [
  {path: "upload", component: UploadComponent },
  {path: "drag-drop", component: DragDropComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
