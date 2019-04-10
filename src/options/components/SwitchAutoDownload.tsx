import { FormControl, FormControlLabel, Switch } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { StyleRules, WithStyles } from '@material-ui/core/styles/withStyles';
import ChromeStorage from 'modules/wrapper/chrome/storage/ChromeStorage';
import * as React from 'react';

const styles = (theme: Theme): StyleRules =>
  createStyles({
    formControl: {
      margin: theme.spacing.unit,
      minWidth: 150,
    },
  });

interface IProps extends WithStyles<typeof styles> {
  [key: string]: any;
}

interface IState {
  [key: string]: any;
}

class SwitchAutoDownload extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      autoDownload: props.autoDownload,
    };
  }

  public render() {
    const { classes } = this.props;
    return (
      <form autoComplete="off">
        <FormControl className={classes.formControl}>
          <FormControlLabel
            control={
              <Switch
                checked={this.state.autoDownload}
                onChange={this.handleChange('autoDownload')}
                color="primary"
                value="autoDownload"
              />
            }
            label="自動ダウンロードを有効にする"
          />
        </FormControl>
      </form>
    );
  }

  public handleChange = name => (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [name]: event.target.checked });
    ChromeStorage.setSync(name, event.target.checked);
  };
}

export default withStyles(styles)(SwitchAutoDownload);
