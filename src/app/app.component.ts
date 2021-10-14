import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  input = '';

  todoList = [
    { id: 1, name: 'To do 1', status: true },
    { id: 2, name: 'To do 2', status: false },
    { id: 3, name: 'To do 3', status: true },
  ];

  addTodo() {
    if (!this.input.length) {
      alert('Please enter input');
    } else {
      this.todoList.push({
        id: this.todoList[this.todoList.length - 1].id + 1,
        name: this.input,
        status: false,
      });
      this.input = '';
    }
  }

  removeTodo(id: number) {
    const index = this.todoList.findIndex((t) => t.id === id);
    this.todoList.splice(index, 1);
  }

  changeStatus(item: any) {
    item.status = !item.status;
  }
}
