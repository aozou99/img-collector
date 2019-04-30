# Image Collector (Chrome拡張機能)

現在開いているWepページで使用されている画像を一括ダウンロードできます

## 使い方

### ![icon16](https://user-images.githubusercontent.com/21310288/55963019-fa996d00-5cac-11e9-95f1-534583baccfd.png)アイコンをクリック 

![demo2](https://user-images.githubusercontent.com/21310288/56000159-2e4fb380-5cfc-11e9-9459-a54e191295c6.gif)


## オプション
### ![icon16](https://user-images.githubusercontent.com/21310288/55963019-fa996d00-5cac-11e9-95f1-534583baccfd.png)アイコンを右クリック → オプションをクリック
![option](https://user-images.githubusercontent.com/21310288/56001512-7cfd4d80-5cfc-11e9-945c-8e2c0a87818c.png)

### 下記の設定を行えます
- 保存先ディレクトリ名
- サブディレクトリの切り方
- 自動ダウンロードON/OFF
- 同名ファイルの保存アクション  
![option2](https://user-images.githubusercontent.com/21310288/55963495-e99d2b80-5cad-11e9-945e-1a06ba45e3da.png)

## Development
### Building

1.  Clone repo
2.  `yarn install`
3.  `yarn dev` to compile once or `yarn watch` to run the dev task in watch mode
4.  `yarn build` to build a production (minified) version

### Installation

1.  Complete the steps to build the project above
2.  Go to [_chrome://extensions_](chrome://extensions) in Google Chrome
3.  With the developer mode checkbox ticked, click **Load unpacked extension...** and select the _dist_ folder from this repo
