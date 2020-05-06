const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ],
    newPostText: 'hola'
}


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };

        }
        case UPDATE_NEW_POST: {
            return {...state,
                newPostText: action.newText
            };
        }
    }
    return state
};

export const addPostActionCreator = () => ( {type: ADD_POST});
export const updateNewPostActionCreator = (text) => ({type: UPDATE_NEW_POST, newText: text});

export default profileReducer;