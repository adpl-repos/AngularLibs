import { Injectable } from '@angular/core';
import { fromEvent} from 'rxjs';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AngularReachabilityService {

  // constructor() { }

  /**
   * @description it is used to ensure network connectivity
   * @param url `http-url-endpoint`
   * @returns return Promise<boolean> `true` or `false`, indicating network state
   */
  public async isReachable(url: string) {
    try {
      const result = await fetch(url, {cache:'no-cache'});
      if (result.ok) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  }

  /**
   * @description Get notified when the device goes online
   * @returns Returns an Observable
   */
  public onConnect() {
    return fromEvent(window, 'online').pipe(map(() => 'you are online'));
  }

  /**
   * @description Get notified when the device goes offline
   * @returns returns an Observable
   */
  public onDisconnect() {
    return fromEvent(window, 'offline').pipe(map(() => 'you are offline'));
  }

}
