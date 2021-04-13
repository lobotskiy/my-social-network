const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
    ] 
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, { id: 6, message: body }]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody ) => ({ type: SEND_MESSAGE, newMessageBody})



export default dialogsReducer;