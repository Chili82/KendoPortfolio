import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio.component';
import { GrafikonComponent } from './grafikon.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { TabStripModule } from '@progress/kendo-angular-layout';

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
    TabStripModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
