import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { List } from './models/list.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private webService: WebRequestService) { }


  createList(title: string): Observable<List>{
    return this.webService.post<List>('lists', {title});
  }

  createTask(title: string){
    // return this.webService.post(`lists`)
  }

  getLists(){
    return this.webService.get('lists');
  }

  getTasks(listId: string){
    return this.webService.get(`lists/${listId}/tasks`)
  }
}
