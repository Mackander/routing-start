import { Observable } from 'rxjs/Observable';

export class CanComponentDectivate {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}
