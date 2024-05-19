import { Component, OnInit } from '@angular/core';
import {IonSearchbar, IonIcon, IonButton} from '@ionic/angular/standalone';




@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
  standalone: true,

  imports:[
    IonSearchbar,
    IonIcon,
    IonButton, 
  ]
})
export class SearchbarComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
