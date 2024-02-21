import React from 'react'
import { buyCake } from '../Redux/Cake/Cakeaction'
import { connect, Connect } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'
 function Cakestore(props) {

   
  // return (
  //   <div>
  //     <h1>Number of cake-{props.noOfCake}</h1>
  //     <button onClick={()=>props.buyCake()}>click</button>
  //   </div>
  // )


   const cake=useSelector((state)=>state.noOfCake);
   console.log(cake)
    const dispatch=useDispatch();
    return (
    <div>
      <h1>Number of cake-{cake}</h1>
      <button onClick={()=>dispatch(buyCake())}>click</button>
    </div>
  )
}


// const mapStateToProps=(state)=>{
//    return({
//       noOfCake:state.noOfCake
//    })
// }
// const mapDispatchToProps=(dispatch)=>{
//     return{
//         buyCake:()=>dispatch(buyCake())
//     }
// }

 export default Cakestore
//export default connect(mapStateToProps,mapDispatchToProps) (Cakestore);