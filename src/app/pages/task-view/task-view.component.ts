import { Component } from '@angular/core';
import { ActivatedRoute, Router, Params, RouterModule } from '@angular/router';
import { TasksService } from '../../tasks.service';
import { CommonModule } from '@angular/common';
import { Task } from '../../models/task.model';
import { List } from '../../models/list.model';

@Component({
  selector: 'app-task-view',
  imports: [RouterModule,CommonModule],
  templateUrl: './task-view.component.html',
  styleUrl: './task-view.component.scss'
})
export class TaskViewComponent {
  lists!: List[];
  tasks!: Task[];

  selectedListId!: string;

  constructor(private route: ActivatedRoute, private router: Router, private taskService: TasksService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        if (params['listId']) {
          this.selectedListId = params['listId'];
          this.taskService.getTasks(params['listId']).subscribe((tasks:any) => {
            this.tasks = tasks;
          })
        } else {
          this.tasks = [];
        }
      }
    )

    this.taskService.getLists().subscribe((lists: any) => {
      this.lists = lists;
    })
    
  }

  onTaskClick(task: Task) {
    this.taskService.complete(task).subscribe(()=> {
      console.log('Updated')
      task.completed = !task.completed;
    })
  }

  onDeleteListClick() {

  }

  onDeleteTaskClick(id: string) {

  }
}
