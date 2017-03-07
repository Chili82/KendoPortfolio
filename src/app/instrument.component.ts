import { Component } from '@angular/core';
import {EventEmitter} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
    selector: 'my-instrument',
    templateUrl: './instrument.component.html'
})

export class InstrumentComponent {

instrumentForm = new FormGroup({

    instrument:  new FormControl()
});

}