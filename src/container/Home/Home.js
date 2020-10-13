import React, {Component,Fragment} from 'react';
import YouTubeCompPage from '../pages/YouTubeCompPage/YouTubeCompPage';
import Product from '../../container/pages/Product/Product';
import LifeCycleComp from '../../container/pages/LifeCycleComp/LifeCycleComp';
import BlogPost from '../../container/pages/BlogPost/BlogPost';
import DetailPost from '../../container/pages/BlogPost/DetailPost/DetailPost';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './Home.css';
class Home extends Component{
	state = {
			showComponent: true
	}
	componentDidMount(){
		// setTimeout(()=>{
		// 		this.setState({
		// 		showComponent: false
		// 	})
		// },5000);

	}
	render(){
		return (
			<Router>
				<Fragment>
				<div className="navigation">
				<Link to="/" className="link">BlogPost</Link>
				<Link to="/product" className="link">Product</Link>
				<Link to="/lifecycle" className="link">LifeCycleComp</Link>
				<Link to="/youtubecomp" className="link">YouTubeComp</Link>
				</div>
				<Route path="/" exact component={BlogPost} />
				<Route path="/product" component={Product} />
				<Route path="/lifecycle" component={LifeCycleComp} />
				<Route path="/youtubecomp" component={YouTubeCompPage} />
				<Route path="/detail-post/:id" component={DetailPost} />
				</Fragment>
			</Router>



			)
	}
}
export default Home;
