import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {
  constructor() { }

  doRequest(): any {
    console.log('hello form ApiClientService');
    
  }
}
