import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Create';

import { getIngredientsWithPagination } from 'utils/IngredientApi';

import IngredientPagination from 'components/ingredient/IngredientPagination';

const styles = theme => ({
  loader: {
    flexGrow: 1,
    marginTop: 80,
    marginBottom: 80,
  },
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

class IngredientList extends Component {
  state = {
    loading: true,
    ingredients: [],
    page: 0,
    rowsPerPage: 3,
  };

  componentDidMount = () => {
    this.getIngredientsWithPagination(this.state.page, this.state.rowsPerPage);
  };

  componentDidUpdate = prevProps => {
    if (prevProps.isButtonclicked !== this.props.isButtonclicked || prevProps.isIngredientDeleted !== this.props.isIngredientDeleted) {
      this.getIngredientsWithPagination(this.state.page, this.state.rowsPerPage);
    }
  };

  displayModal = (id, name, quantity) => {
    this.props.openModal('update', id, name, quantity);
  };

  getIngredientsWithPagination = (page, rowsPerPage) => {
    getIngredientsWithPagination(page, rowsPerPage)
      .then(data => {
        this.setState({
          ingredients: data,
        });
      })
      .then(() => {
        this.setState({
          loading: false,
        });
      });
  }

  handleChangePage = (event, page) => {
    this.setState({
      page: page,
    }, () => {
      this.getIngredientsWithPagination(this.state.page, this.state.rowsPerPage);
    });
  };

  handleChangeRowsPerPage = event => {
    this.setState({
      rowsPerPage: event.target.value,
    }, () => {
      this.getIngredientsWithPagination(this.state.page, this.state.rowsPerPage);
    });
  };

  render() {
    const { classes, displaySnackbar } = this.props;
    const { loading, ingredients, page, rowsPerPage } = this.state;

    return (
      <>
      {loading ? (
        <div className={classes.loader}>
          <LinearProgress color="secondary" />
        </div>
        ) : (
        ingredients.total === 0 ? (
          <Typography variant="caption" gutterBottom>
            Add your first ingredient, by clicking on the + button, at the top right
          </Typography>
        ) : (
          <Paper className={classes.root}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell>Ingredient(s)</TableCell>
                  <TableCell numeric>Quantity (g)</TableCell>
                  <TableCell numeric>Update</TableCell>
                  <TableCell numeric>Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {ingredients.docs.map((ingredient, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell component="th" scope="row">
                        {ingredient.name}
                      </TableCell>
                      <TableCell numeric>{ingredient.quantity || '0'}</TableCell>
                      <TableCell numeric>
                        <Tooltip title="Update" onClick={() => this.displayModal(ingredient._id, ingredient.name, ingredient.quantity)}>
                          <IconButton aria-label="Update">
                            <UpdateIcon />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                      <TableCell numeric>
                        <Tooltip title="Delete" onClick={() => displaySnackbar(ingredient._id, ingredient.name)}>
                          <IconButton aria-label="Delete">
                            <DeleteIcon />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[3, 6, 9]}
                    colSpan={4}
                    count={ingredients.total}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={this.handleChangePage}
                    onChangeRowsPerPage={this.handleChangeRowsPerPage}
                    ActionsComponent={IngredientPagination}
                  />
                </TableRow>
              </TableFooter>
            </Table>
          </Paper>
        )
      )}
      </>
    );
  }
}

IngredientList.propTypes = {
  classes: PropTypes.object.isRequired,
  isButtonclicked: PropTypes.bool.isRequired,
  isIngredientDeleted: PropTypes.bool.isRequired,
  displaySnackbar: PropTypes.func.isRequired,
};

export default withStyles(styles)(IngredientList);
