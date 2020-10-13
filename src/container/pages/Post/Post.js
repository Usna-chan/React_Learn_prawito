import React from 'react';

const Post = (props) =>{
	return(
		<div className="post">
				<img src="https://placeimg.com/200/200/tech" alt=""/>

			<div className="content">
				<p className="title" onClick={() => props.goDetail(props.data.id)}>
				{props.data.title}
				</p>
				<p className="desc">
				{props.data.body}
				</p>
				<button className="btn update" onClick={() => props.update(props.data)}>Update</button>
				<button className="btn remove" onClick={() => props.remove(props.data.id)}>Remove</button>
			</div>
			</div>
		)
}

export default Post;
