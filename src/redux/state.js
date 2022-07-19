import { toHaveAccessibleDescription } from "@testing-library/jest-dom/dist/matchers";

//import { rerenderEntireTree } from "../render";
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

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
        if(action.type===ADD_POST) {
            let newPost={
                id:5,
                message:this._state.profilePage.newPostText,
                likesCount:0
            }
            this._state.profilePage.posts.push(newPost);            
            this._state.profilePage.newPostText='';
            this._callSubscriber(this._state);
            //this._addPost();
        }
        else if(action.type===UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText=action.newText;
            this._callSubscriber(this._state);
            //this._updateNewPostText(action.newText);
        }
        else if(action.type===UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody=action.body;
            this._callSubscriber(this._state);
        }
        else if(action.type===SEND_MESSAGE) {
            let body=this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody='';
            this._state.dialogsPage.messagesData.push({message: body, id: 5 });
            this._callSubscriber(this._state);
        }
    }
};

export let addPostActionCreator = () => ({ type: ADD_POST });
export let updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export let sendMessageCreator = () => ({ type: SEND_MESSAGE });
export let updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body });

export default store;