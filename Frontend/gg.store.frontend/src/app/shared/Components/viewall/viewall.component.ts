import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonButton, IonRouterLink} from "@ionic/angular/standalone";


@Component({
  selector: 'app-viewall',
  templateUrl: './viewall.component.html',
  styleUrls: ['./viewall.component.scss'],
  standalone: true,

  imports:[
      IonButton,
      RouterLink,
  ]
})
export class ViewallComponent  implements OnInit {


  constructor() { }

  ngOnInit() {}

}
