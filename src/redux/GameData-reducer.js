

let initialState={
    userId:null,
    email:null,
    login:null,
    isAuth:false,
};
const gameDataReducer=(state=initialState,action)=>{
    switch(action.type){
        // case SET_USER_DATA:
        //     return {
        //         ...state,
        //         ...action.data,
        //     };
        default:
            return state;
    }

};
// export let setUserData=(userId,email,login,isAuth)=>{
//     return {
//         type:SET_USER_DATA,
//         data: {
//             userId,
//             email,
//             login,
//             isAuth,
//         }
//     }
// };

export default gameDataReducer;