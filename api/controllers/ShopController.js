/**
 * ShopController
 *
 * @description :: Server-side logic for managing shops
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	new: function(req, res) {
		res.view('shops/new')
	}
};
