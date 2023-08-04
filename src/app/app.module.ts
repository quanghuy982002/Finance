import { MessageService } from 'primeng/api';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarComponent } from './share/menubar/menubar.component';
import { MenubarModule } from 'primeng/menubar';
import { ToastModule } from 'primeng/toast';
import { FileUploadModule } from 'primeng/fileupload';
import { UploadComponent } from './share/upload/upload.component';
import { DragDropModule } from 'primeng/dragdrop';
import { DragDropComponent } from './share/drag-drop/drag-drop.component';
import { ButtonModule } from 'primeng/button';
import { TabMenuModule } from 'primeng/tabmenu';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    UploadComponent,
    DragDropComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    ToastModule,
    FileUploadModule,
    DragDropModule,
    ButtonModule,
    BrowserAnimationsModule,
    TabMenuModule,
    HttpClientModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
