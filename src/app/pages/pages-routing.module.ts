import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Components
import { AppPianoComponent } from './app-piano/app-piano.component';
import { AppDadosComponent } from './app-dados/app-dados.component';

// Lazy Load
const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'piano', component: AppPianoComponent },
      { path: 'dados', component: AppDadosComponent },

      { path: '**', redirectTo: 'piano' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class PagesRoutingModule {}
