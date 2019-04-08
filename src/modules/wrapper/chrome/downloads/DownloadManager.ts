import * as path from 'path';
import * as url from 'url';

export default class DownloadManager {
  public static downloadAll(srcList: string[], hostname: string) {
    for (const src of srcList) {
      DownloadManager.download({
        url: src,
        filename: `img-collector/${hostname}/${path.basename(url.parse(src).pathname)}`,
      });
    }
  }

  public static download(option: chrome.downloads.DownloadOptions) {
    chrome.downloads.download(option);
  }
}
