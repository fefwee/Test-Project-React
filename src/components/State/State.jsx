import { renderEntireThree } from "../../Rerender";


  export const state = {
    profilePage:{
        posts:[ 
        {id:1,message:'one'},
        {id:2,message:'second'},
        {id:3,message:'three'},
        {id:4,message:'four'},
        {id:5,message:'five'}],
        newPostText: 'new!!'
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
      ]
    },
    sideBarFriends:{
      sideBar:[
        {name:'Sveta'},
        {name:'Oleg'},
        {name:'Ivan'},

      ]
    } 
  }

  window.state = state;
  export const addPost = (postMessage) => {
    const newPost = {
      id:5,
      message:postMessage
    }
    state.profilePage.posts.push(newPost);
    renderEntireThree(state)
  }

  export const updatePostText = (newText) => {
    state.profilePage.newPostText = newText;
    renderEntireThree(state)
  }

  

