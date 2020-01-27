import React, { Component } from 'react';
import { getshow, getepisodelist } from '../actions/showactions'; 
import { connect } from 'react-redux';
import ShowDetailPage from './ShowDetailPage'; 
import EpisodeListPage from './EpisodeListPage';

class HomePage extends Component{

    componentDidMount(){
        this.props.getshow();
        this.props.getepisodelist();
    }

    render(){
        return(
            <React.Fragment>
                <ShowDetailPage detail={this.props.details} />
                <EpisodeListPage  episode={this.props.episodes} />
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

export default connect(mapStateToProps,{ getshow, getepisodelist })(HomePage)
