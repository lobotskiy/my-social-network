import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { required, maxLengthCreator, minLengthCreator } from '../../../utils/validators/validators'
import {Textarea} from '../../common/FormsControls/FormsControls'


const maxLength15 = maxLengthCreator(15);
const minLength3 = minLengthCreator(3)

const MyPosts = (props) => {

  let postsElements =
    props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id} />)

  let newPostElement = React.createRef();

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

let AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name='newPostText' component={Textarea} placeholder='Post message'
          validate={[required, maxLength15, minLength3]} />
      </div>
      <div>
        <button className={s.btn} >Add post</button>
      </div>
    </form>
  )
}

let AddNewPostFormRedux = reduxForm({ form: 'ProfileAddNewPostForm' })(AddNewPostForm)


export default MyPosts;