import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

class EpisodeListPage extends Component{

   
    render(){
        return(
            <React.Fragment>
                         {this.props.episode && this.props.episode.map((episode) => {
                             return <li key={episode.id} >
                             <Link to={`/episode/${episode.id}`}>{episode.name}</Link> 
                          </li>
                         })}
             </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        episode: state.episodeList,
    }
}

export default connect(mapStateToProps)(EpisodeListPage)