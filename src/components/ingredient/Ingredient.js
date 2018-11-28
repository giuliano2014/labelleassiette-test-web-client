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
    isButonclicked: false,
    isIngredientDeleted: false,
  };

  openModal = (type = 'add', id = null, name = '', quantity = '') => {
    this.setState({
      modalType: type,
      currentId: id,
      currentName: name,
      currentQuantity: quantity,
      isModalOpened: true,
      ingredientId: null,
      ingredientName: null,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpened: false,
      isButonclicked: false,
    });
  };

  refreshComponent = () => {
    this.setState({
      isButonclicked: true,
    });
  };

  displaySnackbar = (id, name) => {
    this.setState({
      isSnackbarDisplay: true,
      ingredientId: id,
      ingredientName: name,
      isIngredientDeleted: false,
    });
  };

  hideSnackbar = () => {
    this.setState({ isSnackbarDisplay: false });
  };

  deleteIngredient = () => {
    deleteIngredient(this.state.ingredientId)
      .then(() => {
        this.setState({
          isSnackbarDisplay: false,
          isIngredientDeleted: true,
        })
      });
  };

  render() {
    return (
      <>
        <IngredientHeader openModal={() => this.openModal()} />
        <IngredientList
          isModalOpened={this.state.isModalOpened}
          openModal={this.openModal}
          displaySnackbar={this.displaySnackbar}
          isButonclicked={this.state.isButonclicked}
          isIngredientDeleted={this.state.isIngredientDeleted}
        />
        <IngredientModal
          modalType={this.state.modalType}
          currentId={this.state.currentId}
          currentName={this.state.currentName}
          currentQuantity={this.state.currentQuantity}
          open={this.state.isModalOpened}
          onClose={this.closeModal}
          refreshComponent={this.refreshComponent}
        />
        <IngredientSnackbar
          open={this.state.isSnackbarDisplay}
          hideSnackbar={this.hideSnackbar}
          deleteIngredient={this.deleteIngredient}
          ingredientName={this.state.ingredientName}
        />
      </>
    );
  }
}
