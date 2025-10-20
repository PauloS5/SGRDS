import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { GenerateDailyComponent } from './generate-daily/generate-daily.component';

export const routes: Routes = [
    {path: "", component: HomepageComponent},
    {path: "daily/generate",  component: GenerateDailyComponent}
];
