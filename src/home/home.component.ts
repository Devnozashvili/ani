import { Component } from '@angular/core';
import { CardsComponent } from "./cards/cards.component";

@Component({
  selector: 'app-home',
  imports: [CardsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
title = "Watermelon"
description = "My Favorite Fruit"
linkOfWatermellon = "https://en.wikipedia.org/wiki/Watermelon"
imageSource = "https://images.unsplash.com/photo-1581074817932-af423ba4566e?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
textFromParent = "something"

print(){
  this.title = "delicios fruit"
}
}
