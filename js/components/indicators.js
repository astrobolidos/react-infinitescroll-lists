var React 			= require('react'); 
var ItemStore		= require('../stores/itemStore');
var AppActions	= require('../actions/appActions'); 

var Indicators = React.createClass({
	getInitialState: function() {
		return {added: 0, deleted: 0, total: ItemStore.getItems().length}
	},
	componentDidMount: function() {
		ItemStore.addChangeListener(this.storeChanged)
	},
	componentWillUnmount: function() {
		ItemStore.removeChangeListener(this.storeChanged);
	},
	storeChanged: function() {
		var newTotal = ItemStore.getItems().length;
		var added = this.state.added;
		if(newTotal > this.state.total)
				added++;
		var deleted = this.state.deleted;
		if(newTotal < this.state.total)
			deleted++;
		this.setState({added: added, deleted: deleted, total:newTotal});
	},
	render: function() {
		return <p>
			Items added: {this.state.added} - 
			Items deleted: {this.state.deleted} - 
			List length: {this.state.total}
		</p>
	}
});

module.exports = Indicators;