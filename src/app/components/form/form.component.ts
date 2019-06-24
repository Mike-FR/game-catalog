import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Game } from '../../model/game';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  title: string;
  description: string;
  price: number;
  cover: string;

  @Output() gameAdded = new EventEmitter<Game>();

  constructor() { }

  ngOnInit() {
  }

  addGame() {
    this.gameAdded.emit({
      title: this.title,
      description: this.description,
      price: this.price,
      cover: this.cover
    });
    // this.title = '';
    // this.description = '';
    // this.price = null;
    // this.cover = '';
  }

}
