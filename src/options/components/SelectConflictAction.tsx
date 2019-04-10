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

class SelectConflictAction extends React.Component<IProps, IState> {
  public readonly state: IState = {
    open: false,
  };
  constructor(props: IProps) {
    super(props);
    this.state = {
      conflictAction: props.conflictAction,
    };
  }

  public render() {
    const { classes } = this.props;
    return (
      <form autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="conflictAction-select">同名ファイルの保存</InputLabel>
          <Select
            open={this.state.open}
            onClose={this.handleClose}
            onOpen={this.handleOpen}
            value={this.state.conflictAction}
            onChange={this.handleChange}
            inputProps={{
              name: 'conflictAction',
              id: 'conflictAction-select',
            }}
          >
            <MenuItem value={'overwrite'}>上書きする</MenuItem>
            <MenuItem value={'uniquify'}>ユニーク名で保存する</MenuItem>
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

export default withStyles(styles)(SelectConflictAction);
