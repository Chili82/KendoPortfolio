import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { JsonpModule } from '@angular/http';
import { StockChartModule } from '@progress/kendo-angular-charts';
import { StockDataService } from './stock.data.service';

// Meni componente
import { PortfolioComponent } from './portfolio.component';
import { GrafikonComponent } from './grafikon.component';

// Kendo UI componente
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { ChartsModule } from '@progress/kendo-angular-charts';

import 'rxjs/add/operator/map';
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
    LayoutModule,
    ChartsModule,
    JsonpModule, StockChartModule
  ],
  providers: [StockDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
