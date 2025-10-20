import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { DailyFormComponent } from './daily/daily-form/daily-form.component';
import { DailyListComponent } from './daily/daily-list/daily-list.component';

export const routes: Routes = [
    {path: "", component: HomepageComponent},
    {path: "daily/new",  component: DailyFormComponent},
    {path: "daily/list",  component: DailyListComponent}
];
