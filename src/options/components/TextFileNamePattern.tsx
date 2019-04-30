import { FormControl, TextField } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { StyleRules, WithStyles } from '@material-ui/core/styles/withStyles';
import ChromeStorage from 'modules/wrapper/chrome/storage/ChromeStorage';
import * as React from 'react';

const styles = (theme: Theme): StyleRules =>
  createStyles({
    formControl: {
      margin: theme.spacing.unit,
      minWidth: 100,
    },
  });

interface IProps extends WithStyles<typeof styles> {
  [key: string]: any;
}

interface IState {
  [key: string]: any;
}

class TextFileNamePattern extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      fileNamePattern: props.fileNamePattern,
    };
  }

  public render() {
    const { classes } = this.props;
    return (
      <form autoComplete="off">
        <FormControl className={classes.formControl}>
          <TextField
            label="ファイル名マッチ"
            id="fileNamePattern-text"
            value={this.state.fileNamePattern}
            onChange={this.handleChange('fileNamePattern')}
          />
        </FormControl>
      </form>
    );
  }

  public handleChange = name => (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [name]: event.target.value });
    ChromeStorage.setSync(name, event.target.value);
  };
}

export default withStyles(styles)(TextFileNamePattern);
