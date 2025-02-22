import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private webService: WebRequestService) { }


  createList(title: string){
    return this.webService.post('lists', {title});
  }

  getLists(){
    return this.webService.get('lists');
  }

  getTasks(listId: string){
    return this.webService.get(`lists/${listId}/tasks`)
  }
}
