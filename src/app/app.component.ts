import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  styles:[`
    h3{
      color:dodgerblue;
    }
    .app-servers{
    color:blueviolet;
}
  `]
})
export class AppComponent {
  title = 'practise';
}
