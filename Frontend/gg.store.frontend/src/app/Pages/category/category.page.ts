import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, 
  IonHeader, 
  IonTitle,         
  IonToolbar, 
  IonCol, 
  IonRow, 
  IonGrid,
} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { CardComponent } from 'src/app/shared/Components/card/card.component';
import {SearchbarComponent} from 'src/app/shared/Components/searchbar-filter/searchbar.component';
import { NgFor } from '@angular/common';
import { Character } from 'src/app/core/models/character.model';
import { RickService } from 'src/app/core/services/rick.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
  standalone: true,
  imports: [
    IonContent,
     IonHeader, 
     IonTitle, 
     IonToolbar, 
     CommonModule, 
     FormsModule, 
     RouterLink,
     SearchbarComponent,
     CardComponent, 
     IonGrid,
     IonCol,
     IonRow,
     NgFor
     ]
})
export class CategoryPage {

  characters: Character[] = [];
  constructor(private rickService: RickService) {
   }

ngOnInit(){
  this.getCharacters();
}

async getCharacters(){
  const resp= await
  this.rickService.getCharacters();
  this.characters = resp.results;
}


}
