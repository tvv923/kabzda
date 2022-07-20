import { toHaveAccessibleDescription } from "@testing-library/jest-dom/dist/matchers";
import profileReducer  from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    getState() {
        return this._state;
    },
    _state : {
        profilePage: {
            posts: [
                { id:1, message: 'Hi, how are you ', likesCount: 0 },
                { id:2, message: "It's my first props", likesCount: 11 }
            ],
            newPostText: ''        
        },
        dialogsPage: {
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
        },
        sideBar: {
    
        }
    },
    _callSubscriber  () { 
        console.log(this._state.changed);
    },
    _addPost () {
        let newPost={
            id:5,
            message:this._state.profilePage.newPostText,
            likesCount:0
        }
        this._state.profilePage.posts.push(newPost);
        this._callSubscriber(this._state);
        this._state.profilePage.newPostText='';
    },
    _updateNewPostText (newText) {    
        this._state.profilePage.newPostText=newText;
        this._callSubscriber(this._state);
    },
    subscribe (observer) {
        this._callSubscriber=observer;
    },
    dispatch(action){  
        this._state.profilePage=profileReducer(this._state.profilePage,action);
        this._state.dialogsPage=dialogsReducer(this._state.dialogsPage,action);
        this._state.sideBar=sidebarReducer(this._state.sideBar,action);
              
        this._callSubscriber(this._state);
    }
};

/*export let addPostActionCreator = () => ({ type: ADD_POST });
export let updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export let sendMessageCreator = () => ({ type: SEND_MESSAGE });
export let updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body });*/

export default store;