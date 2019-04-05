const createStore = require('redux').createStore;
const applyMiddleware = require('redux').applyMiddleware;

const usersState = {
    users: [],
    loader: false,
};

const actionGenerator = (type, data) => (
    {
        type: type,
        data: data
    }
);

const myReducer = (state = usersState, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return {
                ...state,
                users: [...state.users, {...action.data}],
            };
        case 'TOGGLE_LOADER':
            return {
                ...state,
                loader: !state.loader
            };
        case 'REMOVE_USER':
            return {
                ...state,
                users: [...state.users.filter(element => element.id !== action.data.id)]
            };
        case 'UPDATE_USER':
            let updatedUserIndex = state.users.findIndex(element => element.id === action.id);
            return {
                ...state,
                users: [...state.users.slice(0, updatedUserIndex), (state.users[updatedUserIndex]={...action.data}), ...state.users.slice(updatedUserIndex+1, state.users.length-1)]
            }
        default:
            return {...state};
    }
};

const arrayMiddleware = store => next => action => {
    if (Array.isArray(action)) {
        action.forEach(element => next(element))
    } else {
        next(action);
    }
};

const middlewares = applyMiddleware(arrayMiddleware);

const store = createStore(myReducer, middlewares);

store.subscribe(() => console.log('subscribe', store.getState()));

store.dispatch(
    actionGenerator(
        'ADD_USER',
        {
            id: 1,
            name: 'harshdeep singh',
            age: 21,
            designation: 'trainee',
            KPI: 0.8
        }
    )
);

store.dispatch(
    actionGenerator(
        'ADD_USER',
        {
            id: 2,
            name: 'any other',
            age: 20,
            designation: 'trainee',
            KPI: 0.5
        }
    )
);

store.dispatch(
    actionGenerator(
        'ADD_USER',
        {
            id: 3,
            name: 'another one',
            age: 22,
            designation: 'trainee',
            KPI: 0.8
        }
    )
);

store.dispatch(
    [
        actionGenerator(
            'TOGGLE_LOADER'
        ),
        actionGenerator(
            'REMOVE_USER',
            {
                id: 3
            }
        ),
        actionGenerator(
            'TOGGLE_LOADER'
        ),
        actionGenerator(
            'UPDATE_USER',
            {
                id: 2,
                newData: {
                    KPI: 0.6,
                    age: 23
                }
            }
        )
    ]
);


// console.log(usersState); ----> why here the state is not changed




