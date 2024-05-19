import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton} from '@ionic/angular/standalone';
import {SearchbarComponent} from 'src/app/shared/Components/searchbar-filter/searchbar.component';
import { ViewallComponent } from 'src/app/shared/Components/viewall/viewall.component';
@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
  standalone: true,
  imports: [IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    CommonModule, 
    SearchbarComponent,
    ViewallComponent,
    IonButton]
})
export class ProductsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
