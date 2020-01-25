import React, { Component } from 'react';
import { getshow, getepisode } from '../actions/showactions'; 
import { connect } from 'react-redux';
import ShowDetailPage from './ShowDetailPage'; 

class HomePage extends Component{

    componentDidMount(){
        this.props.getshow();
        this.props.getepisode();
    }

    render(){
        return(
            <React.Fragment>
                <ShowDetailPage detail={this.props.details} episode={this.props.episodes}/>
            </React.Fragment>
        )
    }
}


const mapStateToProps = (state) => {
    return{
        details: state.showDetail,
        episodes: state.episodeList
    }
}

export default connect(mapStateToProps,{ getshow, getepisode })(HomePage)
