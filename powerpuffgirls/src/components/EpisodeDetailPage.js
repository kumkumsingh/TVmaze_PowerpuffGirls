import React, { Component } from 'react'
import { getEpisodeDetail } from '../actions/actions';
import { connect } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';
import { Button } from '@material-ui/core';

class EpisodeDetailpage extends Component{

    componentDidMount(){
        this.props.getEpisodeDetail(Number(this.props.match.params.id))
    }

    render(){
        return(
            <div>
              {this.props.episodeDetails && <h3>{this.props.episodeDetails.name}</h3>}
              {this.props.episodeDetails.image && <img src={this.props.episodeDetails.image.original}></img>} 
              <div>{ ReactHtmlParser(this.props.episodeDetails.summary) }</div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log('episodeDetails',state)
    return{
        episodeDetails: state.episodeDetails
    }
}

export default connect(mapStateToProps,{ getEpisodeDetail })(EpisodeDetailpage)