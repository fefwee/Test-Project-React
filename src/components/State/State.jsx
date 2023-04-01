import { dialogReducer } from "../../reducer/dialogReducer";
import { profileReducer } from "../../reducer/profileReducer";




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
   this.state.profilePage = profileReducer(this.state.profilePage,action)
   this.state.dialogPage = dialogReducer(this.state.dialogPage,action)
  this.callSubscriber(this.state)
  }
}
window.store = store


