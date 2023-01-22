import { Component } from '@angular/core';
import { TrpcService } from './core/trpc.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngapp';

  constructor(private trpc: TrpcService) {
    this.sayHi();
  }

  sayHi() {
    this.trpc.client.hi.query().then((res) => {
      console.log('hi!', res);
    });
  }
}
