import { Component,NgModule } from '@angular/core';
import { Portfolio } from './portfolio';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

@Component({
    selector: 'my-instrument',
    templateUrl: './instrument.component.html'
})

export class InstrumentComponent {

    model = new Portfolio('', '', null, null, null);
    private instruments: any[] = [{
    security: 'GOOGLE',
    ISIN: '	US02079K1079'
  }, {
    security: 'APPLE',
    ISIN: '	US0378331005'
  }];

updateSecurity(text: any) {
    this.model.security = text.options[text.selectedIndex].text;
    //this.model.ISIN = text.value.trim();
  }
// tslint:disable-next-line:eofline
}