export const CHANGE_TEXT_MESSAGE = 'CHANGE-TEXT-MESSAGE';
export const ADD_MESSAGE = 'ADD-MESSAGE';
export const ADD_POST = 'ADD-POST';
export const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

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



export let store = {
  state: {
    profilePage:{
      posts:[ 
      {id:1,message:'one'},
      {id:2,message:'second'},
      {id:3,message:'three'},
      {id:4,message:'four'},
      {id:5,message:'five'}],
      newPostText: ''
  },
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
  },
  sideBarFriends:{
    sideBar:[
      {name:'Sveta'},
      {name:'Oleg'},
      {name:'Ivan'},

    ]
  }
},
getState(){
  return this.state;
},
  subscribe(observer){
    this.callSubscriber = observer
  },
  callSubscriber(){
  },
  dispatch(action){
    if(action.type === ADD_POST){
      let newPost = {
        id:5,
        message:this.state.profilePage.newPostText
      }
      this.state.profilePage.posts.push(newPost);
      this.state.profilePage.newPostText = '';
      this.callSubscriber()
    }
     else if(action.type === UPDATE_POST_TEXT){
      this.state.profilePage.newPostText = action.newPostText;
      this.callSubscriber()
    }
    else if(action.type === CHANGE_TEXT_MESSAGE){
      this.state.dialogPage.messageUsers = action.messageUsers;
    this.callSubscriber()
    }
    else if(action.type === ADD_MESSAGE){
      const messageUser = {
        messages:this.state.dialogPage.messageUsers
      }
      this.state.dialogPage.message.push(messageUser)
      this.state.dialogPage.messageUsers = ''
      this.callSubscriber()
    }
  
  }
}
window.store = store


