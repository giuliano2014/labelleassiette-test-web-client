import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {
    margin: theme.spacing.unit,
  },
});

class IngredientHeader extends Component {
  render() {
    const { classes, openModal } = this.props;

    return (
      <>
        <div className={classes.wrapper}>
          <Typography variant="h5" component="h3">
            Ingredient(s)
          </Typography>
          <Fab
            size="small"
            color="secondary"
            aria-label="Add"
            className={classes.button}
            onClick={openModal}
          >
            <AddIcon />
          </Fab>
        </div>
        <Typography component="p">
          This is your ingredient manager
        </Typography>
      </>
    );
  }
}

IngredientHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IngredientHeader);
