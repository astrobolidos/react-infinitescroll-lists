var AppDispatcher = require('../dispatcher/appDispatcher');
var AppConstants = require('../constants/appConstants');

var AppActions = {
	addItem: function(item) {
		AppDispatcher.handleAction({
			actionType: AppConstants.ITEM_ADD,
			item:item
		})
	},
	removeItem: function(index) {
		AppDispatcher.handleAction({
			actionType: AppConstants.ITEM_REMOVE,
			index: index
		})
	}
}

module.exports = AppActions;