import TriggerKeys from 'modules/constants/TriggerKeys';
import { MSGLISTENER_MAP } from './modules/constants/MsgListenerMap';
import MessageListener from './modules/wrapper/chrome/onMessage/MessageListener';

// リスナー設定
MessageListener.addAll(MSGLISTENER_MAP.contentScript);

// 自動ダウンロード
chrome.storage.sync.get('autoDownload', options => {
  if (options.autoDownload) {
    MSGLISTENER_MAP.contentScript[TriggerKeys.ON_ALL_DOWNLOADS](true);
  }
});
