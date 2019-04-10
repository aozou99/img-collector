import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
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

class SelectSubDirectory extends React.Component<IProps, IState> {
  public readonly state: IState = {
    open: false,
  };
  constructor(props: IProps) {
    super(props);
    this.state = {
      subDirectory: props.subDirectory,
    };
  }

  public render() {
    const { classes } = this.props;
    return (
      <form autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="subDirectory-select">サブディレクトリ</InputLabel>
          <Select
            open={this.state.open}
            onClose={this.handleClose}
            onOpen={this.handleOpen}
            value={this.state.subDirectory}
            onChange={this.handleChange}
            inputProps={{
              name: 'subDirectory',
              id: 'subDirectory-select',
            }}
          >
            <MenuItem value={'domain'}>ドメイン</MenuItem>
            <MenuItem value={'domain/path'}>ドメイン/パス</MenuItem>
            <MenuItem value={'domain/path/ymd'}>ドメイン/パス/年月日</MenuItem>
          </Select>
        </FormControl>
      </form>
    );
  }

  public handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ [event.target.name]: event.target.value });
    ChromeStorage.setSync(event.target.name, event.target.value);
  };

  public handleClose = () => {
    this.setState({ open: false });
  };

  public handleOpen = () => {
    this.setState({ open: true });
  };
}

export default withStyles(styles)(SelectSubDirectory);
