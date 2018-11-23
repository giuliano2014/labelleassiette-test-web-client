import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Header from 'components/header/Header';
import StockManagement from 'components/stock-management/StockManagement';
import StockManagement2 from 'components/stock-management/StockManagement2';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

class App extends Component {
  render() {
    const { classes } = this.props;
    
    return (
      <div className="App">
        <Header />
        <Paper className={classes.root} elevation={1}>
          <Typography variant="h5" component="h3">
            Ingredient management
          </Typography>
          <Typography component="p">
            Here...
          </Typography>
          <StockManagement />
          <StockManagement2 />
        </Paper>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
