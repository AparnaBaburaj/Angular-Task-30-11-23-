import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TasksComponent } from './tasks/tasks.component';

export const routes: Routes = [
    {
        component:HomeComponent,
        path:''
    },
    
    {
        component:TasksComponent,
        path:'tasks'
    },
];
