import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { FileUploadService } from 'src/app/Services/file-upload.service';
import { PdfViewDialogComponent } from '../pdf-view-dialog/pdf-view-dialog.component';

@Component({
  selector: 'app-file-lists',
  templateUrl: './file-lists.component.html',
  styleUrls: ['./file-lists.component.css']
})
export class FileListsComponent implements OnInit {
  files:any=[]
  pdfSrc;
  @Output() onFileSelection=new EventEmitter<any>();
  subscription: Subscription;
  constructor(private fileUploadService:FileUploadService,public dialog: MatDialog) { }

  ngOnInit(): void {

    this.subscription = this.fileUploadService.addFileNotification.subscribe(
      res => {
        console.log(res)
        this.files = res;
      }
    );
  }
  openDialPdfView(event){
    // const dialogRef = this.dialog.open(PdfViewDialogComponent, {
     
    //   data: event
    // });
    // dialogRef.afterClosed().subscribe((result) => {})
    this.onFileSelection.emit(event)
  }

}
