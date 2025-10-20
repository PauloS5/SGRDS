import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { DailyFormComponent } from './daily/daily-form/daily-form.component';

export const routes: Routes = [
    {path: "", component: HomepageComponent},
    {path: "daily/new",  component: DailyFormComponent}
];
