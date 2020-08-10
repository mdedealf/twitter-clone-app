import React from 'react';
import './TweetBox.css';
import { Button, Avatar } from '@material-ui/core';

function TweetBox() {
	return (
		<div className="tweetBox">
			<form action="">
				<div className="tweetBox_input">
					<Avatar src="" />
					<input type="text" placeholder="What's happening?" />
				</div>
				<input className="tweetBox_imageInput" type="text" placeholder="Enter image URL" />
				<Button className="tweetBox__tweetButton">Tweet</Button>
			</form>
		</div>
	);
}

export default TweetBox;
