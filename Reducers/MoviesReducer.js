export const reducer = (state={},action)=>{
    switch(action.type){
        case 'GET_ALL_MOVIES':{
            return {...state,list:action.payload}
        }
        case 'GET_MOVIE_DETAILS':{
            return {...state,details:action.payload}
        }
        case 'CLEAR_DETAILS':{
            return {...state,details:{}}
        }
        default :{
            return state;
        }
    }
}