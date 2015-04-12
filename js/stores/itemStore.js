var AppDispatcher = require('../dispatcher/appDispatcher');
var EventEmitter = require('events').EventEmitter;
var AppConstants = require('../constants/appConstants');
var _ = require('underscore');

var items = [];
for(i=0; i < 4; i++)
	items.push({name:'Item' + i});

function addItem(item) {
		items.push({name:'Item' + items.length});
};

function removeItem(index) {
		items.splice(index, 1);
};

var ItemStore = _.extend({}, EventEmitter.prototype, {
	getItems: function() {
		return items;
	},
	emitChange: function() {
		this.emit('change');
	},
  addChangeListener: function(callback) {
    this.on('change', callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }	
});

module.exports = ItemStore;

AppDispatcher.register(function(payload){
	var action = payload.action;
	var text;

	switch(action.actionType) {
		case AppConstants.ITEM_ADD:
			addItem(action.item);
			break;
		case AppConstants.ITEM_REMOVE:
			removeItem(action.index);
			break;
		default: 
			return true;
	}

	ItemStore.emitChange();
	return true;
});