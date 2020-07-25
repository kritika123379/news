import React from 'react';
import { connect } from "react-redux"
import { getNews} from "../redux/actions/NewsAction";


class Home extends React.Component {
    state = {
        Newslist: []
    }
    componentDidMount() {
        this.props.getNewsList();
    }
    // componentWillReceiveProps = (nextprops) => {
    //     this.setState({
    //         Newslist: nextprops.products
    //     })
    // }
    render() {
        console.log('')
        return (
            <div>
               
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log('the state is',state)
    return {
        news:state.news.news_Data
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        getNewsList: () => dispatch(getNews())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);