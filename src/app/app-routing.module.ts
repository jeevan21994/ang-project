import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserupdateComponent } from './userupdate/userupdate.component';


const routes: Routes = [
//   {
//   path:'userUpdate/:id' ,component:UserupdateComponent
// }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
