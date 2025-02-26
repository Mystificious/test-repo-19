import {ChangeDetectionStrategy, Component, inject, signal} from '@angular/core';
import {MyLibComponent, MyLibService} from 'my-lib';

@Component({
  selector: 'app-root',
  imports: [MyLibComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'my-app';

  service = inject(MyLibService);
  isLoaded = signal(false);

  ngOnInit() {
    setTimeout(() => {
      this.isLoaded.set(true);
    }, 1000);
  }
}
