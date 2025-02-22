import { Component } from '@angular/core';
import { ActivatedRoute, Router, Params, RouterModule } from '@angular/router';
import { TasksService } from '../../tasks.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-view',
  imports: [RouterModule,CommonModule],
  templateUrl: './task-view.component.html',
  styleUrl: './task-view.component.scss'
})
export class TaskViewComponent {
  lists!: any[];
  tasks!: any[];

  selectedListId!: string;

  constructor(private route: ActivatedRoute, private router: Router, private taskService: TasksService) { }

  ngOnInit() {
    // this.route.params.subscribe(
    //   (params: Params) => {
    //     if (params.listId) {
    //       this.selectedListId = params.listId;
    //       this.taskService.getTasks(params.listId).subscribe((tasks: any[]) => {
    //         this.tasks = tasks;
    //       })
    //     } else {
    //       this.tasks = undefined;
    //     }
    //   }
    // )

    this.taskService.getLists().subscribe((lists: any) => {
      this.lists = lists;
    })
    
  }

  onTaskClick(task: any) {

  }

  onDeleteListClick() {

  }

  onDeleteTaskClick(id: string) {

  }
}
