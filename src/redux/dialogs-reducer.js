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
            return {...state,
                newMessageBody:action.body};
        }
        case SEND_MESSAGE:
            {           
            let body=state.newMessageBody;            
            return {...state,
                newMessageBody: '',
                messagesData:[...state.messagesData, {message: body, id: 5 }]};
        }
        default:
            return state;
    }
}

export default dialogsReducer;