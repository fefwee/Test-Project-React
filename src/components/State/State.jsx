let renderEntireThree = () =>{
  console.log(123)
}

  export const state = {
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
  
}

  window.state = state;
  export const addPost = (postMessage) => {
    const newPost = {
      id:5,
      message:postMessage
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    renderEntireThree()
  }

  export const updatePostText = (newText) => {
    state.profilePage.newPostText = newText;
    renderEntireThree()
  }


  export const changeTextMessages = (messagesText) =>{
    state.dialogPage.messageUsers = messagesText;
    renderEntireThree()
  }

  export const addMessage = (message) =>{
      const messageUser = {
        messages:message
      }
      state.dialogPage.message.push(messageUser)
      state.dialogPage.messageUsers = ''
      renderEntireThree()
  }

  export const  subscribe = (observer) => {
    renderEntireThree = observer
  }

  



   const state = {
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
  },
  addPost(postMessage){
    const newPost = {
      id:5,
      message:postMessage
    }
    state.this.profilePage.posts.push(newPost);
    state.this.profilePage.newPostText = '';
    renderEntireThree()
  },
  updatePostText(newText){
    state.this.profilePage.newPostText = newText;
    renderEntireThree()
  },
  changeTextMessages(messagesText){
    state.this.dialogPage.messageUsers = messagesText;
    renderEntireThree()
  },
  addMessage(message){
    const messageUser = {
      messages:message
    }
    state.this.dialogPage.message.push(messageUser)
    state.this.dialogPage.messageUsers = ''
    renderEntireThree()
  },
  subscribe(observer){
    renderEntireThree = observer
  }
} 
