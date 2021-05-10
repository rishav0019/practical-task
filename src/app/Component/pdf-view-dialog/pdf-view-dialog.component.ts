import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pdf-view-dialog',
  templateUrl: './pdf-view-dialog.component.html',
  styleUrls: ['./pdf-view-dialog.component.css']
})
export class PdfViewDialogComponent implements OnInit {
fileData;
pdfSrc
  constructor( public dialogRef: MatDialogRef<PdfViewDialogComponent>,@Inject(MAT_DIALOG_DATA) public data: any,) { }

  ngOnInit(): void {
    this.fileData=this.data;
    console.log(this.fileData);
    this.pdfUrl(this.fileData);
    
  }
  pdfUrl(event){
    const reader = new FileReader();
    reader.onload = () => {
      this.pdfSrc = reader.result as string;
    };
    reader.readAsDataURL(event[0]);
  }

}
