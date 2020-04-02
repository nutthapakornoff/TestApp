import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userlogin: string;
  constructor(private commonservice: CommonService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.userlogin = this.commonservice.UserLogin;
    // tslint:disable-next-line: no-string-literal
    // this.userlogin = this.route.params.value['usercode'];
    // console.log(this.route.params.value);
    // this.userlogin = this.route.snapshot.paramMap.get('usercode');
  }

}
