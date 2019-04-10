import * as _ from 'lodash';
import { IListenerMap } from 'modules/constants/Types';

export default class MessageListener {
  public static addAll(map: IListenerMap) {
    _.forEach(map, (v, k) => {
      MessageListener.add(Number(k), v);
    });
  }

  public static add(triggerKey: number, callback: (request: any, sender?: any) => void): void {
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
      sendResponse(true);
      const isResponseAsync = false;
      if (request[triggerKey]) {
        callback(request, sender);
      }
      return isResponseAsync;
    });
  }
}
