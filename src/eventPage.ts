import { MSGLISTENE_RMAP } from 'modules/constants/MsgListenerMap';
import MessageListener from 'modules/wrapper/chrome/onMessage/MessageListener';

// リスナー設定
MessageListener.addAll(MSGLISTENE_RMAP.eventPage);
