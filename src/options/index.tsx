import ChromeStorage from 'modules/wrapper/chrome/storage/ChromeStorage';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Options from './Options';

chrome.tabs.query({ active: true, currentWindow: true }, async () => {
  const options = await ChromeStorage.getOptions();
  ReactDOM.render(<Options options={options} />, document.getElementById('options'));
});
