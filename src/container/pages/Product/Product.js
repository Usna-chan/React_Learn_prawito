import React, {Component, Fragment} from 'react';
import CardProduct from './CardProduct/CardProduct';


class Product extends Component {
	state = {
		order: 4
	}
	handleChangeCount = (newVal) =>{
		this.setState({
			order: newVal
		})
	}
	render(){
		return(
			<Fragment>
			<p>Halaman Product</p>
			<hr/>
			<div className="header">
				<div className="trolley">
					<div className="counter">{this.state.order}</div>
				</div>
			</div>
			<CardProduct onChangeCount={(val) => this.handleChangeCount(val)}/>
			</Fragment>
			);
	}
}

export default Product;
