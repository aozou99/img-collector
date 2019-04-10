import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { StyleRules, WithStyles } from '@material-ui/core/styles/withStyles';
import * as React from 'react';

// withRoot を import
import ChromeStorage from 'modules/wrapper/chrome/storage/ChromeStorage';
import SelectConflictAction from 'options/components/SelectConflictAction';
import SelectSubDirectory from 'options/components/SelectSubDirectory';
// Components
import SwitchAutoDownload from 'options/components/SwitchAutoDownload';
import TextSaveDirectory from 'options/components/TextSaveDirectory';
import withRoot from './withRoot';

// styles を定義
const styles = (theme: Theme): StyleRules =>
  createStyles({
    root: {},
  });

// 型定義 Props を定義
interface IProps extends WithStyles<typeof styles> {
  [key: string]: any;
}

// Options Component を定義
const optionsComponent: React.FC<IProps> = ({ classes, options }: IProps) => {
  return (
    <div className={classes.root}>
      <TextSaveDirectory saveDirectory={options.saveDirectory} />
      <SelectSubDirectory subDirectory={options.subDirectory} />
      <SwitchAutoDownload autoDownload={options.autoDownload} />
      <SelectConflictAction conflictAction={options.conflictAction} />
    </div>
  );
};

// withRoot で export
export default withRoot(withStyles(styles)(optionsComponent));
