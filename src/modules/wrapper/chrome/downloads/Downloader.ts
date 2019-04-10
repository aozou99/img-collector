import * as Moment from 'moment';
import * as path from 'path';
import * as url from 'url';

export default class Downloader {
  public static downloadAll(srcList: string[], hostname: string, options: { [key: string]: any }) {
    for (const src of srcList) {
      Downloader.download({
        url: src,
        filename: Downloader.makeSavePath(src, hostname, options.saveDirectory, options.subDirectory),
        conflictAction: options.conflictAction,
      });
    }
  }

  public static download(option: chrome.downloads.DownloadOptions) {
    chrome.downloads.download(option);
  }

  public static makeSavePath(src: string, hostname: string, dir: string, subdir: string): string {
    let savePath = '';
    switch (subdir) {
      case 'domain':
        savePath = `${dir}/${hostname}/${path.basename(url.parse(src).pathname)}`;
        break;
      case 'domain/path':
        savePath = `${dir}/${hostname}/${url.parse(src).pathname}`;
        break;
      case 'domain/path/ymd':
        const pathname = url.parse(src).pathname;
        savePath = `${dir}/${hostname}${path.dirname(pathname)}/${Moment().format('YYYY-MM-DD')}/${path.basename(
          pathname,
        )}`;
        break;

      default:
        break;
    }
    return savePath;
  }
}
