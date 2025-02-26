import {Component, inject} from '@angular/core';
import {MyLibComponent, MyLibService} from 'my-lib';

@Component({
  selector: 'app-root',
  imports: [MyLibComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})
export class AppComponent {
  title = 'my-app';

  service = inject(MyLibService);

  ngOnInit() {
    this.service.setTestProperty('The Property was adjusted');

  }
}
