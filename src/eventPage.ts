import { MSGLISTENER_MAP } from 'modules/constants/MsgListenerMap';
import TriggerKeys from 'modules/constants/TriggerKeys';
import MessageListener from 'modules/wrapper/chrome/onMessage/MessageListener';

// リスナー設定
MessageListener.addAll(MSGLISTENER_MAP.eventPage);
chrome.browserAction.onClicked.addListener(async () => {
  const tabs = (await chrome.tabs.query({
    active: true,
    currentWindow: true,
  })) as chrome.tabs.Tab[];
  chrome.tabs.sendMessage(tabs[0]!.id, { [TriggerKeys.ON_ALL_DOWNLOADS]: true });
});
