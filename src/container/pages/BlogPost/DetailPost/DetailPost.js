import React, {Component, Fragment} from 'react';
import axios from 'axios';
import './DetailPost.css';
class DetailPost extends Component {
  state = {
    post: {
      title:'',
      body: ''
    }
  }
  componentDidMount(){
    let id = this.props.match.params.id;
    axios.get(`http://localhost:3004/posts/${id}`).then((res)=>{
			this.setState({
				post: res.data
			})
    })
  }
  render() {
    return(

    <Fragment>
      <div className="detail-post-page">
        <p className="title">{this.state.post.title}</p>
        <hr/>
        <p className="desc">{this.state.post.body}</p>
      </div>
    </Fragment>
    )
  }
}
export default DetailPost;
