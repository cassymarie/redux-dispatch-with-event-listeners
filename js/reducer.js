// Start by remembering our core fact about how redux works
//  ACTION (DISPATCH) >> REDUCER >> STATE (CHANGED BY REDUCER)
let state 

//Use a default argument in the reducer to set the initial state
function reducer(state = {count: 0}, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1};
    default:
      return state;
  }
}

//Wrap the execution of our reducer in a function that we call dispatch
function dispatch(action){
    state = reducer(state, action)
    render()
}

//Use the render function to display our state
function render(){
    let container = document.getElementById('container');
    container.textContent = state.count;
  } 

  
let button = document.getElementById('button');

button.addEventListener('click', () => {
    dispatch({type: 'INCREASE_COUNT'})
}) 


dispatch({type: '@@INIT'})