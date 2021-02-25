import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.post}>
      <div><img className={s.item} src="https://www.gqmiddleeast.com/public/styles/600px_600px_square/public/images/2019/09/30/Conor-McGregor-Fight.jpg?itok=nkpjhfYa" /></div>
      <div className={s.postInfo}>
        <div>{props.message}</div>
      </div>
      <div className={s.like}>like:{props.likesCount}</div>
    </div>
  )
}

export default Post;