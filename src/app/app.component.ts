import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //public todos: any[] = []; // vazio
  public todos: Todo[] = []; 
  public title: string="Minhas Tarefas";
  public form: FormGroup;
  //public todos: any[]; indefinido

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required,
      ])]

    });
    this.todos.push(new Todo(1, "Estudar angular", true));
    this.todos.push(new Todo(2, "Ir Malhar", false));
    this.todos.push(new Todo(3, "Jogar", false));
  }

  remove(todo : Todo){
    const index = this.todos.indexOf(todo);
    if(index !== -1){
      this.todos.splice(index, 1);
    }
  }

  markAsDone(todo : Todo){
    todo.done=true;
  }

  MarkAsUndone(todo : Todo){
    todo.done=false;
  }
}
