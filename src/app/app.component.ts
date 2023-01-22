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
    this.trpc.client.hi.query().then((res) => {
      console.log('getuser!', res);
    });
  }
}
