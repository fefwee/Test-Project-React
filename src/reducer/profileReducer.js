export const ADD_POST = 'ADD-POST';
export const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

    export const profileReducer  = (state,action) => {
        
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