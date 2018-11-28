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
    isButtonclicked: false,
    isIngredientDeleted: false,
  };

  openModal = (type = 'add', id = null, name = '', quantity = '') => {
    this.setState({
      modalType: type,
      currentId: id,
      currentName: name,
      currentQuantity: quantity,
      isModalOpened: true,
    });
  };

  closeModal = () => {
    this.setState({
      currentId: null,
      currentName: '',
      currentQuantity: '',
      isModalOpened: false,
      isButtonclicked: false,
    });
  };

  displaySnackbar = (id, name) => {
    this.setState({
      currentId: id,
      currentName: name,
      isSnackbarDisplay: true,
      isIngredientDeleted: false,
    });
  };

  hideSnackbar = () => {
    this.setState({
      currentId: null,
      currentName: '',
      isSnackbarDisplay: false,
    });
  };

  deleteIngredient = () => {
    deleteIngredient(this.state.currentId)
      .then(() => {
        this.setState({
          currentId: null,
          currentName: '',
          isSnackbarDisplay: false,
          isIngredientDeleted: true,
        })
      });
  };

  refreshComponent = () => {
    this.setState({
      isButtonclicked: true,
    });
  };

  render() {
    const {
      modalType,
      currentId,
      currentName,
      currentQuantity,
      isModalOpened,
      isSnackbarDisplay,
      isButtonclicked,
      isIngredientDeleted,
    } = this.state;

    return (
      <>
        <IngredientHeader openModal={() => this.openModal()} />
        <IngredientList
          isModalOpened={isModalOpened}
          isButtonclicked={isButtonclicked}
          isIngredientDeleted={isIngredientDeleted}
          openModal={this.openModal}
          displaySnackbar={this.displaySnackbar}
        />
        <IngredientModal
          modalType={modalType}
          currentId={currentId}
          currentName={currentName}
          currentQuantity={currentQuantity}
          isModalOpened={isModalOpened}
          closeModal={this.closeModal}
          refreshComponent={this.refreshComponent}
        />
        <IngredientSnackbar
          currentName={currentName}
          isSnackbarDisplay={isSnackbarDisplay}
          hideSnackbar={this.hideSnackbar}
          deleteIngredient={this.deleteIngredient}
        />
      </>
    );
  }
}
