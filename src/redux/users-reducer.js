const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SETUSERS';
const SETCURRENTPAGE = 'SETCURRENTPAGE';
const SETTOTALUSERSCOUNT = 'SETTOTALUSERSCOUNT';

export let addPostActionCreator = () => ({ type: ADD_POST });
export let updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

let initialState={
        users: [ ],
        pageSize:5,
        totalUsersCount:0,
        currentPage:1
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
                users: action.users}
                //users: [...action.users]}
        }
        case SETCURRENTPAGE: {
            return {...state,
                currentPage:action.currentPage
            }
        }
        case SETTOTALUSERSCOUNT: {
            return {...state,
                totalUsersCount:action.count
            }
        }
        default:
            return state;
    }
   // return state;
};

export let followAC = (userId) => ({ type: FOLLOW, userId:userId });
export let unfollowAC = (userId) => ({ type: UNFOLLOW, userId:userId  });
export const setUsersAC = (users) => ({ type: SETUSERS, users });
export const setCurrentPageAC = (currentPage) => ({ type: SETCURRENTPAGE, currentPage:currentPage });
export const setUsersTotalCountAC = (totalUsersCount) => ({ type: SETTOTALUSERSCOUNT, count:totalUsersCount });

export default usersReducer;