import React,{useState,useEffect} from 'react';
import './Post.css';
import { Avatar } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from '@material-ui/icons/NearMe';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import db from "./firebase"
import { useStateValue } from './stateProvider';

function Post({profilePic,image,username,timestamp,message,postID}) {
    
    const [comments,setComments]=useState([]);
    const [comment,setComment]=useState('')
    const [{user},dispatch]=useStateValue();

    useEffect(()=>{
        let unsubscribe;
        
        if(postID){
        unsubscribe= db.collection("posts").doc(postID).collection("comments").onSnapshot((snapshot)=>{
         setComments(snapshot.docs.map((doc)=>doc.data()));
        })}

        return()=>{
            unsubscribe();
        }

      },{postID})

const postComment=(event)=>{
    event.preventDefault();
    db.collection("posts").doc(postID).collection("comments").add({
        text:comment,
        username:user.displayName
    })
    setComment('');
}
    return (
        <div className='post'>
            <div className="post__top">
                <Avatar src={profilePic} className="post__avatar"/>
                <div className="post__topInfo">
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
            </div>

            <div className="post__bottom">
                <p>{message}</p>
            </div>

            <div className="post__image">
                {image&& <img src={image} alt="img"/>}
            </div>

            <div className="post__options">
                <div className="post__option">
                    <ThumbUpIcon/>
                    <p>Like</p>
                </div>
                <div className="post__option">
                    <NearMeIcon/>
                    <p>Share</p>
                </div>
                <div className="post__option">
                    <AccountCircleIcon/>
                    <ExpandMoreOutlinedIcon/>
                </div>

            </div>
            <div className="post__comments">
                {
                    comments.map((comment) =>{

                        return <p>
                            <strong>{comment.username}</strong> {comment.text}
                        </p>
                    })
                }

            </div>


                <form className="post__commentBox">
                    <input className="post__input" type="text" placeholder="Add a comment" value={comment} onChange={(e)=>setComment(e.target.value)} />
                    <button className="post__button" disabled={!comment} type="submit" onClick={postComment}> Post</button>
                </form>
        </div>
    );
}

export default Post
