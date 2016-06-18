import { Observable } from 'rxjs/Observable';
export const isObservable = obs => obs instanceof Observable;
export const log = console.log.bind(console);

