export default class UrlCompleter {
  public static complete(src: string, protocol: string, domain: string, path: string): string {
    let url = '';
    if (src.indexOf('//') === 0) {
      url = `${protocol}${src}`;
    } else if (src.match(/^https?/)) {
      url = src;
    } else if (src.indexOf('../') === 0) {
      url = `${protocol}//${domain}/${path}/${src}`;
    } else if (src.indexOf('data:image') === 0) {
      url = decodeURIComponent(src);
    } else {
      url = `${protocol}//${domain}/${src}`;
    }
    return url;
  }
}
