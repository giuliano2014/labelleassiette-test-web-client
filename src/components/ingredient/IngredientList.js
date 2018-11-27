import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Create';

import { getIngredients } from 'utils/IngredientApi';

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
  };

  componentDidMount = () => {
    getIngredients()
      .then(data => {
        this.setState({
          ingredients: data,
        });
      })
      .then((projects) => this.setState({
        loading: false,
      }));
  };

  displayModal = (id, name, quantity) => {
    this.props.openModal('update', id, name, quantity);
  };

  render() {
    const { classes, displaySnackbar } = this.props;
    const { loading, ingredients } = this.state;

    return (
      <>
      {loading ? (
        <div className={classes.loader}>
          <LinearProgress color="secondary" />
        </div>
        ) : (
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>id</TableCell>
                <TableCell>Ingredient</TableCell>
                <TableCell numeric>Quantity (g)</TableCell>
                <TableCell numeric>Update</TableCell>
                <TableCell numeric>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ingredients.map((row, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      {row._id}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell numeric>{row.quantity}</TableCell>
                    <TableCell numeric>
                      <Tooltip title="Update" onClick={() => this.displayModal(row._id, row.name, row.quantity)}>
                        <IconButton aria-label="Update">
                          <UpdateIcon />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                    <TableCell numeric>
                      <Tooltip title="Delete" onClick={() => displaySnackbar(row._id, row.name)}>
                        <IconButton aria-label="Delete">
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      )}
      </>
    );
  }
}

IngredientList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IngredientList);
