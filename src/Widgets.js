import React from 'react';
import './Widgets.css';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';

function Widgets() {
	return (
		<div className="widgets">
			<div className="widgets__input">
				<SearchRoundedIcon className="widgets__searchIcon" />
				<input type="text" placeholder="Search Twitter" />
			</div>

			<div className="widgets__widgetContainer">
				<h2>What's happening</h2>

				<TwitterTweetEmbed tweetId={'1292730261939974144'} />
                <TwitterTimelineEmbed 
                    sourceType="profile" 
                    screenName="mdedealfaruqq" 
                    options={{ height: 400 }} 
                />
				<TwitterShareButton
					url={'https://facebook.com/muhammaddedealfaruq'}
					options={{ text: '#ReactJsTwitterClone', via: 'mdedealfaruqq' }}
				/>
			</div>
		</div>
	);
}

export default Widgets;
