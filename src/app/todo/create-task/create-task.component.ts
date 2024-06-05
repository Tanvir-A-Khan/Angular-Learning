import { Component, inject } from '@angular/core';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css'],
  providers: [TaskService],
})
export class CreateTaskComponent {
  taskService: TaskService = inject(TaskService);
  task: string = '';

  setTask() {
    this.taskService.setTask(this.task);
    // console.log(this.task);
  }
}
