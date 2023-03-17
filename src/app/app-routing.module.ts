import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { ShoppingCardComponent } from './shopping-card/shopping-card.component';



const routes: Routes = [

  {
    path: '',
    redirectTo: '/projects',
    pathMatch: 'full'
  },

  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'shop',
    loadChildren: './shop.module#ShopModule'
  },
  {
    path: 'shopping-card',
    component: ShoppingCardComponent
  },
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
