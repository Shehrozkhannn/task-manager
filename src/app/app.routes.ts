import { Routes } from '@angular/router';
import { TaskViewComponent } from './pages/task-view/task-view.component';
import { NewListPopupComponent } from './pages/new-list-popup/new-list-popup.component';

export const routes: Routes = [
    { path: '', redirectTo: '/lists', pathMatch: 'full' },
    { path: 'new-list', component: NewListPopupComponent },
    // { path: 'edit-list/:listId', component: EditListComponent },
    // { path: 'login', component: LoginPageComponent },
    // { path: 'signup', component: SignupPageComponent },
    { path: 'lists', component: TaskViewComponent },
    { path: 'lists/:listId', component: TaskViewComponent },
    // { path: 'lists/:listId/new-task', component: NewTaskComponent },
    // { path: 'lists/:listId/edit-task/:taskId', component: EditTaskComponent },
  ];

