import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const styles = theme => ({
  close: {
    padding: theme.spacing.unit / 2,
  },
});

class SimpleSnackbar extends Component {
  render() {
    const { classes, open, hideSnackbar, deleteIngredient } = this.props;

    return (
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={deleteIngredient}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">Ingredient deleted</span>}
        action={[
          <Button key="undo" color="secondary" size="small" onClick={hideSnackbar}>
            ANNULÉ
          </Button>,
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            className={classes.close}
            onClick={deleteIngredient}
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
    );
  }
}

SimpleSnackbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleSnackbar);
