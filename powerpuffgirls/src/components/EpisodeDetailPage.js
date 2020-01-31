import React, { Component } from 'react'
import { getEpisodeDetail } from '../actions/actions';
import { connect } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';
import '../styles/DetailPage.css';

class EpisodeDetailpage extends Component{

    componentDidMount(){
        this.props.getEpisodeDetail(Number(this.props.match.params.id))
    }

    render(){
        return(
            <React.Fragment>
              {this.props.episodeDetails && <h2>{this.props.episodeDetails.name}</h2>}
              {this.props.episodeDetails.image && <img src={this.props.episodeDetails.image.original} alt='Not Available'></img>} 
              <div className='summary'>
                { ReactHtmlParser(this.props.episodeDetails.summary) }
              </div>
            </React.Fragment>
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