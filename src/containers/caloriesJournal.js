import { connect } from 'react-redux';

import { getProducts } from '../actions/products';
import { getMeals, addMeal } from '../actions/meals';

import CaloriesJournal from '../components/CaloriesJournal';


const mapStateToProps = state => ({
  products: state.products,
  meals: state.meals,
});

const mapDispatchToProps = (dispatch) => ({
  getProductsRequest: () => dispatch(getProducts()),
  getMealsRequest: () => dispatch(getMeals()),
  addMealRequest: product => dispatch(addMeal(product)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CaloriesJournal);
