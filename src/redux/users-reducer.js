const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SETUSERS';

export let addPostActionCreator = () => ({ type: ADD_POST });
export let updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

let initialState={
        users: [ ]
}

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW:{
            return {...state,            
                users:state.users.map((u)=>{
                if(u.id===action.userId) {
                    return {...u,followed:true}
                }
                return u;
                })
            }
        }
        case UNFOLLOW:{
            return {...state,            
                users:state.users.map((u)=>{
                if(u.id===action.userId) {
                    return {...u,followed:false}
                }
                return u;
                })
            }
        }
        case SETUSERS:{
            return {...state,            
                users: [...state.users,...action.users]}
        }
        default:
            return state;
    }
   // return state;
};

export let followAC = (userId) => ({ type: FOLLOW, userId:userId });
export let unfollowAC = (userId) => ({ type: UNFOLLOW, userId:userId  });
export const setUsersAC = (users) => ({ type: SETUSERS, users });

export default usersReducer;