import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator} from '../../../utils/validators/validators';
import {Textarea} from '../../common/FormsControls/FormsControls';
import s from '../Dialogs.module.css'


const maxLength100 = maxLengthCreator(100);

const AddMessageForm = (props) => {
    return ( 
        <form onSubmit={props.handleSubmit}>
            <div className={s.formContainer}>
                <div>
                    <Field component={Textarea}
                    validate={[required, maxLength100]}
                    name='newMessageBody' placeholder='Enter your message' />
                </div>
                <div >
                    <button className={s.btn}>Send</button>
                </div>
            </div>

        </form>
    )
}

export default reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm);