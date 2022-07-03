import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showText : boolean = true
  constructor(private route : ActivatedRoute) { }

  hideInitialText(){
    this.showText = false
  }

}
