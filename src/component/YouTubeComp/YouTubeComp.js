import React from 'react';
import './YouTubeComp.css';
const YouTubeComp = (props) => {
	return (
		<div className='youtube-warpper'>
			<div className='img-thumb'>
				<img src="https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60" alt=""/>
				<p className="time">{props.time}</p>
			</div>
			<p className="title">{props.title}</p>
			<p className="desc">{props.desc}</p>
		</div>
		);
}
YouTubeComp.defaultProps = {
	title: 'unknown',
	desc: 'Uwaw'
}
export default YouTubeComp;
