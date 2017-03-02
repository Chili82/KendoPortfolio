import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

// Meni componente
import { PortfolioComponent } from './portfolio.component';
import { GrafikonComponent } from './grafikon.component';

// Kendo UI componente
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { TabStripModule } from '@progress/kendo-angular-layout';
import { ChartsModule } from '@progress/kendo-angular-charts';

import 'hammerjs';

const routes: Routes = [
    { path: '', component: PortfolioComponent },
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'grafikon', component: GrafikonComponent }
];

@NgModule({
  declarations: [
    AppComponent
    , PortfolioComponent, GrafikonComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule,
    ButtonsModule,
    TabStripModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
