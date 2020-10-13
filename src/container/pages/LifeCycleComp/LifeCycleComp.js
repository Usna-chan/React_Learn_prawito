import React, {Component} from 'react';
import './LifeCycleComp.css';
class LifeCycleComp extends Component {
	constructor (props){
		super(props);
		this.state = {
			count: 1
		}
		console.log('constructor');
	}
	static getDerivedStateFromProps(props, state){
		console.log("getDrivedStateFromProps");
		return null;
	}
	componentDidMount(){
		console.log("ComponentsDidMount");
		// setTimeout(()=>{
		// this.setState({
		// 	count: 2
		// })	
		// },3000);
		
	}
	shouldComponentUpdate(nextProps, nextState){
		console.group("shouldComponentUpdate");
		console.log("nextState:", nextState);
		console.log("thisState:", this.state);
		console.groupEnd();
		if(nextState.count >=4){
		 return false;	
		}
		return true;
	}
	getSnapshotBeforeUpdate(prevProps, prevState){
		console.log("getSnapshotBeforeUpdate");
		return null;
	}
	componentDidUpdate(prevProps, prevState, snapshot){
		console.log("componentsDidUpdate");
	}
	componentWillUnmount(){
		console.log("componentsWillUnmount");
	}
	changeHitung = () =>{
		this.setState({
			count: this.state.count + 1
		})
	}
	render(){
		console.log("render");
		return(
		<div>
		<p>Life Cycle Component</p>
		<hr/>
		<button className="btn" onClick={this.changeHitung}>Ini Tombol {this.state.count}</button>
		</div>
		);

	}
}

export default LifeCycleComp;