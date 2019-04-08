import Button from '@material-ui/core/Button';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { StyleRules, WithStyles } from '@material-ui/core/styles/withStyles';
import * as React from 'react';
import TriggerKeys from '../../modules/constants/TriggerKeys';

const styles = (theme: Theme): StyleRules =>
  createStyles({
    root: {
      textAlign: 'center',
    },
  });

interface IProps extends WithStyles<typeof styles> {
  title?: string;
}

interface IState {
  readonly counter: number;
}

class Popup extends React.Component<IProps, IState> {
  public readonly state: IState = {
    counter: 0,
  };

  public render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div>
          <Button variant="text" color="primary" onClick={this.onDownLoad}>
            All Download
          </Button>
        </div>
      </div>
    );
  }

  private onDownLoad = async () => {
    try {
      const tabs = (await chrome.tabs.query({
        active: true,
        currentWindow: true,
      })) as chrome.tabs.Tab[];
      chrome.tabs.sendMessage(tabs[0]!.id, { [TriggerKeys.ON_ALL_DOWNLOADS]: true });
    } catch (error) {
      console.error(error);
    }
  };
}

export default withStyles(styles)(Popup);
