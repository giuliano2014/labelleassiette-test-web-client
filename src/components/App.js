import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Header from 'components/header/Header';
import Ingredient from 'components/ingredient/Ingredient';

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
        <div className={classes.root}>
          <Ingredient />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
