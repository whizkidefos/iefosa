import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectComponent } from './project/project.component';
import { ItalkeroComponent } from './components/italkero/italkero.component';
import { CaniliComponent } from './components/canili/canili.component';
import { SpacComponent } from './components/spac/spac.component';
import { MatteoGuidottiComponent } from './components/matteo-guidotti/matteo-guidotti.component';
import { AlberiComponent } from './components/alberi/alberi.component';
import { GmimodenaComponent } from './components/gmimodena/gmimodena.component';
import { AvenidaComponent } from './components/avenida/avenida.component';
import { CaleidosComponent } from './components/caleidos/caleidos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    WorkComponent,
    ContactComponent,
    ProjectComponent,
    ItalkeroComponent,
    CaniliComponent,
    SpacComponent,
    MatteoGuidottiComponent,
    AlberiComponent,
    GmimodenaComponent,
    AvenidaComponent,
    CaleidosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
