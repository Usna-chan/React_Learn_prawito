import React, {Component,Fragment} from 'react';
import './BlogPost.css';
import Post from '../../pages/Post/Post';
import axios from 'axios';
class BlogPost extends Component {
	state = {
		post: [],
		isUpdate: false,
		formPost: {
			id: 1,
			title: '',
			body: '',
			userId: 1
		},
	}
	getPostAPI = () => {
		axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
		.then((res)=>{
			this.setState({
				post: res.data
			})
		})
	}

	handleRemove = (data) => {
			// console.log(data)
			axios.delete('http://localhost:3004/posts/'+data).then(res =>{
				this.getPostAPI()
			});
		}
	postData = () =>{
		axios.post('http://localhost:3004/posts',this.state.formPost).then((res)=>{
			 this.getPostAPI()
		},(err)=>{
			console.log('error:',err)
		})
	}
	handleSubmit = () =>{
		if(this.state.isUpdate){
			this.putDataToApi();
		}else {
		this.postData();
		}
	}
	putDataToApi = () => {
		axios.put('http://localhost:3004/posts/'+this.state.formPost.id, this.state.formPost).then(res=>{
			console.log(res);
			this.getPostAPI();
			this.setState({
				isUpdate: false,
				formPost: {
					id: 1,
					title: '',
					body: '',
					userId: 1
				}
			})
		})
	}
	handleUpdate = (data) =>{
		console.log(data);
		this.setState({
			formPost: data,
			isUpdate: true
		})

	}
	handleFormChange = (e) =>{
		// console.log(e.target)
		let formPostNew = {...this.state.formPost};
		let waktu = new Date().getTime();
		// console.log(waktu)
		if(!this.state.isUpdate){
		formPostNew['id'] = waktu;
		}
		formPostNew[e.target.name] = e.target.value;
		let title = e.target.value
		this.setState({
			formPost: formPostNew
		},() => {
		// console.log("value obj form Post:",this.state.formPost)
		})

	}
	handledDetail = (id) => {
		this.props.history.push(`/detail-post/${id}`)
	}
	componentDidMount(){
		// fetch('https://jsonplaceholder.typicode.com/posts')
		//   .then(response => response.json())
		//   .then(json => {
		//   	this.setState({
		//   		post:json
		//   	})
		//   })
		this.getPostAPI();
	}

	render(){
		return(
			<Fragment>
			<p className="ini-title">Blog Post</p>
			<div className="form-add-post">
				<label htmlFor="title">Title</label>
				<input type="text" value={this.state.formPost.title} name="title" placeholder="add title" onChange={this.handleFormChange}/>
				<label htmlFor="body">Blog Content</label>
				<textarea name="body" value={this.state.formPost.body} id="" cols="30" rows="10" placeholder="add blog content" onChange={this.handleFormChange}></textarea>
				<button className="btn-submit" onClick={this.handleSubmit}>Simpan</button>
			</div>
			{
				this.state.post.map(post =>{
					return <Post key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate} goDetail={this.handledDetail}/>
				})
			}

			</Fragment>
		)
	}
}
export default BlogPost;
