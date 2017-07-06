import { ADD_ITEM, UPDATE_ITEM, DELETE_ITEM } from '../actions';

const initialState = {
    items: []
};

export const crudReducer = (state = initialState, action) => {
    if (action.type === ADD_ITEM) {
        // Add new item to existing state that has an items array
        return Object.assign({}, state, {
            items: [...state.items, action.item]
        })
    }

    else if (action.type === UPDATE_ITEM) {
        let dummyState = state;
        //check through each item object in the state array to find the matching id
        dummyState.items.forEach(function (item) {
            if (item.id === action.item.id) {
                //update old item's name with new item's name
                item.name = action.item.name;    
            }
        })
        return Object.assign({}, state, dummyState);
    }

    
    else if (action.type === DELETE_ITEM) {
        let dummyState = state;
        dummyState.items.forEach(function (item) {
            if (item.id === action.item.id) {
                //get array index of item to be deleted
                let index = state.items.indexOf(item);
                dummyState.items.splice(index, 1);
            }
        })
        return Object.assign({}, state, dummyState);
    }
    return state;
};
