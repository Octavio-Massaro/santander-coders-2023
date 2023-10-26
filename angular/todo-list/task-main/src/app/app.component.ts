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
      description: 'Ler um pouco',
      status: 'trabalhando',
      title: 'Leitura',
    },
    {
      date: new Date(),
      description: 'Nadar 200 metros',
      status: 'trabalhando',
      title: 'Natação',
    },
    {
      date: new Date(),
      description: 'Dar aquela estudada em Angular',
      status: 'finalizado',
      title: 'Estudar Angular',
    },
    {
      date: new Date(),
      description: 'Pegar aquele peixão',
      status: 'finalizado',
      title: 'Pescar',
    },
    {
      date: new Date(),
      description: 'Que sono bom',
      status: 'toDo',
      title: 'Dormir',
    },
    {
      date: new Date(),
      description: 'Vou virar um monge',
      status: 'toDo',
      title: 'Meditar',
    },
  ];

  logListTask: Task[] = [];

  selectedTask: Task | null = null;

  ngOnInit() {
    console.log(this.selectedTask);
  }

  onAddTask(task: Task) {
    this.listTask.push(task);
  }

  handleTask(task: Task) {
    this.selectedTask = task;
    this.logListTask.push(task);
  }

  fecharDetalhes() {
    this.selectedTask = null;
  }
}
