import { Component, OnInit, inject } from '@angular/core';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  taskList: string[] = ['task', 'task1', 'task2', 'task3'];

  taskService: TaskService = inject(TaskService);
  ngOnInit() {
    this.taskService.CreatedTasks.subscribe((value) => {
      this.taskList.push(value);
    });
  }
}
