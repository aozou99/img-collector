export interface IListenerMap {
  [key: number]: (request: any, sender?: any) => void;
}
