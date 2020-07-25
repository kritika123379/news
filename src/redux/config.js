import * as ourActions from '../src/redux/actions/actions';
export default {
  getProducts: {
    url: 'https://products-listing-api.herokuapp.com/api/products',
    actions: [ourActions.getProducts, ourActions.getProductsSuccess, ourActions.getProductsError]
  },
  getProduct: {
    url: 'https://products-listing-api.herokuapp.com/api/product/:id',
    actions: [ourActions.getProduct, ourActions.getProductSuccess, ourActions.getProductError]
  }
};