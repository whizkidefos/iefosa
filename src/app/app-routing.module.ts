import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';

import { AlberiComponent } from './components/alberi/alberi.component';
import { AvenidaComponent } from './components/avenida/avenida.component';
import { CaleidosComponent } from './components/caleidos/caleidos.component';
import { CaniliComponent } from './components/canili/canili.component';
import { GmimodenaComponent } from './components/gmimodena/gmimodena.component';
import { ItalkeroComponent } from './components/italkero/italkero.component';
import { MatteoGuidottiComponent } from './components/matteo-guidotti/matteo-guidotti.component';
import { SpacComponent } from './components/spac/spac.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'work', component: WorkComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'alberi', component: AlberiComponent },
  { path: 'avenida', component: AvenidaComponent },
  { path: 'caleidos', component: CaleidosComponent },
  { path: 'canili', component: CaniliComponent },
  { path: 'gmimodena', component: GmimodenaComponent },
  { path: 'italkero', component: ItalkeroComponent },
  { path: 'matteo-guidotti', component: MatteoGuidottiComponent },
  { path: 'spac', component: SpacComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
