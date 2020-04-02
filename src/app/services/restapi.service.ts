import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

constructor(public http: HttpClient,
            private commonservice: CommonService) { }

 fetchdatawithgetfromuri(servicepath: string, jsonparam?: string) {
  let param: HttpParams;
  if (jsonparam) {
     param = new HttpParams({
      fromObject : JSON.parse(jsonparam)
    });
  }
  const accesstoken = localStorage.getItem('token');
  console.log(this.commonservice.ServiceURI + servicepath);
  return this.http.get(this.commonservice.ServiceURI + servicepath,
                      {headers: new HttpHeaders().set('Authorization' , 'Bearer ' + accesstoken),
                      params: param});

 }

 getclaimdocumentbypage(Pagenum: number , pagesize: number){
  return this.fetchdatawithgetfromuri('OffDocument/GetClaimHeaderbyPage'
                      , JSON.stringify({PageNumber: Pagenum, PageSize: pagesize}));
}

}
