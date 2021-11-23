'use strict';

module.exports = function(app) {
    let shop = require('../controllers/productController');
    let order = require('../controllers/orderController');

    app.route('/products')
        .get(shop.list_all_products)
        .post(shop.create_a_product);

    app.route('/product/:productId')
        .get(shop.read_a_product)
        .put(shop.update_a_product)
        .delete(shop.delete_a_product);

        
    app.route('/order')
        .post(order.create_a_order);

    app.route('/order/:orderId')
        .get(order.read_a_order)
        .delete(order.delete_a_order);
};