import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TransalteByHumans';
  pdfSrc;
  // pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";

  currentFileSelection(event:any){
   
   const reader = new FileReader();
    reader.onload = () => {
      this.pdfSrc = reader.result as string;
    };
    reader.readAsDataURL(event[0]);
  
  }

}
