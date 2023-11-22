import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AutenticacionModule } from './pages/autenticacion/autenticacion.module';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { InventarioModule } from './pages/inventario/inventario.module';
import { ProgresoConstruccionModule } from './pages/progreso-construccion/progreso-construccion.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    AutenticacionModule,
    DashboardModule,
    InventarioModule,
    ProgresoConstruccionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
