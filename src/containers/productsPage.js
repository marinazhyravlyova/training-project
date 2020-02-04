import { connect } from 'react-redux';

import { getProducts, addProduct } from '../actions/products';

import ProductsPage from '../components/ProductsPage';

const mapStateToProps = state => ({
  products: state.products,
});

const mapDispatchToProps = (dispatch) => ({
  getProductsRequest: () => dispatch(getProducts()),
  addProductRequest: product => dispatch(addProduct(product)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductsPage);
