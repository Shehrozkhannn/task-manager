import { Component } from '@angular/core';
import { TasksService } from '../../tasks.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-new-list-popup',
  imports: [RouterModule],
  templateUrl: './new-list-popup.component.html',
  styleUrl: './new-list-popup.component.scss'
})
export class NewListPopupComponent {

  constructor(private taskService: TasksService){

  }

  createList(title:string){
    this.taskService.createList(title).subscribe((res)=>{
      console.log(res)
      
    })
  }
}
