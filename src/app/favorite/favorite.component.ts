import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
})
export class FavoriteComponent implements OnInit {
  @Input('isFavorite') isSelected: boolean;
  @Output() change = new EventEmitter();
  status: boolean = false;
  constructor() { }

  ngOnInit() {
    console.log('oninit')
  }

  onClick() {
    this.status = !this.status;
    this.change.emit(this.isSelected);
  }
}
