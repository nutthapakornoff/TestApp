import { Component, OnInit } from '@angular/core';
import { RestapiService } from 'src/app/services/restapi.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-ClaimDocument',
  templateUrl: './ClaimDocument.component.html',
  styleUrls: ['./ClaimDocument.component.css']
})
export class ClaimDocumentComponent implements OnInit {

  constructor(private restapi: RestapiService) { }

  ngOnInit() {
    this.refreshclaim();
  }

  refreshclaim() {
    this.restapi.getclaimdocumentbypage(1, 10).subscribe((res) => {
      console.log(res);
    },
    (err) => {
      console.log('error');
    });
  }

}
