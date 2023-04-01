export const CHANGE_TEXT_MESSAGE = 'CHANGE-TEXT-MESSAGE';
export const ADD_MESSAGE = 'ADD-MESSAGE';



const initialState = {
  dialogPage:{
  message: [
    {id:1,messages:'one'},
    {id:2,messages:'second'},
    {id:3,messages:'three'},
    {id:4,messages:'four'},
          ],
  users: [
    {name:'Anna'},
    {name:'Ivan'},
    {name:'Row'},
    {name:'Sele'},
  ],
  messageUsers:'well',
}}

export const dialogReducer = (state = initialState,action) => {
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