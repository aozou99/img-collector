import * as _ from 'lodash';
import UrlCompleter from 'modules/completer/UrlCompleter';

export default class ImageUrlPicker {
  public static pickAllImg(): string[] {
    return _.union(ImageUrlPicker.pickAllByBgImg(), ImageUrlPicker.pickAllByImgTag());
  }

  public static pickAllByImgTag(): string[] {
    return Array.from(document.getElementsByTagName('img')).map(v => v.src);
  }

  public static pickAllByBgImg(): string[] {
    return _.union(ImageUrlPicker.pickAllByBgImgCaseCSSFile(), ImageUrlPicker.pickAllByBgImgCaseStyleAttr());
  }

  public static pickAllByBgImgCaseCSSFile(): string[] {
    const urlList = [];
    const location = document.location;
    try {
      const cssList: StyleSheet[] = Array.from(document.styleSheets);
      for (const css of cssList) {
        if (!(css instanceof CSSStyleSheet)) {
          continue;
        }
        const rules = css.cssRules ? css.cssRules : css.rules;
        for (const rule of Array.from(rules)) {
          if (!(rule instanceof CSSStyleRule) || !rule.style.backgroundImage) {
            continue;
          }
          let src = rule.style.backgroundImage;
          switch (src) {
            case 'initial':
            case 'none':
            case 'inherit':
              continue;

            default:
              if (src.indexOf('url(') === 0) {
                src = src.match(/url\(["']?([^\)"]+)["']?/)[1];
              }
              break;
          }
          urlList.push(UrlCompleter.complete(src, location.protocol, location.hostname, location.pathname));
        }
      }
    } catch (error) {
      // CORSに引っかかってエラーになるケース
      console.log(error.message);
    }
    return urlList;
  }

  public static pickAllByBgImgCaseStyleAttr(): string[] {
    const urlList = [];
    const eles: HTMLObjectElement[] = [].slice.call(document.querySelectorAll('[style*="background-image"]'));
    const location = document.location;
    eles.forEach(v => {
      const result = v.getAttribute('style').match(/background-image:url\(["']?([^\)]+)["']?/);
      if (result.length < 1) {
        return;
      }
      urlList.push(UrlCompleter.complete(result[1], location.protocol, location.hostname, location.pathname));
    });
    return urlList;
  }
}
