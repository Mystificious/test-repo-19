import {Directive, effect, inject} from '@angular/core';
import {MyLibService} from './my-lib.service';

@Directive({
  selector: '[libTest]'
})
export class TestDirective {
  service = inject(MyLibService);

  constructor() {
    // not working: setting the property to different injection scope?
    this.service.setTestProperty('The Property was adjusted');
  }

  ngAfterViewInit() {
    // not working: setting the property to different injection scope?
    this.service.setTestProperty('The Property was adjusted');
  }

}
