import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { StyleRules, WithStyles } from '@material-ui/core/styles/withStyles';
// Components
import SelectConflictAction from 'options/components/SelectConflictAction';
import SelectSubDirectory from 'options/components/SelectSubDirectory';
import SwitchAutoDownload from 'options/components/SwitchAutoDownload';
import TextFileNamePattern from 'options/components/TextFileNamePattern';
import TextSaveDirectory from 'options/components/TextSaveDirectory';
import * as React from 'react';
import withRoot from './withRoot';

// styles を定義
const styles = (): StyleRules =>
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
      <TextFileNamePattern fileNamePattern={options.fileNamePattern} />
    </div>
  );
};

// withRoot で export
export default withRoot(withStyles(styles)(optionsComponent));
