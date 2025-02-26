import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyLibService {

  testProperty = 'not adjusted yet';

  setTestProperty(property: string) {
    this.testProperty = property;
  }

  constructor() { }
}
