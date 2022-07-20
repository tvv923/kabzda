import React from 'react'
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer';
import { Dialogs } from './Dialogs';
import {connect} from "react-redux";


let mapStateToProps=(state)=>{
  return {
    dialogsPage: state.dialogsPage
  };
}

let mapDispatchToProps=(dispatch)=>{
  return {
    updateNewMessageBody: (body)=>{
      dispatch(updateNewMessageBodyCreator(body));
    },
    sendMessage: ()=>{
      dispatch(sendMessageCreator());
    }
  };
}

export const DialogsContainer=connect(mapStateToProps,mapDispatchToProps) (Dialogs);
