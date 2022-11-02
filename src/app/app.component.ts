import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'triangle';
  //ha egyböl értéket adok akkor nem kell megadni a tipust
  base : number = 0;
  height: number= 0;
  area!: number;
  areaShow = false;

  //osztályban nem kell function

  calcArea():void{
    if(this.checkValidation()){
      this.area = this.base * this.height / 2;
      this.base = 0;
      this.height = 0;
      this.areaShow= true;
    }
    else{
      alert("Hiba! Adjon meg adatot")
    }
  }

  checkValidation():boolean{
    let valid = true;
    if(this.base <= 0){
      valid= false;
    }
    if(this.height <= 0){
      valid= false;
    }
    return valid;
  }
}
