import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Pages
import { AppPianoModule } from './app-piano/app-piano.module';
import { AppDadosModule } from './app-dados/app-dados.module';
// Routes
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, AppPianoModule, AppDadosModule, PagesRoutingModule],
})
export class PagesModule {}
