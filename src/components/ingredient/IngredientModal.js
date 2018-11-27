import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { addIngredient } from 'utils/IngredientApi';

export default class IngredientModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      quantity: '',
    };
  }

  inputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    const body = {
      name: this.state.name,
      quantity: this.state.quantity,
    };

    if (this.props.modalType === 'add') {
      addIngredient(body)
        .then(() => {
          this.props.onClose();
        });
    } else {
      console.log('do another thing');
    }
  }

  render() {
    const {modalType, open, onClose} = this.props;

    return (
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Ingredient</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {modalType === 'add' ? 'You can add a new ingredient.' : 'You can update the information of the ingredient.'}
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
            name="name"
            onChange={this.inputChange}
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
            name="quantity"
            onChange={this.inputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={onClose} >
            Cancel
          </Button>
          <Button color="primary" onClick={this.handleSubmit} >
            {modalType === 'add' ? 'Save' : 'Update'}
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}
