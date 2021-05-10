import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { AppDragDropDirective } from './Directive/app-drag-drop.directive';
import { FileUploadComponent } from './Component/file-upload/file-upload.component';
import { FileListsComponent } from './Component/file-lists/file-lists.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import { PdfViewDialogComponent } from './Component/pdf-view-dialog/pdf-view-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PdfPreviewComponent } from './Component/pdf-preview/pdf-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    AppDragDropDirective,
    FileUploadComponent,
    FileListsComponent,
    PdfViewDialogComponent,
    PdfPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MatGridListModule,PdfViewerModule,MatDialogModule,BrowserAnimationsModule,MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
