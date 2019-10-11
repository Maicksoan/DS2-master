import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentIndexComponent } from './component-index/component-index.component';


const routes: Routes = [
  { path: 'component-index', component: ComponentIndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
