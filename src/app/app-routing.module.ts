import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { PipesComponent } from './pipes/pipes.component';

const routes: Routes = [
  {
    path: "", component: DashboardComponent
  },
  {
    path: "dashboard", component: DashboardComponent
  },
  {
    path: "first", component: FirstComponent
  },
  {
    // path: "second", component: SecondComponent
    path: "second",
    loadComponent: () => import("./second/second.component").then(m=>m.SecondComponent)
  },
  {
    path: "pipes", component: PipesComponent
  },
  {
    path: "company",
    loadComponent: () => import("./company/company.component").then(m=>m.CompanyComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
