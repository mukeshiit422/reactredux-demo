
const instate={
    noOfCake:10
}

const CakeReducer=(state=instate,action)=>{
    switch(action.type){
    
        case ('BUY_CAKE'):
            return (
                {
                  ...state,
                  noOfCake:state.noOfCake-1
                }
            )
        default:
            return state;
    }


}
export default CakeReducer