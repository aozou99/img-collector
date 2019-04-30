import ImageUrlPicker from 'modules/picker/ImageUrlPicker';
import Downloader from 'modules/wrapper/chrome/downloads/Downloader';
import ChromeStorage from 'modules/wrapper/chrome/storage/ChromeStorage';
import * as url from 'url';
import TriggerKeys from './TriggerKeys';
import { IListenerMap } from './Types';

export const MSGLISTENER_MAP: { [script: string]: IListenerMap } = {
  contentScript: {
    // 一括ダウンロード
    [TriggerKeys.ON_ALL_DOWNLOADS]: async () => {
      // ダウンロード対象リスト
      const srcList = ImageUrlPicker.pickAllImg();
      chrome.runtime.sendMessage({ [TriggerKeys.ON_ALL_DOWNLOADS]: JSON.stringify(srcList) });
    },
  },
  eventPage: {
    // 一括ダウンロード
    [TriggerKeys.ON_ALL_DOWNLOADS]: async (request: any, sender: any) => {
      const options = await ChromeStorage.getOptions();
      const pattern = new RegExp(options.fileNamePattern.split(',').join('|'));
      const srcList = JSON.parse(request[TriggerKeys.ON_ALL_DOWNLOADS]).filter((src: string) => {
        return src.match(pattern);
      });
      if (Array.isArray(srcList) && srcList.length > 0) {
        Downloader.downloadAll(srcList, url.parse(sender.url).hostname, options);
      }
    },
  },
};
