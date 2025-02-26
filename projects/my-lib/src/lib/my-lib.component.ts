import {Component, inject} from '@angular/core';
import {MyLibService} from './my-lib.service';

@Component({
  selector: 'lib-my-lib',
  imports: [],
  standalone: true,
  template: `
    <p>
      my-lib works!
    </p>
    {{
        TestProp
    }}
  `,
  styles: ``
})
export class MyLibComponent {
  service = inject(MyLibService);

  get TestProp() {
    return this.service.testProperty;
  }

}
