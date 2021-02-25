import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer"

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likesCount: 15 },
                { id: 2, message: 'It\'s my first post', likesCount: 16 },
                { id: 3, message: 'Where are you?', likesCount: 11 },
                { id: 4, message: 'Whats up?', likesCount: 12 }
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Dima' },
                { id: 2, name: 'Katia' },
                { id: 3, name: 'Sasha' },
                { id: 4, name: 'Vasia' },
                { id: 5, name: 'Kostia' },
                { id: 6, name: 'Sveta' }
            ],
            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'How are you?' },
                { id: 3, message: 'Hello' },
                { id: 4, message: 'Yo' },
                { id: 5, message: 'Whats up?' }
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('state changed  ');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;