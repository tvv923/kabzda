const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

export let sendMessageCreator = () => ({ type: SEND_MESSAGE });
export let updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body });

let initialsState={
    dialogsData: [
        { name: 'Dimych', id: 1 },
        { name: 'Andrey', id: 2 },
        { name: 'Sveta', id: 3 },
        { name: 'Sasha', id: 4 }
    ],
    messagesData: [
        { message: 'Hi', id: 1 },
        { message: 'How are you ?', id: 2 },
        { message: 'Hello', id: 3 },
        { message: 'Yo', id: 4 }
    ],
    newMessageBody: ''
}

const dialogsReducer = (state=initialsState, action) => {
    switch(action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            let stateCopy={...state};
            stateCopy.newMessageBody=action.body;
            return stateCopy;
        }
        case SEND_MESSAGE:
            {
            let stateCopy={...state};
            stateCopy.messagesData=[...state.messagesData];
            let body=stateCopy.newMessageBody;            
            stateCopy.newMessageBody='';
            stateCopy.messagesData.push({message: body, id: 5 });    
            return stateCopy;
        }
        default:
            return state;
    }
/*    if (action.type===UPDATE_NEW_MESSAGE_BODY) {
        state.newMessageBody=action.body;
        //this._callSubscriber(this._state);
    }
    else if(action.type===SEND_MESSAGE) {
        let body=state.newMessageBody;
        state.newMessageBody='';
        state.messagesData.push({message: body, id: 5 });
        //this._callSubscriber(this._state);
    }

    return state;*/
}

export default dialogsReducer;