import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { StyleRules, WithStyles } from '@material-ui/core/styles/withStyles';
import * as React from 'react';

// Components
import Popup from './components/Popup';
// withRoot を import
import withRoot from './withRoot';

// styles を定義
const styles = (theme: Theme): StyleRules =>
  createStyles({
    root: {},
  });

// 型定義 Props を定義
type Props = WithStyles<typeof styles>;

// App Component を定義
const app: React.FC<Props> = ({ classes }: Props) => (
  <div className={classes.root}>
    <Popup title="React TypeScript Material-UI Example" />
  </div>
);

// withRoot で export
export default withRoot(withStyles(styles)(app));
