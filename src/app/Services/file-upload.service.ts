import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {



  fileList:any= [];
  addFileNotification=new Subject<any[]>();;


  constructor() { }
  addFile(file:File) {
    console.log("FileUploadService",file)
    this.fileList.push(file);
    this.addFileNotification.next(this.fileList);
  }
}
