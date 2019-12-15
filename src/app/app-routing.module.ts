import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SomePageModule } from './some-page/some-page.module';
import { AppComponent } from './app.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/some-page',
    pathMatch: 'full'
  },
  {
  path: 'some-page',
  loadChildren: () => import('./some-page/some-page.module').then(mod => SomePageModule),
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
