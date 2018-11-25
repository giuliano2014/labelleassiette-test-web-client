import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class IngredientModal extends Component {
  render() {
    return (
      <Dialog
        open={this.props.open}
        onClose={this.props.onClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Ingredient</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You can update the information of the ingredient.
          </DialogContentText>
          <TextField
            label="Name"
            style={{ marginTop: 24, marginBottom: 16, }}
            placeholder="Strawberries"
            fullWidth
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            label="Quantity"
            placeholder="250"
            helperText="Quantity must be expressed in grams"
            fullWidth
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={this.props.onClose} >
            Cancel
          </Button>
          <Button color="primary" onClick={this.props.onClose} >
            Update
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}
