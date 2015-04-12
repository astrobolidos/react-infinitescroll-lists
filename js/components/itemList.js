var React 			= require('react'); 
var ItemStore		= require('../stores/itemStore');
var AppActions	= require('../actions/appActions'); 

var ItemList = React.createClass({
	getInitialState: function() {
		return { items: ItemStore.getItems() }
	},
	componentDidMount: function() {
		ItemStore.addChangeListener(this.storeChanged)
	},
	componentWillUnmount: function() {
		ItemStore.removeChangeListener(this.storeChanged);
	},
	storeChanged: function() {
		this.setState({items: ItemStore.getItems() })
	},
	handleClick: function(e) {
		AppActions.addItem({name: 'Item'});
	},
	handleItemClick: function(index, e) {
		e.stopPropagation();
		e.preventDefault();
		AppActions.removeItem(index);
	},
	render:function() {
		var component = this;
		var createItems = function(item, i) {
				return <li key={i} onClick={component.handleItemClick.bind(component, i)}>{item.name}</li>
		}

		return <ul className="box" onClick={this.handleClick}>
				{this.state.items.map(createItems)}
			</ul>
	}
});

module.exports = ItemList;