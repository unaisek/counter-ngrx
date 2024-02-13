import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../states/app.states';
import { selectCount } from '../states/counter/counter.selector';
import { AsyncPipe } from '@angular/common';
import { decrement, increment, reset } from '../states/counter/counter.action';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  count$:Observable<number>

  constructor (
    private _store:Store<AppState>
  )
  { this.count$ = _store.select(selectCount) }

  increment() {
    this._store.dispatch(increment())
  }

  decrement(){
    this._store.dispatch(decrement())
  }

  reset(){
    this._store.dispatch(reset())
  }

}
