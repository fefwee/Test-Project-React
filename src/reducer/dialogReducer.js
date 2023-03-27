export const CHANGE_TEXT_MESSAGE = 'CHANGE-TEXT-MESSAGE';
export const ADD_MESSAGE = 'ADD-MESSAGE';


export const dialogReducer = (state,action) => {
    switch (action.type) {
        case CHANGE_TEXT_MESSAGE:
            state.messageUsers = action.messageUsers;
             return state;
            case ADD_MESSAGE:
                const messageUser = {
                    messages:state.messageUsers
                  }
                  state.message.push(messageUser)
                  state.messageUsers = ''
                  return state
        default:
            return state;
    }
}


export const  addMessageActionCreator = () =>{
    return {
     type:ADD_MESSAGE
    }
 }
 export const changeTextMessageActionCreator = (text) =>{
   return {
     type:CHANGE_TEXT_MESSAGE,
     messageUsers:text
   }
 }