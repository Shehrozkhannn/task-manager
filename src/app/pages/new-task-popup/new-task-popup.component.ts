import { Component } from '@angular/core';
import { TasksService } from '../../tasks.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-task-popup',
  imports: [],
  templateUrl: './new-task-popup.component.html',
  styleUrl: './new-task-popup.component.scss'
})
export class NewTaskPopupComponent {

  constructor(private taskService: TasksService, private route: ActivatedRoute){
    this.route.params.subscribe((route)=> {
      console.log(route['listId'])
    })
  }


  createTask(title: string) {
    // this.taskService.createTask(title, this.listId).subscribe((newTask: Task) => {
    //   this.router.navigate(['../'], { relativeTo: this.route });
    // })
  }
}
