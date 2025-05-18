import { Routes } from '@angular/router';
import { TaskViewComponent } from './pages/task-view/task-view.component';
import { NewListPopupComponent } from './pages/new-list-popup/new-list-popup.component';
import { NewTaskPopupComponent } from './pages/new-task-popup/new-task-popup.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

export const routes: Routes = [
    { path: '', redirectTo: '/lists', pathMatch: 'full' },
    { path: 'new-list', component: NewListPopupComponent },
    { path: 'lists', component: TaskViewComponent },
    { path: 'lists/:listId', component: TaskViewComponent },
    { path: 'lists/:listId/new-task', component: NewTaskPopupComponent },
    { path: 'login', component: LoginPageComponent },
  ];

