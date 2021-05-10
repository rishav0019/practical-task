import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FileUploadService } from 'src/app/Services/file-upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  @Output() currentFile=new EventEmitter<any>();
  constructor(private fileUploadService:FileUploadService) { }

  ngOnInit(): void {
  }
  files: any = [];

  uploadFile(event) {
  
   
    this.fileUploadService.addFile(event);
    this.currentFile.emit(event)
  }
  deleteAttachment(index) {
    // this.files.splice(index, 1)
  }
}
