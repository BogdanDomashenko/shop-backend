'use strict';

module.exports = function(app) {
    let shop = require('../controllers/productController');

    app.route('/products')
        .get(shop.list_all_products)
        .post(shop.create_a_product);

        app.route('/product/:productId')
            .get(shop.read_a_product)
            .put(shop.update_a_product)
            .delete(shop.delete_a_product);
};