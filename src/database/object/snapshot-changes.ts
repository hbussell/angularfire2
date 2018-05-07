import { DataSnapshot } from '@firebase/database-types';
import { Observable } from 'rxjs';

import { fromRef } from '../observable/fromRef';
import { DatabaseQuery, AngularFireAction, SnapshotAction } from '../interfaces';

export function createObjectSnapshotChanges(query: DatabaseQuery) {
  return function snapshotChanges(): Observable<SnapshotAction> {
    return fromRef(query, 'value');
  }
}
