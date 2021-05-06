import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppPianoComponent } from './pages/app-piano/app-piano.component';

const routes: Routes = [{ path: 'piano', component: AppPianoComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
