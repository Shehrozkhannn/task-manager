import { Component } from '@angular/core';
import { TasksService } from '../../tasks.service';
import { Router, RouterModule } from '@angular/router';
import { List } from '../../models/list.model';

@Component({
  selector: 'app-new-list-popup',
  imports: [RouterModule],
  templateUrl: './new-list-popup.component.html',
  styleUrl: './new-list-popup.component.scss'
})
export class NewListPopupComponent {

  constructor(private taskService: TasksService, private router: Router){}

  createList(title:string){
    this.taskService.createList(title).subscribe((res:List)=>{
      console.log(res)
      this.router.navigate(['/lists', res._id])
    })
  }
}
