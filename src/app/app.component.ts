import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
        // load the default theme (use correct path to node_modules)
        '../../node_modules/@progress/kendo-theme-default/dist/all.css'
    ],
})
export class AppComponent {
  title = 'Hello!';


}
