import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import * as actions from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: ``,
})
export class HijoComponent {
  public contador: number = 0;

  constructor(private store: Store<AppState>) {
    this.store
      .select('contador')
      .subscribe((contador) => (this.contador = contador));
  }

  multiplicar(value: number) {
    this.store.dispatch(actions.multiplicar({ numero: 2 }));
  }

  dividir(value: number) {
    this.store.dispatch(actions.dividir({ numero: 2 }));
  }
  
}
