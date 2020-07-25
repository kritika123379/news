import * as types from "../actions/types";


const initialState = {
    type:"",
    news_Data :[],
    loading:false,
    message:''
  };

export const newsReducer = (state = initialState, action) => {
    switch (action.type) {
       case types.GET_NEWS_SUCCESS:
        return Object.assign({}, state, { 
          news_Data :action.payload,
          type:action.type,
          message:action.message,
          loading:false
        })
      case types.GET_NEWS_ERROR:
        return{
          ...state,
          type:action.type,
          product_Data:action.payload,
          message:action.message,
          loading:true
        }
       case types.GET_NEWS_LOADING:
        return{
          ...state,
          type:action.type,
          product_Data:action.payload,
          message:action.payload,
          loading:true
        }  
        
      default:
        return state;
    }
  }
