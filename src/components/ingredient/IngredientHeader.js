import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

class IngredientHeader extends Component {
  render() {
    const { classes, openModal } = this.props;

    return (
      <>
        <div style={{display:"flex", justifyContent:"space-between"}}>
          <Typography variant="h5" component="h3">
            Ingredient management
          </Typography>
          <Button
            variant="fab"
            mini
            color="secondary"
            aria-label="Add"
            className={classes.button}
            onClick={openModal}
          >
            <AddIcon />
          </Button>
        </div>
        <Typography component="p">
          Here...
        </Typography>
      </>
    );
  }
}

IngredientHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IngredientHeader);
