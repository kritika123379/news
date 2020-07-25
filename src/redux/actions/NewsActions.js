import * as types from "./types";
// import config from "../config";  
import axios from 'axios';
const apiUrl=http://newsapi.org/v2/everything?q=bitcoin&from=2020-06-25&sortBy=publishedAt&apiKey=32eafdb2afc440309d48bc7632498ba6
   
export const getNews = () => dispatch => {
        axios.get('http://newsapi.org/v2/everything?q=bitcoin&from=2020-06-25&sortBy=publishedAt&apiKey=32eafdb2afc440309d48bc7632498ba6')
            .then(res => {
                dispatch({
                    type:types.GET_NEWS_SUCCESS,
                    payload: res.data
                })
            
            }).catch(err => {
                console.log(err.response)
                dispatch({
                    type: types.GET_NEWS_ERROR,
                    payload: err.response
                })
            })
    }
    
       
export const getTopHeadlines  = () => dispatch => {
    axios.get(`http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=32eafdb2afc440309d48bc7632498ba6`)
        .then(res => {
            dispatch({
                type:types.GET_NEWS_HEADLINES_SUCCESS,
                payload: res.data
            })
        
        }).catch(err => {
            console.log(err.response)
            dispatch({
                type: types.GET_NEWS_HEADLINES_ERROR,
                payload: err.response
            })
        })
}
       
export const getSortByPopularity  = () => dispatch => {
    axios.get(`http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=32eafdb2afc440309d48bc7632498ba6`)
        .then(res => {
            dispatch({
                type:types.GET_POPULAR_NEWS_SUCCESS,
                payload: res.data
            })
        
        }).catch(err => {
            console.log(err.response)
            dispatch({
                type: types.GET_POPULAR_NEWS_ERROR,
                payload: err.response
            })
        })
}

export const getTechCrunchNews  = () => dispatch => {
    axios.get(`http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=32eafdb2afc440309d48bc7632498ba6`)
        .then(res => {
            dispatch({
                type:types.GET_CRUNCH_NEWS_SUCCESS,
                payload: res.data
            })
        
        }).catch(err => {
            console.log(err.response)
            dispatch({
                type: types.GET_CRUNCH_NEWS_ERROR,
                payload: err.response
            })
        })
}
export const wallStreetJournel  = () => dispatch => {
    axios.get(`http://newsapi.org/v2/everything?domains=wsj.com&apiKey=32eafdb2afc440309d48bc7632498ba6`)
        .then(res => {
            dispatch({
                type:types.GET_WALL_STREET_SUCCESS,
                payload: res.data
            })
        
        }).catch(err => {
            console.log(err.response)
            dispatch({
                type: types.GET_WALL_STREET_ERROR,
                payload: err.response
            })
        })
}

