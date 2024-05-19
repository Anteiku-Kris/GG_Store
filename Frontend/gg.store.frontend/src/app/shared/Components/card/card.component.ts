import { Component, Input, OnInit } from '@angular/core';
import { 
  IonCard, 
  IonCardContent, 
  IonCardSubtitle, 
  IonCardHeader, 
  IonCardTitle, 
  IonContent,
IonRow, 
IonCol} from '@ionic/angular/standalone';
import { Character } from 'src/app/core/models/character.model';
import { RickService } from 'src/app/core/services/rick.service';
import { NgForOf } from '@angular/common';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
  
  imports:[
     IonCard,
     IonCardContent,
     IonCardSubtitle,
     IonCardTitle,
     IonCardHeader,
     IonContent,
     IonRow,
     IonCol,
     NgForOf
  ]
})
export class CardComponent  implements OnInit {

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
