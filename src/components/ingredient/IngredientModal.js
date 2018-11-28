import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { addIngredient, updateIngredient } from 'utils/IngredientApi';

export default class IngredientModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      quantity: '',
    };
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.currentName !== this.props.currentName) {
      this.setState({
        name: this.props.currentName,
      });
    }

    if (prevProps.currentQuantity !== this.props.currentQuantity) {
      this.setState({
        quantity: this.props.currentQuantity,
      });
    }
  };

  inputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  onCloseModal = () => {
    this.setState({
      name: '',
      quantity: '',
    }, this.props.onClose());
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
      updateIngredient(this.props.currentId, body)
        .then(() => {
          this.props.onClose();
        });
    }

    this.props.refreshComponent();
  }

  render() {
    const { modalType, open } = this.props;
    const { name, quantity } = this.state;

    return (
      <Dialog
        open={open}
        onClose={this.onCloseModal}
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
            value={name}
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
            value={quantity}
            onChange={this.inputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={this.onCloseModal} >
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
