const initialWagonState = {
  supplies: 100,
  distance: 0,
  days: 0
}

const gameState = (state = initialWagonState, action) => {
    switch (action.type){

      case 'gather':{
        return {
          ...state,
          supplies: state.supplies + 15,
          days: state.days + 1
        }
      }

      case 'travel':{
        if(state.supplies <= 0){
          return{
            ...state
          }
        } else{
        return {
          ...state,
          supplies: state.supplies - (action.payload * 20),
          distance: state.distance + (action.payload * 10),
          days: state.days + action.payload
        }
      }
      }

      case 'tippedWagon':{
        return{
          ...state,
          supplies: state.supplies - 30,
          days: state.days + 1
        }
      }

      default: {
      return state;
    }
  }
}

let wagon = gameState(undefined, {});
console.log(wagon)

wagon = gameState(wagon, {type: 'travel', payload: 1})
console.log(wagon)

wagon = gameState(wagon, {type: 'gather'})
console.log(wagon)

wagon = gameState(wagon, {type: 'tippedWagon'})
console.log(wagon)

wagon = gameState(wagon, {type: 'travel', payload: 3})
console.log(wagon)