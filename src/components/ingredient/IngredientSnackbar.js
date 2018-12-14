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
    const {
      classes,
      currentName,
      isSnackbarDisplay,
      hideSnackbar,
      deleteIngredient
    } = this.props;

    return (
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={isSnackbarDisplay}
        autoHideDuration={6000}
        onClose={deleteIngredient}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">{currentName} have been deleted</span>}
        action={[
          <Button key="undo" color="secondary" size="small" onClick={hideSnackbar}>
            UNDO
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
  currentName: PropTypes.string.isRequired,
  isSnackbarDisplay: PropTypes.bool.isRequired,
  hideSnackbar: PropTypes.func.isRequired,
  deleteIngredient: PropTypes.func.isRequired,
};

export default withStyles(styles)(SimpleSnackbar);
