import { Injectable } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

// tslint:disable-next-line: variable-name
private _UserLogin: string;
get UserLogin() { return this._UserLogin; }

set UserLogin(value: string) { this._UserLogin = value; }



// tslint:disable-next-line: variable-name
private _ServiceUrl: string;
    get ServiceURI() {
        // this.reloadURI();
        return this._ServiceUrl;
    }
    set ServiceURI(value: string) {
        // this.storage.set(this.STORAGE_KEY_CONFIG, value).then(() => {
        //     this.reloadURI();
        // })
        this._ServiceUrl = value;
    }

constructor() { }



}
