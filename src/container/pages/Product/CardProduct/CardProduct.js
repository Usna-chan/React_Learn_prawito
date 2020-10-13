import React, {Component} from 'react';
import Counter from './Counter';


class CardProduct extends Component {

	render(){
		return(
			<div className="card">
				<div className="img-thumb-prod">
				</div>
				<p className="product-title">Buku Pendekar</p>
				<p className="product-price">Rp.100.000</p>
				<Counter onChangeCount={(value)=> this.props.onChangeCount(value)}/>
			</div>
			);
	}
}

export default CardProduct;
