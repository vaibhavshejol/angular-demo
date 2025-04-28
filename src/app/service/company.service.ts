import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor() { }

  callMe(){
    console.log("Call me function executed...");
  }

  sendMsgToComponent():string{
    return "Message from company service...";
  }
}
