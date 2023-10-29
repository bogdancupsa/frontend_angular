import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() cardData: any;

  editCard() {
    console.log('Edit card', this.cardData);
  }

  deleteCard() {
    console.log('Delete card', this.cardData);
  }
}
