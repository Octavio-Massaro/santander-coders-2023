import { Component } from '@angular/core';
import { Task } from 'src/models/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  listTask: Task[] = [
    {
      date: new Date(),
      description: 'description01',
      status: 'trabalhando',
      title: 'title06',
    },
    {
      date: new Date(),
      description: 'description01',
      status: 'trabalhando',
      title: 'title09',
    },
    {
      date: new Date(),
      description: 'description01',
      status: 'trabalhando',
      title: 'title10',
    },
    {
      date: new Date(),
      description: 'description01',
      status: 'finalizado',
      title: 'title16',
    },
    {
      date: new Date(),
      description: 'description01',
      status: 'finalizado',
      title: 'title17',
    },
    {
      date: new Date(),
      description: 'description01',
      status: 'toDo',
      title: 'title18',
    },
    {
      date: new Date(),
      description: 'description01',
      status: 'toDo',
      title: 'title19',
    },
    {
      date: new Date(),
      description: 'description01',
      status: 'trabalhando',
      title: 'title20',
    },
    {
      date: new Date(),
      description: 'description01',
      status: 'trabalhando',
      title: 'title23',
    },
    {
      date: new Date(),
      description: 'description01',
      status: 'trabalhando',
      title: 'title24',
    },
    {
      date: new Date(),
      description: 'description01',
      status: 'finalizado',
      title: 'title27',
    },
    {
      date: new Date(),
      description: 'description01',
      status: 'finalizado',
      title: 'title28',
    },
  ];

  selectedTask: Task | null = null;

  ngOnInit() {
    console.log(this.selectedTask);
  }

  onAddTask(task: Task) {
    this.listTask.push(task);
  }

  handleTask(task: Task) {
    this.selectedTask = task;
  }

  fecharDetalhes() {
    this.selectedTask = null;
  }
}
