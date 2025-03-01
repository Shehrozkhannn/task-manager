import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { List } from './models/list.model';
import { Observable } from 'rxjs';
import { Task } from './models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private webService: WebRequestService) { }


  createList(title: string): Observable<List>{
    return this.webService.post<List>('lists', {title});
  }

  createTask(title: string, listId: string): Observable<Task>{
    return this.webService.post(`lists/${listId}/tasks`, {title})
  }

  getLists(){
    return this.webService.get('lists');
  }

  getTasks(listId: string){
    return this.webService.get(`lists/${listId}/tasks`)
  }

  complete(task: Task){
    return this.webService.patch(`lists/${task._listId}/tasks/${task._id}`,{
      completed: !task.completed
    })
  }
}
