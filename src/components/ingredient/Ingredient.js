import React, { Component } from 'react';

import IngredientHeader from 'components/ingredient/IngredientHeader';
import IngredientList from 'components/ingredient/IngredientList';
import IngredientModal from 'components/ingredient/IngredientModal';
import IngredientSnackbar from 'components/ingredient/IngredientSnackbar';

import { deleteIngredient } from 'utils/IngredientApi';

export default class Ingredient extends Component {
  state = {
    modalType: null,
    currentId: null,
    currentName: '',
    currentQuantity: '',
    isModalOpened: false,
    isSnackbarDisplay: false,
  };

  openModal = (type = 'add', id = null, name = '', quantity = '') => {
    this.setState({
      modalType: type,
      currentId: id,
      currentName: name,
      currentQuantity: quantity,
      isModalOpened: true,
      id: null,
      name: null,
    });
  };

  closeModal = () => {
    this.setState({ isModalOpened: false });
  };

  displaySnackbar = (id, name) => {
    this.setState({
      isSnackbarDisplay: true,
      id: id,
      name: name,
    });
  };

  hideSnackbar = () => {
    this.setState({ isSnackbarDisplay: false });
  };

  deleteIngredient = () => {
    deleteIngredient(this.state.id)
      .then(() => this.setState({ isSnackbarDisplay: false }));
  };

  render() {
    return (
      <>
        <IngredientHeader openModal={() => this.openModal()} />
        <IngredientList
          openModal={this.openModal}
          displaySnackbar={this.displaySnackbar}
        />
        <IngredientModal
          modalType={this.state.modalType}
          currentId={this.state.currentId}
          currentName={this.state.currentName}
          currentQuantity={this.state.currentQuantity}
          open={this.state.isModalOpened}
          onClose={this.closeModal}
        />
        <IngredientSnackbar
          open={this.state.isSnackbarDisplay}
          hideSnackbar={this.hideSnackbar}
          deleteIngredient={this.deleteIngredient}
        />
      </>
    );
  }
}
