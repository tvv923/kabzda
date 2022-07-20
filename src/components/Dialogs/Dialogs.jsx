import React from 'react'
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import { DialogItem } from './DialogItem/DialogItem';
import { Message } from './Message/Message';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer';

export const Dialogs = (props) => {

  let state=props.dialogsPage;

  let dialogsElements = state.dialogsData.map((item,i)=><DialogItem name={item.name} id={item.id} key={item.id}/>);
  let messagesElements=state.messagesData.map((item,i)=><Message message={item.message} key={i} />);
  let newMessageBody=state.newMessageBody;
  let onSendMessageClick= ()=>{
    //props.store.dispatch(sendMessageCreator());
    props.sendMessage();
  };
  let onNewMessageChange = (e)=>{
    let body=e.target.value;
    props.updateNewMessageBody(body);
  };

  return (
         
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
          {
            dialogsElements
          }
        </div>
      
        <div className={s.messages}> 
          <div>{messagesElements}</div>
          <div>
            <div><textarea value={newMessageBody} onChange={onNewMessageChange} placeholder='Enter message:'></textarea></div>
            <div><button onClick={onSendMessageClick}>Send</button></div>
          </div>
        </div>
      </div>
    
  )
}
