const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

const { createStore } = Redux;
const store = createStore(counter);

// store have 3 property
// store = {
//     getState,
//     subscribe,
//     dispatch
// }

const render = () => {
    document.getElementById('text').innerText = store.getState();
};

store.subscribe(render);
render();

/* begin action creator */
const increment = function () {
    // below this is action
    return {
        type: 'INCREMENT'
    }
}
/* end action creator */

document.addEventListener('click', () => {
    store.dispatch(increment());
})