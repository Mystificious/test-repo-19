import {Component, inject} from '@angular/core';
import {MyLibService} from './my-lib.service';

@Component({
  selector: 'lib-my-lib',
  imports: [],
  standalone: true,
  template: `
    <div style="border: 1px solid blue;">
      Component: MyLibComponent
      <p>
        TestProp (gets adjusted by directive): "{{TestProp}}"
      </p>

    </div>
  `,
  styles: ``
})
export class MyLibComponent {
  service = inject(MyLibService);

  get TestProp() {
    return this.service.testProperty;
  }

  ngOnInit() {
    // works as expected:
    // this.service.setTestProperty('The Property was adjusted');
  }

}
