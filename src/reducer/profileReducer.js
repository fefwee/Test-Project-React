export const ADD_POST = 'ADD-POST';
export const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';


const initialState = { profilePage:{
  posts:[ 
  {id:1,message:'one'},
  {id:2,message:'second'},
  {id:3,message:'three'},
  {id:4,message:'four'},
  {id:5,message:'five'}],
  newPostText: ''
}}

    export const profileReducer  = (state = initialState,action) => {
        
        switch (action.type) {
            case ADD_POST:
                let newPost = {
                    id:5,
                    message:state.newPostText
                  }
                  state.posts.push(newPost);
                  state.newPostText = '';
                return state;
                case  UPDATE_POST_TEXT:
                    state.newPostText = action.newPostText;
                  return state
            default:
                return state;
        }
    }


    export const addPostActionCreator = () =>{
        return {
          type:ADD_POST,
        }
      }
      export const newPostTextActionCreator = (text) =>{
         return {
          type:UPDATE_POST_TEXT,
          newPostText:text
         }
      }