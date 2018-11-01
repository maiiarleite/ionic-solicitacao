import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  todos: string[] = [];
  todod: string;

  constructor(public navCtrl: NavController) {

  }

add(){
  this.todos.push(this.todo);
  this.todo="";
}
delete(item){
  var index = this.todos.indexOf(item, 0);
  if (index > -1){
    this.todos.splice(index, 1);
  }
}

}
