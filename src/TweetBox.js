import React, { useState } from 'react';
import './TweetBox.css'
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');

     const sendTweet = e => {
         e.preventDefault();
            
         db.collection('posts').add({
            displayName: "Ugoo Eze",
            username: "ugoo_tech",
            verified: true,
            text: tweetMessage,
            avatar: "https://lh3.googleusercontent.com/ogw/ADGmqu9Goo3fIM_nkSCYR_0Y7E6K1kuN_FndigmKCIGL=s32-c-mo",
            image: tweetImage
});

    setTweetImage("");
    setTweetMessage("");
     }

    return (
        <div className="tweetBox">
            <form>
               <div className="tweetBox__input">
                    <Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu9Goo3fIM_nkSCYR_0Y7E6K1kuN_FndigmKCIGL=s32-c-mo"/>
                    <input 
                      value={tweetMessage}
                      onChange={(e) => setTweetMessage(e.target.value)}
                      placeholder="What's happening?" 
                      type="text"
                    />
               </div>
                  <input className="tweetBox__imageInput" 
                       placeholder="Optional:Enter imagr URL" 
                       value={tweetImage}
                       onChange={e => setTweetImage(e.target.value)}
                    />
               <Button  onClick={sendTweet} type='submit' className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    );
}

export default TweetBox
