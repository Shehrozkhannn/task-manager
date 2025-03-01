import { Component } from '@angular/core';
import { TasksService } from '../../tasks.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-new-task-popup',
  imports: [],
  templateUrl: './new-task-popup.component.html',
  styleUrl: './new-task-popup.component.scss'
})
export class NewTaskPopupComponent {
  listId: any;

  constructor(private taskService: TasksService, private route: ActivatedRoute, private router: Router){
    this.route.params.subscribe((route)=> {
      console.log(route['listId'])
      this.listId = route['listId']
    })
  }


  createTask(title: string) {
    this.taskService.createTask(title, this.listId).subscribe((newTask: Task) => {
      this.router.navigate(['../'], { relativeTo: this.route });
    })
  }

  cancel(){
    this.router.navigate(['/lists']);
  }
}
