import createDataContext from './createDataContext';

const blogReducer=(state,action)=>{
    switch (action.type){
        case 'add_blogpost':
            return [...state,{title:`Bàiiii  viếtt số ${state.length +1}`}];
        default:
            return state;
    }
};
const addPost=(dispatch)=>{
    return () => {
        dispatch({type:'add_blogpost'});
    };
};

export const {Context,Provider}=createDataContext(blogReducer,{addPost},[]);