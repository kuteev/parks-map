import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParksComponent } from './parks/parks.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
const routes: Routes = [
  { path: '', redirectTo: 'parks', pathMatch: 'full'},
  { path: 'parks', component: ParksComponent },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
