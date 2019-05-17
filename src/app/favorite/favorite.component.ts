import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
})
export class FavoriteComponent implements OnInit {
  @Input('is-favorite') isSelected: boolean;
  status: boolean = false;
  constructor() { }

  ngOnInit() {
    console.log('oninit')
  }

  onClick() {
    this.status = !this.status
  }
}
