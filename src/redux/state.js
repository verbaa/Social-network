const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';
const store = {
   _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 11},
                {id: 3, message: 'Blabla', likesCount: 11},
                {id: 4, message: 'Dada', likesCount: 11}
            ],
            newPostText: 'hola'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrew'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Valera'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your it-kamasutra?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'}
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    rerenderEntireTree() {
        console.log('state')
    },
    getState(){
       return this._state;
    },

    subscribe (observer)  {
        this._callSubscriber = observer
    },

    dispatch(action){
        if(action.type === ADD_POST){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
            } else if (action.type === UPDATE_NEW_MESSAGE_BODY){
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
            }
        else if (action.type === SEND_MESSAGE){
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({id: 6, message: body});
            this._callSubscriber(this._state);
            }
    }
};


export const addPostActionCreator = () => ( {type: ADD_POST});
export const updateNewPostActionCreator = (text) => ({type: UPDATE_NEW_POST, newText: text});

export const sendMessageCreator = () => ( {type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});


//store OOP








window.store = store;
export default store