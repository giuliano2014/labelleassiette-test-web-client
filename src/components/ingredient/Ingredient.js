import React, { Component } from 'react';

import IngredientHeader from 'components/ingredient/IngredientHeader';
import IngredientList from 'components/ingredient/IngredientList';
import IngredientModal from 'components/ingredient/IngredientModal';
import IngredientSnackbar from 'components/ingredient/IngredientSnackbar';

export default class Ingredient extends Component {
  state = {
    isModalOpened: false,
    isSnackbarDisplay: false,
  };

  openModal = () => {
    this.setState({ isModalOpened: true });
  };

  closeModal = () => {
    this.setState({ isModalOpened: false });
  };

  displaySnackbar = () => {
    this.setState({ isSnackbarDisplay: true });
  };

  hideSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ isSnackbarDisplay: false });
  };

  render() {
    return (
      <>
        <IngredientHeader openModal={this.openModal} />
        <IngredientList openModal={this.openModal} displaySnackbar={this.displaySnackbar} />
        <IngredientModal open={this.state.isModalOpened} onClose={this.closeModal} />
        <IngredientSnackbar open={this.state.isSnackbarDisplay} hideSnackbar={this.hideSnackbar} />
      </>
    );
  }
}
