import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppPianoComponent } from './pages/app-piano/app-piano.component';
import { PagesRoutingModule } from './pages/pages-routing.module';

// Lazy Load
const routes: Routes = [
  {
    path: 'apps',
    loadChildren: () =>
      import('./pages/pages.module').then((m) => m.PagesModule),
  },
  {
    path: '**',
    redirectTo: 'apps',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), PagesRoutingModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
