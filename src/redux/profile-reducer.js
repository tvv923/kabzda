const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export let addPostActionCreator = () => ({ type: ADD_POST });
export let updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

let initialState={
        posts: [
            { id:1, message: 'Hi, how are you ', likesCount: 0 },
            { id:2, message: "It's my first props", likesCount: 11 }
        ],
        newPostText: ''        
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: {
            let newPost={
                id:5,
                message:state.newPostText,
                likesCount:0
            }
            let stateCopy ={...state};
            stateCopy.posts =[...state.posts];
            stateCopy.posts.push(newPost);            
            stateCopy.newPostText='';
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy ={...state};
            stateCopy.newPostText=action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
    return state;
};

export default profileReducer;