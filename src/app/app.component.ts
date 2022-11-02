import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'triangle';
  //ha egyböl értéket adok akkor nem kell megadni a tipust
  base !: number;
  height!: number;
  area!: number;

  //osztályban nem kell function

  calcArea():void{
    this.area = this.base * this.height / 2;
  }
}
