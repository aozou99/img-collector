import ImageUrlPicker from 'modules/picker/ImageUrlPicker';
import DownloadManager from 'modules/wrapper/chrome/downloads/DownloadManager';
import * as url from 'url';
import TriggerKeys from './TriggerKeys';
import { IListenerMap } from './Types';

export const MSGLISTENE_RMAP: { [script: string]: IListenerMap } = {
  contentScript: {
    // 一括ダウンロード
    [TriggerKeys.ON_ALL_DOWNLOADS]: () => {
      const srcList = ImageUrlPicker.pickAllImg();
      chrome.runtime.sendMessage({ [TriggerKeys.ON_ALL_DOWNLOADS]: JSON.stringify(srcList) });
    },
  },
  eventPage: {
    // 一括ダウンロード
    [TriggerKeys.ON_ALL_DOWNLOADS]: (request: any, sender: any) => {
      const srcList = JSON.parse(request[TriggerKeys.ON_ALL_DOWNLOADS]);
      if (Array.isArray(srcList) && srcList.length > 0) {
        DownloadManager.downloadAll(srcList, url.parse(sender.url).hostname);
      }
    },
  },
};
