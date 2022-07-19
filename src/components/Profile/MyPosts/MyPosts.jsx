import React from 'react';
import s from './MyPosts.module.css';
import { Post } from './Post/Post';
import { addPostActionCreator,updateNewPostTextActionCreator } from '../../../redux/state';

export const MyPosts = (props) => {
 
  let posts=props.posts.map((item,i) => <Post message={item.message} likesCount={item.likesCount} key={i}/> );

  let newPostElement = React.createRef();

  let addPost = () => {    
    props.dispatch(addPostActionCreator())
  };

  let onPostChange= () => {
    let text=newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  };

  return (

        <div className={s.postsBlock}>
          <h3>My posts</h3>
          <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
          </div>
          <div>
          <button onClick={ addPost }>Add post</button>
          </div>
          <div className={s.posts}>
            {posts}
          </div>
        </div>
  )
}